'use client';

import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-primary via-slate-900 to-primary">
      <Navbar />
      <Hero />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}
