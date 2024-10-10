import React, { useState, useEffect } from "react";
import SmithChart from "../../SmithChart";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Complex from "complex.js";

function Smith() {
  const [inputImpedance, setInputImpedance] = useState({
    real: 50.0,
    imag: 0.0,
    ref: 50.0,
  });

  const [originalImpedance, setOriginalImpedance] = useState({
    real: 1.0,
    imag: 0.0,
    ref: 50.0,
  });

  const [totalImpedance, setTotalImpedance] = useState({
    real: 1.0,
    imag: 0.0,
    ref: 50.0,
  });

  // Store frequency as a string to allow for direct user input with decimals
  const [frequencyMHz, setFrequencyMHz] = useState("1000.0");
  // Convert frequency in MHz to Hz for calculations
  let frequency = parseFloat(frequencyMHz) * 1e6;

  const [components, setComponents] = useState([]);
  const [componentType, setComponentType] = useState("capacitor");
  const [componentValue, setComponentValue] = useState("");
  // Initialize componentValue as an object with both Z0 and length fields

  // Handle changes in input impedance fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const inputValue = parseFloat(value);

    setInputImpedance((prev) => ({ ...prev, [name]: inputValue }));
  };

  // Function to add a new matching component (e.g., capacitor or inductor)
  const addComponent = (e) => {
    e.preventDefault();

    let newComponent;

    if (componentType === "transmissionline") {
      // Validate that both Z0 and length are set for transmission line
      if (componentValue.Z0 !== "" && componentValue.length !== "") {
        newComponent = {
          type: "transmissionline",
          Z0: parseFloat(componentValue.Z0),
          length: parseFloat(componentValue.length),
        };
      } else {
        console.error("Transmission line parameters missing."); // Debugging
        return; // Do not add incomplete component
      }
    } else {
      // For all other component types, ensure value is valid
      const value = parseFloat(componentValue);
      if (isNaN(value) || value === "") {
        console.error("Invalid component value."); // Debugging
        return; // Do not add incomplete component
      }

      newComponent = {
        type: componentType,
        value,
      };
    }

    setComponents([...components, newComponent]);
    setComponentValue(""); // Reset component value after adding
  };

  // Calculate the total impedance considering original impedance and all matching components
  const calculateTotalImpedance = (baseImpedance, components, frequency) => {
    // Initialize total impedance as a complex number
    let totalImpedance = new Complex(baseImpedance.real, baseImpedance.imag);
    console.log(frequency);

    components.forEach((component) => {
      console.log("Component:", component);
      switch (component.type) {
        case "capacitor":
          // Series capacitor: Z = -j / (ωC)
          const capacitiveReactance = new Complex(
            0,
            -1 /
              (2 * Math.PI * frequency * component.value) /
              inputImpedance.ref
          );
          // Add series impedance directly
          totalImpedance = totalImpedance.add(capacitiveReactance);
          break;

        case "inductor":
          // Series inductor: Z = jωL
          const inductiveReactance = new Complex(
            0,
            (2 * Math.PI * frequency * component.value) / inputImpedance.ref
          );
          // Add series impedance directly
          totalImpedance = totalImpedance.add(inductiveReactance);
          break;

        // Add case for transmission line
        case "transmissionline":
          // Transmission line parameters
          const Z0 = component.Z0; // Characteristic impedance of the transmission line
          const length = component.length; // Length of the transmission line in meters
          const referenceZ0 = inputImpedance.ref; // Reference impedance for normalization
          // Normalize Zin with respect to the reference impedance
          const ZinNormalized = new Complex(
            totalImpedance.real / inputImpedance.ref,
            totalImpedance.imag / inputImpedance.ref
          );

          // Calculate the electrical length θ (in radians)
          const v = 3e8; // Assuming speed of light in vacuum (adjust if necessary for the medium)
          const theta = (2 * Math.PI * frequency * length) / v;

          // Transform total impedance based on transmission line properties
          const tanTheta = Math.tan(theta);
          const Z0_c = new Complex(Z0, 0);
          console.log("Z0_c:", Z0_c.toString());
          console.log("tanTheta:", tanTheta);
          console.log("theta:", theta);
          console.log("length:", length);

          // Transmission line formula: Z_out = Z0 * (Z_in + jZ0 tan(θ)) / (Z0 + jZ_in tan(θ))
          // const transformedImpedance = Z0_c.mul(
          //   totalImpedance.add(new Complex(0, Z0_c * tanTheta))
          // ).div(Z0_c.add(totalImpedance.mul(tanTheta)));

          // Transmission line formula in normalized form:
          // z_out = z0 * (z_in + j * tan(θ)) / (1 + j * z_in * tan(θ))
          const Z0Normalized = Z0 / referenceZ0; // Normalize Z0 to the reference impedance
          const jTanTheta = new Complex(0, tanTheta);
          const numerator = ZinNormalized.add(jTanTheta.mul(Z0Normalized));
          const denominator = new Complex(1, 0).add(
            jTanTheta.mul(ZinNormalized)
          );
          const ZoutNormalized = numerator.div(denominator);

          // Denormalize back to actual impedance
          const Zout = ZoutNormalized.mul(referenceZ0);

          totalImpedance = Zout; //transformedImpedance;
          break;

        case "paracapacitor":
          const paracapacitiveReactance = new Complex(
            0,
            -1 /
              (2 * Math.PI * frequency * component.value) /
              inputImpedance.ref
          );

          console.log(
            "Total Impedance before inversion:",
            totalImpedance.toString()
          );
          console.log("paracapacitiveReactance:", paracapacitiveReactance);

          totalImpedance = paracapacitiveReactance
            .mul(totalImpedance)
            .div(paracapacitiveReactance.add(totalImpedance));

          break;

        case "parainductor":
          // Parallel inductor: Y = -j / (ωL) (Admittance form)
          const parainductorReactance = new Complex(
            0,
            (2 * Math.PI * frequency * component.value) / inputImpedance.ref
          );

          totalImpedance = parainductorReactance
            .mul(totalImpedance)
            .div(parainductorReactance.add(totalImpedance));
          break;

        default:
          break;
      }

      console.log("Frequency:", frequency);
      console.log("Total Impedance before:", totalImpedance);
      console.log("Component:", component.type, component.value);
      console.log("Total Impedance after:", totalImpedance);
    });

    // Return total impedance in real and imaginary components
    return {
      real: totalImpedance.re,
      imag: totalImpedance.im,
      ref: baseImpedance.ref,
    };
  };

  // Update original impedance when input impedance changes
  useEffect(() => {
    const normalizedReal = inputImpedance.real / inputImpedance.ref;
    const normalizedImag = inputImpedance.imag / inputImpedance.ref;

    setOriginalImpedance({
      real: normalizedReal,
      imag: normalizedImag,
      ref: inputImpedance.ref,
    });
  }, [inputImpedance]);

  // Handle frequency change to allow decimals
  const handleFrequencyChange = (e) => {
    setFrequencyMHz(e.target.value); // Directly set string value
  };

  // Update total impedance whenever original impedance or components change
  useEffect(() => {
    frequency = parseFloat(frequencyMHz) * 1e6;

    if (!isNaN(frequency)) {
      // Ensure frequency is valid
      const updatedTotalImpedance = calculateTotalImpedance(
        originalImpedance,
        components,
        frequency
      );

      setTotalImpedance(updatedTotalImpedance);
    }
  }, [originalImpedance, components, frequency]);

  return (
    <div className="App">
      <h1>Interaktiivinen Smithin diagrammi</h1>
      <SmithChart
        impedance={[
          {
            real: originalImpedance.real,
            imag: originalImpedance.imag,
            label: "Alkuperäinen",
          },
          {
            real: totalImpedance.real,
            imag: totalImpedance.imag,
            label: "Sovitettu",
          },
        ]}
      />
      <InputGroup size="sm" className="mb-3">
        <h5>Kuorman impedanssi: </h5>
        <InputGroup.Text>Reaali</InputGroup.Text>
        <Form.Control
          type="number"
          name="real"
          value={inputImpedance.real}
          onChange={handleInputChange}
        />
        <InputGroup.Text>Imaginaari</InputGroup.Text>
        <Form.Control
          type="number"
          name="imag"
          value={inputImpedance.imag}
          onChange={handleInputChange}
        />
        <InputGroup.Text>Referenssi-impedanssi</InputGroup.Text>
        <Form.Control
          type="number"
          name="ref"
          value={inputImpedance.ref}
          onChange={handleInputChange}
        />
        <InputGroup.Text>Taajuus MHz</InputGroup.Text>
        <Form.Control
          type="number"
          name="frequency"
          step="0.01" // Allow decimals by setting a small step size
          value={frequencyMHz}
          //onChange={(e) => setFrequencyMHz(parseFloat(e.target.value))}
          onChange={handleFrequencyChange}
        />
      </InputGroup>

      <form onSubmit={addComponent}>
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Text>Lisää komponentti</InputGroup.Text>
          <Form.Select
            onChange={(e) => {
              setComponentType(e.target.value);
              setComponentValue(""); // Reset component value when type changes
            }}
            value={componentType}
          >
            <option value="capacitor">Sarjakondensaattori</option>
            <option value="inductor">Sarjainduktanssi</option>
            <option value="paracapacitor">Rinnankondensaattori</option>
            <option value="parainductor">Rinnaninduktanssi</option>
            <option value="transmissionline">Transmission Line</option>{" "}
            {/* New Component */}
          </Form.Select>
          {componentType !== "transmissionline" && (
            <Form.Control
              type="number"
              placeholder="Arvo"
              onChange={(e) => setComponentValue(e.target.value)}
              value={componentValue}
            />
          )}
          {/* Input fields for transmission line */}
          {componentType === "transmissionline" && (
            <>
              <InputGroup.Text>Z0 (Ohms)</InputGroup.Text>
              <Form.Control
                type="number"
                placeholder="Characteristic Impedance"
                onChange={(e) => {
                  const z0 = parseFloat(e.target.value);
                  setComponentValue((prev) => ({
                    ...prev,
                    Z0: isNaN(z0) ? "" : z0,
                  }));
                }}
                value={componentValue.Z0 || ""}
              />
              <InputGroup.Text>Length (m)</InputGroup.Text>
              <Form.Control
                type="number"
                placeholder="Length"
                onChange={(e) => {
                  const length = parseFloat(e.target.value);
                  setComponentValue((prev) => ({
                    ...prev,
                    length: isNaN(length) ? "" : length,
                  }));
                }}
                value={componentValue.length || ""}
              />
            </>
          )}

          <button type="submit">Lisää</button>
        </InputGroup>
      </form>

      <ul>
        {components.map((component, index) => (
          <li key={index}>
            {component.type}: {component.value}
            <button
              onClick={() =>
                setComponents(components.filter((_, i) => i !== index))
              }
            >
              Poista
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Smith;
