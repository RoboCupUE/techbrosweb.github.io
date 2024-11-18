import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import HeroSection from './Components/HeroSection/HeroSection';
import CardsSection from './Components/CardsSection/CardsSection';
import PublicitySection from './Components/PublicitySection/PublicitySection';
import ArticlesPage from './Components/ArticlesPage/ArticlesPage';
import Videos from './Components/VideoPage/VideoPage';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router basename="/techbrosweb.github.io">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <CardsSection />
              <PublicitySection />
            </>
          } />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/videos" element={<Videos />} /> {/* Nueva ruta para Videos */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
