import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ArticlesPage.css';

const ArticlesPage = () => {
  const articles = [
    {
      id: '1',
      title: 'User Experience Design for Social Robots: A Case Study in Integrating Embodiment',
      summary:
        'This article explores user experience design for social robots, focusing on the integration of embodiment, gestures, and dialogues in human-robot interaction.',
      route: '/articles/1',
      author: 'Ana Corrales-Paredes, Diego Ortega Sanz, María-José Terrón-López, Verónica Egido-García',
      year: '2023',
    },
    {
      id: '2',
      title: 'Integration of a Social Robot in a Pedagogical and Logopedic Intervention with Children: A Case Study',
      summary:
        'This study describes the use of a NAO social robot in pedagogical and logopedic therapy, focusing on the adaptation of specific behaviors for intervention with children.',
      route: '/articles/2',
      author: 'Verónica Egido-García, David Estévez, Ana Corrales-Paredes, María-José Terrón-López, Paloma-Julia Velasco-Quintana',
      year: '2020',
    },
    {
      id: '3',
      title: 'Waymarking in Social Robots: Environment Signaling Using Human–Robot Interaction',
      summary:
        'This article investigates how social robots can use human-robot interaction to signal the environment and facilitate navigation in indoor spaces using RFID technology.',
      route: '/articles/3',
      author: 'Ana Corrales-Paredes, María Malfaz, Verónica Egido-García, Miguel A. Salichs',
      year: '2021',
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const indexOfLastArticle = currentPage * itemsPerPage;
  const indexOfFirstArticle = indexOfLastArticle - itemsPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageCount = Math.ceil(articles.length / itemsPerPage);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when the page changes
  }, [currentPage]);

  return (
    <div className="articles-page">
      <h1>Publications</h1>
      <p>
        Welcome to our Publications section. Here, you will find a carefully curated selection of 
        articles highlighting significant research and innovative projects. 
        These works represent the commitment and expertise of both current and former team members, 
        focusing on advancements in robotics, automation, and human-robot interaction.
      </p>

      <div className="university-research-link">
        <a 
          href="https://portalcientifico.universidadeuropea.com/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="research-portal-button"
        >
          Visit the University Research Portal
        </a>
      </div>

      <div className="articles-list">
        {currentArticles.map((article) => (
          <div key={article.id} className="article-item">
            <h2>
              <Link to={article.route} className="article-title">{article.title}</Link>
            </h2>
            <p className="article-summary">{article.summary}</p>
            <p className="article-author-year">
              <span className="article-author">{article.author}</span> | 
              <span className="article-year"> {article.year}</span>
            </p>
          </div>
        ))}
      </div>

      <div className="pagination">
        {Array.from({ length: pageCount }, (_, index) => index + 1).map((page) => (
          <button 
            key={page} 
            onClick={() => paginate(page)} 
            className={`page-btn ${page === currentPage ? 'active' : ''}`}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ArticlesPage;
