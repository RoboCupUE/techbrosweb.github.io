import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Importa useLocation
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Hook para obtener la ruta actual

  // Función para alternar el menú hamburguesa
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Cerrar el menú al hacer clic fuera
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

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img 
            src="/images/RobocupLogoWeb.png" 
            alt="Logo"
            className="navbar-logo-img" 
          />
        </Link>
        <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
          {/* Mostrar botón "Home" solo si no estamos en la página principal */}
          {location.pathname !== '/' && (
            <Link to="/" className="navbar-button" onClick={() => setIsOpen(false)}>Home</Link>
          )}
          
          {/* Mostrar botón "Articles" solo si no estamos en la página de artículos */}
          {location.pathname !== '/articles' && (
            <Link to="/articles" className="navbar-button" onClick={() => setIsOpen(false)}>Articles</Link>
          )}

          {/* Mostrar botón "Videos" solo si no estamos en la página de videos */}
          {location.pathname !== '/videos' && (
            <Link to="/videos" className="navbar-button" onClick={() => setIsOpen(false)}>Videos</Link>
          )}

          {/* Mostrar botón "About Us" solo si no estamos en la página de About Us */}
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
