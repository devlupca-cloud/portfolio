import React from 'react';
import Link from 'next/link';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'Entendemos seu negócio, objetivos e desafios. Definimos escopo, personas e requisitos técnicos.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Design',
    description: 'Criamos wireframes, protótipos e designs que priorizam UX e conversão. Validação com você a cada etapa.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Development',
    description: 'Desenvolvimento ágil com sprints de 2 semanas. Você acompanha o progresso e dá feedback constante.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Launch',
    description: 'Testes finais, deploy e lançamento. Suporte pós-lançamento, monitoramento e otimizações contínuas.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export default function HowWeWork() {
  return (
    <section className="py-20 bg-[var(--brand-background)] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-center">
          <span className="text-[var(--brand-primary)]">Como</span> Trabalhamos
        </h2>
        <p className="text-center text-[var(--text-muted)] max-w-2xl mx-auto mb-12">
          Processo claro, transparente e focado em resultados. Do conceito ao lançamento, você acompanha cada etapa.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Linha conectora (exceto no último) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-[var(--brand-primary)]/50 to-transparent z-0" style={{ width: 'calc(100% - 2rem)' }} />
              )}
              
              <div className="relative bg-[var(--surface-2)] border border-[var(--border)] rounded-2xl p-6 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-[var(--brand-primary)] rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    {step.icon}
                  </div>
                  <div className="text-4xl font-bold text-[var(--brand-primary)]/30">{step.number}</div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed flex-grow">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link
            href="/en/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[var(--brand-primary-strong)] hover:bg-[var(--brand-primary)] text-white rounded-md font-semibold transition-colors shadow-md"
          >
            Vamos começar seu projeto
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

