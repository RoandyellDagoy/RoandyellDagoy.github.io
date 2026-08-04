import React from 'react';
import { MoonIcon, SunIcon, MenuIcon } from './Icons';

function Navbar({ theme, toggleTheme, isMenuOpen, setIsMenuOpen }) {
  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 bg-base backdrop-blur-md shadow-md">
        <a href="#" className="text-2xl font-extrabold text-text hover:scale-110 transition">
          KDev.
        </a>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-accent transition">Home</a>
            <a href="#projects" className="hover:text-accent transition">Projects</a>
            <a href="#contact" className="hover:text-accent transition">Contact</a>
          </nav>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            id="theme-switch"
            className="p-2 rounded-full hover:bg-base transition cursor-pointer"
            aria-label="Toggle dark mode"
          >
            {theme === 'light' ? <MoonIcon /> : <SunIcon />}
          </button>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            id="menu-icon"
            className="md:hidden p-2 rounded hover:bg-baseVariant cursor-pointer"
            aria-label="Toggle menu"
          >
            <MenuIcon />
          </button>
        </div>
      </header>

      {/* Mobile Nav */}
      <nav
        id="mobile-menu"
        className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } fixed top-16 left-0 w-full bg-base shadow-md flex-col items-center space-y-4 py-6 md:hidden z-50`}
      >
        <a href="#home" onClick={() => setIsMenuOpen(false)} className="menu-link hover:text-accent">
          Home
        </a>
        <a href="#projects" onClick={() => setIsMenuOpen(false)} className="menu-link hover:text-accent">
          Projects
        </a>
        <a href="#contact" onClick={() => setIsMenuOpen(false)} className="menu-link hover:text-accent">
          Contact
        </a>
      </nav>
    </>
  );
}

export default Navbar;
