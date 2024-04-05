import './styles-candidate.css'

const Candidate = ({ candidate, onClick }) => {
  const { Personal } = candidate;

  return (

    <>
    <div className='candidate-card' onClick={onClick}>
      <div className='div-info'>
        <h4>{`${Personal.Nombre} ${Personal.Apellido}`}</h4>
      </div>
      <div className='div-info'>
          <p>{Personal.Técnico}</p>
      </div>
      <div className='div-info'>
        <p>Rank: {Personal.Rank}</p>
      </div>

      


      {/* <p>Edad: {Personal.Edad}</p> */}
      {/* <p>Experiencia E. Laboral: {Personal.ExpELaboral}</p> */}
      {/* <p>Trabajando?: {Personal.Trabajando}</p>
      <p>Experiencia Laboral: {Personal.ExpELaboral}</p> */}


      {/* <p>Educación: {Personal.Educación}</p>
      <p>Grado: {Personal.Grado}</p>
      <p>Instituto: {Personal.Instituto}</p>
      <p>Ingles: {Personal.Ingles}</p>
      <p>Técnico: {Personal.Técnico}</p>
      <p>Actitud: {Personal.Actitud}</p> */}
      {/* <div>
        {Object.keys(Personal.Intereses).map((interes, i) => (
          <li className='list-intereses' key={i}>
            <div>
              {interes}: {Personal.Intereses[interes]}
            </div>
            
          </li>
        ))}
      </div> */}
     

    </div>

    </>
  );
};

export default Candidate;