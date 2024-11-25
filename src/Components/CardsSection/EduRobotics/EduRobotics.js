import React from 'react';
import './EduRobotics.css'; 

const EduRobotics = () => {
  return (
    <div className="edu-robotics-page">
      <div className="hero-edu-robotics">
        <h1>Educational Robotics</h1>
        <p>
          Our educational robotics workshops bring cutting-edge technology to the classroom. 
          Using platforms like LEGO Mindstorms, VEX Robotics, and Arduino, we empower the next generation of engineers.
        </p>
      </div>
      
      <div className="edu-section">
        <h2>Key Educational Topics</h2>
        <ul>
          <li><strong>Robotics Design:</strong> Students learn to design and build robots using LEGO and VEX kits.</li>
          <li><strong>Programming:</strong> Introduction to coding through block-based programming and Arduino-based projects.</li>
          <li><strong>Teamwork and Innovation:</strong> Encouraging collaboration and creative problem solving during challenges and competitions.</li>
        </ul>
      </div>
      
      <div className="edu-image">
        <img 
          src="./images/TeamASTI.jpg" 
          alt="Educational Robotics Workshop"
        />
        <p className="image-caption">
          This is the team of Edition VII (7) 2023-2024, Burgos, Spain.
        </p>
      </div>
    </div>
  );
};

export default EduRobotics;
