'use client';

import { useEffect, useState } from 'react';

interface Skill {
  category: string;
  icon: string;
  items: string[];
}

const skillsData: Skill[] = [
  {
    category: 'Frontend',
    icon: '🎨',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'HTML/CSS'],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    items: ['Node.js', 'Express.js', 'NestJS', 'Python', 'Django', 'GraphQL'],
  },
  {
    category: 'Database',
    icon: '💾',
    items: ['PostgreSQL', 'MongoDB', 'Prisma', 'Firebase', 'Redis', 'MySQL'],
  },
  {
    category: 'Tools & DevOps',
    icon: '🛠️',
    items: ['Git', 'Docker', 'AWS', 'Vercel', 'GitHub Actions', 'CI/CD'],
  },
];

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('skills-section');
    if (element) observer.observe(element);

    return () => element && observer.unobserve(element);
  }, []);

  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      <div id="skills-section" className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center text-white">
          My <span className="text-accent">Skills</span>
        </h2>
        <p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto">
          A comprehensive toolkit of technologies and tools I've mastered to deliver exceptional web solutions
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((skillGroup, index) => (
            <div
              key={index}
              className={`transition-all duration-700 transform ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`h-full p-6 rounded-lg border transition-all duration-300 ${
                  hoveredIndex === index
                    ? 'border-accent bg-slate-800/50 shadow-lg shadow-blue-500/20 transform scale-105'
                    : 'border-slate-700 bg-slate-800/30 hover:border-blue-500/50'
                }`}
              >
                <div className="mb-4">
                  <span className="text-4xl">{skillGroup.icon}</span>
                  <h3 className="text-xl font-semibold text-white mt-2">{skillGroup.category}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item) => (
                    <span
                      key={item}
                      className={`px-3 py-1 rounded-full text-sm transition-all duration-300 ${
                        hoveredIndex === index
                          ? 'bg-accent/30 text-accent border border-accent/50'
                          : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                      }`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
