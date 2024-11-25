import React from 'react';
import './Sumobot.css';

const Sumobot = () => {
  return (
    <div className="sumobot-container">
      <h1>MiniSumo Robot Design Competition</h1>
      <p>
        Our MiniSumo Robot competition encourages members to design and build robots capable of pushing their opponents out of a ring autonomously. This project is both challenging and engaging, helping us improve motor control, sensors, and algorithm design.
      </p>
      <p>
        Participants gain hands-on experience with robotics, building mechanical structures, integrating various sensors, and programming custom behaviors. It's a great way to blend learning and friendly competition.
      </p>
      <img src="/images/Sumobot.PNG" alt="MiniSumo Robot" className="sumobot-image" />
    </div>
  );
};

export default Sumobot;
