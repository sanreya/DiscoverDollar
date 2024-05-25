import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './CarouselComponent.css';

const CarouselComponent = () => {
  return (
    <div className="carousel-container">
      <Carousel 
        showThumbs={false} 
        showStatus={false} 
        autoPlay 
        infiniteLoop
        showArrows
        emulateTouch
        swipeable
        dynamicHeight // Adjust slide height based on content
      >

        <div>
          <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/f09f551230626a04.jpg?q=20" alt="Slide 1" />
          
        </div>
        <div>
          <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/17a2c4ed00866b1a.jpg?q=20" alt="Slide 2" />
          
        </div>
        <div>
          <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/14691d790ec410a9.jpg?q=20" alt="Slide 3" />
          
        </div>
        <div>
          <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/345037032e3daaaf.jpg?q=20" alt="Slide 3" />
          
        </div>
        <div>
          <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/1f25201ced5d720d.jpg?q=20" alt="Slide 3" />
          
        </div>
        <div>
          <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/aa1b2bdcf519b468.jpg?q=20" alt="Slide 3" />
          
        </div>
        
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
