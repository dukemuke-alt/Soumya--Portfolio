import React, { useState } from 'react';
import { portfolioData } from '../data.ts';
import { ExternalLink, Layers } from 'lucide-react';

const ProjectCard: React.FC<{ project: any }> = ({ project }) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <a 
      href={project.link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="group cursor-pointer animate-fade-up block no-underline active:scale-[0.98] transition-transform"
    >
      <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden glass shadow-xl mb-6 bg-neutral-900 flex items-center justify-center border border-white/5 group-hover:border-white/20 transition-all duration-500">
        {(!imageLoaded || imageError) && (
          <div className="absolute inset-0 flex flex-col items-center justify-center z-0 bg-neutral-900">
            <span className="text-6xl font-bold text-white/5 mb-2 select-none">{project.title[0]}</span>
            <Layers className="text-white/5" size={32} />
          </div>
        )}
        
        {!imageError && (
          <img 
            src={project.image} 
            alt={project.title}
            onLoad={() => setImageLoaded(true)}
            onError={() => {
              setImageError(true);
              setImageLoaded(true);
            }}
            className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out relative z-10 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          />
        )}

        <div className="absolute inset-0 bg-black/40 opacity-0 lg:group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm z-20">
          <div className="p-4 rounded-full bg-white text-black scale-50 lg:group-hover:scale-100 transition-transform duration-500 shadow-2xl">
            <ExternalLink size={20} />
          </div>
        </div>
      </div>
      
      <div className="px-1">
        <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 mb-2 block font-bold">{project.category}</span>
        <h4 className="text-xl md:text-2xl font-bold mb-2 tracking-tight group-hover:text-white transition-colors">{project.title}</h4>
        <p className="text-neutral-500 text-sm leading-relaxed mb-5 line-clamp-2 md:line-clamp-none font-light">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag: string) => (
            <span key={tag} className="text-[8px] uppercase tracking-widest px-3 py-1 rounded-full glass text-white/40 border border-white/5">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 md:py-32 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-[10px] uppercase tracking-[0.5em] text-neutral-500 mb-4">Portfolios</h2>
            <h3 className="text-4xl md:text-7xl font-bold tracking-tighter leading-tight">
              Curated <span className="font-serif italic font-normal text-neutral-500">Creations</span>.
            </h3>
          </div>
          <p className="text-neutral-500 max-w-xs md:text-right text-sm leading-relaxed font-light">
            A precise alignment of aesthetic form and functional engineering across various domains.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16">
          {portfolioData.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;