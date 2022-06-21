import '../style/components/pages/HomePage.css'
import React from 'react';
import Header from  '../component/layout/Header';

import html from '../img/html.png';
import CSS3 from '../img/CSS3.svg.png';
import js from '../img/js.svg.png';
import python from '../img/python.png';
import react from '../img/react.png'
import node from '../img/node.png'

function HomePage() {
    return (
        <div className='contenedor-home'>
             <Header 
             h1  = "Fidelity Code"
             p = 'DESARROLLADORES WEB FRONT-END Y BACK-END'

             />
            <div className="container-skills">
                <div className="container-skills-h2">
                    <h2>Tecnologías que usamos</h2>
                </div>

                <div className="tarjeta-skills">
                    <div className="container">
                       <img src={html} alt="" />
                       <img src={CSS3} alt="" />
                       <img src={js} alt="" />
                       <img src={python} alt="" />
                       <img src={react} alt="" />
                       <img src={node} alt="" />
                    </div>
                </div>
            </div>


        </div>
    )
}

export default HomePage;