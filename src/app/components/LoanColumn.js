
import React, { useState } from 'react';

const LoanColumn = ({ type }) => {
  const [montant, setMontant] = useState(0);
  const [duree, setDuree] = useState(0);
  const [mensualite, setMensualite] = useState(0);

  const handleMontantChange = (e) => setMontant(e.target.value);
  const handleDureeChange = (e) => setDuree(e.target.value);
  const handleMensualiteChange = (e) => setMensualite(e.target.value);

  return (
    <div className={`loan-column ${type}`}>
      <h3>{type === 'amortissable' ? 'Prêt Amortissable' : 'Prêt In-Fine'}</h3>
      <label>
        Montant:
        <input type="number" value={montant} onChange={handleMontantChange} />
      </label>
      <label>
        Durée:
        <input type="number" value={duree} onChange={handleDureeChange} />
      </label>
      <label>
        Mensualité:
        <input type="number" value={mensualite} onChange={handleMensualiteChange} />
      </label>
      {/* Calcul des échéances ici */}
    </div>
  );
};

export default LoanColumn;
