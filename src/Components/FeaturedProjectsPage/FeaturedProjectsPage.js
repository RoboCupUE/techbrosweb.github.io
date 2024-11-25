import React from 'react';
import { Link } from 'react-router-dom'; // Necesitamos el componente Link para navegar entre páginas
import './FeaturedProjectsPage.css';

const FeaturedProjectsPage = () => {
  return (
    <div className="featured-projects-page">
      <section className="hero-featured-projects">
        <h1>Featured Projects at Robotics Club</h1>
        <p>
          At UEM Robotics Club, we are constantly working on innovative robotics projects that will shape the future of technology. Here are some of our current projects.
        </p>
      </section>

      <section className="project-section">
        <h2>Aspiring to Compete in the ASTI Challenge 2025</h2>
        <div className="project-details">
          <div className="project-description">
            <p>
              Our team is preparing to compete in the ASTI Challenge, a prestigious event in the field of robotics, which will take place next May.
            </p>
            <p>
              The competition will require us to develop autonomous systems capable of performing specific tasks in a challenging environment.
            </p>
          </div>
          <div className="project-image">
            <img src="./images/astiChallenge.jpg" alt="ASTI Challenge" />
          </div>
        </div>
        <Link to="/project-details/asti-challenge" className="more-info-btn">More Information</Link>
      </section>

      <section className="project-section">
        <h2>Arduino Workshops</h2>
        <div className="project-details">
          <div className="project-description">
            <p>
              We host regular Arduino workshops aimed at introducing beginners to the world of robotics and electronics.
            </p>
          </div>
          <div className="project-image">
            <img src="./images/ArduinoWorkshop.jpg" alt="Arduino Workshop" />
          </div>
        </div>
        <Link to="/project-details/arduino-workshops" className="more-info-btn">More Information</Link>
      </section>

      <section className="project-section">
        <h2>MiniSumo Robot Design for Internal Competition</h2>
        <div className="project-details">
          <div className="project-description">
            <p>
              Our internal competition focuses on designing and building MiniSumo robots that will compete against each other in a specially designed arena.
            </p>
          </div>
          <div className="project-image">
            <img src="./images/Sumobot.PNG" alt="MiniSumo Robot" />
          </div>
        </div>
        <Link to="/project-details/minisumo-robot" className="more-info-btn">More Information</Link>
      </section>

      <section className="project-section">
        <h2>Preparing for RoboCup Liga Home 2025</h2>
        <div className="project-details">
          <div className="project-description">
            <p>
              Our biggest goal is to participate in the RoboCup Liga Home 2025, where we aim to demonstrate the capabilities of social robotics.
            </p>
          </div>
          <div className="project-image">
            <img src="./images/NaosRobotics.jpg" alt="RoboCup Liga Home 2025" />
          </div>
        </div>
        <Link to="/project-details/robocup-liga-home" className="more-info-btn">More Information</Link>
      </section>

    </div>
  );
};

export default FeaturedProjectsPage;
