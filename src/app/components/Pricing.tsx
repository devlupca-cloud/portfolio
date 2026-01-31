"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

const services = [
  {
    id: 'development',
    label: 'Full-Stack Development',
    color: 'from-blue-500 via-purple-500 to-pink-500',
    price: 'CAD $60',
    period: '/hour',
    title: 'Full-Stack Development',
    subtitle: 'Web & Mobile Applications',
    description: 'Complete development solutions from frontend to backend. Ideal for startups, SaaS, and digital products.',
    features: [
      'React, Next.js, Node.js',
      'React Native & Flutter',
      'Database & API Development',
      'Cloud Deployment (AWS, GCP)',
      'Performance Optimization',
      'Code Review & Testing'
    ],
    cta: 'Get Started',
    icon: '⚡',
    badge: 'Development'
  },
  {
    id: 'design',
    label: 'UI/UX Design',
    color: 'from-emerald-500 via-teal-500 to-cyan-500',
    price: 'CAD $55',
    period: '/hour',
    title: 'UI/UX Design',
    subtitle: 'User Interface & Experience',
    description: 'Beautiful and intuitive user experiences. Perfect for apps, websites, and branding.',
    features: [
      'Wireframing & Prototyping',
      'User Interface Design',
      'User Experience Research',
      'Design Systems & Style Guides',
      'Responsive Design',
      'Design-to-Development Handoff'
    ],
    cta: 'Get Started',
    icon: '✨',
    badge: 'Design'
  },
  {
    id: 'consulting',
    label: 'Business & Analytics',
    color: 'from-orange-500 via-red-500 to-pink-500',
    price: 'CAD $70',
    period: '/hour',
    title: 'Business & Analytics',
    subtitle: 'Strategy & Data Solutions',
    description: 'Data-driven business insights and optimization. For companies that want to grow smarter.',
    features: [
      'Technical Architecture Planning',
      'Data Analytics & Visualization',
      'Business Process Optimization',
      'Technology Stack Recommendations',
      'Performance Audits',
      'Scalability Planning'
    ],
    cta: 'Get Quote',
    icon: '🎯',
    badge: 'Consulting'
  }
];

const Pricing = () => {
  const [selected, setSelected] = useState('development');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const activeService = services.find(s => s.id === selected);
  if (!activeService) return null;

  return (
    <section id="pricing" className="relative py-20 bg-[var(--brand-background)] min-h-[400px] overflow-hidden">
      {/* Blur effect at the bottom */}
      <div className="pointer-events-none fixed left-0 bottom-0 w-full h-40 md:h-48 bg-gradient-to-t from-[color-mix(in_srgb,var(--brand-primary)_40%,transparent)] via-[color-mix(in_srgb,var(--brand-primary)_20%,transparent)] to-transparent backdrop-blur-lg z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--brand-primary)]/40 to-transparent mb-8" />
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-center text-white">
            <span className="text-[var(--brand-primary)]">Pricing</span> & Services
          </h2>
          <p className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto">
            Clear costs, no sneaky fees. Choose the service that fits your needs.
          </p>
        </div>
        {/* Tabs */}
        <div className="flex justify-center gap-2 md:gap-6 mb-10">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setSelected(service.id)}
              className={`px-8 py-3 rounded-full font-bold text-base md:text-lg transition-all duration-200 border-2 focus:outline-none
                ${selected === service.id
                  ? 'bg-[var(--brand-primary-strong)] text-white border-transparent shadow-md'
                  : 'bg-[var(--surface-2)] text-[var(--brand-primary)]/80 border-[var(--border)] hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)]'}`}
              style={{ minWidth: 220 }}
            >
              {service.label}
            </button>
          ))}
        </div>
        {/* Card */}
        <div className={`mx-auto w-full max-w-5xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative rounded-2xl shadow-xl border border-[var(--border)] bg-[var(--brand-muted)] flex flex-col md:flex-row items-center md:items-stretch min-h-[220px]">
            {/* Icon & Badge */}
            <div className="flex flex-col items-center md:items-start justify-center w-full md:w-1/4 p-8 gap-2">
              <div className="w-16 h-16 flex items-center justify-center rounded-xl text-3xl mb-2 bg-[var(--brand-primary)] shadow-md">
                {activeService.icon}
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[var(--brand-primary-strong)] text-white mb-1">
                {activeService.badge}
              </span>
              <div className="text-xl font-bold text-white mb-1 text-center md:text-left">{activeService.title}</div>
              <h3 className="text-lg md:text-xl font-semibold text-[#d76b2a] mb-1 text-center md:text-left">{activeService.subtitle}</h3>
            </div>
            {/* Content */}
            <div className="flex-1 w-full flex flex-col justify-center p-8">
              <div className="flex items-baseline gap-2 mb-1 justify-start">
                <span className="text-3xl md:text-4xl font-extrabold text-white">{activeService.price}</span>
                <span className="text-[var(--text-muted)] text-base">{activeService.period}</span>
              </div>
              <div className="text-[var(--text-muted)] mb-3 text-base">{activeService.description}</div>
              <ul className="mb-4 space-y-1">
                {activeService.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-[var(--text-muted)] text-sm">
                    <svg className="w-4 h-4 text-[var(--brand-primary)] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full md:w-auto py-3 px-8 rounded-lg font-bold text-white transition-all duration-300 bg-[var(--brand-primary-strong)] hover:bg-[var(--brand-primary)] hover:scale-105 shadow-md text-base mt-2">
                {activeService.cta}
              </button>
              <div className="text-xs text-[var(--text-subtle)] mt-2 text-center md:text-left">Minimum 2 hours per project</div>
            </div>
          </div>
        </div>
        {/* CTA for custom quote */}
        <div className="text-center mt-14">
          <p className="text-[var(--text-muted)] mb-4">
            Precisa de uma solução personalizada ou quer combinar serviços?
          </p>
          <Link
            href="/en/contact"
            className="inline-flex items-center px-8 py-4 bg-[var(--brand-primary-strong)] hover:bg-[var(--brand-primary)] text-white rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Solicitar orçamento personalizado
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Pricing; 