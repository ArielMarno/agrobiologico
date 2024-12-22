import React, { useState } from 'react';
import '../styles/contacto.css';
import flecha from '../assets/arrow-right.webp';

const Contacto = () => {

   // Estado para almacenar los datos del formulario
   const [formData, setFormData] = useState({
    telefono: '',
  });

  // Manejar cambios en los inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className='cp-contacto' id='contacto'>
        <div className='tarjeta-contacto' data-aos="fade-up">
          <div className='mascara'>
            <h2>CONTACTANOS</h2>
            <div className='linea'></div>
            <p>Dejanos tu número de teléfono y nos comunicaremos a la brevedad.</p>
            <form action="https://formspree.io/f/mbljvvog" method="POST">
              <input type="number" placeholder='Ingrese su número de teléfono aquí' name='teléfono' id='teléfono' value={formData.telefono} autoComplete="off" onChange={handleInputChange} required />
              <button type='submit'>Enviar <img src={flecha} alt="flecha" /></button>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Contacto