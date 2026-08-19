import React from 'react';
import { Github, Linkedin, Mail, Phone, ArrowUpRight, ChevronDown, Sparkles, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { HeroPhoto } from './HeroPhoto';
import { Hero3DCanvas } from './Hero3DCanvas';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-28 pb-16 md:pt-36 md:pb-24 flex items-center justify-center overflow-hidden bg-[#050508]"
    >
      {/* 1. Real 3D Interactive Three.js Canvas Scene (Floating Spheres, Orbiting Nodes, Particle Grid) */}
      <Hero3DCanvas />

      {/* 2. Deep Atmospheric Purple Glow Flares */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-purple-950/30 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-violet-800/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[400px] bg-purple-900/15 rounded-full blur-[130px] pointer-events-none -z-10" />

      {/* 3. Subtle Cybernetic Dot Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#2d1e57_1px,transparent_1px)] [background-size:32px_32px] opacity-35 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Top Status Bar (Cleaned up as requested) */}
        <div className="flex items-center justify-between pb-6 mb-8 border-b border-zinc-800/60 text-xs font-mono text-zinc-400">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-zinc-200 tracking-wider font-semibold">AVAILABLE FOR NEW OPPORTUNITIES</span>
            <span className="text-zinc-600 hidden sm:inline">•</span>
            <span className="text-purple-400 font-semibold hidden sm:inline">AI / ML & DATA SCIENCE</span>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs text-zinc-400">
            <Terminal className="w-3.5 h-3.5 text-purple-400" />
            <span>KIETW JNTUK (2023–2027)</span>
          </div>
        </div>

        {/* Hero Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">
          
          {/* Left Column: Bold Display Typography (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            
            {/* Accent Intro Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/50 border border-purple-500/30 w-fit backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
              <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-purple-300 font-bold">
                HELLO, I'M
              </span>
            </div>

            {/* Giant 3D Display Heading */}
            <div className="space-y-1">
              <h1
                id="hero-name-heading"
                className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-extrabold tracking-tight text-white leading-[0.95] drop-shadow-[0_10px_25px_rgba(147,51,234,0.3)]"
              >
                Katta
              </h1>
              <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-violet-300 to-purple-500 leading-[0.95]">
                Deepthi
              </h1>
            </div>

            {/* Stylized Creative Role Banner with 3D Depth */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <span className="text-sm sm:text-base font-mono uppercase tracking-[0.2em] px-3 py-1 rounded-lg bg-zinc-900 border border-purple-500/30 text-purple-300 font-bold">
                CREATIVE
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-semibold text-white">
                AI & Data Science Engineer
              </h2>
            </div>

            {/* Professional Summary Bio */}
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-2xl font-light">
              {PERSONAL_INFO.bioShort}
            </p>

            {/* Hero Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                id="hero-view-projects-btn"
                className="group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-purple-600 via-violet-600 to-purple-700 hover:from-purple-500 hover:to-violet-500 transition-all duration-300 shadow-xl shadow-purple-950/80 hover:shadow-purple-600/40 active:scale-95 border border-purple-400/30 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-purple-200" />
                <span>Projects</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>

              <a
                href="#contact"
                id="hero-contact-btn"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-200 hover:text-white bg-zinc-900/90 hover:bg-zinc-800 border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 shadow-lg shadow-black/40 active:scale-95 cursor-pointer backdrop-blur-md"
              >
                <span>Get In Touch</span>
              </a>
            </div>

            {/* Compact Direct Contacts & Social Row */}
            <div className="pt-4 border-t border-zinc-850 flex flex-wrap items-center gap-4">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">Socials:</span>
              
              <div className="flex items-center gap-2.5">
                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-social-github"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-xl bg-zinc-900/90 text-zinc-400 hover:text-white border border-zinc-800 hover:border-purple-500/50 hover:bg-purple-950/40 transition-all hover:-translate-y-0.5"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-social-linkedin"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-xl bg-zinc-900/90 text-zinc-400 hover:text-white border border-zinc-800 hover:border-purple-500/50 hover:bg-purple-950/40 transition-all hover:-translate-y-0.5"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  id="hero-social-email"
                  aria-label="Email Contact"
                  className="p-2.5 rounded-xl bg-zinc-900/90 text-zinc-400 hover:text-white border border-zinc-800 hover:border-purple-500/50 hover:bg-purple-950/40 transition-all hover:-translate-y-0.5"
                >
                  <Mail className="w-4 h-4" />
                </a>

                <a
                  href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                  id="hero-social-phone"
                  aria-label="Phone Number"
                  className="p-2.5 rounded-xl bg-zinc-900/90 text-zinc-400 hover:text-white border border-zinc-800 hover:border-purple-500/50 hover:bg-purple-950/40 transition-all hover:-translate-y-0.5"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Layered Portrait Card */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <HeroPhoto />
          </div>

        </div>

      </div>

      {/* Down Scroll Indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-zinc-500 hover:text-purple-300 transition-colors pointer-events-auto">
        <a href="#about" aria-label="Scroll down to About section" className="flex flex-col items-center">
          <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">Scroll</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-purple-400" />
        </a>
      </div>
    </section>
  );
};
