import React, { useState, useEffect } from 'react';
import './PublicitySection.css';

const PublicitySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState([]);  // Control de imágenes cargadas
  const [imageLoaded, setImageLoaded] = useState(false);  // Indica si la imagen actual ha sido cargada

  const slides = [
    {
      type: 'image',
      src: '/images/NaosRobotics.jpg',
      alt: 'Advertisement 1',
      caption: 'Explore our latest robotics products.'
    },
    {
      type: 'image',
      src: '/images/ROS2_Clases.jpg',
      alt: 'Advertisement 2',
      caption: 'Watch how we build the future of technology.'
    },
    {
      type: 'video',
      src: '/images/Nao_Video.mp4',
      alt: 'Advertisement 3',
      caption: 'Join our robotics club and innovate with us.'
    },
    {
      type: 'image',
      src: '/images/ASTI_Podium.jpg',
      alt: 'Advertisement 4',
      caption: 'Be one of us and solve great challenges in renowned competitions.'
    }
  ];

  // Función para precargar las imágenes
  const preloadImages = () => {
    slides.forEach(slide => {
      if (slide.type === 'image' && !loadedImages.includes(slide.src)) {
        const img = new Image();
        img.src = slide.src;
        img.onload = () => {
          setLoadedImages((prev) => [...prev, slide.src]);  // Marcar la imagen como cargada
        };
      }
    });
  };

  // Efecto para cambiar la imagen cada 7 segundos
  useEffect(() => {
    preloadImages();  // Pre-cargar imágenes cuando el componente se monte

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);  // Ciclo entre las slides
      setImageLoaded(false);  // Resetear el estado de carga de imagen
    }, 7000); // Cambiar cada 7 segundos

    return () => clearInterval(interval); // Limpiar el intervalo al desmontar el componente
  }, [slides.length]);

  // Cuando la imagen se haya cargado, actualizar el estado
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
              onLoad={handleImageLoad}  // Marca como cargada la imagen
            />
          ) : (
            <video className="publicity-video" autoPlay loop muted>
              <source src={slides[currentIndex].src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
        <div className="publicity-caption">
          <p>{slides[currentIndex].caption}</p>
        </div>
      </div>
    </div>
  );
};

export default PublicitySection;
