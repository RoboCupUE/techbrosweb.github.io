import React from 'react';
import './HeroSection.css';  // Ruta correcta

function HeroSection() {
  return (
    <div className='hero-section'>
      <div className='hero-overlay'>
        <h1 className='hero-title'>Tech-bROS in the Robotics Club</h1>
        <p className='hero-description'>
            We are a team focused on robotics, combining research, development, 
            and a variety of activities within our university's Robotics club. 
            In addition to cutting-edge research, we design projects and participate in robotics competitions, 
            fostering creativity, collaboration, and innovation among our university members.
        </p>
        <div className='hero-buttons'>
          <a href='/projects' className='hero-button'>Featured Projects</a>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
