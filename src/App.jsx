import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ActivitiesPage from './pages/ActivitiesPage.jsx';
import GalleryPage from './pages/GalleryPage.jsx';
import ImpactPage from './pages/ImpactPage.jsx';
import ImpactDetailWalkForPlastic from './pages/ImpactDetailWalkForPlastic.jsx';
import ImpactDetailHopeForLittleHeroes from './pages/ImpactDetailHopeForLittleHeroes.jsx';
import ImpactDetailMedicalCamp from './pages/ImpactDetailMedicalCamp.jsx';
import TeamPage from './pages/TeamPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import ParentClubPage from './pages/ParentClubPage.jsx';

// Scroll to top of the viewport on route changes
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#FAFBFD] font-sans text-slate-800 antialiased flex flex-col justify-between selection:bg-leoGold/25 selection:text-leoGold-dark">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/activities" element={<ActivitiesPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/impact-stories" element={<ImpactPage />} />
            <Route path="/impact-stories/walk-for-plastic-clean-environment-drive-2025" element={<ImpactDetailWalkForPlastic />} />
            <Route path="/impact-stories/hope-for-little-heroes" element={<ImpactDetailHopeForLittleHeroes />} />
            <Route path="/impact-stories/free-mega-medical-camp" element={<ImpactDetailMedicalCamp />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/parent-club" element={<ParentClubPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
