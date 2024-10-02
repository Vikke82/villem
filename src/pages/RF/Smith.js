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

  // Handle changes in input impedance fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const inputValue = parseFloat(value);

    setInputImpedance((prev) => ({ ...prev, [name]: inputValue }));
  };

  // Function to add a new matching component (e.g., capacitor or inductor)
  const addComponent = (e) => {
    e.preventDefault();
    setComponents([
      ...components,
      { type: componentType, value: parseFloat(componentValue) },
    ]);
    setComponentValue("");
  };

  // Calculate the total impedance considering original impedance and all matching components
  const calculateTotalImpedance = (baseImpedance, components, frequency) => {
    // Initialize total impedance as a complex number
    let totalImpedance = new Complex(baseImpedance.real, baseImpedance.imag);
    console.log(frequency);

    components.forEach((component) => {
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

          totalImpedance =
            (paracapacitiveReactance * totalImpedance) /
            (paracapacitiveReactance + totalImpedance);

          break;

        case "parainductor":
          // Parallel inductor: Y = -j / (ωL) (Admittance form)
          const parainductorReactance = new Complex(
            0,
            (2 * Math.PI * frequency * component.value) / inputImpedance.ref
          );
          totalImpedance =
            (parainductorReactance * totalImpedance) /
            (parainductorReactance + totalImpedance);
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
            onChange={(e) => setComponentType(e.target.value)}
            value={componentType}
          >
            <option value="capacitor">Sarjakondensaattori</option>
            <option value="inductor">Sarjainduktanssi</option>
            <option value="paracapacitor">Rinnankondensaattori</option>
            <option value="parainductor">Rinnaninduktanssi</option>
          </Form.Select>
          <Form.Control
            type="number"
            placeholder="Arvo"
            onChange={(e) => setComponentValue(e.target.value)}
            value={componentValue}
          />
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
