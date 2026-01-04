
import React from 'react';
import { Link } from 'react-router-dom';
// Cleaned up local import extension to satisfy build tools and compiler
import { PROFILE } from '../constants';
import { Target, Zap, ShieldCheck, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 animate-fade-in">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-32">
        <div>
          <h2 className="text-4xl md:text-7xl font-black text-white mb-10 uppercase tracking-tighter leading-none">The Mind Behind The <span className="text-slate-500">Architecture.</span></h2>
          <div className="h-2 w-24 bg-white mb-12"></div>
          
          <div className="space-y-8 text-slate-400 leading-relaxed text-lg font-medium">
            <p>
              I am <span className="text-white font-bold">{PROFILE.name}</span>, a professional Discord Developer focused on creating the next generation of digital communities. I specialize in bridging the gap between community management and technical automation.
            </p>
            <p>
              With over 3 years of experience in the Discord API ecosystem, I've seen platforms evolve and communities grow. My philosophy is simple: <span className="italic text-slate-200">"Build for scale, design for people."</span>
            </p>
            <p>
              Whether you're building the next big NFT drop or a cozy gaming niche, I provide the structural integrity and technical security required to thrive in today's digital landscape.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { icon: <Target className="w-6 h-6" />, title: "Visionary", desc: "Translating complex community needs into logical structures." },
            { icon: <Zap className="w-6 h-6" />, title: "Speed", desc: "Fast execution without compromising on code or design quality." },
            { icon: <ShieldCheck className="w-6 h-6" />, title: "Security", desc: "Advanced protection mechanisms integrated by default." },
            { icon: <Heart className="w-6 h-6" />, title: "Passion", desc: "Dedicated to the success and growth of your digital space." }
          ].map((item, idx) => (
            <div key={idx} className="p-8 bg-slate-900/40 border border-slate-900 rounded-sm">
              <div className="text-white mb-4">{item.icon}</div>
              <h4 className="text-white font-black uppercase tracking-widest text-xs mb-3">{item.title}</h4>
              <p className="text-slate-500 text-xs leading-relaxed font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 py-20 border-t border-slate-900">
        <div className="text-center">
          <h4 className="text-white font-black text-5xl md:text-7xl mb-2 tracking-tighter">50+</h4>
          <p className="text-slate-600 text-[10px] uppercase tracking-[0.3em] font-black">Servers Optimized</p>
        </div>
        <div className="text-center">
          <h4 className="text-white font-black text-5xl md:text-7xl mb-2 tracking-tighter">100%</h4>
          <p className="text-slate-600 text-[10px] uppercase tracking-[0.3em] font-black">Success Rate</p>
        </div>
        <div className="text-center">
          <h4 className="text-white font-black text-5xl md:text-7xl mb-2 tracking-tighter">24/7</h4>
          <p className="text-slate-600 text-[10px] uppercase tracking-[0.3em] font-black">Active Support</p>
        </div>
        <div className="text-center">
          <h4 className="text-white font-black text-5xl md:text-7xl mb-2 tracking-tighter">3k+</h4>
          <p className="text-slate-600 text-[10px] uppercase tracking-[0.3em] font-black">Bots Configured</p>
        </div>
      </div>
      
      <div className="mt-32 p-16 bg-slate-950 border border-slate-900 text-center">
         <p className="text-slate-500 text-xs font-black uppercase tracking-[0.5em] mb-8">Ready to start?</p>
         <Link to="/contact" className="text-2xl md:text-4xl font-black text-white hover:text-slate-400 transition-all uppercase tracking-tighter underline underline-offset-8">Let's build together →</Link>
      </div>
    </div>
  );
};

export default About;