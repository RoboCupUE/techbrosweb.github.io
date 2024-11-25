import React from 'react';
import './EduRobotics.css'; 

const EduRobotics = () => {
  return (
    <div className="edu-robotics-page">
      <div className="hero-edu-robotics">
        <h1>Educational Robotics</h1>
        <p>
          Our educational robotics workshops offer hands-on learning experiences through a variety of exciting challenges. 
          We specialize in Arduino-based courses, participate in the ASTI Challenge, and develop internal robotics projects. 
          These activities empower students to become the next generation of engineers, capable of designing, programming, and innovating solutions in robotics.
        </p>
      </div>
      
      <div className="edu-section">
        <h2>Key Educational Topics</h2>
        <ul>
          <li><strong>Arduino Programming:</strong> We teach students to design and program robots using Arduino platforms, enabling them to bring their creations to life.</li>
          <li><strong>ASTI Challenge Participation:</strong> Students collaborate in the ASTI Challenge, applying their skills in real-world robotics competitions.</li>
          <li><strong>Internal Projects:</strong> Our internal robotics projects encourage creativity, teamwork, and problem-solving through the design and development of custom robots.</li>
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
