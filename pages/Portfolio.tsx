
import React from 'react';
import { PROJECTS } from '../constants.ts';
import { ExternalLink, CheckCircle } from 'lucide-react';

const Portfolio: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 animate-fade-in">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter">Selected Work</h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
          A glimpse into some of the elite Discord ecosystems we've architected and managed across different industries.
        </p>
        <div className="h-1 w-24 bg-white mx-auto mt-8"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <div 
            key={project.id} 
            className="group relative flex flex-col bg-slate-900/40 border border-slate-900 p-8 hover:border-slate-600 transition-all duration-500 overflow-hidden"
          >
            <div className="flex justify-between items-start mb-6">
              <span className="px-3 py-1 bg-white/5 text-slate-400 text-[9px] font-black uppercase tracking-widest rounded-full border border-white/10">
                {project.category}
              </span>
              <div className="flex items-center gap-1.5 text-slate-500 text-[9px] font-black uppercase tracking-widest">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                {project.status}
              </div>
            </div>

            <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter group-hover:text-white transition-colors">
              {project.title}
            </h3>
            
            <p className="text-slate-400 text-sm leading-relaxed mb-8 font-medium">
              {project.description}
            </p>

            <div className="space-y-3 mb-10">
              {project.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-2 text-slate-500">
                  <CheckCircle className="w-3.5 h-3.5 text-slate-400" />
                  <span className="text-[11px] font-bold uppercase tracking-wider">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-auto pt-6 border-t border-slate-800">
              <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-white transition-all">
                View Project Details <ExternalLink className="w-3 h-3" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-32 p-16 bg-white text-slate-950 text-center rounded-sm">
        <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6">Ready to join the elite?</h3>
        <p className="text-slate-700 text-lg mb-10 max-w-xl mx-auto font-medium">Let's build your community foundation with the same level of excellence and precision.</p>
        <a 
          href="#/contact" 
          className="inline-block px-12 py-5 bg-slate-950 text-white font-black uppercase tracking-widest text-xs hover:bg-slate-800 transition-all shadow-2xl"
        >
          Inquire About Your Project
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
