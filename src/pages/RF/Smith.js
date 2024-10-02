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

  const [frequency, setFrequency] = useState(1e9); // Default to 1 GHz

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
          // Parallel capacitor: Y = jωC (Admittance form)
          const capacitorAdmittance = new Complex(
            0,
            (2 * Math.PI * frequency * component.value) / inputImpedance.ref
          );
          // Convert total impedance to admittance (Y = 1/Z)
          const totalAdmittance = totalImpedance.inverse();
          // Add admittances
          const newAdmittance = totalAdmittance.add(capacitorAdmittance);
          // Convert back to impedance (Z = 1/Y)
          totalImpedance = newAdmittance.inverse();
          break;

        case "parainductor":
          // Parallel inductor: Y = -j / (ωL) (Admittance form)
          const inductorAdmittance = new Complex(
            0,
            -1 /
              (2 * Math.PI * frequency * component.value) /
              inputImpedance.ref
          );
          // Convert total impedance to admittance (Y = 1/Z)
          const totalAdmittanceInductor = totalImpedance.inverse();
          // Add admittances
          const newAdmittanceInductor =
            totalAdmittanceInductor.add(inductorAdmittance);
          // Convert back to impedance (Z = 1/Y)
          totalImpedance = newAdmittanceInductor.inverse();
          break;

        default:
          break;
      }
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

  // Update total impedance whenever original impedance or components change
  useEffect(() => {
    const updatedTotalImpedance = calculateTotalImpedance(
      originalImpedance,
      components,
      frequency
    );
    setTotalImpedance(updatedTotalImpedance);
  }, [originalImpedance, components]);

  useEffect(() => {
    const updatedTotalImpedance = calculateTotalImpedance(
      originalImpedance,
      components,
      frequency
    );
    setTotalImpedance(updatedTotalImpedance);
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
        <InputGroup.Text>Taajuus</InputGroup.Text>
        <Form.Control
          type="number"
          name="frequency"
          value={frequency}
          onChange={(e) => setFrequency(parseFloat(e.target.value))}
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
