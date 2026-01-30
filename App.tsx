import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Services from './components/Services';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen text-white selection:bg-white selection:text-black bg-black">
      <CustomCursor />
      
      {/* 
          BACKGROUND ANIMATION LAYER 
          - Shifted up (-translate-y-[8%]) to center the wave.
          - Zoomed (scale-125) to hide the 'Built with Spline' badge.
          - Opacity 100 for vibrant, real colors.
      */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-black">
        <div className="absolute inset-0 flex items-center justify-center">
          <iframe 
            src="" 
            frameBorder="0" 
            width="100%" 
            height="100%"
            // Increased upward translation to bring the animation to the middle
            className="w-[115vw] h-[115vh] scale-125 opacity-100 transform -translate-y-[8%] object-cover"
            title="Spline Background"
          ></iframe>
        </div>
        
        {/* Subtle vignette to maintain readability of text while keeping animation bright */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30 pointer-events-none"></div>
      </div>

      <Navbar scrolled={scrolled} />
      
      {/* CONTENT LAYER */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Services />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;