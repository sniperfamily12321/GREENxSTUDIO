
import React, { useState } from 'react';
import { Check, Loader2 } from 'lucide-react';
import { PRICING_PLANS, PROFILE } from '../constants';

const Pricing: React.FC = () => {
  const [loadingPlanId, setLoadingPlanId] = useState<string | null>(null);

  const handlePurchase = (planId: string, planName: string, price: number) => {
    setLoadingPlanId(planId);
    
    // 1 second delay to showcase the visual feedback and provide a premium feel
    setTimeout(() => {
      const message = `Hello ${PROFILE.name},\nI want to purchase the ${planName} – ₹${price}.\nPlease share the next steps.`;
      const encodedMessage = encodeURIComponent(message);
      window.open(`https://wa.me/${PROFILE.whatsappNumber}?text=${encodedMessage}`, '_blank');
      setLoadingPlanId(null);
    }, 1000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 uppercase tracking-tighter">Pricing Plans</h2>
        <p className="text-slate-400 max-w-xl mx-auto">Select the plan that best fits your community needs. Professional quality guaranteed across all tiers.</p>
        <div className="h-1 w-20 bg-white mx-auto mt-6"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {PRICING_PLANS.map((plan) => {
          const isPopular = plan.id === 'starter';
          const isLoading = loadingPlanId === plan.id;

          return (
            <div 
              key={plan.id} 
              className={`relative flex flex-col p-8 border transition-all duration-500 ${
                isPopular 
                  ? 'border-white bg-slate-900 shadow-[0_0_50px_-20px_rgba(255,255,255,0.15)] md:scale-105 z-10' 
                  : 'border-slate-800 bg-slate-900/30 hover:border-slate-600'
              } rounded-sm`}
            >
              {isPopular && (
                <span className="absolute top-0 right-8 transform translate-y-[-50%] bg-white text-slate-950 px-4 py-1 text-[10px] font-black uppercase tracking-widest shadow-2xl">
                  Most Popular
                </span>
              )}
              
              <div className="mb-8">
                <h3 className={`text-sm font-bold uppercase tracking-widest mb-4 ${isPopular ? 'text-white' : 'text-slate-400'}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline text-white">
                  <span className="text-4xl font-bold tracking-tight">₹{plan.price}</span>
                  <span className="ml-1 text-slate-500 text-sm">one-time</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className={`w-5 h-5 mt-0.5 mr-3 shrink-0 ${isPopular ? 'text-white' : 'text-slate-500'}`} />
                    <span className="text-slate-300 text-sm leading-tight">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                disabled={loadingPlanId !== null}
                onClick={() => handlePurchase(plan.id, plan.name, plan.price)}
                className={`group relative flex items-center justify-center w-full py-4 text-sm font-black uppercase tracking-widest transition-all duration-300 overflow-hidden disabled:cursor-not-allowed ${
                  isLoading ? 'animate-btn-press' : 'active:scale-95'
                } ${
                  isPopular
                    ? 'bg-white text-slate-950 hover:bg-slate-200'
                    : 'bg-transparent border border-slate-700 text-white hover:bg-slate-800 hover:border-slate-500'
                } ${isLoading ? 'shimmer' : ''}`}
              >
                <span className={`flex items-center justify-center transition-all duration-300 ${isLoading ? 'opacity-0 scale-90 translate-y-4' : 'opacity-100 scale-100 translate-y-0'}`}>
                  Get This Plan
                </span>
                
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center animate-in fade-in zoom-in duration-300 bg-inherit">
                    <Loader2 className="w-5 h-5 animate-spin mr-2" />
                    <span className="text-[10px] tracking-widest font-bold">Connecting...</span>
                  </div>
                )}
              </button>
            </div>
          );
        })}
      </div>

      <div className="mt-24 p-10 border border-slate-800 bg-slate-950/50 text-center max-w-3xl mx-auto rounded-sm group hover:border-slate-700 transition-colors duration-500">
        <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wide">Custom Requirements?</h3>
        <p className="text-slate-400 mb-8 text-sm leading-relaxed">
          If you need a specific solution not covered by these plans, reach out for a custom quote tailored to your vision.
        </p>
        <a 
          href={`https://wa.me/${PROFILE.whatsappNumber}?text=${encodeURIComponent(`Hello ${PROFILE.name}, I have a custom requirement for a Discord server/bot.`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-10 py-4 bg-slate-800 text-white font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-slate-950 transition-all active:scale-95"
        >
          Contact for Custom Quote
        </a>
      </div>
    </div>
  );
};

export default Pricing;
