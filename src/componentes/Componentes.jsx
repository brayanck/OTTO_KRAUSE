import React from 'react';
import {Slideshow, Slide} from './Slideshow'
import img1 from '../img/computacion-1-removebg-preview.png';
import img2 from '../img/construcciones-removebg-preview.png';
import img3 from '../img/electricidad-removebg-preview.png';
import img4 from '../img/electronica-removebg-preview.png';
import img5 from '../img/mecanica-removebg-preview.png';
import img6 from '../img/quimica-removebg-preview.png';

export default function Componentes(){
	return (
		<main className="cont">

            <h1 className='titulo'>ESCUELA TECNICA N°1 OTTO KARUSE</h1>
			<Slideshow controles={true}>
				<Slide>
        <div className="container">
        <a className="link" href="https://www.ottokrause.edu.ar/computacion/" target="_blank" rel="noreferrer">
        <div className="logo"><img src={img1} alt=""/></div>
      </a>
            
        
        <div className="bottom_part"></div>
    </div>
				</Slide>
				<Slide>
        <div className="container">
        <a className="link" href="https://www.ottokrause.edu.ar/construccion/" target="_blank" rel="noreferrer">
            <div className="logo"><img src={img2} alt=""/></div>
        </a>
            
        
        <div className="bottom_part"></div>
    </div>
				</Slide>
				<Slide>
        <div className="container">
        <a className="link" href="https://www.ottokrause.edu.ar/electrica/" target="_blank" rel="noreferrer">
            <div className="logo"><img src={img3} alt=""/></div>
        </a>
            
        
        <div className="bottom_part"></div>
    </div>
				</Slide>
				<Slide>
        <div className="container">
        <a className="link" href="https://www.ottokrause.edu.ar/electronica/" target="_blank" rel="noreferrer">
            <div className="logo"><img src={img4} alt=""/></div>
        </a>
            
        
        <div className="bottom_part"></div>
    </div>
				</Slide>
        <Slide>
        <div className="container">
        <a className="link" href="https://www.ottokrause.edu.ar/mecanica/" target="_blank" rel="noreferrer">
            <div className="logo"><img src={img5} alt=""/></div>
        </a>
            
        
        <div className="bottom_part"></div>
    </div>
				</Slide>
        <Slide>
        <div className="container">
        <a className="link" href="https://www.ottokrause.edu.ar/quimica/" target="_blank" rel="noreferrer">
            <div className="logo"><img src={img6} alt=""/></div>
        </a>
            
        
        <div className="bottom_part"></div>
    </div>
				</Slide>
			</Slideshow>

			
	
		</main>
	);
}

