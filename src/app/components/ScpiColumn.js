
"use client";
import React, { useState } from 'react';

const ScpiColumn = ({ scpiData }) => {
  const [montantParts, setMontantParts] = useState(0);

  const handleMontantPartsChange = (e) => setMontantParts(e.target.value);

  return (
    <div className="scpi-column">
      <h3>SCPI</h3>
      <label>
        Montant des parts:
        <input type="number" value={montantParts} onChange={handleMontantPartsChange} />
      </label>
      <div>
        {scpiData.map((scpi, index) => (
          <div key={index}>
            <h4>{scpi.name}</h4>
            <p>Taux de redistribution: {scpi.rate}%</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScpiColumn;
