'use client';

import { useEffect, useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  link?: string;
}

export default function Portfolio() {
  const [projects, setProjects] = useState<Project[]>([
    {
      id: 1,
      title: 'Project One',
      description: 'A full-stack web application built with Next.js',
      technologies: ['Next.js', 'TypeScript', 'Tailwind'],
      link: '#',
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'Real-time collaboration platform',
      technologies: ['React', 'Node.js', 'WebSocket'],
      link: '#',
    },
    {
      id: 3,
      title: 'Project Three',
      description: 'Mobile-first e-commerce solution',
      technologies: ['Next.js', 'Prisma', 'PostgreSQL'],
      link: '#',
    },
  ]);

  return (
    <section id="portfolio" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">
          Featured <span className="text-accent">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-800 rounded-lg p-6 hover:shadow-lg hover:shadow-accent/20 transition-all"
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover rounded mb-4"
                />
              )}
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-slate-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-accent/20 text-accent px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="text-accent hover:text-blue-400 font-medium"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
