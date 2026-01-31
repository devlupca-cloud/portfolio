import React from 'react';
import Link from 'next/link';

export default function WhyWorkWithUs() {
  return (
    <section className="relative py-24 bg-[var(--brand-background)] text-white overflow-hidden">
      {/* Separador superior */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12" />
      
      {/* Elementos gráficos */}
      <div className="absolute left-0 top-10 w-32 h-32 bg-[color-mix(in_srgb,var(--brand-primary)_60%,black)] opacity-30 rounded-lg -z-10"></div>
      <div className="absolute right-0 bottom-0 w-40 h-40 border-4 border-white rounded-lg opacity-40 -z-10"></div>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
        {/* Texto */}
        <div className="flex-1 pl-0 md:pl-16 lg:pl-24">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            <span className="text-[var(--brand-primary)]">Por que escolher</span> a Devlup?
          </h2>
          <p className="text-lg text-[var(--text-muted)] mb-8 max-w-xl">
            Não somos freelancers, somos seu time de produto. Desde 2019 transformando ideias em produtos digitais escaláveis para startups e empresas.
          </p>
          
          {/* Diferenciais */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-[var(--surface-2)] border border-[var(--border)] rounded-lg p-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[var(--brand-primary)] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">Time Dedicado</h3>
                  <p className="text-sm text-[var(--text-muted)]">Equipe focada exclusivamente no seu projeto, com comunicação clara e entregas pontuais.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-[var(--surface-2)] border border-[var(--border)] rounded-lg p-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[var(--brand-primary)] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">Metodologia Ágil</h3>
                  <p className="text-sm text-[var(--text-muted)]">Sprints organizados, feedback constante e iterações rápidas para validar e ajustar.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-[var(--surface-2)] border border-[var(--border)] rounded-lg p-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[var(--brand-primary)] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">Suporte Pós-Lançamento</h3>
                  <p className="text-sm text-[var(--text-muted)]">Manutenção contínua, atualizações e suporte técnico após o lançamento.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-[var(--surface-2)] border border-[var(--border)] rounded-lg p-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[var(--brand-primary)] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">Orçamento Transparente</h3>
                  <p className="text-sm text-[var(--text-muted)]">Sem surpresas. Proposta clara, prazos realistas e acompanhamento constante.</p>
                </div>
              </div>
            </div>
          </div>
          
          <Link
            href="/en/contact"
            className="inline-block px-8 py-3 bg-[var(--brand-primary-strong)] text-white rounded-md font-semibold hover:bg-[var(--brand-primary)] transition-colors shadow-md"
          >
            Vamos conversar sobre seu projeto
          </Link>
        </div>
        {/* Elementos gráficos ou foto (opcional) */}
        <div className="flex-1 flex items-center justify-center relative">
          <div
            className="w-64 h-64 rounded-2xl absolute -top-8 -right-8 -z-10"
            style={{ backgroundColor: 'rgba(215,107,42,0.35)' }}
          ></div>
          <div
            className="w-56 h-56 rounded-2xl absolute top-12 right-12 -z-5"
            style={{ backgroundColor: 'rgba(60,92,213,0.45)' }}
          ></div>
          {/* Você pode colocar uma foto de vocês aqui, se quiser */}
        </div>
      </div>
    </section>
  );
} 