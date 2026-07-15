import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/70 backdrop-blur-xl border-b border-white/5 py-4 shadow-lg shadow-black/20' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#about" className="text-xl font-bold tracking-tight text-primaryText hover:text-accent transition-colors flex items-center gap-1.5">
          <span className="text-accent font-mono font-black">&lt;/&gt;</span>
          <span>Shaily<span className="text-accent font-black">.</span>J</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-secondaryText hover:text-primaryText transition-colors duration-200 relative group py-1"
            >
              {link.name}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full rounded-full"></span>
            </a>
          ))}
          <a
            href="#contact"
            className="border border-accent/40 bg-accent/10 hover:bg-accent/20 hover:border-accent hover:shadow-[0_0_15px_rgba(168,85,247,0.25)] text-primaryText text-sm font-semibold px-5 py-2 rounded-full transition-all duration-300"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-primaryText hover:text-accent focus:outline-none transition-colors"
          aria-label="Toggle Menu"
        >
          {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile Navigation Panel */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-2xl border-b border-white/5 shadow-2xl absolute top-full left-0 w-full py-6 px-6 flex flex-col gap-4 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-secondaryText hover:text-primaryText transition-colors py-2 border-b border-white/5 last:border-0"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="border border-accent/40 bg-accent/15 hover:bg-accent/25 hover:border-accent text-center font-semibold py-3 rounded-full transition-all duration-300 text-sm mt-2"
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
