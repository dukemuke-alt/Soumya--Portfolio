import React from 'react';
import { portfolioData } from '../data.ts';
import * as Icons from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-xs uppercase tracking-[0.4em] text-neutral-500 mb-4">Mastery</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Core Expertise</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.skills.map((skill) => {
            const IconComponent = (Icons as any)[skill.icon] || Icons.Code;
            
            return (
              <div key={skill.name} className="glass p-8 rounded-3xl group hover:border-white/20 transition-all duration-500">
                <div className="flex items-center justify-between mb-8">
                  <div className="p-3 rounded-2xl bg-white/5 text-white group-hover:bg-white group-hover:text-black transition-all">
                    <IconComponent size={24} />
                  </div>
                  <span className="text-sm font-medium text-neutral-500">{skill.level}%</span>
                </div>
                
                <h4 className="text-xl font-semibold mb-4">{skill.name}</h4>
                
                <div className="h-1.5 w-full bg-neutral-900 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-white/40 group-hover:bg-white transition-all duration-1000 ease-out"
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