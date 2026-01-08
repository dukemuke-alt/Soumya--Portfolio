import React from 'react';
import { portfolioData } from '../data.ts';
import * as Icons from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-4">
            <h2 className="text-xs uppercase tracking-[0.4em] text-neutral-500 mb-8">What I Do</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Solving problems <br/>through <span className="font-serif italic font-normal text-neutral-500">design</span> & <span className="font-serif italic font-normal text-neutral-500">code</span>.
            </h3>
            <p className="text-neutral-500 leading-relaxed mb-10">
              I provide end-to-end solutions for companies looking to establish a premium digital presence with cutting-edge technology.
            </p>
            <a href="#contact" className="inline-block px-8 py-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all">
              Start a project
            </a>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioData.services.map((service) => {
              const IconComponent = (Icons as any)[service.icon] || Icons.Layout;
              return (
                <div key={service.title} className="glass p-10 rounded-[2.5rem] group hover:-translate-y-2 transition-all duration-500">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-white mb-8 group-hover:bg-white group-hover:text-black transition-colors">
                    <IconComponent size={28} />
                  </div>
                  <h4 className="text-2xl font-bold mb-4 tracking-tight">{service.title}</h4>
                  <p className="text-neutral-400 leading-relaxed">
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