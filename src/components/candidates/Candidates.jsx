import React from 'react';
import Candidate from '../candidateComponent/Candidate';
import candidatesData from '../../helpers/db.json';
import './styles-candidates.css';

const Candidates = () => {
  return (
    <div className='candidates-container'>
      {candidatesData.candidatos.map((candidate, index) => (
        <Candidate key={index} candidate={candidate} />
      ))}
    </div>
  );
};

export default Candidates;



