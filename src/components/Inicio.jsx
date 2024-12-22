import '../styles/inicio.css';
import Navbar from './Navbar';

const Inicio = () => {
  return (
    <div className='inicio'>
        <div className='inicio_contenedor'>
            <Navbar />
            <main>
                <h1>FERTILIZANTES BIOLÓGICOS</h1>
                <h3>Innovamos para optimizar la fertilización tradicional.</h3>
            </main>
        </div>
        
    </div>
  )
}

export default Inicio