import { React, useState} from 'react';
import '../styles/navbar.css';

import logo from '../assets/original.webp';
import arrow from '../assets/arrow-right.webp';

import Burguer from './Burguer';
const Navbar = () => {

  const[click, setClick] = useState(false);
  const handleClick = () =>{
  //setear el booleano opuesto al actual cuando se hace click en el boton
    setClick(!click);
  }

  return (
    <div className='nav'>
        <a href="#"><img className='logo-top' src={logo} alt="Agro Biológico" /></a>
        
        <ul className={`links ${click ? 'active' : ''}`}>
            <a href="#nosotros">Nosotros</a>
            <a href="#productos">Productos</a>
            <a href="#recuperaciones">Suelo</a>
            <a href="#ensayos">Ensayos</a>
            <a className='contacto' href="https://wa.link/4lisiq">Contacto</a>
        </ul>
        <div className='btn'>
          <a href="https://wa.link/4lisiq">CONTACTO <img src={arrow} alt="flecha" /></a>
        </div>
        
        <div className='burguer'>
          <Burguer click={click} handleClick={handleClick}/>
        </div>
        
    </div>
  )
}

export default Navbar