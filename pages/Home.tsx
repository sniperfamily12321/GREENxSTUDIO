
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Layout, MessageSquare, Gift, ArrowRight, Star, CheckCircle2 } from 'lucide-react';
import { PROFILE } from '../constants.ts';

interface HomeProps {
  isPromo?: boolean;
}

const Home: React.FC<HomeProps> = ({ isPromo }) => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-12">
        {/* Abstract Background Grid */}
        <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#334155 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-950 via-transparent to-slate-950 z-0"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {isPromo && (
            <div className="inline-flex items-center px-4 py-2 bg-white text-slate-950 rounded-full mb-8 shadow-[0_0_30px_rgba(255,255,255,0.3)] animate-bounce">
              <Gift className="w-4 h-4 mr-2" />
              <span className="text-[10px] font-black uppercase tracking-widest">Special 15% OFF Active</span>
            </div>
          )}
          
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white mb-8 uppercase leading-tight">
            High-Performance <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-400 to-slate-600">Discord Architect.</span>
          </h1>
          
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-400 mb-12 leading-relaxed font-medium">
            Building secure, scalable, and conversion-optimized Discord communities for creators, gaming, and crypto projects. Professional solutions starting from ₹299.
          </p>
          
          <div className="flex flex-col sm:row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/pricing"
              className="w-full sm:w-auto px-10 py-5 bg-white text-slate-950 font-black rounded-sm hover:bg-slate-200 transition-all duration-300 uppercase tracking-widest text-xs flex items-center justify-center gap-2 group shadow-xl"
            >
              Start Your Project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/portfolio"
              className="w-full sm:w-auto px-10 py-5 bg-transparent border border-slate-800 text-white font-black rounded-sm hover:bg-slate-900 transition-all duration-300 uppercase tracking-widest text-xs flex items-center justify-center gap-2"
            >
              View Recent Work
            </Link>
          </div>

          <div className="mt-20 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale">
            <span className="text-xs font-bold uppercase tracking-[0.3em]">Gaming Servers</span>
            <span className="text-xs font-bold uppercase tracking-[0.3em]">NFT Hubs</span>
            <span className="text-xs font-bold uppercase tracking-[0.3em]">SaaS Communities</span>
            <span className="text-xs font-bold uppercase tracking-[0.3em]">Crypto Teams</span>
          </div>
        </div>
      </section>

      {/* Stats / Trust */}
      <section className="py-24 bg-slate-900/30 border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-black text-white mb-2">50+</p>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Servers Scaled</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-black text-white mb-2">3+</p>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Years Expert</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-black text-white mb-2">24/7</p>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Uptime Support</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-black text-white mb-2">100%</p>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 uppercase tracking-tighter leading-none">
                Not Just A Setup. <br /> A Digital Foundation.
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-10 font-medium">
                We don't just create channels; we build ecosystems. Our servers are designed with advanced psychology to maximize retention and engagement.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: <Shield className="w-5 h-5" />, title: "Ironclad Security", desc: "Advanced protection against raids and malicious bots." },
                  { icon: <CheckCircle2 className="w-5 h-5" />, title: "Conversion Optimized", desc: "Welcome funnels that turn visitors into active members." },
                  { icon: <Layout className="w-5 h-5" />, title: "Clean Architecture", desc: "Intuitive layouts that make navigation a breeze." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="mt-1 text-white">{item.icon}</div>
                    <div>
                      <h4 className="text-white font-bold uppercase tracking-wide text-sm">{item.title}</h4>
                      <p className="text-slate-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-slate-900 border border-slate-800 rounded-sm overflow-hidden p-8 flex flex-col justify-center">
                 <div className="space-y-4">
                    <div className="h-12 w-full bg-slate-800 animate-pulse rounded-sm"></div>
                    <div className="h-12 w-3/4 bg-slate-800 animate-pulse rounded-sm"></div>
                    <div className="h-12 w-full bg-slate-800 animate-pulse rounded-sm"></div>
                    <div className="h-12 w-5/6 bg-slate-800 animate-pulse rounded-sm"></div>
                 </div>
                 <div className="absolute top-10 right-10 p-6 bg-white text-slate-950 font-black rounded-sm shadow-2xl -rotate-6">
                    MEMBER ENGAGEMENT <br /> +400%
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-slate-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
             <h3 className="text-xs font-black uppercase tracking-[0.5em] text-slate-500 mb-4">What Our Clients Say</h3>
             <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">Trusted By Community Leaders</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "S. Malik", role: "Gaming Org CEO", text: "GREENxSTUDIO transformed our chaotic server into a professional brand asset. Engagement is through the roof." },
              { name: "Dev.eth", role: "NFT Project Lead", text: "The security setup alone was worth every rupee. Best decision we made for our community foundation." },
              { name: "Arjun K.", role: "Influencer", text: "Fast, professional, and incredibly detailed. They thought of things I didn't even know I needed." }
            ].map((t, i) => (
              <div key={i} className="p-10 bg-slate-950 border border-slate-900 hover:border-slate-700 transition-all duration-300">
                <div className="flex text-white mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-8 italic">"{t.text}"</p>
                <h4 className="text-white font-bold uppercase tracking-widest text-xs">{t.name}</h4>
                <p className="text-slate-600 text-[10px] uppercase font-bold mt-1">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
