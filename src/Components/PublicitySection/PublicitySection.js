import React, { useState, useEffect } from 'react';
import './PublicitySection.css';

const PublicitySection = React.memo(() => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState([]);
  const [imageLoaded, setImageLoaded] = useState(false);

  const slides = [
    {
      type: 'image',
      src: '/images/NaosRobotics.jpg',
      alt: 'Advertisement 1',
      caption: 'Explora nuestros últimos productos de robótica.'
    },
    {
      type: 'image',
      src: '/images/ROS2_Clases.jpg',
      alt: 'Advertisement 2',
      caption: 'Mira cómo construimos el futuro de la tecnología.'
    },
    {
      type: 'video',
      src: '/images/Nao_Video.mp4',
      alt: 'Advertisement 3',
      caption: 'Únete a nuestro club de robótica e innova con nosotros.'
    },
    {
      type: 'image',
      src: '/images/ASTI_Podium.jpg',
      alt: 'Advertisement 4',
      caption: 'Sé parte de nosotros y resuelve grandes desafíos en competiciones reconocidas.'
    }
  ];

  // Precarga de imágenes
  const preloadImages = () => {
    slides.forEach(slide => {
      if (slide.type === 'image' && !loadedImages.includes(slide.src)) {
        const img = new Image();
        img.src = slide.src;
        img.onload = () => {
          setLoadedImages((prev) => [...prev, slide.src]);
        };
      }
    });
  };

  useEffect(() => {
    preloadImages(); // Precargar imágenes solo una vez
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      setImageLoaded(false); // Reiniciar la bandera de carga de imágenes
    }, 7000);

    return () => clearInterval(interval); // Limpiar el intervalo al desmontar el componente
  }, [slides.length]);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="publicity-section">
      <div className="publicity-container">
        <div className="publicity-slide">
          {slides[currentIndex].type === 'image' ? (
            <img
              src={slides[currentIndex].src}
              alt={slides[currentIndex].alt}
              className={`publicity-image ${imageLoaded ? 'loaded' : 'loading'}`}
              onLoad={handleImageLoad}
            />
          ) : (
            <video className="publicity-video" autoPlay loop muted>
              <source src={slides[currentIndex].src} type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </video>
          )}
        </div>
        <div className="publicity-caption">
          <p>{slides[currentIndex].caption}</p>
        </div>
      </div>
    </div>
  );
});

export default PublicitySection;
