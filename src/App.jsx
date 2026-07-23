import React from 'react';
import { ReactLenis } from 'lenis/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <ReactLenis root>
      <div className="bg-background text-primaryText min-h-screen relative overflow-x-hidden">
        {/* Aurora glow blobs */}
        <div className="absolute top-[10%] left-[-10%] w-[30vw] h-[30vw] rounded-full bg-accent/8 blur-[120px] pointer-events-none -z-10 animate-pulse-glow"></div>
        <div className="absolute top-[35%] right-[-5%] w-[25vw] h-[25vw] rounded-full bg-accentBlue/8 blur-[100px] pointer-events-none -z-10 animate-pulse-glow" style={{ animationDelay: '-2s' }}></div>
        <div className="absolute top-[65%] left-[5%] w-[35vw] h-[35vw] rounded-full bg-accent/5 blur-[150px] pointer-events-none -z-10 animate-pulse-glow" style={{ animationDelay: '-4s' }}></div>
        <div className="absolute top-[85%] right-[10%] w-[28vw] h-[28vw] rounded-full bg-accentCyan/6 blur-[120px] pointer-events-none -z-10 animate-pulse-glow" style={{ animationDelay: '-6s' }}></div>

        <Navbar />
        <main className="relative z-10">
          <Hero />
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </main>
      </div>
    </ReactLenis>
  );
}

export default App;

