import React from 'react';
import { Github, ArrowUpRight, CheckCircle, Sparkles, Users } from 'lucide-react';
import { Project } from '../types';
import { Tilt3D } from './Tilt3D';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <Tilt3D
      id={`project-card-${project.id}`}
      className="h-full"
      maxTilt={10}
      glareOpacity={0.18}
      scale={1.02}
    >
      <div className="relative rounded-2xl bg-[#0a0a12] border border-zinc-800 hover:border-purple-500/60 transition-colors duration-300 flex flex-col justify-between group overflow-hidden shadow-2xl shadow-black/60 h-full">
        {/* Ambient Gradient Glow at Card Top */}
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-purple-900/20 to-transparent pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity" />

        {/* Main Content Area */}
        <div className="p-6 sm:p-8 relative z-10">
          
          {/* Card Header: Number & Category */}
          <div className="flex items-center justify-between gap-2 mb-4">
            <div className="flex items-center gap-2.5">
              <span className="font-mono text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-300">
                {project.number}
              </span>
              <div className="h-4 w-[1px] bg-zinc-800" />
              <span className="text-xs font-mono font-semibold text-purple-300 tracking-wider uppercase px-2.5 py-0.5 rounded-md bg-purple-950/60 border border-purple-500/30">
                {project.category}
              </span>
            </div>

            {project.isTeamProject && (
              <div className="flex items-center gap-1 text-[11px] font-mono text-violet-300 px-2 py-0.5 rounded bg-violet-950/50 border border-violet-500/40">
                <Users className="w-3 h-3" />
                <span>Team Project</span>
              </div>
            )}
          </div>

          {/* Project Title */}
          <h3
            onClick={() => onSelect(project)}
            className="text-xl sm:text-2xl font-display font-bold text-white mb-3 group-hover:text-purple-200 transition-colors cursor-pointer"
          >
            {project.title}
          </h3>

          {/* Role Highlight if applicable */}
          {project.roleHighlight && (
            <div className="mb-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-purple-950/70 border border-purple-500/40 text-xs font-semibold text-purple-200">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>{project.roleHighlight}</span>
            </div>
          )}

          {/* Description */}
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light mb-6">
            {project.description}
          </p>

          {/* Key Features List */}
          <div className="space-y-2 mb-6">
            <h4 className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-semibold">
              Key Highlights:
            </h4>
            <ul className="space-y-1.5">
              {project.features.slice(0, 3).map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-zinc-300 font-light">
                  <CheckCircle className="w-3.5 h-3.5 text-purple-400/90 shrink-0 mt-0.5" />
                  <span className="line-clamp-2">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Chips */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-zinc-900/90 text-zinc-200 border border-zinc-800 group-hover:border-purple-500/30 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Card Footer: Action Links */}
        <div className="px-6 sm:px-8 py-4 bg-zinc-950/90 border-t border-zinc-850 flex items-center justify-between gap-3 relative z-10">
          <button
            onClick={() => onSelect(project)}
            className="text-xs font-mono font-semibold text-purple-300 hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
          >
            <span>Architecture & Code</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GitHub repository for ${project.title}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold text-white bg-zinc-900 hover:bg-purple-950 border border-zinc-750 hover:border-purple-500/50 transition-all shadow-sm"
            >
              <Github className="w-3.5 h-3.5 text-purple-400" />
              <span>GitHub</span>
            </a>
          ) : (
            <span className="text-[11px] font-mono text-zinc-400 italic">
              Internal Team Repo
            </span>
          )}
        </div>
      </div>
    </Tilt3D>
  );
};
