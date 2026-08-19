import React from 'react';
import {
  Code,
  Database,
  BrainCircuit,
  BarChart3,
  Sparkles,
  Terminal,
  Server,
  Cpu
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Tilt3D } from './Tilt3D';

export const Skills: React.FC = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return Code;
      case 'Database':
        return Database;
      case 'BrainCircuit':
        return BrainCircuit;
      case 'BarChart3':
        return BarChart3;
      case 'Sparkles':
        return Sparkles;
      case 'Terminal':
        return Terminal;
      case 'Server':
        return Server;
      default:
        return Cpu;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 bg-transparent relative border-t border-zinc-900/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-purple-400 font-semibold">
                EXPERTISE & TOOLS
              </span>
              <div className="h-[1px] w-8 bg-purple-500/40" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
              Technical Stack
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-zinc-300 font-light max-w-md">
            Core toolkit applied across machine learning pipelines, structured data analysis, and scalable web architectures.
          </p>
        </div>

        {/* Skill Category Cards Grid with 3D Specular Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category, index) => {
            const Icon = getCategoryIcon(category.iconName);

            return (
              <Tilt3D key={index} maxTilt={9} glareOpacity={0.35} scale={1.02} borderRadius="1rem" className="h-full">
                <div className="p-6 rounded-2xl bg-zinc-900/50 hover:bg-zinc-900/90 border border-zinc-800 hover:border-purple-500/50 backdrop-blur-md transition-all duration-300 flex flex-col justify-between group shadow-xl shadow-black/40 h-full">
                  <div>
                    {/* Category Header */}
                    <div className="flex items-center gap-3 mb-5 pb-4 border-b border-zinc-800/80">
                      <div className="p-2.5 rounded-xl bg-purple-950/70 text-purple-400 border border-purple-500/30 group-hover:border-purple-400/60 transition-colors shadow-inner">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-display font-bold text-white group-hover:text-purple-200 transition-colors">
                        {category.title}
                      </h3>
                    </div>

                    {/* Skills Badges / Chips */}
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIdx) => (
                        <span
                          key={skillIdx}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-zinc-850/80 text-zinc-200 border border-zinc-750/80 hover:border-purple-400/50 hover:bg-purple-950/60 hover:text-purple-200 transition-all duration-200"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-400/80" />
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-3 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                    <span>{category.skills.length} competencies</span>
                    <span className="text-purple-400 font-semibold group-hover:text-purple-300 transition-colors">
                      Verified In Projects
                    </span>
                  </div>
                </div>
              </Tilt3D>
            );
          })}
        </div>

      </div>
    </section>
  );
};
