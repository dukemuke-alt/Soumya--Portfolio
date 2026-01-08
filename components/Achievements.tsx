
import React from 'react';
import { portfolioData } from '../data';

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-32 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-xs uppercase tracking-[0.4em] text-neutral-500 mb-4">Recognition</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Milestones & Awards</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {portfolioData.achievements.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <span className="text-5xl font-serif italic text-white/5 group-hover:text-white/20 transition-colors mb-6">{item.year}</span>
              <h4 className="text-xl font-bold mb-2 uppercase tracking-wide">{item.title}</h4>
              <p className="text-neutral-500 text-sm tracking-widest uppercase">{item.organization}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;