
// Example SCPI data - replace with real data fetching logic
const scpiData = [
  { name: 'SCPI A', rate: 4.5 },
  { name: 'SCPI B', rate: 5.2 },
];

export default function handler(req, res) {
  res.status(200).json(scpiData);
}
