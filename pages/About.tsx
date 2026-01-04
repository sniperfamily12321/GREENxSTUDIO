
import React from 'react';
import { PROFILE } from '../constants.ts';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tighter">About {PROFILE.name}</h2>
        <div className="h-1 w-20 bg-white mb-10"></div>
        
        <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
          <p>
            I am a dedicated Discord Server and Bot Developer with extensive experience in building high-performance digital spaces. My focus is on creating clean, secure, and scalable servers that foster community engagement and simplify management.
          </p>
          <p>
            Over the years, I have collaborated with creators, gaming communities, crypto projects, and startups to translate their unique visions into functional Discord environments. I believe that a well-structured server is the backbone of any successful online community.
          </p>
          <p>
            My work is defined by three core values: affordability, structure, and reliability. Whether you are launching a small hobby group or a large-scale commercial project, I ensure your platform is built to last with professional standards.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-t border-slate-900">
        <div>
          <h4 className="text-white font-bold text-2xl mb-1 tracking-tight">50+</h4>
          <p className="text-slate-500 text-xs uppercase tracking-widest">Servers Built</p>
        </div>
        <div>
          <h4 className="text-white font-bold text-2xl mb-1 tracking-tight">100%</h4>
          <p className="text-slate-500 text-xs uppercase tracking-widest">Security Focused</p>
        </div>
        <div>
          <h4 className="text-white font-bold text-2xl mb-1 tracking-tight">24/7</h4>
          <p className="text-slate-500 text-xs uppercase tracking-widest">Tech Support</p>
        </div>
        <div>
          <h4 className="text-white font-bold text-2xl mb-1 tracking-tight">3+</h4>
          <p className="text-slate-500 text-xs uppercase tracking-widest">Years Experience</p>
        </div>
      </div>
    </div>
  );
};

export default About;
