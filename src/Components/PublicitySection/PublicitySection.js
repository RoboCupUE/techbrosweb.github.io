import React, { useState, useEffect, useCallback } from 'react';
import './PublicitySection.css';

const PublicitySection = React.memo(() => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  const slides = [
    {
      type: 'image',
      src: './images/NaosRobotics.jpg',
      alt: 'Advertisement 1',
      caption: 'Explore our latest robotics products.'
    },
    {
      type: 'image',
      src: './images/ROS2_Clases.jpg',
      alt: 'Advertisement 2',
      caption: 'See how we are building the future of technology.'
    },
    {
      type: 'video',
      src: './images/Nao_Video.mp4',
      alt: 'Advertisement 3',
      caption: 'Join our robotics club and innovate with us.'
    },
    {
      type: 'image',
      src: './images/ASTI_Podium.jpg',
      alt: 'Advertisement 4',
      caption: 'Be part of us and solve great challenges in recognized competitions.'
    }
  ];

  // Preload images
  const preloadImages = useCallback(() => {
    slides.forEach((slide) => {
      if (slide.type === 'image') {
        const img = new Image();
        img.src = slide.src; // Force the image to load
      }
    });
  }, [slides]);

  useEffect(() => {
    preloadImages(); 
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      setImageLoaded(false); 
    }, 7000);

    return () => clearInterval(interval); 
  }, [preloadImages]);

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
              style={{ display: imageLoaded ? 'block' : 'none' }} // Hide the image until it has loaded
            />
          ) : (
            <video className="publicity-video" autoPlay loop muted>
              <source src={slides[currentIndex].src} type="video/mp4" />
              Your browser does not support the video element.
            </video>
          )}
          {!imageLoaded && <div className="loading-spinner">Loading...</div>}
        </div>
        <div className="publicity-caption">
          <p>{slides[currentIndex].caption}</p>
        </div>
      </div>
    </div>
  );
});

export default PublicitySection;
