import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import HeroSection from './Components/HeroSection/HeroSection';
import CardsSection from './Components/CardsSection/CardsSection';
import PublicitySection from './Components/PublicitySection/PublicitySection';
import ArticlesPage from './Components/ArticlesPage/ArticlesPage';
import Videos from './Components/VideoPage/VideoPage';
import AboutUsPage from './Components/AboutUsPage/AboutUsPage';
import FeaturedProjectsPage from './Components/FeaturedProjectsPage/FeaturedProjectsPage';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router basename="/techbrosweb.github.io">
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/featured-projects" element={<FeaturedProjectsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

function Home() {
  const location = useLocation();

  return (
    <>
      <HeroSection />
      <CardsSection />
      {location.pathname === '/' && <PublicitySection />}
    </>
  );
}

export default App;
