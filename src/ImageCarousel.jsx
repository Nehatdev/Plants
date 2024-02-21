// ImageCarousel.jsx

import React from 'react';
import { Carousel } from 'react-bootstrap';
import img2 from './p2.jpg';
import img3 from './p3.jpg';

const ImageCarousel = () => {
  return (
    <Carousel controls={false} indicators={false} className="w-100">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt=""
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt=""
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default ImageCarousel;