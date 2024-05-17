import React, { useState } from "react";
import SmithChart from "../../SmithChart";
import { parse } from "@fortawesome/fontawesome-svg-core";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function Smith() {
  const [inputImpedance, setInputImpedance] = useState({
    real: 50,
    imag: 0,
    ref: 50,
  });
  const [impedance, setImpedance] = useState({ real: 1, imag: 0, ref: 50 });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const inputValue = parseFloat(value);

    // Tarkista, että syöte on pätevä liukuluku
    if (isNaN(inputValue)) {
      return; // Jos syöte ei ole pätevä liukuluku, älä tee mitään
    }

    let updatedImpedance;

    if (name === "real") {
      // Jos muokattava kenttä on reaaliosa
      const real = inputValue;
      const imag = inputImpedance.imag;
      const referenceImpedance = parseFloat(inputImpedance.ref);

      // Normalisoi arvot
      const normalizedReal = real / referenceImpedance;

      updatedImpedance = {
        ...impedance,
        real: normalizedReal,
      };
    } else if (name === "imag") {
      // Jos muokattava kenttä on imaginaariosa
      const real = inputImpedance.real;
      const imag = inputValue;
      const referenceImpedance = parseFloat(inputImpedance.ref);

      // Normalisoi arvot
      const normalizedImag = imag / referenceImpedance;

      updatedImpedance = {
        ...impedance,
        imag: normalizedImag,
      };
    } else if (name === "ref") {
      // Jos muokattava kenttä on referenssiimpedanssi
      const normalizedRef = inputValue;
      const real = inputImpedance.real / inputValue;
      const imag = inputImpedance.imag / inputValue;

      updatedImpedance = {
        ...impedance,
        real: real,
        imag: imag,
        ref: normalizedRef,
      };
    }

    setInputImpedance({ ...inputImpedance, [name]: inputValue });
    setImpedance(updatedImpedance);
  };

  return (
    <div className="App">
      <h1>Interaktiivinen Smithin diagrammi</h1>
      <SmithChart impedance={impedance} />
      <InputGroup size="sm" className="mb-3">
        <h5>Impedanssi</h5>
        <InputGroup.Text id="inputGroup-sizing-sm">Reaali</InputGroup.Text>

        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          type="number"
          name="real"
          value={inputImpedance.real}
          onChange={handleInputChange}
        />
        <InputGroup.Text id="inputGroup-sizing-sm">Imaginaari</InputGroup.Text>

        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          type="number"
          name="imag"
          value={inputImpedance.imag}
          onChange={handleInputChange}
        />

        <InputGroup.Text id="inputGroup-sizing-sm">
          Referenssi-impedanssi
        </InputGroup.Text>
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          type="number"
          name="ref"
          value={inputImpedance.ref}
          onChange={handleInputChange}
        />
      </InputGroup>
    </div>
  );
}

export default Smith;
