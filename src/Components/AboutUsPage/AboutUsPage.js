import React from 'react';
import './AboutUsPage.css';

const AboutUsPage = () => {
  return (
    <div className="about-us-page">
      <section className="hero-about-us">
        <h1>Meet the Tech-bROS Team</h1>
        <p>
          Committed to innovation in robotics, we are preparing for the RoboCup Home League 2025.
        </p>
      </section>

      <section className="about-us-overview">
        <h2>Our Vision</h2>
        <p>
          At Tech-bROS, we are a passionate group of young students and professionals dedicated to researching and developing solutions for social and mobile robotics. Our goal is to participate in the RoboCup Home League 2025 and showcase the potential of technologies like ROS2 for real-world applications.
        </p>
      </section>

      <section className="about-us-mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to develop robots that interact naturally and effectively with humans, creating innovative solutions to modern-world challenges. Through teamwork and continuous learning, we strive to inspire the next generation of robotics researchers and professionals.
        </p>
      </section>

      <section className="team-projects">
        <h2>Highlighted Projects</h2>
        <ul>
          <li>Development of autonomous navigation systems for mobile robots.</li>
          <li>Implementation of robotic assistants using ROS2.</li>
          <li>Research in social robotics to enhance human-robot interaction.</li>
        </ul>
        <p>
          These projects reflect our commitment to using robotics to transform lives and create a positive impact on society.
        </p>
      </section>

      <section className="team-photo-section">
        <h2>Meet the Team</h2>
        <div className="team-photo-container">
          <img src="./images/RobocupTeam.jpg" alt="Tech-bROS Team Photo" className="team-photo" />
        </div>
        <p className="team-names">
        From left to right: Johnny, Fernando, Daniel, Pablo, Javier, and Lucia. 
        This is just a part of the Tech-bROS team.
        </p>
      </section>

      <section className="join-us-section">
        <h2>Join Our Vision</h2>
        <p>
          If you share our passion for robotics and technological advancement, we would love to collaborate with you! At Tech-bROS, every idea counts, and every challenge is an opportunity for growth.
        </p>
      </section>
    </div>
  );
};

export default AboutUsPage;
