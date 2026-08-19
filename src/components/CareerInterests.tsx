import React from 'react';
import { Target, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { CAREER_INTERESTS } from '../data/portfolioData';
import { Tilt3D } from './Tilt3D';

export const CareerInterests: React.FC = () => {
  return (
    <section id="career-interests" className="py-20 md:py-24 bg-transparent relative border-t border-zinc-900/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-purple-400 font-semibold">
                OPPORTUNITIES
              </span>
              <div className="h-[1px] w-8 bg-purple-500/40" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
              What I'm Looking For
            </h2>
          </div>

          <Tilt3D maxTilt={6} glareOpacity={0.25} scale={1.01} borderRadius="0.75rem">
            <div className="p-3.5 rounded-xl bg-purple-950/40 border border-purple-500/30 backdrop-blur-md text-xs text-purple-200/90 max-w-md shadow-lg shadow-purple-950/30">
              <div className="flex items-center gap-2 mb-1 text-purple-300 font-semibold">
                <Target className="w-3.5 h-3.5 text-purple-400" />
                <span>Target Career Pathways</span>
              </div>
              <p className="text-[11px] text-zinc-300 leading-relaxed font-light">
                Actively seeking full-time entry-level and internship roles starting 2026/2027 where I can apply rigorous analytical and machine learning capabilities.
              </p>
            </div>
          </Tilt3D>
        </div>

        {/* Roles Grid with Dynamic Specular Glare */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CAREER_INTERESTS.map((role, idx) => (
            <Tilt3D
              key={idx}
              id={`career-role-${idx}`}
              maxTilt={10}
              glareOpacity={0.35}
              scale={1.02}
              borderRadius="1rem"
              className="h-full"
            >
              <div className="p-6 rounded-2xl bg-zinc-900/50 hover:bg-zinc-900/90 border border-zinc-800/80 hover:border-purple-500/50 backdrop-blur-md transition-all duration-300 flex flex-col justify-between group shadow-xl shadow-black/40 h-full">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono text-purple-400 uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-purple-950/60 border border-purple-500/30">
                      TARGET ROLE
                    </span>
                    <CheckCircle2 className="w-4 h-4 text-purple-400/60 group-hover:text-purple-400 transition-colors" />
                  </div>

                  <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-purple-200 transition-colors">
                    {role.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light mb-5">
                    {role.description}
                  </p>
                </div>

                {/* Tag Chips */}
                <div className="pt-4 border-t border-zinc-850 flex flex-wrap gap-1.5">
                  {role.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800/80 text-zinc-300 border border-zinc-750 group-hover:border-purple-500/30 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Tilt3D>
          ))}
        </div>

      </div>
    </section>
  );
};
