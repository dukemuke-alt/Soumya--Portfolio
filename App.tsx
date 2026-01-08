import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Skills from './components/Skills.tsx';
import Projects from './components/Projects.tsx';
import Experience from './components/Experience.tsx';
import Services from './components/Services.tsx';
import Achievements from './components/Achievements.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Background Gradients */}
      <div className="fixed inset-0 -z-10 pointer-events-none bg-[#030303]">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-purple-500/5 blur-[100px] rounded-full"></div>
      </div>

      <Navbar scrolled={scrolled} />
      
      <main className="relative">
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