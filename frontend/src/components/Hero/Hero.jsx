import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Hero.css';

const Hero = ({images, heading}) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    prevArrow: <div className="slick-prev"></div>,
    nextArrow: <div className="slick-next"></div>,
  };

  return (
    <div className='hero'>
      <div className="image-slider">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}

      </Slider>
      </div>

      <div className='black'></div>

        <div className="hero-head">
        <div className="head">            
              <h1>Let the World See</h1>
              <p>Discover the Wonders</p>
            </div>
            <Link to='./explore' style={{textDecoration: 'none'}}>
            <button className='discover-btn'>DISCOVER <span className="material-symbols-outlined">arrow_forward</span></button>
            </Link>
        </div>
    </div>
  )
}

export default Hero;