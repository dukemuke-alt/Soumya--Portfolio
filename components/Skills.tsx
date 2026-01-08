import React from 'react';
import { portfolioData } from '../data.ts';
import * as Icons from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 md:py-32 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-20">
          <h2 className="text-[10px] uppercase tracking-[0.5em] text-neutral-500 mb-4">Mastery</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Core <span className="font-serif italic font-normal text-neutral-500">Expertise</span></h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {portfolioData.skills.map((skill) => {
            const IconComponent = (Icons as any)[skill.icon] || Icons.Code;
            
            return (
              <div 
                key={skill.name} 
                className="glass p-8 rounded-[2rem] group hover:border-white/20 transition-all duration-500 active:scale-[0.98] border border-white/5"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 text-white group-hover:bg-white group-hover:text-black flex items-center justify-center transition-all duration-500">
                    <IconComponent size={22} />
                  </div>
                  <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">{skill.level}% Proficiency</span>
                </div>
                
                <h4 className="text-xl font-bold mb-4 tracking-tight">{skill.name}</h4>
                
                <div className="h-1 w-full bg-neutral-900 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-white/20 group-hover:bg-white transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;