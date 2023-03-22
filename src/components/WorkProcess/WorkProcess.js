import React from 'react';
import './WorkProcess.css';
import { BiTask, BiPalette, BiVector, BiCodeCurly, BiSearchAlt2, BiRocket } from 'react-icons/bi';
import { BsArrowRight } from 'react-icons/bs';
import 'animate.css';
import { useInView } from 'react-intersection-observer';

const WorkProcess = () => {
  const processes = [
    { id: 1, title: 'Análisis de necesidades', icon: <BiTask />, description: 'Discutiremos los objetivos, audiencia, funcionalidades y preferencias del cliente.' },
    { id: 2, title: 'Conceptualización', icon: <BiPalette />, description: 'Investigaremos tendencias y competencia para definir un concepto general.' },
    { id: 3, title: 'Diseño y estructura', icon: <BiVector />, description: 'Crearemos bosquejos y wireframes para establecer la disposición y jerarquía de los elementos.' },
    { id: 4, title: 'Desarrollo', icon: <BiCodeCurly />, description: 'Programaremos y codificaremos las funcionalidades e integraremos servicios externos.' },
    { id: 5, title: 'Testeo y revisión', icon: <BiSearchAlt2 />, description: 'Realizaremos pruebas exhaustivas y corregiremos errores y ajustes según sea necesario.' },
    { id: 6, title: 'Producción', icon: <BiRocket />, description: 'Publicaremos la página web y brindaremos seguimiento y soporte técnico.' }
  ];

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="work-process" ref={ref}>
      <div className="process-list">
        {processes.map((process, index) => (
          <div
            key={process.id}
            className={`process-item ${
              inView ? 'animate__animated animate__flipInX animate__slow' : ''
            }`}
          >
            <div className="process-icon">{process.icon}</div>
            <div className="process-info">
              <h3>{process.title}</h3>
              <p>{process.description}</p>
            </div>
            {index < processes.length - 1 && (
              <div className="process-arrow">
                <BsArrowRight />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkProcess;
