
import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
// Standardized imports by removing .tsx extensions to fix resolution issues and satisfy compiler checks
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';

const App: React.FC = () => {
  const location = useLocation();
  const [hasPromo, setHasPromo] = useState(false);

  useEffect(() => {
    // Check if user is on the specific promo path or if promo was previously activated in this session
    if (location.pathname === '/jryc7' || sessionStorage.getItem('promo_active') === 'true') {
      setHasPromo(true);
      sessionStorage.setItem('promo_active', 'true');
    }
  }, [location.pathname]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-50 selection:bg-white selection:text-slate-950">
      {hasPromo && (
        <div className="fixed top-0 w-full z-[60] bg-white text-slate-950 py-2.5 text-center text-[10px] font-black uppercase tracking-[0.4em] shadow-2xl">
          🎁 Special 20% Discount Applied (Code: JRYC7)
        </div>
      )}
      <Navbar isDiscounted={hasPromo} />
      <main className={`flex-grow transition-all duration-300 ${hasPromo ? 'pt-28' : 'pt-20'}`}>
        <Routes>
          <Route path="/" element={<Home isPromo={hasPromo} />} />
          <Route path="/jryc7" element={<Home isPromo={true} />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing isPromo={hasPromo} />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;