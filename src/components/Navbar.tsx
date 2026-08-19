import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowDownToLine } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { downloadResume } from '../utils/resumeGenerator';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Learning', href: '#learning' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleResumeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    downloadResume();
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050508]/85 backdrop-blur-md border-b border-purple-900/20 py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#home"
          id="nav-logo"
          className="group flex items-center gap-2.5 focus:outline-none"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-violet-800 flex items-center justify-center text-white font-display font-bold text-sm tracking-wider border border-purple-400/30 group-hover:border-purple-400/70 transition-colors shadow-sm shadow-purple-900/50">
            {PERSONAL_INFO.monogram}
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-white text-base tracking-tight group-hover:text-purple-300 transition-colors">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-[10px] text-zinc-400 font-mono tracking-wide uppercase">
              AI & Data Science
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                id={`nav-link-${link.name.toLowerCase()}`}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                  isActive
                    ? 'text-white bg-purple-950/50 border border-purple-500/30 shadow-sm shadow-purple-900/20'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-900/60'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Desktop CTA / Resume Button */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={handleResumeClick}
            id="nav-resume-btn"
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider bg-purple-950/60 hover:bg-purple-900/80 text-purple-200 border border-purple-500/40 hover:border-purple-400/80 transition-all shadow-sm hover:shadow-purple-900/40 cursor-pointer active:scale-95"
            title="Download formatted resume"
          >
            <ArrowDownToLine className="w-3.5 h-3.5 text-purple-400" />
            <span>Resume</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="nav-mobile-toggle"
            aria-label="Toggle Navigation Menu"
            className="p-2 rounded-lg text-zinc-300 hover:text-white bg-zinc-900/80 border border-zinc-800 focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="nav-mobile-menu"
          className="md:hidden bg-[#0a0a10] border-b border-purple-900/30 px-4 pt-3 pb-6 space-y-2 mt-2"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-zinc-300 hover:text-white hover:bg-purple-950/40 border border-transparent hover:border-purple-500/20"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-zinc-800">
            <button
              onClick={(e) => {
                handleResumeClick(e);
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-purple-200 bg-purple-950/80 border border-purple-500/40"
            >
              <ArrowDownToLine className="w-4 h-4 text-purple-400" />
              <span>Download Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
