
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Layout, MessageSquare, Gift } from 'lucide-react';
import { PROFILE } from '../constants.ts';

interface HomeProps {
  isPromo?: boolean;
}

const Home: React.FC<HomeProps> = ({ isPromo }) => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {isPromo && (
            <div className="inline-flex items-center px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-8 backdrop-blur-sm animate-bounce">
              <Gift className="w-4 h-4 text-white mr-2" />
              <span className="text-white text-[10px] font-bold uppercase tracking-widest">Special 15% Discount Activated</span>
            </div>
          )}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Professional Discord Server and <br className="hidden md:block" /> Bot Development Services
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
            Providing affordable and scalable solutions for communities, creators, gaming servers, crypto projects, and startups.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/pricing"
              className="w-full sm:w-auto px-8 py-4 bg-white text-slate-950 font-bold rounded-sm hover:bg-slate-200 transition-all duration-200 uppercase tracking-wider text-sm"
            >
              View Pricing Plans
            </Link>
            <a
              href={PROFILE.discordLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-slate-700 text-white font-bold rounded-sm hover:bg-slate-900 transition-all duration-200 uppercase tracking-wider text-sm"
            >
              Join Discord Server
            </a>
          </div>
        </div>
        
        {/* Subtle Decorative Background Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-500/5 blur-[120px] rounded-full -z-0"></div>
      </section>

      {/* Quick Trust Pillars */}
      <section className="py-20 border-y border-slate-900 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
              <Shield className="w-10 h-10 text-slate-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-wide">Secure</h3>
              <p className="text-slate-400 text-sm">Advanced permission handling and security audits for peace of mind.</p>
            </div>
            <div className="flex flex-col items-center">
              <Layout className="w-10 h-10 text-slate-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-wide">Scalable</h3>
              <p className="text-slate-400 text-sm">Optimized architectures built to handle thousands of users effortlessly.</p>
            </div>
            <div className="flex flex-col items-center">
              <MessageSquare className="w-10 h-10 text-slate-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-wide">Reliable</h3>
              <p className="text-slate-400 text-sm">Consistent performance and long-term support for your community.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
