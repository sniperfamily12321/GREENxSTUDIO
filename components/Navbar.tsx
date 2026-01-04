
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
// Cleaned up import path by removing extension
import { PROFILE } from '../constants';

interface NavbarProps {
  isDiscounted?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isDiscounted }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: isDiscounted ? '/jryc7' : '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About', path: '/about' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/jryc7') return true;
    return location.pathname === path;
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 border-b ${
        scrolled ? 'bg-slate-950/90 backdrop-blur-xl border-slate-800 py-0' : 'bg-transparent border-transparent py-2'
      } ${isDiscounted ? 'top-10' : 'top-0'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to={isDiscounted ? "/jryc7" : "/"} className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-white flex items-center justify-center rounded-sm transition-transform group-hover:rotate-12">
                <span className="text-slate-950 font-black text-lg">G</span>
              </div>
              <span className="text-xl font-black tracking-tighter text-white uppercase">
                {PROFILE.name}
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative px-4 py-2 text-[11px] font-bold uppercase tracking-widest transition-all duration-300 ${
                  isActive(link.path)
                    ? 'text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-white rounded-full"></span>
                )}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="ml-6 px-6 py-2.5 bg-white text-slate-950 text-[10px] font-black uppercase tracking-widest hover:bg-slate-200 transition-all flex items-center gap-2"
            >
              Hire Me <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-slate-400 hover:text-white transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-2xl border-b border-slate-800 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="px-2 pt-4 pb-6 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`${
                  isActive(link.path)
                    ? 'text-white bg-slate-900'
                    : 'text-slate-400'
                } block px-4 py-4 text-xs font-bold uppercase tracking-widest border-b border-slate-900/50`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center mt-4 px-4 py-5 bg-white text-slate-950 text-xs font-black uppercase tracking-widest"
            >
              Hire Me Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;