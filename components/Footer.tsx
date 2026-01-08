
import React from 'react';
import { portfolioData } from '../data';

const Footer: React.FC = () => {
  const { firstName, lastName, location } = portfolioData.identity;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-[#030303]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-black font-bold text-[10px]">
            {firstName[0]}{lastName[0]}
          </div>
          <span className="text-neutral-500 text-sm tracking-tight font-medium">
            &copy; {currentYear} Designed & Developed by {firstName} {lastName}
          </span>
        </div>

        <div className="flex items-center space-x-8">
          <span className="text-[10px] uppercase tracking-widest text-neutral-600">Built with React & Passion</span>
          <div className="flex items-center space-x-4">
             <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
             <span className="text-[10px] uppercase tracking-widest text-neutral-400">{location}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
