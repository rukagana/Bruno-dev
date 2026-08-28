'use client';

import { useEffect, useState } from 'react';

const socialLinks = [
  { icon: '𝒢', name: 'GitHub', url: '#', color: 'hover:text-slate-300' },
  { icon: '𝙸', name: 'LinkedIn', url: '#', color: 'hover:text-blue-400' },
  { icon: '𝕿', name: 'Twitter', url: '#', color: 'hover:text-cyan-400' },
  { icon: '✉', name: 'Email', url: 'mailto:hello@bruno.dev', color: 'hover:text-accent' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
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

    const element = document.getElementById('footer-section');
    if (element) observer.observe(element);

    return () => element && observer.unobserve(element);
  }, []);

  return (
    <footer id="footer-section" className="bg-gradient-to-t from-primary via-slate-900 to-primary border-t border-slate-700 py-12 px-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main content */}
        <div className="grid md:grid-cols-3 gap-8 mb-12 pb-12 border-b border-slate-700/50">
          {/* Brand section */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">
              Bruno.dev
            </h3>
            <p className="text-slate-400 text-sm">
              Crafting beautiful and functional web experiences with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className={`transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-slate-400 hover:text-accent transition-colors duration-300 text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {['Web Development', 'Full-Stack Solutions', 'API Design', 'Database Architecture', 'DevOps'].map((item) => (
                <li key={item}>
                  <span className="text-slate-400 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links and Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Social Links */}
          <div className={`flex gap-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className={`w-10 h-10 flex items-center justify-center rounded-full border border-slate-600 ${link.color} transition-all duration-300 hover:border-accent hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20`}
                title={link.name}
              >
                <span className="text-lg">{link.icon}</span>
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className={`text-center md:text-right text-slate-400 text-sm transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <p>© {currentYear} Bruno Dev. All rights reserved.</p>
            <p className="text-xs text-slate-500 mt-1">
              Designed & Built with <span className="text-red-500">❤</span> by Bruno
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
