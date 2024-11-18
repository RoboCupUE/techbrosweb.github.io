import React from 'react';
import './VideoPage.css';

const videos = [
  {
    id: 'video1',
    title: 'Introducción a la Robótica',
    url: 'https://www.youtube.com/watch?v=8IdBAysf-U4',
    embedUrl: 'https://www.youtube.com/embed/8IdBAysf-U4',
    description: 'Este video ofrece una introducción básica al mundo de la robótica, explicando los fundamentos y las aplicaciones de la tecnología en diversos campos.',
  },
  {
    id: 'video2',
    title: 'ASTI Challenge 2022',
    url: 'https://www.youtube.com/watch?v=i8GSPW2GofY',
    embedUrl: 'https://www.youtube.com/embed/i8GSPW2GofY',
    description: 'Exploramos cómo la robótica está revolucionando el campo de la medicina, con aplicaciones que van desde la cirugía asistida hasta la rehabilitación.',
  },
  {
    id: 'video3',
    title: 'Robots Autónomos: El Futuro del Transporte',
    url: 'https://www.youtube.com/watch?v=62V0drFvVoI',
    embedUrl: 'https://www.youtube.com/embed/62V0drFvVoI',
    description: 'En este video, discutimos el papel de los robots autónomos en la industria del transporte y cómo podrían cambiar nuestra forma de viajar.',
  },
  {
    id: 'video4',
    title: 'La Inteligencia Artificial en la Robótica',
    url: 'https://www.youtube.com/watch?v=d20LKNkAdA0',
    embedUrl: 'https://www.youtube.com/embed/d20LKNkAdA0',
    description: 'Un análisis de cómo la inteligencia artificial está siendo integrada en robots, permitiendo una mayor autonomía y capacidades inteligentes.',
  },
];

const VideoPage = () => {
  return (
    <div className="video-page-container">
      <h1>Explora Nuestros Videos</h1>
      <p className="video-page-description">
        Aquí podrás ver algunos de los videos más interesantes sobre robótica, que cubren temas como introducción a la robótica, aplicaciones en medicina, robots autónomos y más.
      </p>
      <div className="video-grid">
        {videos.map((video) => (
          <div key={video.id} className="video-card">
            <iframe
              width="100%"
              height="315"
              src={video.embedUrl}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h3>{video.title}</h3>
            <p className="video-description">{video.description}</p>
            <a href={video.url} target="_blank" rel="noopener noreferrer" className="youtube-button">
              Ver en YouTube
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoPage;
