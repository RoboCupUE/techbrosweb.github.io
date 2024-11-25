import React from 'react';
import { Link } from 'react-router-dom';
import './FeaturedProjectsPage.css';

const FeaturedProjectsPage = () => {
  return (
    <div className="featured-projects-page">
      <section className="hero-featured-projects">
        <h1>Featured Projects at Robotics Club</h1>
        <p>
          At UEM Robotics Club, we are dedicated to developing innovative robotics projects that have a real-world impact. Below are some of our current initiatives.
        </p>
      </section>

      <section className="project-section">
        <h2>Aspiring to Compete in the ASTI Challenge 2025</h2>
        <div className="project-details">
          <div className="project-description">
            <p>
              Our team is preparing for the ASTI Challenge 2025, a prestigious competition where we’ll develop autonomous systems to tackle complex tasks in a competitive environment.
            </p>
            <p>
              This challenge will test our skills in robotics, focusing on autonomy, precision, and adaptability.
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
              We offer Arduino workshops designed to introduce beginners to the basics of robotics and electronics, helping them gain hands-on experience with building and programming simple robots.
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
              We’re designing MiniSumo robots for an internal competition, where robots compete to push each other out of a ring. This project enhances our skills in robot design, programming, and sensor integration.
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
              Our primary goal is to participate in RoboCup Liga Home 2025, where we will develop a single robot equipped with a TB4 that can autonomously solve a series of tasks set in a home environment.
            </p>
            <p>
              This project challenges us to design a robot capable of performing real-world tasks such as navigation, object manipulation, and human-robot interaction, all while adapting to a dynamic environment.
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
