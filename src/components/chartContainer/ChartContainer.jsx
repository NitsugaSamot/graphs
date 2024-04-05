import React from 'react';
import PieChart from '../pieChart/PieChart';
import candidatosData from '../../helpers/db.json';

const ChartContainer = () => {
  const data = candidatosData.candidatos.map(candidato => ({
    Nombre: candidato.Personal.Nombre,
    Apellido: candidato.Personal.Apellido,
    ExpLaboral: candidato.Personal.ExpLaboral
  }));

  return (
    <div>
      <h1>Gráfico de Experiencia Laboral por Candidato</h1>
      <PieChart data={data} />
    </div>
  );
};

export default ChartContainer;
