import React from 'react';
import './Hero.css';
import dark_arrow from './assets/dark-arrow.png';

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero_text">
        <h1>We Ensure better education for a better world</h1>
        <p>Our cutting-edge curriculum is designed to empower student 
            with the knowledge,skills and experience needed to excel in 
            the dinamic field of education.
        </p>
        <button className='btn'>Explore more<img src={dark_arrow} alt=''/></button>
      </div>
    </div>
  )
}

export default Hero
