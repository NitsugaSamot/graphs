import React, { useState } from 'react';
import Candidate from '../candidateComponent/Candidate';
import candidatesData from '../../helpers/db.json';
import ModalCandidate from '../modalCandidate/ModalCandidate';
import './styles-candidates.css';

const Candidates = () => {
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  const handleCandidateClick = (candidate) => {
    setSelectedCandidate(candidate);
  };

  const handleCloseModal = () => {
    setSelectedCandidate(null);
  };

  return (
    <div className='candidates-container'>
      {candidatesData.candidatos.map((candidate, index) => (
        <Candidate key={index} candidate={candidate} onClick={() => handleCandidateClick(candidate)} />
      ))}
      {selectedCandidate !== null && ( // Verificar si selectedCandidate es diferente de null
        <ModalCandidate candidate={selectedCandidate} onClose={handleCloseModal} />
      )}
    </div>
  );
};

// const Candidates = () => {
//   const [selectedCandidate, setSelectedCandidate] = useState(null);

//   const handleCandidateClick = (candidate) => {
//     setSelectedCandidate(candidate);
//   };

//   console.log(handleCandidateClick)

//   console.log(candidate)

//   const handleCloseModal = () => {
//     setSelectedCandidate(null);
//   };

//   return (
//     <div className='candidates-container'>
//       {candidatesData.candidatos.map((candidate, index) => (
//         <Candidate key={index} candidate={candidate} onClick={() => handleCandidateClick(candidate)} />
//       ))}
//       {selectedCandidate && (
//         <ModalCandidate candidate={selectedCandidate} onClose={handleCloseModal} /> // Renderiza el modal si hay un candidato seleccionado
//       )}
//     </div>
//   );
// };

export default Candidates;


// import React from 'react';
// import Candidate from '../candidateComponent/Candidate';
// import candidatesData from '../../helpers/db.json';
// import './styles-candidates.css';

// const Candidates = () => {
//   return (
//     <div className='candidates-container'>
//       {candidatesData.candidatos.map((candidate, index) => (
//         <Candidate key={index} candidate={candidate} />
//       ))}
//     </div>
//   );
// };

// export default Candidates;



