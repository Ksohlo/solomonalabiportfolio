import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import twitterX from '../assets/twitterx.png';
import { personalInfo } from '../data';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', href: '#projects', path: '/project' },
    { name: 'Technologies', href: '#technologies', path: '/technologies' },
    { name: 'About', href: '#about', path: '/about' },
    { name: 'Contact', href: '#contact', path: '/about' },
  ];

  const handleNavClick = (link) => {
    setIsOpen(false);
    if (location.pathname === '/') {
      const el = document.querySelector(link.href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    navigate(link.path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-nav py-3 shadow-2xl shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 group cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center group-hover:border-amber-400 group-hover:bg-amber-500/20 transition-all duration-300 shadow-glow-gold">
            <i className="bx bx-code-alt text-2xl text-amber-400 group-hover:scale-110 transition-transform"></i>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold font-display tracking-tight text-white group-hover:text-amber-400 transition-colors">
              Solomon<span className="text-amber-400">.Alabi</span>
            </span>
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest -mt-1">
              Full Stack & Mobile
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link)}
              className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-full hover:bg-white/10 transition-all duration-200"
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Action Buttons & Socials */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2 border-r border-slate-800 pr-4">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="w-9 h-9 rounded-full bg-slate-900/80 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-amber-400 hover:border-amber-500/40 hover:scale-110 transition-all"
            >
              <FaGithub className="text-base" />
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="w-9 h-9 rounded-full bg-slate-900/80 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-amber-400 hover:border-amber-500/40 hover:scale-110 transition-all"
            >
              <FaLinkedinIn className="text-base" />
            </a>
            <a
              href={personalInfo.socials.twitter}
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter Profile"
              className="w-9 h-9 rounded-full bg-slate-900/80 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-amber-400 hover:border-amber-500/40 hover:scale-110 transition-all p-2"
            >
              <img src={twitterX} alt="X" className="w-full h-full object-contain filter invert opacity-80" />
            </a>
          </div>

          <button
            onClick={() => handleNavClick({ href: '#contact', path: '/about' })}
            className="relative group px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-semibold text-xs uppercase tracking-wider shadow-glow-gold hover:shadow-amber-500/40 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Hire Me
          </button>
        </div>

        {/* Mobile Hamburger Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Mobile Menu"
          className="md:hidden w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-400 text-2xl focus:outline-none"
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Drawer Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 right-0 glass-nav border-b border-white/10 p-6 shadow-2xl flex flex-col gap-4"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link)}
                  className="w-full text-left py-3 px-4 rounded-xl text-slate-200 hover:bg-amber-500/10 hover:text-amber-400 font-medium transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <div className="flex gap-3">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-amber-400"
                >
                  <FaGithub size={18} />
                </a>
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-amber-400"
                >
                  <FaLinkedinIn size={18} />
                </a>
              </div>

              <button
                onClick={() => handleNavClick({ href: '#contact', path: '/about' })}
                className="px-6 py-2.5 rounded-full bg-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-glow-gold"
              >
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Nav;