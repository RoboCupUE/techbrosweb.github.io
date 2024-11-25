import React from 'react';
import { Link } from 'react-router-dom'; 
import './CardsSection.css';

function CardsSection() {
  return (
    <section className="cards-section">
      <h2 className="cards-title">Explore Our Areas of Expertise</h2>
      <div className="cards-container">
        <div className="card">
          <img 
            src="./images/MiniLabASTI.jpg" 
            alt="Educational Robotics" 
            className="card-image" 
          />
          <h3 className="card-title">Educational Robotics</h3>
          <p className="card-description">
            Empowering learning through robotics with projects like the ASTI Challenge in Spain, inspiring the next generation of innovators.
          </p>
          <Link to="/educational-robotics" className="card-link">
            Learn More
          </Link>
        </div>

        <div className="card">
          <img 
            src="./images/MobileRobotics.png" 
            alt="Mobile Robotics" 
            className="card-image" 
          />
          <h3 className="card-title">Mobile Robotics</h3>
          <p className="card-description">
            Mastering mobile robotics with cutting-edge platforms such as NAO, Go1, Pepper, and TurtleBots (models 2, 3, and 4). 
            At the core of our expertise are hands-on ROS2 workshops, 
            designed to equip participants with advanced skills in autonomous systems and practical field applications.
          </p>
          <Link to="/mobile-robotics" className="card-link">
            Learn More
          </Link>
        </div>
        
        <div className="card">
          <img 
            src="./images/ThreeD.jpeg" 
            alt="3D Design" 
            className="card-image" 
          />
          <h3 className="card-title">3D Design</h3>
          <p className="card-description">
            Pioneering custom designs for robotic components and chassis, exemplified by projects like ASTI. Innovation starts here.
          </p>
          <Link to="/3d-design" className="card-link">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CardsSection;
