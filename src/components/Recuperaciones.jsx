import '../styles/recuperaciones.css';
import fosforo from '../assets/suelo/fosforo.webp';
import hifas from '../assets/suelo/hifas.webp';
import glomalinaycarbono from '../assets/suelo/glomalinaycarbono.webp';
import masaradicular from '../assets/suelo/masaradicular.webp';
import nitrogeno from '../assets/suelo/nitrogeno.webp';
import fertilidad from '../assets/suelo/fertilidad.webp';

const cards = [
  { id: 1, imagen: fosforo, titulo: 'LIBERACIÓN DE FOSFOROS NO DISPONIBLES', texto: 'Las endomicorrizas arbusculares liberan fósforos no disponibles, lo que mejora la fertilidad del suelo.'},
  { id: 2, imagen: hifas, titulo: 'EXTENSIÓN DE LAS HIFAS', texto: 'Las hifas de las endomicorrizas se extienden a varios metros de la planta, lo que permite una mayor absorción de nutrientes.'},
  { id: 3, imagen: glomalinaycarbono, titulo: 'TRANSFORMACIÓN EN GLOMALINA Y CARBONO', texto: 'Cuando la planta muere, las hifas se transforman en glomalina y carbono, lo que mejora la estructura y la fertilidad del suelo.'},
  { id: 4, imagen: nitrogeno, titulo: 'FIJACIÓN DE NITRÓGENO', texto: 'Las bacterias que se establecen en la raíz del suelo, donde viven las micorrizas, utilizan el nitrógeno del aire y lo fijan en la célula vegetal.'},
  { id: 5, imagen: masaradicular, titulo: 'AUMENTO DE LA MASA RADICULAR', texto: 'Las hormonas producidas por las endomicorrizas aumentan la masa radicular, lo que mejora la absorción de nutrientes y la estructura del suelo.'},
  { id: 6, imagen: fertilidad, titulo: 'MEJORAMIENTO DE LA FERTILIDAD', texto: 'Todo esto produce un mejoramiento en la fertilidad y recuperación del suelo, lo que beneficia a las plantas y al medio ambiente.'}
];

const Recuperaciones = () => {

  return (
    <div className='recuperaciones' id='recuperaciones'>

      <div className='titulo-recuperaciones'>
        <h2 data-aos="fade-up">RECUPERÁ TU SUELO</h2>
        <h3 data-aos="fade-up">La recuperación de suelos degradados es crucial para garantizar la productividad a largo plazo de las tierras destinadas a la agricultura.</h3>
      </div>

      <div className='contenedor-tarjetas'>
        {cards.map((card) => (
        <div className='tarjetas' key={card.id} data-aos="fade-up">
            <img src={card.imagen} alt={card.imagen} />
            <h4>{card.titulo}</h4>
            <p>{card.texto}</p>
        </div>
        ))}
      </div>
      
    </div>
  )
}

export default Recuperaciones