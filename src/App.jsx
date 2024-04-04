import React, { useState, useEffect } from 'react';
import Candidates from './components/candidates/Candidates';
import CandidatesChart from './components/candidatesChart/CandidatesChart';
import SimpleBarChart from './components/candidatesChart/SimpleBarChart';
import candidatesData from './helpers/db.json'
import PartitionChart from './components/partitionChart/PartitionChart';
import PieChart from './components/pieChart/PieChart';
import './App.css'

function App() {

  const data = [
    { name: 'A', uv: 400 },
    { name: 'B', uv: 300 },
    { name: 'C', uv: 200 },
    { name: 'D', uv: 500 },
  ];

  const dataTwo = {
    name: "root",
    children: [
      { name: "child1", value: 10, children: [{ name: "child1.1", value: 5 }, { name: "child1.2", value: 5 }] },
      { name: "child2", value: 20 },
      { name: "child3", value: 30 },
    ]
  };


  const dataThree = [
    { name: "A", value: 10 },
    { name: "B", value: 20 },
    { name: "C", value: 30 },
    { name: "D", value: 40 },
    { name: "E", value: 47 },
    { name: "F", value: 60 }
  ];

  // Usar useState para almacenar los datos de los candidatos
  const [candidates, setCandidates] = useState([]);

  // Simular la carga de datos de los candidatos usando useEffect
  useEffect(() => {
    // Supongamos que candidatesData contiene los datos de los candidatos
    setCandidates(candidatesData.candidatos);

    // console.log(candidates)

  }, []);

  return (
    <>
      <div>
        <h1>Simple Bar Chart</h1>
        <SimpleBarChart data={data} />
      </div>

      <div>
        <h1>Hola</h1>
        <CandidatesChart candidates={candidates} />
      </div>

      <div>
        <h1>Partition Chart Example</h1>
        <PartitionChart data={dataTwo} />
      </div>


      <div>
        <h1>Pie Chart Example</h1>
        <PieChart data={dataThree} />
      </div>
    </>
  );
}

export default App;


// import Candidates from './components/candidates/Candidates'
// import './App.css'
// import CandidatesChart from './components/candidatesChart/CandidatesChart'


// function App() {

//   return (
//     <>
//       <div className='div-candidates'>
//           <Candidates/>
//       </div>

//       <div>
//         <CandidatesChart candidates={candidates} />
//       </div>
      

//     </>
//   )
// }

// export default App
