import React from 'react';
import ProjectCard from './ProjectCard';
import { projectsData } from '../data/projectsData';

function Projects() {
  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center items-center text-justify px-6 py-20">
      <h2 className="text-3xl font-bold text-center mb-10">My Projects</h2>

      <div className="grid gap-8 md:grid-cols-3 max-w-6xl w-full">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            image={project.image}
            alt={project.alt}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
