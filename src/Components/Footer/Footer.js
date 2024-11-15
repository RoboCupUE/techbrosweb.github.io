import React from 'react';
import './Footer.css';
import { FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <img src="/images/uem_logo.png" alt="University Logo" className="footer-logo" />
          <p className="footer-info">&copy; {new Date().getFullYear()} Tech-bROS by UEM Robotics Club. All rights reserved.</p>
        </div>
        <div className="footer-social">
          <a href="https://www.linkedin.com/in/robotics-club-uem-06096a328" target="_blank" rel="noopener noreferrer" className="footer-icon">
            <FaLinkedin size={30} />
          </a>
          <a href="https://www.instagram.com/robotics_uem?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="footer-icon">
            <FaInstagram size={30} />
          </a>
          <a href="mailto:clubroboticsuem@gmail.com" className="footer-icon">
            <FaEnvelope size={30} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
