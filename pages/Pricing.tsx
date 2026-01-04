
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Check, Loader2, Gift, ChevronDown, ChevronUp } from 'lucide-react';
import { PRICING_PLANS, PROFILE, FAQS } from '../constants.ts';

interface PricingProps {
  isPromo?: boolean;
}

const Pricing: React.FC<PricingProps> = ({ isPromo }) => {
  const [loadingPlanId, setLoadingPlanId] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const location = useLocation();
  
  const activePromo = isPromo || location.pathname === '/jryc7';

  const calculateDiscount = (price: number) => {
    if (!activePromo) return price;
    return Math.floor(price * 0.85);
  };

  const handlePurchase = (planId: string, planName: string, originalPrice: number) => {
    setLoadingPlanId(planId);
    const finalPrice = calculateDiscount(originalPrice);
    
    setTimeout(() => {
      const promoText = activePromo ? ` using special code JRYC7 (15% OFF applied)` : '';
      const message = `Hello ${PROFILE.name},\nI want to purchase the ${planName} – ₹${finalPrice}${promoText}.\nPlease share the next steps.`;
      const encodedMessage = encodeURIComponent(message);
      window.open(`https://wa.me/${PROFILE.whatsappNumber}?text=${encodedMessage}`, '_blank');
      setLoadingPlanId(null);
    }, 1000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 animate-fade-in">
      <div className="text-center mb-24">
        <h2 className="text-4xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter">
          Transparent Pricing
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
          Professional Discord architecture scaled for every budget. No hidden fees. Just world-class results.
        </p>
        <div className="h-1 w-24 bg-white mx-auto mt-8"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-32">
        {PRICING_PLANS.map((plan) => {
          const isPopular = plan.id === 'starter';
          const isLoading = loadingPlanId === plan.id;
          const discountedPrice = calculateDiscount(plan.price);

          return (
            <div 
              key={plan.id} 
              className={`relative flex flex-col p-10 border transition-all duration-500 ${
                isPopular 
                  ? 'border-white bg-slate-900 shadow-[0_0_80px_-20px_rgba(255,255,255,0.1)] md:scale-105 z-10' 
                  : 'border-slate-900 bg-slate-950/50 hover:border-slate-700'
              } rounded-sm`}
            >
              {(isPopular || activePromo) && (
                <div className="absolute top-0 right-10 transform translate-y-[-50%] flex space-x-2">
                  {activePromo && (
                    <span className="bg-white text-slate-950 px-3 py-1.5 text-[9px] font-black uppercase tracking-widest shadow-2xl flex items-center">
                      <Gift className="w-3 h-3 mr-1" /> 15% OFF
                    </span>
                  )}
                  {isPopular && (
                    <span className="bg-slate-700 text-white px-3 py-1.5 text-[9px] font-black uppercase tracking-widest shadow-2xl">
                      Best Value
                    </span>
                  )}
                </div>
              )}
              
              <div className="mb-10">
                <h3 className={`text-sm font-black uppercase tracking-[0.3em] mb-6 ${isPopular ? 'text-white' : 'text-slate-500'}`}>
                  {plan.name}
                </h3>
                <div className="flex flex-col text-white">
                    {activePromo && (
                      <span className="text-slate-500 text-sm font-bold line-through mb-1">₹{plan.price}</span>
                    )}
                    <div className="flex items-baseline">
                      <span className="text-5xl font-black tracking-tighter">₹{discountedPrice}</span>
                      <span className="ml-2 text-slate-500 text-[10px] font-black uppercase tracking-widest">one-time</span>
                    </div>
                </div>
              </div>
              
              <ul className="space-y-4 mb-12 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start group">
                    <Check className={`w-4 h-4 mt-0.5 mr-4 shrink-0 transition-colors ${isPopular ? 'text-white' : 'text-slate-600 group-hover:text-white'}`} />
                    <span className="text-slate-400 text-xs font-bold leading-tight group-hover:text-slate-200 transition-colors uppercase tracking-wide">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                disabled={loadingPlanId !== null}
                onClick={() => handlePurchase(plan.id, plan.name, plan.price)}
                className={`group relative flex items-center justify-center w-full py-5 text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 overflow-hidden ${
                  isLoading ? 'animate-btn-press' : 'active:scale-95'
                } ${
                  isPopular
                    ? 'bg-white text-slate-950 hover:bg-slate-200 shadow-xl'
                    : 'bg-transparent border border-slate-800 text-white hover:bg-slate-900 hover:border-slate-600'
                } ${isLoading ? 'shimmer' : ''}`}
              >
                <span className={`transition-all duration-300 ${isLoading ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                  Get This Plan
                </span>
                
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center animate-in fade-in zoom-in duration-300 bg-inherit">
                    <Loader2 className="w-4 h-4 animate-spin mr-2" />
                    <span className="text-[9px]">Processing...</span>
                  </div>
                )}
              </button>
            </div>
          );
        })}
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto py-24 border-t border-slate-900">
        <h3 className="text-2xl md:text-4xl font-black text-white mb-12 uppercase tracking-tighter text-center">Frequently Asked Questions</h3>
        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div 
              key={idx} 
              className="border border-slate-900 bg-slate-950/30 overflow-hidden transition-all duration-300 hover:border-slate-800"
            >
              <button 
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full px-8 py-6 flex justify-between items-center text-left group"
              >
                <span className="text-white font-bold uppercase tracking-wider text-sm">{faq.question}</span>
                {openFaq === idx ? <ChevronUp className="w-5 h-5 text-white" /> : <ChevronDown className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors" />}
              </button>
              {openFaq === idx && (
                <div className="px-8 pb-8 animate-in fade-in slide-in-from-top-2 duration-300">
                  <p className="text-slate-400 text-sm leading-relaxed font-medium">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-32 p-12 border-2 border-dashed border-slate-900 text-center max-w-4xl mx-auto">
        <h3 className="text-xl font-black text-white mb-4 uppercase tracking-[0.2em]">Need Something Specific?</h3>
        <p className="text-slate-500 mb-10 text-sm font-medium leading-relaxed">
          If your project requirements fall outside our standard plans, we're happy to provide a custom architectural roadmap and quote.
        </p>
        <a 
          href={`https://wa.me/${PROFILE.whatsappNumber}`}
          className="inline-flex items-center px-12 py-5 bg-slate-900 text-white font-black uppercase tracking-widest text-xs hover:bg-white hover:text-slate-950 transition-all active:scale-95 border border-slate-800"
        >
          Request Custom Quote
        </a>
      </div>
    </div>
  );
};

export default Pricing;
