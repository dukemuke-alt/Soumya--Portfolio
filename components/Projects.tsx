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
      className="group cursor-pointer animate-fade-up block no-underline"
    >
      <div className="relative aspect-[4/3] rounded-3xl overflow-hidden glass mb-8 bg-neutral-900 flex items-center justify-center shadow-xl">
        {/* Fallback Placeholder */}
        {(!imageLoaded || imageError) && (
          <div className="absolute inset-0 flex flex-col items-center justify-center z-0 bg-neutral-900">
            <span className="text-8xl font-bold text-white/5 mb-4 select-none">{project.title[0]}</span>
            <Layers className="text-white/5" size={40} />
          </div>
        )}
        
        {!imageError && (
          <img 
            src={project.image} 
            alt={project.title}
            onLoad={() => setImageLoaded(true)}
            onError={() => {
              console.warn(`Project image failed: ${project.title}`);
              setImageError(true);
              setImageLoaded(true);
            }}
            className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out relative z-10 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          />
        )}

        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm z-20">
          <div className="p-5 rounded-full bg-white text-black scale-50 group-hover:scale-100 transition-transform duration-500 shadow-2xl">
            <ExternalLink size={24} />
          </div>
        </div>
      </div>
      
      <div className="flex flex-col mb-4">
        <span className="text-[11px] uppercase tracking-[0.3em] text-neutral-500 mb-3 block">{project.category}</span>
        <h4 className="text-2xl font-semibold mb-3 tracking-tight group-hover:text-white transition-colors">{project.title}</h4>
        <p className="text-neutral-500 text-sm leading-relaxed mb-6 line-clamp-2">
          {project.description}
        </p>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag: string) => (
          <span key={tag} className="text-[9px] uppercase tracking-widest px-4 py-1.5 rounded-full glass text-white/40 border border-white/5 group-hover:border-white/20 transition-colors">
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-xs uppercase tracking-[0.5em] text-neutral-500 mb-6">Works</h2>
            <h3 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
              Selected <span className="font-serif italic font-normal text-neutral-500">artifacts</span>.
            </h3>
          </div>
          <p className="text-neutral-500 max-w-xs text-right hidden lg:block leading-relaxed font-light">
            A curated showcase of digital craftsmanship across enterprise solutions and high-end consumer experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {portfolioData.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;