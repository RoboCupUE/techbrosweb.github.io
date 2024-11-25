import React from 'react';
import './AboutUsPage.css';

const AboutUsPage = () => {
  const teamMembers = [
    {
      name: 'Daniel Cuesta Sanz',
      profession: 'Computer Engineering Student',
      email: 'hevcuesta@gmail.com',
      photo: './images/Member_1.jpg',
    },
    {
      name: 'Javier Jesús Chouza Picallo',
      profession: 'Computer Engineering Student',
      email: 'javierchouzapicallo@gmail.com',
      photo: './images/Member_2.jpg',
    },
    {
      name: 'Johnny L. Roca Mendoza',
      profession: 'Computer Engineering Student',
      email: 'johnnyroca9@gmail.com',
      photo: './images/Member_3.jpg',
    },
    {
      name: 'Fernando Gonzáles Ramos',
      profession: 'Telecommunications Engineer (Team Leader)',
      email: 'fergonzaramos@yahoo.es',
      photo: './images/Member_4.jpg',
    },
    {
      name: 'Pablo Escudero Sarabia',
      profession: 'Biomedical Engineering Student',
      email: 'juegosescu@gmail.com',
      photo: './images/Member_6.jpg',
    },
    {
      name: 'Sergio Bemposta Rosende',
      profession: 'Professor in the Department of Science, Computing, and Technology',
      email: 'sergio.bemposta@universidadeuropea.es',
      photo: './images/Member_5.jpg',
      profileLink: 'https://portalcientifico.universidadeuropea.com/investigadores/156929/detalle',
    },
    {
      name: 'Ana del Valle Corrales Paredes',
      profession: 'Professor and PhD MSc in Robotics and Automation',
      email: 'anadelvalle.corrales@universidadeuropea.es',
      photo: './images/Member_7.jpeg',
      profileLink: 'https://portalcientifico.universidadeuropea.com/investigadores/156366/detalle',
    },
  ];

  return (
    <div className="about-us-page">
      <section className="hero-about-us">
        <div className="hero-content">
          <h1>Welcome to Tech-bROS</h1>
          <p>
            A dynamic team of students, professionals, and educators united by our passion 
            for robotics and the potential of ROS2 technology.
          </p>
        </div>
      </section>

      <section className="about-us-overview">
        <h2>About Us</h2>
        <p>
          At Tech-bROS, our mission is to develop intelligent robots that seamlessly interact with 
          humans and solve real-world problems.
          While we are still growing our expertise in ROS2, 
          we are deeply committed to mastering this transformative technology. 
          Through hands-on projects and teamwork,
          we are building the skills and knowledge needed to make meaningful contributions 
          to the robotics community in the near future.
        </p>
        <p>
          We are dedicated to exploring and mastering ROS2 while creating meaningful contributions 
          to robotics research and development.
          With a shared vision of advancing technology, 
          we embrace every challenge as an opportunity to grow and make an impact.
        </p>
      </section>

      <section className="about-us-mission">
        <h2>What Drives Us</h2>
        <p>
          At Tech-bROS, our mission is to develop intelligent robots that seamlessly interact with 
          humans and solve real-world problems.
          Our passion lies in exploring cutting-edge robotics technologies, 
          with ROS2 at the core of our learning and experimentation.
        </p>
        <p>
          Through collaborative projects and hands-on experience, we aim to inspire innovation 
          and contribute to the growing robotics community.
        </p>
      </section>

      <section className="team-projects">
        <h2>Our Projects</h2>
        <ul>
          <li>ROS2-based workshops and applications for mobile robotics.</li>
          <li>Developing autonomous navigation and mapping systems.</li>
          <li>Researching social robotics to improve human-robot interaction.</li>
        </ul>
        <p>
          These projects highlight our dedication to applying robotics in meaningful ways, 
          blending technical expertise with creativity to solve modern challenges.
        </p>
      </section>

      <section className="team-members">
        <h2 className="team-members-title">Meet Our Team</h2>
        <div className="member-cards-container">
          {teamMembers.map((member, index) => (
            <div className="member-card" key={index}>
              <img src={member.photo} alt={member.name} className="member-photo" />
              <h3>{member.name}</h3>
              <p>{member.profession}</p>
              <a href={`mailto:${member.email}`}>{member.email}</a>
              {member.profileLink && (
                <div className="profile-link">
                  <span>Research Profile:</span>{' '}
                  <a href={member.profileLink} target="_blank" rel="noopener noreferrer">
                    View Profile
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="join-us-section">
        <h2>Join Us</h2>
        <p>
          We’re just getting started! If you’re as passionate about robotics and ROS2 as we are, 
          we’d love to hear from you. Together, we can shape the future of robotics.
        </p>
        <div className='contact-button-wrapper'>
          <a href="mailto:clubroboticsuem@gmail.com" className="contact-button">
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
