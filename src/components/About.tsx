import React from 'react';
import { Brain, Database, Eye, Terminal, Sparkles, GraduationCap, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Tilt3D } from './Tilt3D';

export const About: React.FC = () => {
  const highlights = [
    {
      icon: Database,
      title: 'Data Analysis & EDA',
      description: 'Exploratory data analysis, cleaning, statistical trend analysis, and dashboard metric derivation.'
    },
    {
      icon: Brain,
      title: 'Machine Learning & NLP',
      description: 'Classification pipelines, text preprocessing, tokenization, Scikit-learn models, and evaluation.'
    },
    {
      icon: Eye,
      title: 'AI & Computer Vision',
      description: 'Vision-Language Model (VLM) applications, document layout processing, and LLM-assisted analysis.'
    },
    {
      icon: Terminal,
      title: 'Software & Backend Dev',
      description: 'RESTful architectures with Node.js, Express.js, Flask, Streamlit, and relational databases.'
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative bg-transparent border-t border-zinc-900/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-purple-400 font-semibold">
              BACKGROUND & FOUNDATION
            </span>
            <div className="h-[1px] w-8 bg-purple-500/40" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            About Me
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Biography Statement (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <Tilt3D maxTilt={6} glareOpacity={0.3} scale={1.01} borderRadius="1rem">
              <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/60 hover:bg-zinc-900/80 border border-purple-500/30 backdrop-blur-md shadow-2xl shadow-black/40 transition-colors">
                <p className="text-base sm:text-lg text-zinc-200 leading-relaxed font-light mb-6">
                  {PERSONAL_INFO.aboutLong}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-zinc-800/80">
                  <div className="flex items-center gap-3 text-sm text-zinc-300">
                    <div className="p-2 rounded-lg bg-purple-950/70 text-purple-300 border border-purple-500/30">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-[11px] font-mono text-zinc-400 uppercase">Degree</span>
                      <span className="font-medium text-white">B.Tech AI & Data Science</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-sm text-zinc-300">
                    <div className="p-2 rounded-lg bg-purple-950/70 text-purple-300 border border-purple-500/30">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-[11px] font-mono text-zinc-400 uppercase">Location</span>
                      <span className="font-medium text-white">{PERSONAL_INFO.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Tilt3D>

            {/* Quick Pitch Callout with Specular Glare */}
            <Tilt3D maxTilt={5} glareOpacity={0.25} scale={1.01} borderRadius="0.75rem">
              <div className="p-5 rounded-xl bg-purple-950/40 border border-purple-500/30 backdrop-blur-md flex items-start gap-3.5 shadow-lg shadow-purple-950/40">
                <Sparkles className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-purple-200 leading-relaxed font-light">
                  Focused on delivering clean, reproducible code, rigorous data-handling pipelines, and production-ready architectures that solve tangible real-world challenges.
                </p>
              </div>
            </Tilt3D>
          </div>

          {/* Core Domains Grid (5 Cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <Tilt3D key={index} maxTilt={8} glareOpacity={0.35} scale={1.02} borderRadius="0.75rem">
                  <div className="p-4 sm:p-5 rounded-xl bg-zinc-900/50 hover:bg-zinc-900/90 border border-zinc-800 hover:border-purple-500/50 backdrop-blur-md transition-colors duration-300 group shadow-xl shadow-black/30">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-purple-950/70 text-purple-400 border border-purple-500/30 group-hover:border-purple-400/60 transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="font-display font-semibold text-white text-sm sm:text-base group-hover:text-purple-300 transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed pl-1">
                      {item.description}
                    </p>
                  </div>
                </Tilt3D>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
