import React from 'react';
import { portfolioData } from '../data';

const Footer: React.FC = () => {
  const { firstName, lastName, logo } = portfolioData.identity;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 px-4 md:px-6 border-t border-white/5 bg-[#030303] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-4">
              <div className="h-10 sm:h-12 w-auto overflow-hidden flex items-center justify-center">
                {logo ? (
                  <img src={logo} alt="Logo" className="h-full w-auto object-contain" />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                    <span className="text-white font-bold text-xs">
                      {firstName[0]}{lastName[0]}
                    </span>
                  </div>
                )}
              </div>
              <span className="text-white font-bold tracking-tight text-lg">
                {firstName} <span className="text-neutral-500 font-normal">{lastName}</span>
              </span>
            </div>
            <p className="text-neutral-600 text-xs tracking-tight font-medium text-center md:text-left">
              &copy; {currentYear} {firstName} {lastName}. All rights reserved.
            </p>
          </div>

          <div className="flex flex-col md:items-end gap-4">
            <div className="flex items-center gap-6">
              {portfolioData.socials.slice(0, 3).map(social => (
                <a 
                  key={social.name} 
                  href={social.url} 
                  className="text-[10px] uppercase tracking-[0.2em] font-bold text-neutral-500 hover:text-white transition-colors"
                >
                  {social.name}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-3 justify-center md:justify-end">
               <span className="text-[9px] uppercase tracking-[0.4em] text-neutral-700">Digital Identity 2.0</span>
               <div className="w-1.5 h-1.5 rounded-full bg-green-500/50"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;