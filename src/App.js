import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import HeroSection from './Components/HeroSection/HeroSection';
import CardsSection from './Components/CardsSection/CardsSection';
import PublicitySection from './Components/PublicitySection/PublicitySection';
import ArticlesPage from './Components/ArticlesPage/ArticlesPage';
import Art_Page from './Components/Art_Page/Art_Page';
import Videos from './Components/VideoPage/VideoPage';
import AboutUsPage from './Components/AboutUsPage/AboutUsPage';
import FeaturedProjectsPage from './Components/FeaturedProjectsPage/FeaturedProjectsPage';
import Arduino from './Components/Proyectos/Arduino/Arduino';
import ASTI from './Components/Proyectos/ASTI/ASTI';
import Robocup from './Components/Proyectos/Robocup/Robocup';
import Sumobot from './Components/Proyectos/Sumobot/Sumobot';
import EduRobotics from './Components/CardsSection/EduRobotics/EduRobotics';
import MobRobotics from './Components/CardsSection/MobRobotics/MobRobotics';
import ThreeD from './Components/CardsSection/3D/3D';
import Footer from './Components/Footer/Footer';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/articles/:id" element={<Art_Page />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/featured-projects" element={<FeaturedProjectsPage />} />
          <Route path="/project-details/arduino-workshops" element={<Arduino />} />
          <Route path="/project-details/asti-challenge" element={<ASTI />} />
          <Route path="/project-details/robocup-liga-home" element={<Robocup />} />
          <Route path="/project-details/minisumo-robot" element={<Sumobot />} />
          <Route path="/educational-robotics" element={<EduRobotics />} />
          <Route path="/mobile-robotics" element={<MobRobotics />} />
          <Route path="/3d-design" element={<ThreeD />} />
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
