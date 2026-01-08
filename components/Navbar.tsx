
import React from 'react';
import { portfolioData } from '../data';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const { firstName, lastName } = portfolioData.identity;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'py-4' : 'py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2 group cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black font-bold text-xs tracking-tighter">
            {firstName[0]}{lastName[0]}
          </div>
          <span className="text-white font-medium tracking-tight text-lg group-hover:opacity-70 transition-opacity">
            {firstName} <span className="text-neutral-500">{lastName}</span>
          </span>
        </div>

        <div className={`hidden md:flex items-center space-x-8 px-8 py-2.5 rounded-full transition-all duration-500 ${
          scrolled ? 'glass' : 'bg-transparent'
        }`}>
          {['About', 'Projects', 'Skills', 'Experience'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-neutral-400 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center">
          <a 
            href="#contact"
            className="px-6 py-2 rounded-full bg-white text-black text-sm font-semibold hover:bg-neutral-200 transition-all duration-300"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;