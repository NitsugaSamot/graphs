import React, { useState } from "react";
import EChartsPieChart from "./components/echarts-library/EChartsPieChart";
import EChartsPieChartEN from "./components/echarts-library/EChartsPieChartEN";
import Candidates from "./components/candidates/Candidates";
import Header from "./components/header/Header";
import './App.css'

const App = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <Header/>
      <div className="container">
        <div className="div-candidates">
          <Candidates/>
        </div>

        <div>
          <div className="div-options">
            <select className="button-graph" value={selectedOption} onChange={handleOptionChange}>
              <option value="">Seleccionar gráfico</option>
              <option value="experienciaLaboral">Experiencia Laboral</option>
              <option value="nivelIngles">Nivel de Inglés</option>
            </select>
          </div>

          <div className="modals">
            {selectedOption === "experienciaLaboral" && <EChartsPieChart />}
            {selectedOption === "nivelIngles" && <EChartsPieChartEN />}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;


// import { useState } from "react";
// import EChartsPieChart from "./components/echarts-library/EChartsPieChart";
// import EChartsPieChartEN from "./components/echarts-library/EChartsPieChartEN";
// import Candidates from "./components/candidates/Candidates";
// import './App.css'

// const App = () => {
//   const [showChart, setShowChart] = useState(false);
//   const [showChartEN, setShowChartEN] = useState(false);

//   const handleButtonClick = () => {
//     setShowChart(true);
//   };

//   const handleButtonClickChartEN = () => {
//     setShowChartEN(true);
//   };

//   return (
//     <>
//       <div className="container
//       ">

//         <div className="div-candidates">
//           <Candidates/>
//         </div>

//         <div>

//           <div className="div-buttons">

//             <button className="button-graph" onClick={handleButtonClick}>Experiencia Laboral</button>

//             <button className="button-graph" onClick={handleButtonClickChartEN}>Nivel de Ingles</button>

//           </div>

//           <div className="modals">

//             {showChart && <EChartsPieChart />}
        
//             {showChartEN && <EChartsPieChartEN />}

//           </div>

//         </div>

//       </div>

//     </>
//   );
// };

// export default App;


// import React, { useState, useEffect } from 'react';
// import Candidates from './components/candidates/Candidates';
// import CandidatesChart from './components/candidatesChart/CandidatesChart';
// import SimpleBarChart from './components/candidatesChart/SimpleBarChart';
// import candidatesData from './helpers/db.json'
// import PartitionChart from './components/partitionChart/PartitionChart';
// import PieChart from './components/pieChart/PieChart';
// import './App.css'

// function App() {

//   const data = [
//     { name: 'A', uv: 400 },
//     { name: 'B', uv: 300 },
//     { name: 'C', uv: 200 },
//     { name: 'D', uv: 500 },
//   ];

//   const dataTwo = {
//     name: "root",
//     children: [
//       { name: "child1", value: 10, children: [{ name: "child1.1", value: 5 }, { name: "child1.2", value: 5 }] },
//       { name: "child2", value: 20 },
//       { name: "child3", value: 30 },
//     ]
//   };


//   const dataThree = [
//     { name: "A", value: 10 },
//     { name: "B", value: 20 },
//     { name: "C", value: 30 },
//     { name: "D", value: 40 },
//     { name: "E", value: 47 },
//     { name: "F", value: 60 }
//   ];

//   // Usar useState para almacenar los datos de los candidatos
//   const [candidates, setCandidates] = useState([]);

//   // Simular la carga de datos de los candidatos usando useEffect
//   useEffect(() => {
//     // Supongamos que candidatesData contiene los datos de los candidatos
//     setCandidates(candidatesData.candidatos);

//     // console.log(candidates)

//   }, []);

//   return (
//     <>
//       {/* <div>
//         <h1>Simple Bar Chart</h1>
//         <SimpleBarChart data={data} />
//       </div>

//       <div>
//         <h1>Hola</h1>
//         <CandidatesChart candidates={candidates} />
//       </div>

//       <div>
//         <h1>Partition Chart Example</h1>
//         <PartitionChart data={dataTwo} />
//       </div> */}


//       <div>
//         <h1>Pie Chart Example</h1>
//         <PieChart data={dataThree} />
//       </div>
//     </>
//   );
// }

// export default App;


