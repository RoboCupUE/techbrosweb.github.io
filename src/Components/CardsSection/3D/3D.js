import React from 'react';
import './3D.css';

const ThreeD = () => {
  return (
    <div className="three-d-page">
      <h1>3D Design</h1>
      <p>
        At Tech-bROS, innovation starts with design. Our 3D modeling projects focus on creating custom parts and 
        chassis for robotics applications. From precision engineering to rapid prototyping, we bring ideas to life.
      </p>
      <h2>Highlighted Projects</h2>
      <ul>
        <li><strong>Custom Chassis:</strong> Designing and manufacturing robot chassis tailored for specific needs, including ASTI robots.</li>
        <li><strong>3D Printing:</strong> Prototyping components for mobile and educational robots.</li>
        <li><strong>Collaborative Design:</strong> Partnering with engineers and educators to develop functional robotic solutions.</li>
      </ul>
      <img 
        src="./images/ThreeD_ASTI.jpg" 
        alt="3D printing and design process in action" 
        className="three-d-image"
      />
    </div>
  );
};

export default ThreeD;
