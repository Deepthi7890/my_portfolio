import React from 'react';
import { Github, Linkedin, Mail, Phone, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const currentYear = 2026;

  return (
    <footer id="main-footer" className="bg-[#040407] border-t border-zinc-900 py-12 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-zinc-850">
          {/* Left: Brand Identity */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-display font-bold text-white text-lg tracking-tight">
                {PERSONAL_INFO.name}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              <span className="text-xs font-mono text-purple-300">
                Portfolio
              </span>
            </div>
            <p className="text-xs text-zinc-400 font-mono">
              {PERSONAL_INFO.title}
            </p>
          </div>

          {/* Center: Navigation Shortcuts */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-zinc-400">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#education" className="hover:text-white transition-colors">Education</a>
            <a href="#learning" className="hover:text-white transition-colors">Learning</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Right: Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white hover:border-purple-500/40 border border-zinc-800 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white hover:border-purple-500/40 border border-zinc-800 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              aria-label="Email Contact"
              className="p-2 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white hover:border-purple-500/40 border border-zinc-800 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
              aria-label="Phone Contact"
              className="p-2 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white hover:border-purple-500/40 border border-zinc-800 transition-colors"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-400">
          <p>© {currentYear} {PERSONAL_INFO.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5 text-zinc-400">
            <span>Built with React, Tailwind CSS & Vite</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
