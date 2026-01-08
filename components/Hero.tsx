import React from 'react';
import { portfolioData } from '../data.ts';
import { ArrowDownRight } from 'lucide-react';

const Hero: React.FC = () => {
  const { firstName, lastName, role, tagline } = portfolioData.identity;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20">
      <div className="max-w-5xl w-full text-center">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full glass border-white/5 animate-float">
          <span className="text-xs uppercase tracking-[0.2em] font-medium text-white/60">
            Available for premium collaboration
          </span>
        </div>
        
        <h1 className="text-6xl md:text-9xl font-bold tracking-tighter leading-[0.9] mb-8">
          <span className="block">{firstName}</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-700">
            {lastName}
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-neutral-400 font-light leading-relaxed mb-12">
          {tagline}
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <a href="#projects" className="group flex items-center gap-2 text-white font-medium text-lg">
            View Work
            <div className="p-2 rounded-full glass group-hover:bg-white group-hover:text-black transition-all">
              <ArrowDownRight size={20} />
            </div>
          </a>
          <span className="hidden md:block w-12 h-[1px] bg-neutral-800"></span>
          <div className="text-neutral-500 font-serif italic text-lg">
            {role}
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <div className="w-[1px] h-12 bg-white"></div>
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
      </div>
    </section>
  );
};

export default Hero;