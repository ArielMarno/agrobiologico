import '../styles/footer.css';
import logo from '../assets/original.webp';

import ig from '../assets/socials/instagram.webp';
import wsp from '../assets/socials/whatsapp.webp';
import mail from '../assets/socials/mail.webp';


const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-top'>
            <div className='footer-top_logo'>
                <a href="#"><img src={logo} alt="logo" /></a>
            </div>
            <div className='footer-socials'>
                <a href="mailto: luisbelluccini@yahoo.com.ar">
                    <img src={mail} alt="icono email" />
                    <p>luisbelluccini@yahoo.com.ar</p>
                </a>
                    
                <a href="https://wa.link/4lisiq">
                    <img src={wsp} alt="icono whatsapp" />
                    <p>+54 9 3476 60-9667</p>
                </a>
                    
                <a href="https://www.instagram.com/micorrizas.agrobiologico">
                    <img src={ig} alt="icono instagram" />
                    <p>@micorrizas.agrobiologico</p>
                </a>
            </div>
            <div className='footer-links'>
                <a href="#">Inicio</a>
                <a href="#nosotros">Nosotros</a>
                <a href="#productos">Productos</a>
                <a href="#recuperaciones">Recuperaciones</a>
            </div>
        </div>
        <div className='footer-line'></div>
        <div className='footer-copy'>
            <div className='copy'>
                <p>© {new Date().getFullYear()} Agro Biológico - Todos los derechos reservados.</p>
            </div>
            <div className='sunflower'>
                <p>Diseñado y desarrollado por <a href="https://sunfloweragencia.com/">SunFlower Agencia</a>.</p>
            </div>
        </div>

    </div>
  )
}

export default Footer