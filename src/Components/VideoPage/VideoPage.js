import React from 'react';
import './VideoPage.css';

const videos = [
  {
    id: 'video1',
    title: 'Introduction to Robotics',
    url: 'https://www.youtube.com/watch?v=8IdBAysf-U4',
    embedUrl: 'https://www.youtube.com/embed/8IdBAysf-U4',
    description: 'This video offers a basic introduction to the world of robotics, explaining the fundamentals and applications of technology in various fields.',
  },
  {
    id: 'video2',
    title: 'ASTI Challenge 2022',
    url: 'https://www.youtube.com/watch?v=i8GSPW2GofY',
    embedUrl: 'https://www.youtube.com/embed/i8GSPW2GofY',
    description: 'Explore how robotics is revolutionizing the field of medicine, with applications ranging from assisted surgery to rehabilitation.',
  },
  {
    id: 'video3',
    title: 'Lorem Ipsum Video 3',
    url: '',
    embedUrl: '',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel nisi eu nulla suscipit efficitur. Integer malesuada dolor non mi malesuada, vel condimentum eros varius.',
  },
  {
    id: 'video4',
    title: 'Lorem Ipsum Video 4',
    url: '',
    embedUrl: '',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.',
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
            {video.embedUrl ? (
              <iframe
                width="100%"
                height="315"
                src={video.embedUrl}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <div className="video-placeholder">Video not available</div>
            )}
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
