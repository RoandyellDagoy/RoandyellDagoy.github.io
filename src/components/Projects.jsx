import React from 'react';
import ProjectCard from './ProjectCard';
import { projectsData } from '../data/projectsData';
import { content } from '../data/content';

function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="font-display text-3xl font-bold mb-2 text-center">{content.projects.title}</h2>
      <div className="gold-line mx-auto mb-10" />
      <div className="grid gap-8 md:grid-cols-3">
        {projectsData.map((p) => (
          <ProjectCard key={p.id} {...p} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
