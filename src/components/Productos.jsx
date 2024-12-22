import React, { useEffect } from 'react'
import '../styles/productos.css';


const Productos = () => {
    useEffect(() => { 
        let siguienteButton = document.getElementById('siguiente'); 
        let anteriorButton = document.getElementById('anterior'); 
        let productos = document.querySelector('.productos'); 
        let listaHTML = document.querySelector('.productos .lista'); 
        let ver_masButtons = document.querySelectorAll('.ver_mas'); 
        let atrasButton = document.getElementById('atras');

         siguienteButton.onclick = function(){ 
            showSlider('siguiente'); 
        } 
         anteriorButton.onclick = function(){ 
            showSlider('anterior'); 
        } 
        let unAcceppClick; 
        const showSlider = (type) => { 
            siguienteButton.style.pointerEvents = 'none'; 
            anteriorButton.style.pointerEvents = 'none'; 
            
            productos.classList.remove('siguiente', 'anterior'); 
            let items = document.querySelectorAll('.productos .lista .item'); 
            if(type === 'siguiente'){ 
                listaHTML.appendChild(items[0]); 
                productos.classList.add('siguiente'); }
                else{ 
                    listaHTML.prepend(items[items.length - 1]); 
                    productos.classList.add('anterior'); 
                } 
                clearTimeout(unAcceppClick); 
                unAcceppClick = setTimeout(()=>{ 
                    siguienteButton.style.pointerEvents = 'auto'; 
                    anteriorButton.style.pointerEvents = 'auto'; 
                }, 2000) 
            } 
            ver_masButtons.forEach((button) => {
                 button.onclick = function(){
                     productos.classList.remove('siguiente', 'anterior'); 
                     productos.classList.add('mostrar-detalles');
                     }
                    }); 
                    atrasButton.onclick = function(){ 
                        productos.classList.remove('mostrar-detalles');
                    } 
        
            return () => {
                 siguienteButton.onclick = null; 
                 anteriorButton.onclick = null; 
                 ver_masButtons.forEach((button) => {
                     button.onclick = null; 
                    }); 
                    atrasButton.onclick = null; 
                }; 
            }, []);
    

  return (
    <div className="productos" id='productos'>
        <h2 data-aos="fade-up">PRODUCTOS</h2>
        <div className="lista">

            <div className="item"> 
                <img src="/hampi-caja.webp"/>
                <div className="introduccion">
                    <div className="titulo">Acidos Huminicos</div>
                    <div className="marca">HAMPI</div>
                    <div className="descripcion">
                    Los Humatos y Fulvatos, conforman integralmente el HUMUS, que a su vez representa la sustancia orgánica esencial del suelo.
                    </div>
                    <button className="ver_mas">VER MÁS</button>
                </div>
                <div className="detalles">
                    <div className="titulo">HAMPI</div>
                    <div className="descripcion">
                    La aplicación de sustancias húmicas contribuyen de manera significativa a mejorar las propiedades físico-químicas y biológicas del suelo aumentando la fertilidad, a la vez que favorece el desbloqueo de los macro y micronutrientes, con lo que se consigue una mejor disponibilidad y aprovechamiento de los elementos nutritivos para la planta.
                    </div>
                    <div className="especificaciones">
                        <div>
                            <p>Botellas </p>
                            <p>de 1 lt.</p>
                        </div>
                        <div>
                            <p>Bidones </p>
                            <p>de 20 lts. </p>
                        </div>
                        <div>
                            <p>Bines</p>
                            <p>de 1000 lts.</p>
                        </div>
                    </div>
                    <div className="consulta">
                        <a href='https://wa.link/4lisiq'>CONSULTAR</a>
                    </div>
                </div>
            </div>

            <div className="item">
                <img src="/fosfoactiv-caja.webp"/>
                <div className="introduccion">
                    <div className="titulo">Endomycorriza Arbuscular</div>
                    <div className="marca">FOSFOACTIV</div>
                    <div className="descripcion">
                    Fosfoactiv es biológico y ecológico. Permite un ahorro importante en fertilización química consiguiendo rendimientos similares y de mejor calidad.
                    </div>
                    <button className="ver_mas">VER MÁS</button>
                </div>
                <div className="detalles">
                    <div className="titulo">FOSFOACTIV</div>
                    <div className="descripcion">
                    Mejora la sanidad de las plantas. Aumenta el desarrollo radicular y foliar. Mejora la resistencia al estrés hídrico. Es compatible con inoculantes y, aplicándolo correctamente con curasemillas, se puede aplicar en combinación con fertilizantes fosforados y nitrogenados tradicionales y de origen natural. Las semillas tratadas ya secas se pueden guardar hasta 30 días.
                    </div>
                    <div className="especificaciones">
                        <div>
                            <p>Fabricante</p>
                            <p>Mycophos</p>
                        </div>
                        <div>
                            <p>Cont. neto</p>
                            <p>10 litrosC</p>
                        </div>
                        <div>
                            <p>Fabricado</p>
                            <p>Argentina</p>
                        </div>
                    </div>
                    <div className="consulta">
                        <a href='https://wa.link/4lisiq'>CONSULTAR</a>
                    </div>
                </div>
            </div>
            <div className="item">
                <img src="/arco-caja.webp"/>
                <div className="introduccion">
                    <div className="titulo">Hormonas Vegetales</div>
                    <div className="marca">ARCO</div>
                    <div className="descripcion">
                        Además de nutrición, aumenta el transporte de fotosintatos (energía) y el área foliar. Genera gran cantidad de raicillas, aumentando la capacidad de extracción y transporte de agua y nutrientes.
                    </div>
                    <button className="ver_mas">VER MÁS</button>
                </div>
                <div className="detalles">
                    <div className="titulo">ARCO</div>
                    <div className="descripcion">
                    Mycophos Foliar Arco consigue los efectos buscados con una sola aplicación. Es compatible con insecticidas, fungicidas y herbicidas por lo que reduce costos de aplicación. Los nutrientes aportados cubren la mayoría de los déficit de los cultivos pero no son específicos para solucionar uno determinado. Mycophos Argentina esta en condiciones de realizar formulaciones especiales para corregir dichos déficit.
                    </div>
                    <div className="especificaciones">
                        <div>
                            <p>Fabricante</p>
                            <p>Mycophos</p>
                        </div>
                        <div>
                            <p>Cont. neto</p>
                            <p>10 litrosC</p>
                        </div>
                        <div>
                            <p>Fabricado</p>
                            <p>Argentina</p>
                        </div>
                    </div>
                    <div className="consulta">
                        <a href='https://wa.link/4lisiq'>CONSULTAR</a>
                    </div>
                </div>
            </div>      

            <div className="item">
                <img src="/arcoplus-caja.webp"/>
                <div className="introduccion">
                    <div className="titulo">Hormonas Vegetales</div>
                    <div className="marca">ARCO PLUS</div>
                    <div className="descripcion">
                    Reforzado con mayor cantidad de Potasio, Azufre y Boro, Mycophos Foliar Arco consigue los efectos buscados con una sola aplicación.
                    </div>
                    <button className="ver_mas">VER MÁS</button>
                </div>
                <div className="detalles">
                    <div className="titulo">ARCO PLUS</div>
                    <div className="descripcion">
                    Es compatible con insecticidas, fungicidas y herbicidas por lo que reduce costos de aplicación. Los nutrientes aportados cubren la mayoría de los déficit de los cultivos pero no son específicos para solucionar uno determinado. Esta diseñado para una sola aplicación a razón de 1 litros por hectárea dependiendo siempre del buen diagnóstico dado por el profesional.
                    </div>
                    <div className="especificaciones">
                        <div>
                            <p>Fabricante</p>
                            <p>Mycophos</p>
                        </div>
                        <div>
                            <p>Cont. neto</p>
                            <p>10 litrosC</p>
                        </div>
                        <div>
                            <p>Fabricado</p>
                            <p>Argentina</p>
                        </div>
                    </div>
                    <div className="consulta">
                        <a href='https://wa.link/4lisiq'>CONSULTAR</a>
                    </div>
                </div>
            </div>
      
        </div>
        <div className="flechas">
            <button id="anterior">{'<'}</button>
            <button id="siguiente">{'>'}</button>
            <button id="atras">VER PRODUCTOS</button>
        </div>
    </div>
  )
}

export default Productos