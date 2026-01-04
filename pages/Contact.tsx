
import React from 'react';
import { MessageCircle, ExternalLink } from 'lucide-react';
import { PROFILE } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 uppercase tracking-tighter">Get In Touch</h2>
        <p className="text-slate-400 max-w-xl mx-auto">Have a question or a custom project in mind? Let's connect and discuss your requirements.</p>
        <div className="h-1 w-20 bg-white mx-auto mt-6"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* WhatsApp Contact */}
        <a
          href={`https://wa.me/${PROFILE.whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group block p-10 bg-slate-900 border border-slate-800 hover:border-slate-600 transition-all duration-300 rounded-sm"
        >
          <div className="flex items-center justify-between mb-6">
            <MessageCircle className="w-10 h-10 text-white" />
            <ExternalLink className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">WhatsApp</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Message me directly for quick responses regarding pricing, plans, or general inquiries.
          </p>
        </a>

        {/* Discord Contact */}
        <a
          href={PROFILE.discordLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group block p-10 bg-slate-900 border border-slate-800 hover:border-slate-600 transition-all duration-300 rounded-sm"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="w-10 h-10 bg-white rounded-sm flex items-center justify-center">
               <span className="text-slate-950 font-black">D</span>
            </div>
            <ExternalLink className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">Discord Community</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Join my official server to see my work in action, chat with other clients, and open support tickets.
          </p>
        </a>
      </div>

      <div className="mt-16 text-center max-w-2xl mx-auto border-t border-slate-900 pt-16">
        <p className="text-slate-500 text-sm uppercase tracking-widest font-bold">
          Currently accepting new projects
        </p>
      </div>
    </div>
  );
};

export default Contact;
