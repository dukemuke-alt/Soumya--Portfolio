import React from 'react';
import { portfolioData } from '../data.ts';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const { firstName, lastName } = portfolioData.identity;

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 pointer-events-none ${
      scrolled ? 'pt-2' : 'pt-4 md:pt-8'
    }`}>
      <nav className={`flex items-center gap-1 sm:gap-4 md:gap-8 px-2 sm:px-4 md:px-6 py-1.5 md:py-3 rounded-full border border-white/10 glass shadow-2xl transition-all duration-500 pointer-events-auto max-w-[95vw] ${
        scrolled ? 'scale-95' : 'scale-100'
      }`}>
        <div className="flex items-center gap-2 px-1 border-r border-white/10 pr-2 sm:pr-4 shrink-0">
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white flex items-center justify-center text-black font-bold text-[9px] sm:text-[10px] tracking-tighter shrink-0">
            {firstName[0]}{lastName[0]}
          </div>
          <span className="text-white font-semibold tracking-tight text-[11px] sm:text-sm hidden xs:inline whitespace-nowrap">
            {firstName} <span className="text-neutral-500 font-normal">{lastName[0]}.</span>
          </span>
        </div>

        <div className="flex items-center gap-0.5 sm:gap-2 overflow-x-auto no-scrollbar">
          {['About', 'Projects', 'Skills'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className="px-2 sm:px-3 py-1.5 rounded-full text-[9px] sm:text-xs font-medium text-neutral-400 hover:text-white active:scale-90 transition-all uppercase tracking-widest whitespace-nowrap"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="pl-1 sm:pl-2 border-l border-white/10 shrink-0">
          <a 
            href="#contact"
            className="px-3 sm:px-5 py-1.5 rounded-full bg-white text-black text-[9px] sm:text-xs font-bold uppercase tracking-widest hover:bg-neutral-200 active:scale-95 transition-all shadow-lg block whitespace-nowrap"
          >
            Connect
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;