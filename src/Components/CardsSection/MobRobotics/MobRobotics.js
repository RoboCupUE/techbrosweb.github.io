import React from 'react';
import './MobRobotics.css'; 

const MobRobotics = () => {
  return (
    <div className="mob-robotics-page">
      <div className="hero-mob-robotics">
        <h1>Mobile Robotics</h1>
        <p>
          Mobile robotics is at the heart of our work at Tech-bROS. By using advanced platforms like NAO, Go1, Pepper, 
          and TurtleBots (models 2, 3, and 4), we are pushing the boundaries of autonomous systems. 
          Our hands-on workshops in ROS2 ensure participants gain cutting-edge knowledge in mobile robotics and field applications.
        </p>
      </div>
      
      <div className="mob-section">
        <h2>Key Projects</h2>
        <ul>
          <li><strong>ROS2 Navigation:</strong> Implementing autonomous navigation algorithms for TurtleBots and Go1 robots.</li>
          <li><strong>Human-Robot Interaction:</strong> Enhancing interaction models with platforms like NAO and Pepper.</li>
          <li><strong>Workshops:</strong> Comprehensive training on ROS2, covering topics like SLAM, path planning, and sensor integration.</li>
        </ul>
      </div>
      
      <div className="mob-image">
        <img 
          src="./images/robocup.jpg" 
          alt="Participants in a ROS2 mobile robotics workshop" 
        />
        {/* Use the <video> tag for the video */}
        <video 
          controls
          width="100%" 
          height="auto"
          alt="Kobuki robot demonstration"
        >
          <source src="./images/kobuki.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <img 
          src="./images/kobuki.jpg" 
          alt="Participants working with the Kobuki robot"
        />
      </div>
    </div>
  );
};

export default MobRobotics;
