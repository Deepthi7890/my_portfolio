import React from 'react';
import { Shield, CheckCircle2, UserCheck, Award, Flag } from 'lucide-react';
import { NCC_DATA, SOFT_SKILLS } from '../data/portfolioData';
import { Tilt3D } from './Tilt3D';

export const NCCAndSoftSkills: React.FC = () => {
  return (
    <section id="additional-profile" className="py-20 md:py-24 bg-transparent relative border-t border-zinc-900/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-purple-400 font-semibold">
              PROFILE ATTRIBUTES
            </span>
            <div className="h-[1px] w-8 bg-purple-500/40" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Leadership & Core Competencies
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* NCC Card with 3D Specular Glare (6 Cols) */}
          <div className="lg:col-span-6">
            <Tilt3D maxTilt={8} glareOpacity={0.35} scale={1.02} borderRadius="1rem" className="h-full">
              <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/60 hover:bg-zinc-900/90 border border-purple-500/40 backdrop-blur-md shadow-2xl shadow-black/40 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-5 pb-4 border-b border-zinc-800">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-purple-950/70 text-purple-400 border border-purple-500/30">
                        <Shield className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest block">
                          NATIONAL CADET CORPS
                        </span>
                        <h3 className="text-xl font-display font-bold text-white">
                          {NCC_DATA.title}
                        </h3>
                      </div>
                    </div>

                    <div className="px-2.5 py-1 rounded bg-purple-950/70 text-purple-300 border border-purple-500/40 text-[11px] font-mono font-semibold">
                      Certified
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light mb-6">
                    {NCC_DATA.description}
                  </p>

                  <h4 className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-semibold mb-3">
                    Demonstrated Leadership Competencies:
                  </h4>

                  <div className="grid grid-cols-2 gap-2.5">
                    {NCC_DATA.coreCompetencies.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 rounded-lg bg-[#0d0c18]/90 border border-zinc-800 hover:border-purple-500/30 transition-colors flex items-center gap-2 text-xs font-medium text-zinc-200"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                  <span>Discipline • Execution • Teamwork</span>
                </div>
              </div>
            </Tilt3D>
          </div>

          {/* Soft Skills & Professional Attributes with 3D Specular Glare (6 Cols) */}
          <div className="lg:col-span-6">
            <Tilt3D maxTilt={8} glareOpacity={0.35} scale={1.02} borderRadius="1rem" className="h-full">
              <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/60 hover:bg-zinc-900/90 border border-zinc-800 hover:border-purple-500/40 backdrop-blur-md shadow-2xl shadow-black/40 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-3 mb-5 pb-4 border-b border-zinc-800">
                    <div className="p-2.5 rounded-xl bg-purple-950/70 text-purple-400 border border-purple-500/30">
                      <UserCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest block">
                        INTERPERSONAL & WORK ETHIC
                      </span>
                      <h3 className="text-xl font-display font-bold text-white">
                        Soft Skills
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light mb-6">
                    Collaborative, analytical, and structured mindset developed through technical team projects, problem analysis, and student leadership.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {SOFT_SKILLS.map((skill, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-[#0d0c18]/90 hover:bg-[#121022] border border-zinc-800 hover:border-purple-500/40 transition-colors flex items-center gap-2.5"
                      >
                        <div className="w-2 h-2 rounded-full bg-purple-400" />
                        <span className="text-xs font-semibold text-zinc-200">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-800/80 text-[11px] font-mono text-zinc-400">
                  <span>Applied in engineering & collaborative environments</span>
                </div>
              </div>
            </Tilt3D>
          </div>

        </div>

      </div>
    </section>
  );
};
