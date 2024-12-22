import '../styles/nosotros.css';
import superpuesta from '../assets/nosotros.webp';


const Nosotros = () => {
  return (
    <div className="nosotros" id='nosotros'>

      <div className="contenedor-imagen"> 
        <img src={superpuesta} alt="plantin" className="superpuesta" data-aos="fade-up"/> 
      </div>

      <div className="contenedor-texto">
        <h1 data-aos="fade-up">SOBRE NOSOTROS</h1>
        <p data-aos="fade-up">Agro Biológico inició hace más de 30 años con la idea de optimizar progresivamente el ahorro de fertilizantes, aumentando su calidad y el retorno en la rentabilidad. </p> 
        <p data-aos="fade-up">Nos dedicamos esencialmente a la implementación de productos biológicos junto a productores, ingenieros, investigadores y consultores, realizando análisis del suelo, con una mirada clara y segura hacia el futuro del cultivo.</p>
      </div>

    </div>
  )
}

export default Nosotros