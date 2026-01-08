import React from 'react';
import { portfolioData } from '../data.ts';
import * as Icons from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 md:py-32 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          <div className="lg:col-span-4">
            <h2 className="text-[10px] uppercase tracking-[0.5em] text-neutral-500 mb-6">Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight tracking-tighter">
              Engineering <br/><span className="font-serif italic font-normal text-neutral-500">Masterpieces</span>.
            </h3>
            <p className="text-neutral-500 leading-relaxed mb-10 font-light text-base md:text-lg">
              Delivering specialized digital experiences that combine robust performance with sophisticated visual narratives.
            </p>
            <a 
              href="#contact" 
              className="inline-flex px-8 py-3.5 rounded-full border border-white/10 hover:border-white glass active:scale-95 transition-all text-xs uppercase tracking-widest font-bold"
            >
              Consult Now
            </a>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {portfolioData.services.map((service) => {
              const IconComponent = (Icons as any)[service.icon] || Icons.Layout;
              return (
                <div 
                  key={service.title} 
                  className="glass p-10 rounded-[2.5rem] group hover:-translate-y-2 transition-all duration-500 border border-white/5 active:scale-[0.98]"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-white mb-10 group-hover:bg-white group-hover:text-black transition-all duration-500">
                    <IconComponent size={26} />
                  </div>
                  <h4 className="text-2xl font-bold mb-4 tracking-tight">{service.title}</h4>
                  <p className="text-neutral-400 leading-relaxed font-light text-sm">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;