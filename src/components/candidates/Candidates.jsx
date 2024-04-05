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
      {selectedCandidate !== null && (
        <ModalCandidate candidate={selectedCandidate} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default Candidates;






