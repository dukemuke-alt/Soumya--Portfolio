import React from 'react';
import { portfolioData } from '../data.ts';
import { ArrowDownRight } from 'lucide-react';

const Hero: React.FC = () => {
  const { firstName, lastName, role, tagline } = portfolioData.identity;

  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center px-6 overflow-hidden pt-12 md:pt-20">
      <div className="max-w-4xl w-full text-center relative z-10 flex flex-col items-center">
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full glass border-white/10 animate-fade-up shrink-0" style={{ animationDelay: '0.1s' }}>
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-[8px] sm:text-[10px] uppercase tracking-[0.3em] font-bold text-white/60 whitespace-nowrap">
            Open for opportunities
          </span>
        </div>
        
        <h1 className="w-full text-[13vw] sm:text-7xl md:text-9xl font-bold tracking-tighter leading-[0.9] mb-8 animate-fade-up flex flex-col items-center" style={{ animationDelay: '0.2s' }}>
          <span className="block opacity-90">{firstName}</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-600 pb-1">
            {lastName}
          </span>
        </h1>

        <p className="max-w-sm sm:max-w-xl text-sm md:text-lg text-neutral-400 font-light leading-relaxed mb-10 animate-fade-up px-2" style={{ animationDelay: '0.3s' }}>
          {tagline}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-12 animate-fade-up w-full" style={{ animationDelay: '0.4s' }}>
          <a href="#projects" className="group flex items-center gap-3 text-white font-medium text-lg active:scale-95 transition-transform">
            View Projects
            <div className="p-3 rounded-full glass group-hover:bg-white group-hover:text-black transition-all duration-500 transform group-hover:rotate-45 border border-white/10 shadow-xl">
              <ArrowDownRight size={22} />
            </div>
          </a>
          <div className="text-neutral-500 font-serif italic text-xl md:text-2xl opacity-60">
            {role}
          </div>
        </div>
      </div>

      {/* Decorative Elements - Simplified for mobile performance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] max-w-[600px] max-h-[600px] border border-white/[0.03] rounded-full -z-10 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[400px] max-h-[400px] border border-white/[0.05] rounded-full -z-10 pointer-events-none"></div>
    </section>
  );
};

export default Hero;