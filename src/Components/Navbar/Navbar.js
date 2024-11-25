import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'; 
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); 
  const navigate = useNavigate(); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      const handleClickOutside = (event) => {
        if (!event.target.closest('.navbar-container')) {
          setIsOpen(false);
        }
      };

      document.addEventListener('click', handleClickOutside);
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }
  }, [isOpen]);

  const handleHomeClick = () => {
    navigate('/'); 
    window.location.reload(); 
    setIsOpen(false); 
  };

  const handleLogoClick = () => {
    navigate('/'); 
    window.location.reload(); 
    setIsOpen(false); 
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {}
        <div className="navbar-logo" onClick={handleLogoClick}>
          <img 
            src="./images/RobocupLogoWeb.png" 
            alt="Logo"
            className="navbar-logo-img" 
          />
        </div>

        <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
          {}
          {location.pathname !== '/' && (
            <Link 
              to="/" 
              className="navbar-button" 
              onClick={handleHomeClick} 
            >
              Home
            </Link>
          )}
          
          {}
          {location.pathname !== '/articles' && (
            <Link to="/articles" className="navbar-button" onClick={() => setIsOpen(false)}>Articles</Link>
          )}

          {}
          {location.pathname !== '/featured-projects' && (
            <Link to="/featured-projects" className="navbar-button" onClick={() => setIsOpen(false)}>Projects</Link>
          )}

          {}
          {location.pathname !== '/videos' && (
            <Link to="/videos" className="navbar-button" onClick={() => setIsOpen(false)}>Videos</Link>
          )}

          {}
          {location.pathname !== '/about' && (
            <Link to="/about" className="navbar-button" onClick={() => setIsOpen(false)}>About Us</Link>
          )}
        </div>

        <div className="navbar-toggle" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
