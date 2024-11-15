import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ArticlesPage.css';

const ArticlesPage = () => {
  // Lista de artículos (de momento 7, puedes agregar más fácilmente)
  const articles = [
    {
      id: 1,
      title: "Introduction to Robotics",
      summary: "A beginner's guide to robotics, covering the basics of what robotics is and how it works.",
      route: "/article/1",
      author: "John Doe",
      year: 2023
    },
    {
      id: 2,
      title: "The Future of Artificial Intelligence",
      summary: "An exploration of the potential of AI in various industries and its future impact on society.",
      route: "/article/2",
      author: "Jane Smith",
      year: 2022
    },
    {
      id: 3,
      title: "ROS2: The Next Generation of Robotics Frameworks",
      summary: "An in-depth look at ROS2, its features, and why it is the future of robot software development.",
      route: "/article/3",
      author: "Carlos Ruiz",
      year: 2021
    },
    {
      id: 4,
      title: "Advanced Robotics Algorithms",
      summary: "A technical dive into advanced algorithms used in robotics for navigation, perception, and decision-making.",
      route: "/article/4",
      author: "Alice Johnson",
      year: 2020
    },
    {
      id: 5,
      title: "Machine Learning for Robotics",
      summary: "How machine learning is revolutionizing the world of robotics, from autonomous vehicles to industrial robots.",
      route: "/article/5",
      author: "Bob Lee",
      year: 2023
    },
    {
      id: 6,
      title: "Ethical Considerations in Robotics",
      summary: "A discussion on the ethical challenges of robotics, including issues like job displacement and robot rights.",
      route: "/article/6",
      author: "Eve Taylor",
      year: 2021
    },
    {
      id: 7,
      title: "Building Robots with Open Source Tools",
      summary: "A practical guide to building your first robot using open source tools and platforms.",
      route: "/article/7",
      author: "Michael Clark",
      year: 2022
    }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Calcular el índice de inicio y fin de los artículos a mostrar en la página actual
  const indexOfLastArticle = currentPage * itemsPerPage;
  const indexOfFirstArticle = indexOfLastArticle - itemsPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

  // Función para cambiar de página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Número total de páginas
  const pageCount = Math.ceil(articles.length / itemsPerPage);

  // Volver al principio de la página cuando cambie la página
  useEffect(() => {
    window.scrollTo(0, 0); // Vuelve al inicio
  }, [currentPage]); // Dependencia en currentPage para activar cada vez que se cambia de página

  return (
    <div className="articles-page">
      <h1>Articles</h1>
      <p>In this section, you can explore a variety of articles about the projects developed by both past and present members of our club.</p>

      <div className="articles-list">
        {currentArticles.map(article => (
          <div key={article.id} className="article-item">
            <h2>
              <Link to={article.route} className="article-title">{article.title}</Link>
            </h2>
            <p className="article-summary">{article.summary}</p>
            {/* Información del autor y año */}
            <p className="article-author-year">
              <span className="article-author">{article.author}</span> | 
              <span className="article-year"> {article.year}</span>
            </p>
          </div>
        ))}
      </div>

      {/* Paginación */}
      <div className="pagination">
        {Array.from({ length: pageCount }, (_, index) => index + 1).map(page => (
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
