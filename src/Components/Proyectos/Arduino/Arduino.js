import React from 'react';
import './Arduino.css';

const Arduino = () => {
  return (
    <div className="arduino-container">
      <h1>Arduino Workshops</h1>
      <p>
        Our Arduino workshops introduce beginners to the world of robotics and electronics. 
        Participants learn how to build and program simple circuits, robots, and sensors using the Arduino platform.
      </p>
      <p>
        These workshops are designed to foster creativity and teach essential skills in programming and electronics.
        Our sessions provide hands-on experience and support for everyone from beginners to advanced users, building robots, creating smart devices, and experimenting with sensors.
      </p>
      <img src="./images/arduinoWorkshops.jpg" alt="Arduino Workshop" className="arduino-image" />
    </div>
  );
};

export default Arduino;
