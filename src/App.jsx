import React, { useState, useEffect } from 'react';
import Candidates from './components/candidates/Candidates';
import CandidatesChart from './components/candidatesChart/CandidatesChart';
import SimpleBarChart from './components/candidatesChart/SimpleBarChart';
import candidatesData from './helpers/db.json'

function App() {

  const data = [
    { name: 'A', uv: 400 },
    { name: 'B', uv: 300 },
    { name: 'C', uv: 200 },
    { name: 'D', uv: 500 },
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
      {/* <div className='div-candidates'>
        <Candidates candidates={candidates} />
      </div> */}
          <div>
      <h1>Simple Bar Chart</h1>
      <SimpleBarChart data={data} />
    </div>

      <div>
        <h1>Hola</h1>
        <CandidatesChart candidates={candidates} />
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
