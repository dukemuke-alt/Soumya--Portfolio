import React, { useState } from 'react';
import { portfolioData } from '../data.ts';
import { MapPin, User } from 'lucide-react';

const About: React.FC = () => {
  const { firstName, lastName, bioLong, bioShort, location, profileImage } = portfolioData.identity;
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section id="about" className="py-24 md:py-32 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden glass relative group bg-neutral-900 flex items-center justify-center shadow-2xl border border-white/10">
              
              {(!imageLoaded || imageError) && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-neutral-800 to-black z-0">
                  <div className="text-[12vw] lg:text-8xl font-bold text-white/5 select-none tracking-tighter mb-4">
                    {firstName[0]}{lastName[0]}
                  </div>
                  <User className="text-white/10" size={40} />
                </div>
              )}
              
              {!imageError && (
                <img 
                  src={profileImage} 
                  alt={`${firstName} ${lastName}`}
                  onLoad={() => setImageLoaded(true)}
                  onError={() => {
                    console.warn("Profile image failed to load");
                    setImageError(true);
                    setImageLoaded(true);
                  }}
                  className={`w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out relative z-10 block ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                />
              )}
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>
            </div>
            
            <div className="absolute -bottom-6 -right-4 md:-bottom-10 md:-right-10 w-40 h-40 md:w-48 md:h-48 glass rounded-[2rem] p-6 flex flex-col justify-end z-30 shadow-2xl transform hover:translate-y-[-5px] transition-transform border border-white/10">
               <MapPin className="mb-3 text-white/40" size={18} />
               <p className="text-[9px] uppercase tracking-widest text-white/60 mb-1">Based In</p>
               <p className="text-xs md:text-sm font-medium">{location}</p>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center order-1 lg:order-2">
            <h2 className="text-[10px] uppercase tracking-[0.4em] text-neutral-500 mb-6">The Narrative</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-8 leading-tight tracking-tight">
              Design is thinking <br/><span className="font-serif italic font-normal text-neutral-500">made visual.</span>
            </h3>
            <p className="text-lg md:text-2xl text-neutral-300 leading-relaxed mb-8 font-light italic border-l-2 border-white/10 pl-6">
              "{bioShort}"
            </p>
            <div className="h-[1px] w-full bg-neutral-900 mb-8"></div>
            <p className="text-base md:text-lg text-neutral-500 leading-relaxed max-w-2xl">
              {bioLong}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;