import React, { useState } from "react";
import SmithChart from "../../SmithChart";

function Smith() {
  const [impedance, setImpedance] = useState({ real: 50, imag: 0 });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setImpedance((prev) => ({ ...prev, [name]: parseFloat(value) }));
  };

  return (
    <div className="App">
      <h1>Interaktiivinen Smithin diagrammi</h1>
      <SmithChart impedance={impedance} />
      <input
        type="number"
        name="real"
        value={impedance.real}
        onChange={handleInputChange}
        placeholder="Reaaliosa"
      />
      <input
        type="number"
        name="imag"
        value={impedance.imag}
        onChange={handleInputChange}
        placeholder="Imaginaariosa"
      />
    </div>
  );
}

export default Smith;
