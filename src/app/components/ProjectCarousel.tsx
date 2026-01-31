import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    image: '/project1-placeholder.jpg',
    title: 'Transportation Management System',
    description: 'Sistema completo para empresas de transporte com rastreamento em tempo real, otimização de rotas e gestão de frota.',
    techs: ['React Native', 'Node.js', 'Firebase'],
    challenge: 'Empresa precisava modernizar gestão de frota',
    solution: 'App mobile + dashboard web integrados',
    result: 'Redução de 60% no tempo de processamento',
    badge: 'Case de Sucesso',
  },
  {
    image: '/project2-placeholder.jpg',
    title: 'Agribusiness Platform',
    description: 'Solução de transformação digital para agronegócio, incluindo gestão de cultivos, controle de estoque e análise de mercado.',
    techs: ['Flutter', 'Python', 'Power BI'],
    challenge: 'Necessidade de digitalizar processos manuais',
    solution: 'Plataforma completa com analytics',
    result: 'Aumento de 40% na eficiência operacional',
    badge: 'Case de Sucesso',
  },
  {
    image: '/project3-placeholder.jpg',
    title: 'Cross-Platform Mobile App',
    description: 'Aplicativo mobile de sucesso disponível em iOS e Android, com UI/UX moderna e performance nativa.',
    techs: ['React Native', 'Supabase', 'GCP'],
    challenge: 'MVP rápido para validar ideia',
    solution: 'App multiplataforma com backend escalável',
    result: '10k+ downloads em 3 meses',
    badge: 'Destaque',
  },
  {
    image: '/project4-placeholder.jpg',
    title: 'E-commerce Solution',
    description: 'Plataforma de e-commerce escalável com integração de pagamentos e analytics avançado.',
    techs: ['Next.js', 'Stripe', 'MongoDB'],
    challenge: 'E-commerce que precisava escalar',
    solution: 'Plataforma otimizada para performance',
    result: 'Aumento de 35% na conversão',
    badge: null,
  },
  {
    image: '/project5-placeholder.jpg',
    title: 'Analytics Dashboard',
    description: 'Dashboard para analytics de negócio em tempo real e relatórios automatizados.',
    techs: ['React', 'D3.js', 'AWS'],
    challenge: 'Visualização de dados complexos',
    solution: 'Dashboard interativo e intuitivo',
    result: 'Decisões 3x mais rápidas',
    badge: null,
  },
];

export default function ProjectCarousel() {
  const rowRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // Scroll automático infinito
  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;
    let isResetting = false;
    const scrollStep = 2;
    const interval = setInterval(() => {
      if (!row) return;
      if (isResetting) return;
      row.scrollLeft += scrollStep;
      if (row.scrollLeft >= row.scrollWidth / 2) {
        isResetting = true;
        row.scrollLeft = row.scrollLeft - row.scrollWidth / 2;
        setTimeout(() => { isResetting = false; }, 10);
      }
    }, 20);
    return () => clearInterval(interval);
  }, []);

  // Drag-to-scroll
  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;
    const onMouseDown = (e: MouseEvent) => {
      isDragging.current = true;
      startX.current = e.pageX - row.offsetLeft;
      scrollLeft.current = row.scrollLeft;
      row.classList.add('cursor-grabbing');
    };
    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      e.preventDefault();
      const x = e.pageX - row.offsetLeft;
      const walk = (x - startX.current) * 1.2; // Sensibilidade
      row.scrollLeft = scrollLeft.current - walk;
    };
    const onMouseUp = () => {
      isDragging.current = false;
      row.classList.remove('cursor-grabbing');
    };
    row.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    return () => {
      row.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (!rowRef.current) return;
    const width = rowRef.current.offsetWidth;
    rowRef.current.scrollBy({
      left: direction === 'left' ? -width : width,
      behavior: 'smooth',
    });
  };

  // Renderiza os projetos duas vezes para efeito infinito
  const infiniteProjects = [...projects, ...projects];

  return (
    <section className="py-20 bg-[var(--brand-background)] text-white">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-8 px-4">
          <h2 className="text-3xl font-bold">
            <span className="text-[var(--brand-primary)]">Featured</span> Projects
          </h2>
          <Link href="/projetos" className="px-6 py-2 bg-[var(--brand-primary-strong)] text-white rounded-md font-semibold hover:bg-[var(--brand-primary)] transition-colors shadow-md">
            Ver todos
          </Link>
        </div>
        <div className="relative w-full">
          <button
            aria-label="Scroll left"
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-[var(--surface-2)] hover:bg-[var(--brand-primary)] transition-colors border border-[var(--border)]"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" /></svg>
          </button>
          <div
            ref={rowRef}
            className="flex gap-8 overflow-x-auto scroll-smooth w-full custom-scrollbar-hide select-none cursor-grab"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {infiniteProjects.map((project, idx) => (
              <div
                key={project.title + '-' + idx}
                className="bg-[var(--surface-2)] border border-[var(--border)] rounded-lg overflow-hidden shadow-lg min-w-[420px] max-w-lg flex-shrink-0 scroll-snap-align-start flex flex-col justify-between"
              >
                <div className="relative h-56 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col flex-1 p-6 pb-4">
                  <div>
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      {project.badge && (
                        <span className="px-2 py-1 bg-[var(--brand-primary-strong)] text-white rounded text-xs font-semibold whitespace-nowrap ml-2">
                          {project.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-[var(--text-muted)] mb-4 text-sm">{project.description}</p>
                    
                    {/* Estrutura de Case */}
                    <div className="space-y-2 mb-4 text-xs">
                      <div>
                        <span className="text-[var(--brand-primary)] font-semibold">Desafio: </span>
                        <span className="text-[var(--text-muted)]">{project.challenge}</span>
                      </div>
                      <div>
                        <span className="text-[var(--brand-primary)] font-semibold">Solução: </span>
                        <span className="text-[var(--text-muted)]">{project.solution}</span>
                      </div>
                      <div>
                        <span className="text-[var(--brand-primary)] font-semibold">Resultado: </span>
                        <span className="text-white font-semibold">{project.result}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-[var(--border)]">
                    {project.techs.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-[color-mix(in_srgb,var(--brand-primary)_28%,black)] text-[var(--brand-primary)] rounded text-sm">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            aria-label="Scroll right"
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-[var(--surface-2)] hover:bg-[var(--brand-primary)] transition-colors border border-[var(--border)]"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
        {/* CTA após Projetos */}
        <div className="text-center mt-12 px-4">
          <Link
            href="/en/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[var(--brand-primary-strong)] hover:bg-[var(--brand-primary)] text-white rounded-md font-semibold transition-colors shadow-md"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Quero um projeto assim
          </Link>
        </div>
      </div>
      <style jsx global>{`
        .custom-scrollbar-hide::-webkit-scrollbar { display: none; }
        .custom-scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
} 