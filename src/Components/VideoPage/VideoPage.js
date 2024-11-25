import React from 'react';
import './VideoPage.css';

const videos = [
  {
    id: 'video1',
    title: 'Tech-bROS SLAM and Navigation with ROS2',
    url: 'https://www.youtube.com/watch?v=XORwxXyIxAg',
    embedUrl: 'https://www.youtube.com/embed/XORwxXyIxAg',
    description: 'Discover how Tech-bROS implements SLAM and navigation using ROS2 for autonomous robots.',
  },
  {
    id: 'video2',
    title: 'ASTI Challenge 2022 Team Presentation',
    url: 'https://www.youtube.com/watch?v=i8GSPW2GofY',
    embedUrl: 'https://www.youtube.com/embed/i8GSPW2GofY',
    description: 'Relive the excitement of the ASTI Challenge 2022 and known the team members and their project.',
  },
  {
    id: 'video4',
    title: '¡El Espíritu Navideño en Acción! Brazo Robótico Montando un Árbol de Navidad 3D',
    url: 'https://www.youtube.com/watch?v=CBwBaF9_6d8',
    embedUrl: 'https://www.youtube.com/embed/CBwBaF9_6d8',
    description: 'Watch our robotic arm build a 3D Christmas tree with precision and holiday spirit!',
  },
];

const VideoPage = () => {
  return (
    <div className="video-page-container">
      <h1>Explore Our Videos</h1>
      <p className="video-page-description">
        Here, you can watch some of the most interesting videos about robotics, 
        covering topics like introductions to robotics, medical applications, 
        autonomous robots, and more.
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
            {video.url && (
              <a href={video.url} target="_blank" rel="noopener noreferrer" className="youtube-button">
                Watch on YouTube
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoPage;
