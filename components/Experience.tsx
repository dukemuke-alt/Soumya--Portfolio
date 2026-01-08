import React from 'react';
import { portfolioData } from '../data.ts';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-32 px-6 bg-[#050505]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-xs uppercase tracking-[0.4em] text-neutral-500 mb-4">Journey</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Professional Path</h3>
        </div>

        <div className="space-y-12">
          {portfolioData.experience.map((exp, index) => (
            <div key={exp.id} className="relative pl-12 md:pl-0">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-3">
                  <span className="text-sm text-neutral-500 font-medium">{exp.period}</span>
                </div>
                
                <div className="md:col-span-1 flex justify-center hidden md:flex">
                  <div className="relative h-full flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-white mt-1.5 ring-4 ring-white/10"></div>
                    {index !== portfolioData.experience.length - 1 && (
                      <div className="w-[1px] h-full bg-neutral-800 mt-4"></div>
                    )}
                  </div>
                </div>

                <div className="md:col-span-8 group">
                  <h4 className="text-2xl font-bold group-hover:text-white/80 transition-colors mb-2">{exp.role}</h4>
                  <div className="text-neutral-400 font-serif italic mb-4">{exp.company}</div>
                  <p className="text-neutral-500 leading-relaxed">
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