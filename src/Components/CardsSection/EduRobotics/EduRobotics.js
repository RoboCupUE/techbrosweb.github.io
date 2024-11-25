import React from 'react';
import './EduRobotics.css';

const EduRobotics = () => {
  return (
    <div className="edu-robotics-page">
      <section className="hero-edu-robotics">
        <h1>Educational Robotics</h1>
        <p>
          Dive into the exciting world of educational robotics, where technology meets learning to inspire innovation and creativity among students.
        </p>
      </section>

      <section className="edu-section">
        <h2>Projects and Initiatives</h2>
        <div className="edu-details">
          <div className="edu-description">
            <p>
              Our educational robotics initiatives include hands-on workshops and participation in international competitions like the ASTI Challenge.
            </p>
            <p>
              We focus on building interactive learning environments that teach coding, engineering, and robotics to the next generation.
            </p>
          </div>
         <div className="edu-image">
            <img src="./images/.jpg" alt="Educational Robotics" />
          </div>
        </div>
      </section>

      <section className="edu-section">
        <h2>Learning Platforms</h2>
        <p>
          Using platforms like LEGO Mindstorms, Arduino, and Raspberry Pi, we make robotics accessible and engaging for all skill levels.
        </p>
      </section>
    </div>
  );
};

export default EduRobotics;
