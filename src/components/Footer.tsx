'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary border-t border-slate-700 py-8 px-4">
      <div className="max-w-6xl mx-auto text-center text-slate-400">
        <p>© {currentYear} Bruno Dev. All rights reserved.</p>
        <div className="mt-4 flex justify-center gap-6">
          <a href="#" className="hover:text-accent transition-colors">
            GitHub
          </a>
          <a href="#" className="hover:text-accent transition-colors">
            LinkedIn
          </a>
          <a href="#" className="hover:text-accent transition-colors">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
