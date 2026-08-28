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
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce solution with real-time inventory management, secure payments, and admin dashboard',
      technologies: ['Next.js', 'TypeScript', 'Tailwind', 'Stripe', 'PostgreSQL'],
      link: '#',
    },
    {
      id: 2,
      title: 'Real-Time Collaboration Tool',
      description: 'Collaborative workspace for teams with live editing, comments, and version control features',
      technologies: ['React', 'Node.js', 'WebSocket', 'MongoDB', 'Redux'],
      link: '#',
    },
    {
      id: 3,
      title: 'Analytics Dashboard',
      description: 'Comprehensive data visualization and analytics platform with real-time metrics and customizable reports',
      technologies: ['Next.js', 'Chart.js', 'PostgreSQL', 'Prisma', 'D3.js'],
      link: '#',
    },
    {
      id: 4,
      title: 'Social Media App',
      description: 'Feature-rich social platform with user authentication, posts, messaging, and notification system',
      technologies: ['React Native', 'Firebase', 'Redux', 'Express', 'Node.js'],
      link: '#',
    },
    {
      id: 5,
      title: 'AI Content Generator',
      description: 'AI-powered content creation tool leveraging modern language models with subscription management',
      technologies: ['Next.js', 'OpenAI', 'TypeScript', 'Prisma', 'Stripe'],
      link: '#',
    },
    {
      id: 6,
      title: 'Project Management System',
      description: 'Team project management tool with kanban boards, task tracking, time management, and collaboration features',
      technologies: ['Vue.js', 'Node.js', 'PostgreSQL', 'Socket.io', 'Docker'],
      link: '#',
    },
  ]);

  const [isVisible, setIsVisible] = useState(false);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('portfolio-section');
    if (element) observer.observe(element);

    return () => element && observer.unobserve(element);
  }, []);

  return (
    <section id="portfolio" className="py-20 px-4 bg-slate-900/50 relative overflow-hidden">
      <div id="portfolio-section" className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center text-white">
          Featured <span className="text-accent">Projects</span>
        </h2>
        <p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto">
          A selection of my recent work showcasing diverse solutions and technical expertise
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`transition-all duration-700 transform ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div
                className={`h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-6 border transition-all duration-300 overflow-hidden relative group ${
                  hoveredId === project.id
                    ? 'border-accent shadow-lg shadow-blue-500/20 transform scale-105'
                    : 'border-slate-700 hover:border-blue-500/50'
                }`}
              >
                {/* Animated gradient background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-40 object-cover rounded mb-4 group-hover:scale-110 transition-transform duration-300"
                    />
                  )}
                  
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`text-xs px-3 py-1 rounded-full transition-all duration-300 ${
                          hoveredId === project.id
                            ? 'bg-accent/30 text-accent border border-accent/50'
                            : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <a
                    href={project.link}
                    className="inline-flex items-center text-accent hover:text-blue-300 font-medium transition-all duration-300 group/link"
                  >
                    View Project
                    <svg className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
