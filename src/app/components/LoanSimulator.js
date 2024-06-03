
"use client";
import React, { useState, useEffect } from 'react';
import LoanColumn from './LoanColumn';
import ScpiColumn from './ScpiColumn';

const LoanSimulator = () => {
  const [scpiData, setScpiData] = useState([]);

  useEffect(() => {
    fetch('/api/scpi')
      .then(response => response.json())
      .then(data => setScpiData(data));
  }, []);

  return (
    <div className="loan-simulator">
      <LoanColumn type="amortissable" />
      <LoanColumn type="in-fine" />
      <ScpiColumn scpiData={scpiData} />
    </div>
  );
};

export default LoanSimulator;
