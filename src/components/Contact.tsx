'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
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

    const element = document.getElementById('contact-section');
    if (element) observer.observe(element);

    return () => element && observer.unobserve(element);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSuccess(true);
        reset();
        setTimeout(() => setSuccess(false), 5000);
      }
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      <div id="contact-section" className="max-w-4xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold mb-4 text-center text-white">
            Get In <span className="text-accent">Touch</span>
          </h2>
          <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities. Let's connect!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            { icon: '📧', title: 'Email', value: 'hello@bruno.dev', color: 'blue' },
            { icon: '📍', title: 'Location', value: 'Earth, Via Internet', color: 'purple' },
            { icon: '⏰', title: 'Availability', value: 'Open for opportunities', color: 'cyan' },
          ].map((item, index) => (
            <div
              key={index}
              className={`transition-all duration-700 transform ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-accent/50 text-center transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                <p className="text-4xl mb-2">{item.icon}</p>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-slate-300">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className={`bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-8 space-y-6 border border-slate-700 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-200 mb-2">Full Name</label>
              <input
                {...register('name')}
                type="text"
                className="w-full px-4 py-3 bg-slate-700/50 rounded-lg border border-slate-600 text-white placeholder-slate-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all duration-300"
                placeholder="John Doe"
              />
              {errors.name && (
                <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                  <span>✕</span> {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-200 mb-2">Email Address</label>
              <input
                {...register('email')}
                type="email"
                className="w-full px-4 py-3 bg-slate-700/50 rounded-lg border border-slate-600 text-white placeholder-slate-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all duration-300"
                placeholder="john@example.com"
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                  <span>✕</span> {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-200 mb-2">Subject</label>
            <input
              {...register('subject')}
              type="text"
              className="w-full px-4 py-3 bg-slate-700/50 rounded-lg border border-slate-600 text-white placeholder-slate-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all duration-300"
              placeholder="Let's discuss..."
            />
            {errors.subject && (
              <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                <span>✕</span> {errors.subject.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-200 mb-2">Message</label>
            <textarea
              {...register('message')}
              rows={5}
              className="w-full px-4 py-3 bg-slate-700/50 rounded-lg border border-slate-600 text-white placeholder-slate-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all duration-300 resize-none"
              placeholder="Your message here..."
            ></textarea>
            {errors.message && (
              <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                <span>✕</span> {errors.message.message}
              </p>
            )}
          </div>

          {success && (
            <div className="bg-green-500/20 border border-green-500/50 text-green-200 px-4 py-3 rounded-lg flex items-center gap-2 animate-fade-in-up">
              <span>✓</span> Message sent successfully! I'll get back to you soon.
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Sending...
              </>
            ) : (
              <>
                Send Message
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
