import React from 'react';
import { Sparkles, Terminal, FileText, Cpu, Compass } from 'lucide-react';
import { PRACTICAL_LEARNING_DATA } from '../data/portfolioData';
import { Tilt3D } from './Tilt3D';

export const PracticalLearning: React.FC = () => {
  return (
    <section id="learning" className="py-20 md:py-28 bg-transparent relative border-t border-zinc-900/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-purple-400 font-semibold">
                APPLIED EXPERIMENTATION
              </span>
              <div className="h-[1px] w-8 bg-purple-500/40" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
              AI Tools & Practical Learning
            </h2>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/50 border border-purple-500/30 backdrop-blur-md text-xs font-mono text-purple-300 shadow-sm">
            <Compass className="w-3.5 h-3.5 text-purple-400" />
            <span>Practical Learning & Tooling Exposure</span>
          </div>
        </div>

        {/* Practical Learning Categories with Specular 3D Glare */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRACTICAL_LEARNING_DATA.map((group, idx) => (
            <Tilt3D
              key={idx}
              maxTilt={10}
              glareOpacity={0.35}
              scale={1.02}
              borderRadius="1rem"
              className="h-full"
            >
              <div className="p-6 rounded-2xl bg-zinc-900/50 hover:bg-zinc-900/90 border border-zinc-800/80 hover:border-purple-500/50 backdrop-blur-md transition-all duration-300 flex flex-col justify-between shadow-xl shadow-black/40 h-full">
                <div>
                  <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-zinc-800">
                    <div className="p-2.5 rounded-xl bg-purple-950/60 text-purple-400 border border-purple-500/30">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-display font-bold text-white">
                      {group.category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item, itemIdx) => (
                      <span
                        key={itemIdx}
                        className="px-3 py-1.5 rounded-lg text-xs font-mono bg-zinc-850/90 text-zinc-200 border border-zinc-750 hover:border-purple-500/40 hover:text-purple-200 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 text-[11px] font-mono text-zinc-400">
                  <span>{group.items.length} tools & workflows applied</span>
                </div>
              </div>
            </Tilt3D>
          ))}
        </div>

      </div>
    </section>
  );
};
