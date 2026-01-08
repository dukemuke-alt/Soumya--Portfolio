
import React, { useState } from 'react';
import { portfolioData } from '../data';
import { ExternalLink, Layers } from 'lucide-react';

const ProjectCard: React.FC<{ project: any }> = ({ project }) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const getImagePath = (path: string) => {
    if (!path) return '';
    return path.startsWith('http') || path.startsWith('/') ? path : `./${path}`;
  };

  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden glass mb-8 bg-neutral-900 flex items-center justify-center">
        
        {/* Fallback UI */}
        {(!imageLoaded || imageError) && (
          <div className="absolute inset-0 flex flex-col items-center justify-center z-0 bg-gradient-to-tr from-neutral-900 to-neutral-800">
            <span className="text-6xl font-bold text-white/5 mb-4">{project.title[0]}</span>
            <Layers className="text-white/5" size={32} />
          </div>
        )}
        
        {!imageError && (
          <img 
            src={getImagePath(project.image)} 
            alt={project.title}
            onLoad={() => setImageLoaded(true)}
            onError={() => {
              setImageError(true);
              setImageLoaded(true);
            }}
            className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out relative z-10 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          />
        )}

        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm z-20">
          <div className="p-4 rounded-full bg-white text-black scale-50 group-hover:scale-100 transition-transform">
            <ExternalLink size={24} />
          </div>
        </div>
      </div>
      
      <div className="flex justify-between items-start mb-4">
        <div>
          <span className="text-[10px] uppercase tracking-widest text-neutral-500 mb-2 block">{project.category}</span>
          <h4 className="text-2xl font-semibold mb-2 group-hover:text-white/80 transition-colors">{project.title}</h4>
        </div>
      </div>
      <p className="text-neutral-500 text-sm leading-relaxed mb-6">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag: string) => (
          <span key={tag} className="text-[9px] uppercase tracking-widest px-3 py-1 rounded-full border border-white/10 text-white/40">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <h2 className="text-xs uppercase tracking-[0.4em] text-neutral-500 mb-4 text-center md:text-left">Selected Works</h2>
            <h3 className="text-5xl md:text-7xl font-bold tracking-tighter">Portfolio Showcase</h3>
          </div>
          <p className="text-neutral-500 max-w-xs text-right hidden md:block">
            A curated selection of digital products where aesthetics meets functionality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {portfolioData.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
