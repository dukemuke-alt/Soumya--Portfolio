import React from 'react';
import { portfolioData } from '../data.ts';

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-24 md:py-32 px-4 md:px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-[10px] uppercase tracking-[0.5em] text-neutral-500 mb-4">Recognition</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Milestones & <span className="font-serif italic font-normal text-neutral-500">Honors</span></h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {portfolioData.achievements.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group active:scale-95 transition-transform cursor-default">
              <span className="text-6xl md:text-7xl font-serif italic text-white/5 group-hover:text-white/20 transition-all duration-700 mb-6">{item.year}</span>
              <h4 className="text-lg md:text-xl font-bold mb-3 uppercase tracking-wider">{item.title}</h4>
              <p className="text-neutral-500 text-[9px] md:text-[10px] tracking-[0.3em] uppercase font-bold">{item.organization}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;