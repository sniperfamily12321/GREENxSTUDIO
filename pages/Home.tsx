
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Layout, MessageSquare, Gift, ArrowRight, Star, CheckCircle2, Copy, Check } from 'lucide-react';
import { PROFILE } from '../constants.ts';

interface HomeProps {
  isPromo?: boolean;
}

const Home: React.FC<HomeProps> = ({ isPromo }) => {
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText('JRYC7');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-12">
        {/* Abstract Background Grid */}
        <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#334155 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-950 via-transparent to-slate-950 z-0"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {isPromo && (
            <div className="inline-flex items-center gap-3 p-1 pr-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-full mb-8 shadow-2xl animate-fade-in">
              <div className="bg-white text-slate-950 px-3 py-1 rounded-full flex items-center gap-1.5">
                <Gift className="w-3.5 h-3.5" />
                <span className="text-[10px] font-black uppercase tracking-widest">20% Discount</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-black uppercase tracking-widest text-white/80">Code: JRYC7</span>
                <button 
                  onClick={copyCode}
                  className="p-1.5 hover:bg-white/10 rounded-full transition-colors group"
                  title="Copy Code"
                >
                  {copied ? <Check className="w-3 h-3 text-green-400" /> : <Copy className="w-3 h-3 text-white/50 group-hover:text-white" />}
                </button>
              </div>
            </div>
          )}
          
          <h1 className="text-5xl md:text-9xl font-black tracking-tighter text-white mb-8 uppercase leading-[0.9]">
            Architecting <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-400 to-slate-700">Communities.</span>
          </h1>
          
          <p className="max-w-3xl mx-auto text-lg md:text-2xl text-slate-400 mb-12 leading-relaxed font-medium">
            High-conversion Discord ecosystems built for the elite. Scaling creator, gaming, and crypto projects from zero to thousands.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/pricing"
              className="w-full sm:w-auto px-10 py-5 bg-white text-slate-950 font-black rounded-sm hover:bg-slate-200 transition-all duration-300 uppercase tracking-widest text-xs flex items-center justify-center gap-2 group shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
              Start Your Project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/portfolio"
              className="w-full sm:w-auto px-10 py-5 bg-transparent border border-slate-800 text-white font-black rounded-sm hover:bg-slate-900 transition-all duration-300 uppercase tracking-widest text-xs flex items-center justify-center gap-2"
            >
              View Case Studies
            </Link>
          </div>

          <div className="mt-20 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-30 grayscale transition-all hover:opacity-100 hover:grayscale-0 duration-1000">
            <span className="text-xs font-bold uppercase tracking-[0.4em]">Gaming Orgs</span>
            <span className="text-xs font-bold uppercase tracking-[0.4em]">NFT Founders</span>
            <span className="text-xs font-bold uppercase tracking-[0.4em]">SaaS Startups</span>
            <span className="text-xs font-bold uppercase tracking-[0.4em]">Crypto Whales</span>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-slate-950 border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <p className="text-4xl md:text-6xl font-black text-white mb-2 transition-transform group-hover:scale-110 duration-500">50+</p>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 group-hover:text-white transition-colors">Servers Scaled</p>
            </div>
            <div className="text-center group">
              <p className="text-4xl md:text-6xl font-black text-white mb-2 transition-transform group-hover:scale-110 duration-500">3+</p>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 group-hover:text-white transition-colors">Years Expert</p>
            </div>
            <div className="text-center group">
              <p className="text-4xl md:text-6xl font-black text-white mb-2 transition-transform group-hover:scale-110 duration-500">24/7</p>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 group-hover:text-white transition-colors">Active Support</p>
            </div>
            <div className="text-center group">
              <p className="text-4xl md:text-6xl font-black text-white mb-2 transition-transform group-hover:scale-110 duration-500">100%</p>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 group-hover:text-white transition-colors">Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 uppercase tracking-tighter leading-[1.1]">
                Not Just A Setup. <br /> A Brand Ecosystem.
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-10 font-medium">
                Standard setups ignore user psychology. We build funnels that turn curious lurkers into high-value active participants. Our architecture is designed to handle 100k+ members without breaking a sweat.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: <Shield className="w-5 h-5" />, title: "Ironclad Security", desc: "Military-grade protection against raids, phishing, and scam bots." },
                  { icon: <CheckCircle2 className="w-5 h-5" />, title: "Retention Loops", desc: "Automated onboarding that keeps your community growing silently." },
                  { icon: <Layout className="w-5 h-5" />, title: "Clean Architecture", desc: "Zero clutter. Pure functionality. Optimized for mobile users." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-5 group">
                    <div className="mt-1 text-slate-500 group-hover:text-white transition-colors">{item.icon}</div>
                    <div>
                      <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-1">{item.title}</h4>
                      <p className="text-slate-500 text-sm font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-slate-900/50 border border-slate-800 rounded-sm overflow-hidden p-8 flex flex-col justify-center relative shadow-2xl">
                 <div className="space-y-4 opacity-40">
                    <div className="h-4 w-full bg-slate-800 rounded-sm"></div>
                    <div className="h-4 w-3/4 bg-slate-800 rounded-sm"></div>
                    <div className="h-4 w-full bg-slate-800 rounded-sm"></div>
                    <div className="h-4 w-5/6 bg-slate-800 rounded-sm"></div>
                    <div className="h-4 w-full bg-slate-800 rounded-sm"></div>
                 </div>
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="p-12 bg-white text-slate-950 font-black rounded-sm shadow-[0_0_100px_rgba(255,255,255,0.15)] -rotate-3 text-2xl md:text-4xl uppercase tracking-tighter">
                      Scalability <br /> Guaranteed
                    </div>
                 </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 blur-3xl rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-slate-900/10 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
             <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">The Industry Gold Standard</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "S. Malik", role: "Gaming Org CEO", text: "GREENxSTUDIO transformed our chaotic server into a professional brand asset. Engagement is through the roof." },
              { name: "Dev.eth", role: "NFT Project Lead", text: "The security setup alone was worth every rupee. Best decision we made for our community foundation." },
              { name: "Arjun K.", role: "Influencer", text: "Fast, professional, and incredibly detailed. They thought of things I didn't even know I needed." }
            ].map((t, i) => (
              <div key={i} className="p-10 bg-slate-950 border border-slate-900 hover:border-white/20 transition-all duration-500 group">
                <div className="flex text-white mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-8 italic group-hover:text-slate-200 transition-colors">"{t.text}"</p>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-widest text-xs">{t.name}</h4>
                  <p className="text-slate-600 text-[10px] uppercase font-bold mt-1 tracking-widest">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
