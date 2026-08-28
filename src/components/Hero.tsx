'use client';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 text-center"
    >
      <div className="max-w-2xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
          Hi, I'm <span className="text-accent">Bruno</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 mb-8">
          A full-stack developer crafting beautiful and functional web experiences
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="#portfolio"
            className="px-8 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-blue-600"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent hover:text-primary"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
