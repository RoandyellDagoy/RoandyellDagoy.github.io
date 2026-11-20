import React from 'react';
import { MenuIcon, MoonIcon, SunIcon } from './Icons';
import { content } from '../data/content';

function Navbar({ theme, toggleTheme, isMenuOpen, setIsMenuOpen }) {
  const isDark = theme === 'dark';
  return (
    <header className="nav-in fixed top-4 left-0 w-full z-50 px-4">
      <div className="clay max-w-5xl mx-auto flex items-center justify-between px-6 py-3">
        <a href="#home" className="font-display text-xl font-black tracking-widest text-gold">
          {content.brand.logo}
        </a>

        <nav className="hidden md:flex gap-6 text-sm tracking-wide">
          {content.nav.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-gold transition">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg cursor-pointer hover:text-gold"
            aria-label={isDark ? content.theme.toLight : content.theme.toDark}
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg cursor-pointer"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <MenuIcon />
          </button>
        </div>
      </div>

      <nav
        className={`${isMenuOpen ? 'flex' : 'hidden'} clay mt-3 max-w-5xl mx-auto flex-col items-center gap-4 py-6 md:hidden`}
      >
        {content.nav.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-gold transition"
          >
            {l.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;

