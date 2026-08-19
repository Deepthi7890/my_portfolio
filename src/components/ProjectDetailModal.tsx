import React, { useEffect } from 'react';
import { X, Github, ExternalLink, CheckCircle, Code2, Server, Layers, AlertCircle, Sparkles } from 'lucide-react';
import { Project } from '../types';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      id="project-detail-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0d0c16] border border-purple-500/40 p-6 sm:p-8 shadow-2xl shadow-purple-950/50 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-zinc-800">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-purple-950/80 text-purple-300 border border-purple-500/40">
              PROJECT {project.number}
            </span>
            <span className="text-xs font-mono text-zinc-400">
              {project.category}
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Project Title & Role Highlight */}
        <div className="space-y-3 mb-6">
          <h2 id="modal-project-title" className="text-2xl sm:text-3xl font-display font-bold text-white">
            {project.title}
          </h2>

          {project.roleHighlight && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/80 border border-violet-500/40 text-xs font-semibold text-violet-200">
              <Sparkles className="w-3.5 h-3.5 text-violet-400" />
              <span>{project.roleHighlight} (Team Collaboration)</span>
            </div>
          )}
        </div>

        {/* Description */}
        <div className="mb-6">
          <h4 className="text-xs font-mono uppercase tracking-wider text-purple-400 mb-2 font-semibold">
            Overview & Architecture
          </h4>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
            {project.description}
          </p>
        </div>

        {/* Important Clarification Note if present */}
        {project.importantNote && (
          <div className="mb-6 p-4 rounded-xl bg-purple-950/30 border border-purple-500/30 flex items-start gap-3 text-xs text-purple-200">
            <AlertCircle className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
            <p className="leading-relaxed">{project.importantNote}</p>
          </div>
        )}

        {/* Key Features List */}
        <div className="mb-6">
          <h4 className="text-xs font-mono uppercase tracking-wider text-purple-400 mb-3 font-semibold">
            Key Implemented Features
          </h4>
          <ul className="space-y-2.5">
            {project.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                <CheckCircle className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technology Stack Breakdown */}
        {project.isTeamProject && project.backendTechnologies ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="p-4 rounded-xl bg-zinc-900/60 border border-purple-500/30">
              <div className="flex items-center gap-2 mb-2 text-xs font-mono text-purple-300 uppercase font-semibold">
                <Server className="w-3.5 h-3.5" />
                <span>My Contribution (Backend)</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.backendTechnologies.map((t, idx) => (
                  <span key={idx} className="text-[11px] font-mono px-2 py-0.5 rounded bg-purple-950/60 text-purple-200 border border-purple-500/30">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
              <div className="flex items-center gap-2 mb-2 text-xs font-mono text-zinc-400 uppercase font-semibold">
                <Layers className="w-3.5 h-3.5" />
                <span>Team Project Frontend</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.frontendTechnologies?.map((t, idx) => (
                  <span key={idx} className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="mb-8">
            <h4 className="text-xs font-mono uppercase tracking-wider text-purple-400 mb-2 font-semibold">
              Technologies & Libraries
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-purple-950/50 text-purple-200 border border-purple-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Modal Footer Links */}
        <div className="pt-5 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-4">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-white bg-purple-900 hover:bg-purple-800 border border-purple-500/40 transition-all shadow-md shadow-purple-950/50"
            >
              <Github className="w-4 h-4" />
              <span>View GitHub Repository</span>
            </a>
          ) : (
            <div className="text-xs font-mono text-zinc-400 italic">
              Collaborative Team Project — Repository Managed Internally
            </div>
          )}

          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl text-xs font-medium text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-800 transition-colors"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};
