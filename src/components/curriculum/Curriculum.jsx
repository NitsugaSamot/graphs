import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';


const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Curriculum = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Cargar los datos desde db.json
    fetch('../../helpers/db.json')
      .then(response => response.json())
      .then(jsonData => {
        // Procesar los datos para generar el gráfico
        const processedData = processData(jsonData);
        setData(processedData);
      })
      .catch(console.log(error));
      
  }, []);

  const processData = (jsonData) => {
    // Aquí puedes procesar los datos según tus necesidades
    // Por ejemplo, puedes calcular la cantidad de candidatos con diferentes niveles de educación, grado, nivel de inglés, etc.
    // Y devolverlos en un formato adecuado para el gráfico de pastel

    // Por ahora, solo devolveremos un conjunto de datos de ejemplo
    return [
      { name: 'Group A', value: 400 },
      { name: 'Group B', value: 300 },
      { name: 'Group C', value: 300 },
      { name: 'Group D', value: 200 },
    ];
  };

  return (
    <>

    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
    </>
  );
};

export default Curriculum;

