import React from 'react';
import './FeaturedProjectsPage.css';

const FeaturedProjectsPage = () => {
  return (
    <div className="featured-projects-page">
      <section className="hero-featured-projects">
        <h1>Featured Projects at Robotics Club</h1>
        <p>
          At UEM Robotics Club , we are constantly working on innovative robotics projects that will shape the future of technology. Here are some of our current projects.
        </p>
      </section>

      <section className="project-section">
        <h2>Aspiring to Compete in the ASTI Challenge 2025</h2>
        <div className="project-details">
          <div className="project-description">
            <p>
              Our team is preparing to compete in the ASTI Challenge, a prestigious event in the field of robotics, which will take place next May. We are developing innovative robotics systems to solve real-world challenges, while also strengthening our team’s problem-solving and collaborative skills.
            </p>
            <p>
              The competition will require us to develop autonomous systems capable of performing specific tasks in a challenging environment, pushing our limits and improving our technical abilities.
            </p>
          </div>
          <div className="project-image">
            <img src="./images/astiChallenge.jpg" alt="ASTI Challenge" />
          </div>
        </div>
      </section>

      <section className="project-section">
        <h2>Arduino Workshops</h2>
        <div className="project-details">
          <div className="project-description">
            <p>
              We host regular Arduino workshops aimed at introducing beginners to the world of robotics and electronics. In these workshops, participants learn how to build and program simple circuits, robots, and sensors, using the widely popular Arduino platform.
            </p>
            <p>
              These workshops are an excellent opportunity for anyone interested in diving into the basics of robotics and electronics, while also fostering creativity and technical problem-solving skills.
            </p>
          </div>
          <div className="project-image">
            <img src="./images/ArduinoWorkshop.jpg" alt="Arduino Workshop" />
          </div>
        </div>
      </section>

      <section className="project-section">
        <h2>MiniSumo Robot Design for Internal Competition</h2>
        <div className="project-details">
          <div className="project-description">
            <p>
              Our internal competition focuses on designing and building MiniSumo robots that will compete against each other in a specially designed arena. The goal is to create a robot that can autonomously detect and push its opponent out of the ring.
            </p>
            <p>
              This project allows our team members to work on various aspects of robotics, such as motor control, sensor integration, and algorithm development, while also promoting friendly competition and teamwork.
            </p>
          </div>
          <div className="project-image">
            <img src="./images/Sumobot.PNG" alt="MiniSumo Robot" />
          </div>
        </div>
      </section>

      <section className="project-section">
        <h2>Preparing for RoboCup Liga Home 2025</h2>
        <div className="project-details">
          <div className="project-description">
            <p>
              Our biggest goal is to participate in the RoboCup Liga Home 2025, where we aim to demonstrate the capabilities of social robotics and autonomous systems in a real-world scenario. Our team is designing robots capable of interacting with humans in a home environment, using the latest technologies like ROS2.
            </p>
            <p>
              The RoboCup Liga Home is a prestigious international competition, and our team is working hard to create innovative robots that can meet the challenges posed by this unique environment. This project is an exciting opportunity to push the boundaries of robotics and create real-world applications.
            </p>
          </div>
          <div className="project-image">
            <img src="./images/NaosRobotics.jpg" alt="RoboCup Liga Home 2025" />
          </div>
        </div>
      </section>

    </div>
  );
};

export default FeaturedProjectsPage;
