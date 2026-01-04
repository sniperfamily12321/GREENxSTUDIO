
import React from 'react';
import { PROFILE } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-slate-500 text-sm font-medium">
            &copy; {new Date().getFullYear()} {PROFILE.name.toUpperCase()}. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <span className="text-slate-400 uppercase tracking-widest text-[10px] font-bold">
              Professional Discord Solutions
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
