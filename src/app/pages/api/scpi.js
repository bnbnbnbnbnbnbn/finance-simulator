
// Simulated data for SCPI
const scpiData = [
  { name: 'Atream Hôtels', rate: 5.30 },
  { name: 'Remake Live', rate: 5.00 },
  { name: 'Cristal Rente', rate: 5.00 },
  { name: 'Epsilon 360', rate: 6.25 },
  { name: 'ESG Pierre Capitale', rate: 5.16 },
  { name: 'Corum Origin', rate: 6.06 },
  { name: 'Cœur de Régions', rate: 6.01 },
  { name: 'Vendôme Régions', rate: 6.01 },
  { name: 'Allianz Pierre', rate: 4.01 }
];

export default function handler(req, res) {
  res.status(200).json(scpiData);
}
