import React, { useState } from "react";
import SmithChart from "../../SmithChart";
import { parse } from "@fortawesome/fontawesome-svg-core";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function Smith() {
  const [inputImpedance, setInputImpedance] = useState({
    real: 50.0,
    imag: 0.0,
    ref: 50.0,
  });
  const [impedance, setImpedance] = useState({
    real: 1.0,
    imag: 0.0,
    ref: 50.0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Tarkista, että syöte ei ole tyhjä merkkijono
    if (value.trim() === "") {
      // Aseta arvo nollaksi ja päivitä tila
      setInputImpedance({ ...inputImpedance, [name]: 0 });
    }
    let inputValue = parseFloat(value);

    // Tarkista, onko syötetty merkkijono negatiivinen luku
    if (value.startsWith("-") && value.length > 1) {
      const numericValue = parseFloat(value.slice(1));
      inputValue = isNaN(numericValue) ? 0 : -numericValue;
    }

    // Tarkista, että syöte on pätevä liukuluku
    // if (isNaN(inputValue)) {
    //   return; // Jos syöte ei ole pätevä liukuluku, älä tee mitään
    // }

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
        <h5>Kuorman impedanssi: </h5>
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
