import React from 'react';
import { portfolioData } from '../data.ts';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 md:py-32 px-4 md:px-6 bg-[#050505]/50">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 md:mb-24">
          <h2 className="text-[10px] uppercase tracking-[0.5em] text-neutral-500 mb-4">Journey</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Professional <span className="font-serif italic font-normal text-neutral-500">Path</span></h3>
        </div>

        <div className="space-y-12">
          {portfolioData.experience.map((exp, index) => (
            <div key={exp.id} className="relative">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start group">
                <div className="md:col-span-3">
                  <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">{exp.period}</span>
                </div>
                
                <div className="hidden md:flex md:col-span-1 justify-center">
                  <div className="relative h-full flex flex-col items-center">
                    <div className="w-2 h-2 rounded-full bg-neutral-700 group-hover:bg-white transition-colors duration-500 ring-4 ring-white/5"></div>
                    {index !== portfolioData.experience.length - 1 && (
                      <div className="w-[1px] h-full bg-neutral-800/50 mt-4"></div>
                    )}
                  </div>
                </div>

                <div className="md:col-span-8 group">
                  <h4 className="text-2xl font-bold group-hover:text-white transition-colors mb-2 tracking-tight">{exp.role}</h4>
                  <div className="text-neutral-500 font-serif italic mb-4 text-lg">{exp.company}</div>
                  <p className="text-neutral-500 leading-relaxed text-sm md:text-base font-light max-w-xl">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;