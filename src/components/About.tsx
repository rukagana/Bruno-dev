'use client';

import { useEffect, useState } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about-section');
    if (element) observer.observe(element);

    return () => element && observer.unobserve(element);
  }, []);

  return (
    <section id="about" className="py-20 px-4 bg-slate-900/50 relative overflow-hidden">
      <div id="about-section" className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image/Visual */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative">
              <div className="w-full aspect-square bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg border border-blue-500/30 p-8 flex items-center justify-center">
                <div className="text-6xl font-bold text-center">
                  <p className="text-accent mb-4">👨‍💻</p>
                  <p className="text-3xl font-bold text-white">Full-Stack Developer</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-lg blur-lg"></div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h2 className="text-4xl font-bold mb-6 text-white">
              About <span className="text-accent">Me</span>
            </h2>
            
            <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
              <p>
                I'm a passionate developer with a deep love for creating beautiful and functional web applications. With expertise in modern web technologies, I transform ideas into reality.
              </p>
              <p>
                I specialize in building scalable, performant applications using cutting-edge technologies like Next.js, TypeScript, and PostgreSQL. My focus is on delivering exceptional user experiences and clean, maintainable code.
              </p>
              <p>
                Beyond coding, I'm constantly learning, experimenting with new technologies, and exploring innovative solutions to complex problems. I believe in the power of collaboration and open-source contribution.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="p-4 bg-slate-800 rounded-lg border border-blue-500/30 hover:border-blue-500/60 transition-all duration-300">
                <p className="text-2xl font-bold text-accent">5+</p>
                <p className="text-slate-400">Years Experience</p>
              </div>
              <div className="p-4 bg-slate-800 rounded-lg border border-blue-500/30 hover:border-blue-500/60 transition-all duration-300">
                <p className="text-2xl font-bold text-accent">20+</p>
                <p className="text-slate-400">Projects Completed</p>
              </div>
              <div className="p-4 bg-slate-800 rounded-lg border border-blue-500/30 hover:border-blue-500/60 transition-all duration-300">
                <p className="text-2xl font-bold text-accent">15+</p>
                <p className="text-slate-400">Happy Clients</p>
              </div>
              <div className="p-4 bg-slate-800 rounded-lg border border-blue-500/30 hover:border-blue-500/60 transition-all duration-300">
                <p className="text-2xl font-bold text-accent">10+</p>
                <p className="text-slate-400">Technologies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
