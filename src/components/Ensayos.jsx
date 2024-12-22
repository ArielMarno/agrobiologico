import '../styles/ensayos.css';
import arrow from '../assets/download.webp';

import fosforo from '../assets/cultivos/fosforo.webp';
import mo from '../assets/cultivos/mo.webp';
import sulfato from '../assets/cultivos/sulfato.webp';

const Ensayos = () => {
  return (
    <div className='ensayos' id='ensayos'>
         <div className='ensayos__title'>
            <h2 data-aos="fade-up">Ensayos</h2>
            <p data-aos="fade-up">Resultados históricos de análisis del suelo.</p>
        </div>
        <div className='ensayos__grid'>
            <div className='card-col' data-aos="fade-up">
                <div className='aside_content'>
                    <h3>Materia <br />Orgánica</h3>
                    <div className="vr-btn">
                        <a href="https://drive.google.com/file/d/13inMQgOiZDV6M0CqbumaGcOMHKDWpExG/view?usp=sharing">
                            <p>DESCARGAR</p>
                            <img src={arrow} alt="arrow" className="arrow" />
                        </a>
                    </div>
                </div>
                <img src={mo} alt="materia organica" />
            </div>

            <div className='card-row' data-aos="fade-up">
                <div className='aside_content'>
                    <h3>Fósforo</h3>
                    <div className="vr-btn">
                        <a href="https://drive.google.com/file/d/1TQ0vOcLpbC1kIX0xwpMCArB3MekXu_PG/view?usp=sharing">
                            <p>DESCARGAR</p>
                            <img src={arrow} alt="arrow" className="arrow" />
                        </a>
                        
                    </div>
                </div>
                <img src={fosforo} alt="fósforo" />
            </div>

            <div className='card-row' data-aos="fade-up">
                <div className='aside_content'>
                    <h3>Sulfato</h3>
                    <div className="vr-btn">
                        <a href="https://drive.google.com/file/d/1X5OMNNC9KMUuQmZ8vbQ1iauuvoJW6i7J/view?usp=sharing">
                            <p>DESCARGAR</p>
                            <img src={arrow} alt="arrow" className="arrow" />
                        </a>
                    </div>
                </div>
                <img src={sulfato} alt="sulfato" />
            </div>
        </div>
    </div>
  )
}

export default Ensayos