import React, { useState } from 'react';
import img1 from '../img/computacion-1-removebg-preview.png';
import img2 from '../img/construcciones-removebg-preview.png';
import img3 from '../img/electricidad-removebg-preview.png';
import img4 from '../img/electronica-removebg-preview.png';
import img5 from '../img/mecanica-removebg-preview.png';
import img6 from '../img/quimica-removebg-preview.png';
import Carousel from 'react-bootstrap/Carousel';


export default function Carusel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <main className='cont'>
        <h1 className='titulo'>ESCUELA TECNICA N°1 OTTO KARUSE</h1>
        <Carousel high={300} activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <div className="container">
        <a className="link" href="https://www.ottokrause.edu.ar/computacion/" target="_blank" rel="noreferrer">
            <div className="logo"><img className='imagen' src={img1} alt="computacion"/></div>
        </a>
            
        
        <div className="bottom_part"></div>
    </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="container">
        <a className="link" href="https://www.ottokrause.edu.ar/construccion/" target="_blank" rel="noreferrer">
            <div className="logo"><img className='imagen' src={img2} alt="construcciones"/></div>
        </a>
            
        
        <div className="bottom_part"></div>
    </div>

      </Carousel.Item>
      <Carousel.Item>
        <div className="container">
        <a className="link" href="https://www.ottokrause.edu.ar/electrica/" target="_blank" rel="noreferrer">
            <div className="logo"><img className='imagen' src={img3} alt="electricidad"/></div>
        </a>
            
        
        <div className="bottom_part"></div>
    </div>

      </Carousel.Item>
      <Carousel.Item>
        <div className="container">
        <a className="link" href="https://www.ottokrause.edu.ar/electronica/" target="_blank" rel="noreferrer">
            <div className="logo"><img className='imagen' src={img4} alt="electronica"/></div>
        </a>
            
        
        <div className="bottom_part"></div>
    </div>

      </Carousel.Item>
      <Carousel.Item>
        <div className="container">
        <a className="link" href="https://www.ottokrause.edu.ar/mecanica/" target="_blank" rel="noreferrer">
            <div className="logo"><img className='imagen' src={img5} alt="mecanica"/></div>
        </a>
            
        
        <div className="bottom_part"></div>
    </div>

      </Carousel.Item>
      <Carousel.Item>
        <div className="container">
        <a className="link" href="https://www.ottokrause.edu.ar/quimica/" target="_blank" rel="noreferrer">
            <div className="logo"><img className='imagen' src={img6} alt="quimica"/></div>
        </a>
            
        
        <div className="bottom_part"></div>
    </div>

      </Carousel.Item>

    </Carousel>
    </main>
    
  );
}

