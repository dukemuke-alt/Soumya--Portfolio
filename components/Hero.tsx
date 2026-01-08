import React from 'react';
import { portfolioData } from '../data.ts';
import { ArrowDownRight } from 'lucide-react';

const Hero: React.FC = () => {
  const { firstName, lastName, role, tagline } = portfolioData.identity;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      <div className="max-w-6xl w-full text-center relative z-10">
        <div className="inline-block mb-8 px-6 py-2 rounded-full glass border-white/5 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          <span className="text-[10px] uppercase tracking-[0.4em] font-semibold text-white/60">
            India's Premier Software Craftsman
          </span>
        </div>
        
        <h1 className="text-7xl md:text-9xl font-bold tracking-tighter leading-[0.85] mb-10 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <span className="block">{firstName}</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-700">
            {lastName}
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-2xl text-neutral-400 font-light leading-relaxed mb-16 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          {tagline}
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <a href="#projects" className="group flex items-center gap-4 text-white font-medium text-xl">
            View Journey
            <div className="p-3 rounded-full glass group-hover:bg-white group-hover:text-black transition-all duration-500 transform group-hover:rotate-45">
              <ArrowDownRight size={24} />
            </div>
          </a>
          <div className="hidden md:block w-16 h-[1px] bg-neutral-800"></div>
          <div className="text-neutral-500 font-serif italic text-2xl">
            {role}
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-20">
        <div className="w-[1px] h-16 bg-white"></div>
        <span className="text-[10px] uppercase tracking-[0.5em] font-bold">Explore</span>
      </div>

      {/* Hero Visual Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full -z-10 pointer-events-none scale-150 opacity-20"></div>
    </section>
  );
};

export default Hero;