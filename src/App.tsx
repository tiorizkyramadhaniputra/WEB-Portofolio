import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

import Projects from './components/Projects';
import Expertise from './components/Expertise';
import Experience from './components/Experience';
import BackToHero from './components/BackToHero';
import Certifications from './components/Certifications';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-black selection:bg-brand-beige selection:text-brand-brown-dark">
      <Navbar />
      
      <main>
        <Hero />
         <Expertise />
        <Projects />
        <Experience />
        <BackToHero />
        <Certifications />
        
        {/* Future Section Containers */}
      <section id="contact" className="min-h-[50vh] py-20 flex items-center justify-center text-center bg-brand-gray-light text-brand-black">
  <div className="container-custom">
    <h2 className="text-4xl md:text-7xl mb-8">Have an idea?</h2>

    <a
      href="https://wa.me/6285710340059"
      target="_blank"
      rel="noopener noreferrer"
      className="btn-primary mx-auto text-lg px-8 py-3 inline-block"
    >
      Contact Me
    </a>
  </div>
</section>
      </main>

      <footer className="py-10 border-t border-brand-black/5 bg-brand-gray-light text-brand-black">
        <div className="container-custom flex flex-col md:row justify-between items-center gap-6">
          <p className="text-xs text-brand-gray uppercase tracking-widest">
            © 2026 Tio Rizky Ramadhani Putra. Brick by brick..
          </p>
          <div className="flex gap-6 text-xs font-medium uppercase tracking-wider">
            <a href="#" className="hover:text-brand-gray transition-colors ">Velox</a>
            <a href="#" className="hover:text-brand-gray transition-colors">et exactus</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
