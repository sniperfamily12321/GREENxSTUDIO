
import React from 'react';
// Added missing Link import from react-router-dom
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants.ts';
import { ExternalLink, CheckCircle, Activity, ShieldCheck, Zap } from 'lucide-react';

const statusIcons: Record<string, React.ReactNode> = {
  Completed: <CheckCircle className="w-3 h-3 text-green-400" />,
  Active: <Activity className="w-3 h-3 text-blue-400" />,
};

const Portfolio: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 animate-fade-in">
      <div className="text-center mb-24">
        <h2 className="text-5xl md:text-8xl font-black text-white mb-6 uppercase tracking-tighter leading-none">Our Work.</h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-medium">
          A selection of high-performance ecosystems we've architected for industry leaders.
        </p>
        <div className="h-1.5 w-32 bg-white mx-auto mt-12"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {PROJECTS.map((project) => (
          <div 
            key={project.id} 
            className="group relative flex flex-col bg-slate-950 border border-slate-900 p-10 hover:border-white/30 transition-all duration-700 overflow-hidden"
          >
            {/* Hover Background Accent */}
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity duration-700">
               <ShieldCheck className="w-24 h-24 text-white" />
            </div>

            <div className="flex justify-between items-start mb-8 relative z-10">
              <span className="px-3 py-1 bg-white/5 text-slate-300 text-[9px] font-black uppercase tracking-[0.2em] rounded-sm border border-white/10">
                {project.category}
              </span>
              <div className="flex items-center gap-2 text-slate-500 text-[9px] font-black uppercase tracking-[0.2em]">
                {statusIcons[project.status]}
                {project.status}
              </div>
            </div>

            <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter transition-transform group-hover:translate-x-2 duration-500">
              {project.title}
            </h3>
            
            <p className="text-slate-400 text-sm leading-relaxed mb-10 font-medium h-20">
              {project.description}
            </p>

            <div className="space-y-4 mb-12 relative z-10">
              {project.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-500 group/item">
                  <Zap className="w-3.5 h-3.5 text-slate-600 group-hover/item:text-white transition-colors" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] group-hover/item:text-slate-300 transition-colors">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-auto pt-8 border-t border-slate-900 group-hover:border-white/10 transition-colors">
              <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 group-hover:text-white transition-all">
                Case Details <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Block */}
      <div className="mt-32 relative overflow-hidden bg-white text-slate-950 p-12 md:p-24 rounded-sm shadow-2xl">
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
          <ShieldCheck className="w-96 h-96 -mr-20 -mt-20" />
        </div>
        <div className="relative z-10 text-center">
          <h3 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-none">Next Level <br /> Starts Here.</h3>
          <p className="text-slate-700 text-lg md:text-xl mb-12 max-w-xl mx-auto font-medium">Ready to architect your legacy? Let's discuss your community roadmap today.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contact" 
              className="inline-block px-12 py-5 bg-slate-950 text-white font-black uppercase tracking-widest text-xs hover:bg-slate-800 transition-all active:scale-95 shadow-2xl"
            >
              Consult Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
