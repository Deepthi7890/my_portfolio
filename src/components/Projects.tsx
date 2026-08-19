import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { ProjectDetailModal } from './ProjectDetailModal';
import { Project } from '../types';
import { Sparkles, Filter } from 'lucide-react';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai-ml', label: 'AI / ML' },
    { id: 'data', label: 'Data' },
    { id: 'nlp', label: 'NLP' },
    { id: 'computer-vision', label: 'Computer Vision' },
    { id: 'web-dev', label: 'Web Development' },
  ];

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'ai-ml') {
      return (
        project.filterCategory === 'ai-ml' ||
        project.filterCategory === 'computer-vision' ||
        project.filterCategory === 'nlp'
      );
    }
    if (activeFilter === 'data') {
      return (
        project.filterCategory === 'data' ||
        project.id === 'doc-analysis' ||
        project.id === 'spam-email'
      );
    }
    return project.filterCategory === activeFilter;
  });

  return (
    <section id="projects" className="py-20 md:py-28 bg-transparent relative border-t border-zinc-900/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-purple-400 font-semibold">
                PORTFOLIO
              </span>
              <div className="h-[1px] w-8 bg-purple-500/40" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
              Featured Projects
            </h2>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span>Practical Implementations in AI, ML & Software</span>
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          <Filter className="w-4 h-4 text-zinc-500 shrink-0 ml-1 mr-2 hidden sm:inline" />
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                id={`filter-tab-${tab.id}`}
                className={`px-4 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-950/80 font-semibold'
                    : 'bg-zinc-900/70 text-zinc-400 hover:text-white hover:bg-zinc-850 border border-zinc-800 backdrop-blur-sm'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

        {/* Project Detail Modal */}
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
};
