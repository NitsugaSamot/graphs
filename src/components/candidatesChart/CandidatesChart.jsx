import React from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

// {candidatesData.candidatos.map((candidate, index) => (
//   <Candidate key={index} candidate={candidate} />
// ))}

const CandidatesChart = ({ candidates }) => {
  
  // Convertir los datos de los candidatos en un formato compatible con Recharts
  const chartData = candidates.map(candidate => ({
    name: `${candidate.Personal.Nombre} ${candidate.Personal.Apellido}`,
    uv: candidate.Personal.ExpELaboral, // Usar la experiencia laboral como valor
    fill: '#8884d8', // Color de las barras
  }));

  console.log(chartData)

  return (
   
    <>
      <h2>Holaaa Loco</h2>

      <ResponsiveContainer width="100%" height="100%">

      <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={10} data={chartData}>
        <RadialBar
          minAngle={15}
          label={{ position: 'insideStart', fill: '#fff' }}
          background
          clockWise
          dataKey="uv"
        />
        <Legend iconSize={10} layout="vertical" verticalAlign="middle" />
      </RadialBarChart>
     </ResponsiveContainer>

</>
  );
};

export default CandidatesChart;
