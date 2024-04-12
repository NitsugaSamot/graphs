import EPieChart from '../echarts-library/EPieChart';
import EBARChartIntereses from '../echarts-library/EBarChartIntereses';
import './styles-modal.css';

const ModalCandidate = ({ candidate, onClose }) => {
  const { Personal } = candidate;

  return (
    <div className="modal-candidate" style={{ display: 'block' }}>
      <div className="modal-candidate-content">

            <div className="header-modal">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>{Personal.Nombre} {Personal.Apellido}</h2>
            </div>

        <div className='grid-modal'>


          <div>
            <div className="personal-info">
              <h3>Información Personal</h3>
              <p>Edad: {Personal.Edad}</p>
              <p>Estado Civil: {Personal["Estado Civil"]}</p>
              <p>Sector: {Personal.Sector}</p>
              <p>Ciudad: {Personal.Ciudad}</p>
              <p>Email: {Personal.email}</p>
            </div>

            <div className="educacional-info">
              <h3>Educación</h3>
              <p>Educación: {Personal.Educación}</p>
              <p>Grado: {Personal.Grado}</p>
              <p>Instituto: {Personal.Instituto}</p>
              <p>Inglés: {Personal.Ingles}</p>
              <p>Técnico: {Personal.Técnico}</p>

            </div>

            <div className="div-graphic">
            <h3>Intereses:</h3>

               <EBARChartIntereses interesesData={Personal.Intereses} />
            </div>

  
          </div>


          <div className="intereses-info">

            <div className="div-graphic">
                <h3>Habilidades:</h3>
                <EPieChart
                  data={[
                    { value: Personal.Ingles, name: 'Nivel de Inglés' },
                    { value: 10 - Personal.Ingles, name: 'Otro' },
                    { value: Personal.ExpLaboral, name: 'Experiencia Laboral' },
                    { value: Personal.Rank, name: 'Rank' },
                    { value: Personal.ExpELaboral, name: 'Experiencia Laboral Total' }
                  ]} 
                />
            </div>


        <div className="profesional-info">
              <h3>ExperienciaProfesional</h3>
              <p>Actitud: {Personal.Actitud}</p>
              <p>Experiencia Laboral Total: {Personal.ExpELaboral}</p>
              <p>Trabajando: {Personal.Trabajando}</p>
              <p>Experiencia Laboral Actual: {Personal.ExpLaboral}</p>
              <p>Posición Actual: {Personal.Posición}</p>
              <p>Empresa Actual: {Personal.Empresa}</p>
              <p>Responsabilidades Actuales: {Personal.Resp}</p>
            </div>

          </div>

        </div>

      </div>

      
    </div>
  );
};

export default ModalCandidate;

