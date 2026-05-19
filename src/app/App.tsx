import { useState } from 'react';
import { Hero } from './components/Hero';
import { Bio } from './components/Bio';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-white">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="bio">
          <Bio />
        </section>
        
        <section id="projects">
          <Projects />
        </section>

        <section id="certifications">
          <Certifications />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}
