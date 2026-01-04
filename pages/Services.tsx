
import React, { useState } from 'react';
import { 
  Settings, 
  ShieldCheck, 
  Code2, 
  Zap, 
  Ticket, 
  BarChart3, 
  Briefcase,
  Loader2
} from 'lucide-react';
// Cleaned up local import to maintain consistency and fix resolution issues
import { SERVICES, PROFILE } from '../constants';

const serviceIcons: Record<string, React.ReactNode> = {
  setup: <Settings className="w-6 h-6" />,
  roles: <ShieldCheck className="w-6 h-6" />,
  bots: <Code2 className="w-6 h-6" />,
  automod: <Zap className="w-6 h-6" />,
  tickets: <Ticket className="w-6 h-6" />,
  optimization: <BarChart3 className="w-6 h-6" />,
  management: <Briefcase className="w-6 h-6" />,
};

const Services: React.FC = () => {
  const [loadingServiceId, setLoadingServiceId] = useState<string | null>(null);

  const handleInquiry = (serviceId: string, serviceTitle: string) => {
    setLoadingServiceId(serviceId);
    
    // Brief delay for visual feedback consistency
    setTimeout(() => {
      const message = `Hello ${PROFILE.name},\nI am interested in your service: ${serviceTitle}.\nCould you provide more details?`;
      const encodedMessage = encodeURIComponent(message);
      window.open(`https://wa.me/${PROFILE.whatsappNumber}?text=${encodedMessage}`, '_blank');
      setLoadingServiceId(null);
    }, 800);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tighter">Our Services</h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Comprehensive Discord solutions designed to elevate your community experience through advanced automation and expert architecture.
        </p>
        <div className="h-1 w-20 bg-white mx-auto mt-8"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((service) => {
          const isLoading = loadingServiceId === service.id;
          
          return (
            <div 
              key={service.id} 
              className="group bg-slate-950 border border-slate-900 p-10 flex flex-col h-full hover:border-slate-700 transition-all duration-500 relative overflow-hidden"
            >
              {/* Subtle accent line on top hover */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="mb-8 text-slate-400 group-hover:text-white transition-colors duration-300">
                {serviceIcons[service.id] || <Settings className="w-6 h-6" />}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 leading-tight tracking-tight uppercase">
                {service.title}
              </h3>
              
              <p className="text-slate-400 mb-10 flex-grow text-sm leading-relaxed font-medium">
                {service.description}
              </p>
              
              <button
                disabled={loadingServiceId !== null}
                onClick={() => handleInquiry(service.id, service.title)}
                className={`relative flex items-center justify-center mt-auto w-full py-4 bg-transparent border border-slate-800 text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed ${
                  isLoading ? 'animate-btn-press bg-slate-900 border-slate-700 text-white' : 'hover:bg-white hover:text-slate-950 hover:border-white active:scale-95'
                } ${isLoading ? 'shimmer' : ''}`}
              >
                <span className={`transition-all duration-300 ${isLoading ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}>
                  Inquire Now
                </span>
                
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center animate-in fade-in zoom-in duration-300">
                    <Loader2 className="w-4 h-4 animate-spin mr-2" />
                    <span className="text-[9px]">Connecting...</span>
                  </div>
                )}
              </button>
            </div>
          );
        })}
      </div>

      <div className="mt-32 text-center">
        <p className="text-slate-500 text-sm uppercase tracking-widest font-bold mb-8">
          Looking for a complete package?
        </p>
        <a
          href="#/pricing"
          className="inline-block px-12 py-5 bg-white text-slate-950 font-black uppercase tracking-[0.2em] text-xs hover:bg-slate-200 transition-all active:scale-95 shadow-2xl"
        >
          Explore Pricing Plans
        </a>
      </div>
    </div>
  );
};

export default Services;