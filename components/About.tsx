
import React, { useState } from 'react';
import { portfolioData } from '../data';
import { MapPin, User } from 'lucide-react';

const About: React.FC = () => {
  const { firstName, lastName, bioLong, bioShort, location, profileImage } = portfolioData.identity;
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Helper to handle both absolute URLs and local filenames
  const getImagePath = (path: string) => {
    if (!path) return '';
    return path.startsWith('http') || path.startsWith('/') ? path : `./${path}`;
  };

  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden glass relative group bg-neutral-900 flex items-center justify-center">
              
              {/* Premium Placeholder - Shown if image fails or while loading */}
              {(!imageLoaded || imageError) && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-neutral-800 to-black z-0">
                  <div className="text-8xl font-bold text-white/5 select-none tracking-tighter mb-4">
                    {firstName[0]}{lastName[0]}
                  </div>
                  <User className="text-white/10" size={48} />
                </div>
              )}
              
              {!imageError && (
                <img 
                  src={getImagePath(profileImage)} 
                  alt={`${firstName} ${lastName}`}
                  onLoad={() => setImageLoaded(true)}
                  onError={() => {
                    setImageError(true);
                    setImageLoaded(true);
                  }}
                  className={`w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700 ease-in-out relative z-10 block ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                />
              )}
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-20"></div>
            </div>
            
            <div className="absolute -bottom-10 -right-10 w-48 h-48 glass rounded-2xl p-6 hidden lg:flex flex-col justify-end z-30">
               <MapPin className="mb-4 text-white/40" />
               <p className="text-xs uppercase tracking-widest text-white/60 mb-1">Located In</p>
               <p className="text-sm font-medium">{location}</p>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center">
            <h2 className="text-xs uppercase tracking-[0.4em] text-neutral-500 mb-8">The Narrative</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-10 leading-tight">
              Craftsmanship is <span className="font-serif italic font-normal text-neutral-500">everything</span>.
            </h3>
            <p className="text-xl md:text-2xl text-neutral-300 leading-relaxed mb-8 font-light italic">
              "{bioShort}"
            </p>
            <div className="h-[1px] w-full bg-neutral-800 mb-8"></div>
            <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
              {bioLong}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
