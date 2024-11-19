import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'; // Importa useNavigate
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Hook para obtener la ruta actual
  const navigate = useNavigate(); // Hook para navegar programáticamente

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

  // Función para recargar la página cuando el usuario haga clic en "Home"
  const handleHomeClick = () => {
    navigate('/'); // Navegar a la página de inicio
    window.location.reload(); // Forzar recarga de la página
    setIsOpen(false); // Cerrar el menú al hacer clic
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img 
            src="./images/RobocupLogoWeb.png" 
            alt="Logo"
            className="navbar-logo-img" 
          />
        </Link>
        <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
          {/* Mostrar botón "Home" y recargar la página al hacer clic */}
          {location.pathname !== '/' && (
            <Link 
              to="/" 
              className="navbar-button" 
              onClick={handleHomeClick} // Recargar la página al hacer clic
            >
              Home
            </Link>
          )}
          
          {/* Mostrar botón "Articles" solo si no estamos en la página de artículos */}
          {location.pathname !== '/articles' && (
            <Link to="/articles" className="navbar-button" onClick={() => setIsOpen(false)}>Articles</Link>
          )}

          {/* Mostrar botón "Projects" solo si no estamos en la página de proyectos */}
          {location.pathname !== '/featured-projects' && (
            <Link to="/featured-projects" className="navbar-button" onClick={() => setIsOpen(false)}>Projects</Link>
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
