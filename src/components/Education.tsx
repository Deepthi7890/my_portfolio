import React from 'react';
import { GraduationCap, Award, Calendar, BookOpen, Building2 } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';
import { Tilt3D } from './Tilt3D';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-24 bg-transparent relative border-t border-zinc-900/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-purple-400 font-semibold">
              ACADEMICS
            </span>
            <div className="h-[1px] w-8 bg-purple-500/40" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Education
          </h2>
        </div>

        {/* Education Timeline / Primary Card with 3D Specular Glare */}
        <div className="max-w-4xl">
          <Tilt3D maxTilt={6} glareOpacity={0.3} scale={1.01} borderRadius="1.25rem">
            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/60 border border-purple-500/40 backdrop-blur-md shadow-2xl shadow-black/60 relative overflow-hidden">
              
              {/* Top Accent Gradient Bar */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-purple-500 via-violet-400 to-indigo-500" />

              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                <div className="space-y-1">
                  <span className="text-xs font-mono text-purple-400 uppercase tracking-wider font-semibold">
                    UNDERGRADUATE DEGREE
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                    {EDUCATION_DATA.degree}
                  </h3>
                  <h4 className="text-lg sm:text-xl font-display font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-violet-300">
                    {EDUCATION_DATA.specialization}
                  </h4>
                </div>

                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/70 text-purple-300 border border-purple-500/40 text-xs font-mono shrink-0 shadow-inner">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{EDUCATION_DATA.duration}</span>
                </div>
              </div>

              {/* Institution Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-6 mb-6 border-b border-zinc-800">
                <div className="flex items-start gap-3 text-sm text-zinc-300">
                  <div className="p-2.5 rounded-xl bg-zinc-800/90 text-purple-400 shrink-0 border border-zinc-700">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-mono text-zinc-400 uppercase">College</span>
                    <span className="font-medium text-white">{EDUCATION_DATA.college}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm text-zinc-300">
                  <div className="p-2.5 rounded-xl bg-zinc-800/90 text-purple-400 shrink-0 border border-zinc-700">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-mono text-zinc-400 uppercase">Affiliated University</span>
                    <span className="font-medium text-white">{EDUCATION_DATA.university}</span>
                  </div>
                </div>
              </div>

              {/* Academic Performance Metrics Cards with Mini Specular Glare */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <Tilt3D maxTilt={8} glareOpacity={0.35} scale={1.02} borderRadius="0.75rem">
                  <div className="p-4 rounded-xl bg-[#0b0a14]/90 backdrop-blur-sm border border-zinc-800 hover:border-purple-500/40 transition-colors h-full flex flex-col justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block mb-1">
                      Cumulative GPA
                    </span>
                    <span className="text-2xl sm:text-3xl font-display font-bold text-white text-glow">
                      {EDUCATION_DATA.cgpa}
                    </span>
                    <span className="text-[10px] text-zinc-400 block mt-1 font-mono">Out of 10.0</span>
                  </div>
                </Tilt3D>

                <Tilt3D maxTilt={8} glareOpacity={0.35} scale={1.02} borderRadius="0.75rem">
                  <div className="p-4 rounded-xl bg-[#0b0a14]/90 backdrop-blur-sm border border-zinc-800 hover:border-purple-500/40 transition-colors h-full flex flex-col justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block mb-1">
                      Aggregate Percentage
                    </span>
                    <span className="text-2xl sm:text-3xl font-display font-bold text-purple-300">
                      {EDUCATION_DATA.percentage}
                    </span>
                    <span className="text-[10px] text-zinc-400 block mt-1 font-mono">Academic Standing</span>
                  </div>
                </Tilt3D>

                <Tilt3D maxTilt={8} glareOpacity={0.35} scale={1.02} borderRadius="0.75rem" className="col-span-2 sm:col-span-1">
                  <div className="p-4 rounded-xl bg-[#0b0a14]/90 backdrop-blur-sm border border-zinc-800 hover:border-purple-500/40 transition-colors flex flex-col justify-between h-full">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block mb-1">
                      Academic Status
                    </span>
                    <span className="text-sm font-semibold text-zinc-200">
                      {EDUCATION_DATA.status}
                    </span>
                    <span className="text-[10px] text-emerald-400 block mt-1 font-mono">Graduating 2027</span>
                  </div>
                </Tilt3D>
              </div>

            </div>
          </Tilt3D>
        </div>

      </div>
    </section>
  );
};
