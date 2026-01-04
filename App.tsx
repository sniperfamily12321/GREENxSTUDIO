
import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import Home from './pages/Home.tsx';
import Services from './pages/Services.tsx';
import Pricing from './pages/Pricing.tsx';
import About from './pages/About.tsx';
import Contact from './pages/Contact.tsx';
import Portfolio from './pages/Portfolio.tsx';

const App: React.FC = () => {
  const location = useLocation();
  const isDiscounted = location.pathname === '/jryc7';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-50 selection:bg-white selection:text-slate-950">
      {isDiscounted && (
        <div className="fixed top-0 w-full z-[60] bg-white text-slate-950 py-2.5 text-center text-[10px] font-black uppercase tracking-[0.4em] shadow-2xl">
          🎁 Special 15% Discount Applied (Code: JRYC7)
        </div>
      )}
      <Navbar isDiscounted={isDiscounted} />
      <main className={`flex-grow transition-all duration-300 ${isDiscounted ? 'pt-28' : 'pt-20'}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jryc7" element={<Home isPromo={true} />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing isPromo={isDiscounted} />} />
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
