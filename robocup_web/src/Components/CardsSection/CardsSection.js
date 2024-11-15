import React from 'react';
import './CardsSection.css';

function CardsSection() {
  return (
    <div className="cards-section">
      <h2 className="cards-title">Articles on Developed Projects</h2>
      <div className="cards-container">
        <div className="card">
          <h3 className="card-title">Article 1: Lorem ipsum 1</h3>
          <p className="card-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </p>
          <a href="/path/to/your/article1.pdf" className="card-link" target="_blank" rel="noopener noreferrer">
            Read Article
          </a>
        </div>

        <div className="card">
          <h3 className="card-title">Article 2: Lorem ipsum 2</h3>
          <p className="card-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </p>
          <a href="/path/to/your/article2.pdf" className="card-link" target="_blank" rel="noopener noreferrer">
            Read Article
          </a>
        </div>

        <div className="card">
          <h3 className="card-title">Article 3: Lorem ipsum 3 </h3>
          <p className="card-description">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </p>
          <a href="/path/to/your/article3.pdf" className="card-link" target="_blank" rel="noopener noreferrer">
            Read Article
          </a>
        </div>
      </div>
    </div>
  );
}

export default CardsSection;
