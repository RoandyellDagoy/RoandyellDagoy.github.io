import React, { useState } from 'react';
import { useTheme } from './hooks/useTheme';
import { useReveal } from './hooks/useReveal';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Process from './components/Process';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const { theme, toggleTheme } = useTheme();
  useReveal();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-base text-text font-sans">
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <main>
        <Hero />
        <Process />
        <Projects />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

