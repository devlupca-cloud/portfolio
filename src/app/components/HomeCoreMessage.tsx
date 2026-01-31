'use client';

import { motion } from 'framer-motion';
import type { Locale } from '@/i18n';
import { getContent } from '@/content';

function ArrowConnector() {
  return (
    <div className="hidden lg:flex shrink-0 items-center justify-center w-8 xl:w-10" aria-hidden>
      <svg
        viewBox="0 0 40 24"
        fill="none"
        className="w-full max-w-[40px] text-[var(--brand-primary)] drop-shadow-[0_0_8px_rgba(215,107,42,0.4)] transition-opacity duration-300"
        role="img"
      >
        <path
          d="M0 12h32m0 0l-6-6m6 6l-6 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.85"
        />
      </svg>
    </div>
  );
}

export default function HomeCoreMessage({ locale }: { locale: Locale }) {
  const content = getContent(locale);
  const label = content.coreLabel;
  const message = content.heroAi;
  const timeline = content.coreTimeline;

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Bloco core */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl px-8 py-12 md:px-16 md:py-16 text-center mb-20 md:mb-24"
          style={{
            background: 'linear-gradient(145deg, rgba(215, 107, 42, 0.12) 0%, rgba(215, 107, 42, 0.04) 40%, transparent 70%)',
            boxShadow: '0 0 0 1px rgba(215, 107, 42, 0.2), 0 8px 32px -8px rgba(0,0,0,0.3)',
          }}
        >
          <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand-primary)] mb-5">
            {label}
          </p>
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white max-w-3xl mx-auto leading-snug tracking-tight">
            {message}
          </p>
        </motion.div>

        {/* Timeline de entregáveis — horizontal no desktop, vertical no mobile */}
        <div className="w-full h-auto">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand-primary)]/90 mb-8 md:mb-12 text-center"
          >
            {content.coreDeliverablesLabel}
          </motion.p>

          {/* Desktop: grid 9 colunas = card(1fr) seta(auto) card(1fr) seta(auto) ... — todos os cards iguais */}
          <div
            className="hidden lg:grid items-stretch w-full"
            style={{
              gridTemplateColumns: '1fr auto 1fr auto 1fr auto 1fr auto 1fr',
              gap: '0 0.5rem',
            }}
          >
            {timeline.flatMap((item, i) => [
              <motion.div
                key={`card-${item.step}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex flex-col min-w-0"
              >
                <div
                  className="group relative w-full h-[260px] flex flex-col rounded-3xl p-6 transition-all duration-300 ease-out overflow-hidden flex-1 min-h-0 border border-white/[0.08] hover:border-[var(--brand-primary)]/40 hover:-translate-y-1 hover:scale-[1.02]"
                  style={{
                    background:
                      'linear-gradient(165deg, rgba(28,29,34,0.98) 0%, rgba(22,23,27,0.95) 50%, rgba(18,19,22,0.98) 100%)',
                    boxShadow:
                      'inset 0 1px 0 rgba(255,255,255,0.06), inset 0 -1px 0 rgba(0,0,0,0.2), 0 0 0 1px rgba(215,107,42,0.12), 0 4px 24px -8px rgba(0,0,0,0.5)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      'inset 0 1px 0 rgba(255,255,255,0.08), inset 0 -1px 0 rgba(0,0,0,0.2), 0 0 0 1px rgba(215,107,42,0.35), 0 12px 40px -12px rgba(0,0,0,0.5), 0 0 48px -16px rgba(215,107,42,0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow =
                      'inset 0 1px 0 rgba(255,255,255,0.06), inset 0 -1px 0 rgba(0,0,0,0.2), 0 0 0 1px rgba(215,107,42,0.12), 0 4px 24px -8px rgba(0,0,0,0.5)';
                  }}
                >
                  {/* Top-edge highlight (glass feel) */}
                  <div
                    className="absolute inset-x-0 top-0 h-px rounded-t-3xl opacity-60"
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(215,107,42,0.25), transparent)',
                    }}
                    aria-hidden
                  />
                  <div
                    className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-sm font-bold text-white mb-4 ring-2 ring-[var(--brand-primary)]/30 ring-offset-2 ring-offset-[rgba(18,19,22,0.8)]"
                    style={{
                      background: 'linear-gradient(145deg, var(--brand-primary) 0%, #b35624 100%)',
                      boxShadow:
                        '0 2px 12px -2px rgba(215,107,42,0.5), inset 0 1px 0 rgba(255,255,255,0.2), 0 0 20px -4px rgba(215,107,42,0.3)',
                    }}
                  >
                    {item.step}
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 leading-tight tracking-tight min-w-0 break-words">
                    {item.title}
                  </h3>
                  <span
                    className="inline-flex max-w-full items-center rounded-full px-3 py-1.5 text-xs font-semibold text-[var(--brand-primary)] mb-3 min-w-0 truncate"
                    style={{
                      background: 'linear-gradient(135deg, rgba(215,107,42,0.22) 0%, rgba(215,107,42,0.12) 100%)',
                      border: '1px solid rgba(215,107,42,0.3)',
                      boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)',
                    }}
                    title={item.deliverable}
                  >
                    {item.deliverable}
                  </span>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed mt-auto min-h-0 flex-1 line-clamp-4 break-words overflow-hidden">
                    {item.description}
                  </p>
                </div>
              </motion.div>,
              ...(i < timeline.length - 1 ? [<ArrowConnector key={`arrow-${i}`} />] : []),
            ])}
          </div>

          {/* Mobile / tablet: fluxo vertical */}
          <div className="lg:hidden space-y-0">
            {timeline.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group relative flex gap-4 pb-6 last:pb-0"
              >
                {i < timeline.length - 1 && (
                  <div
                    className="absolute left-[15px] top-12 bottom-0 w-0.5 rounded-full"
                    style={{
                      background: 'linear-gradient(180deg, rgba(215,107,42,0.5) 0%, rgba(215,107,42,0.15) 70%, transparent 100%)',
                    }}
                    aria-hidden
                  />
                )}
                <div
                  className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-sm font-bold text-white ring-2 ring-[var(--brand-primary)]/30 ring-offset-2 ring-offset-[var(--brand-background)]"
                  style={{
                    background: 'linear-gradient(145deg, var(--brand-primary) 0%, #b35624 100%)',
                    boxShadow:
                      '0 2px 12px -2px rgba(215,107,42,0.5), inset 0 1px 0 rgba(255,255,255,0.2), 0 0 16px -4px rgba(215,107,42,0.25)',
                  }}
                >
                  {item.step}
                </div>
                <div
                  className="group/card relative w-full min-w-0 h-[160px] rounded-3xl p-5 transition-all duration-300 flex flex-col shrink-0 overflow-hidden border border-white/[0.08]"
                  style={{
                    background:
                      'linear-gradient(165deg, rgba(28,29,34,0.98) 0%, rgba(22,23,27,0.95) 50%, rgba(18,19,22,0.98) 100%)',
                    boxShadow:
                      'inset 0 1px 0 rgba(255,255,255,0.06), inset 0 -1px 0 rgba(0,0,0,0.2), 0 0 0 1px rgba(215,107,42,0.12), 0 4px 20px -8px rgba(0,0,0,0.4)',
                  }}
                >
                  <div
                    className="absolute inset-x-0 top-0 h-px rounded-t-3xl opacity-60"
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(215,107,42,0.25), transparent)',
                    }}
                    aria-hidden
                  />
                  <div className="relative flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="text-base font-bold text-white tracking-tight">{item.title}</h3>
                    <span
                      className="inline-flex items-center rounded-full px-3 py-1.5 text-xs font-semibold text-[var(--brand-primary)]"
                      style={{
                        background: 'linear-gradient(135deg, rgba(215,107,42,0.22) 0%, rgba(215,107,42,0.12) 100%)',
                        border: '1px solid rgba(215,107,42,0.3)',
                        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)',
                      }}
                    >
                      {item.deliverable}
                    </span>
                  </div>
                  <p className="relative text-sm text-[var(--text-muted)] leading-relaxed mt-auto line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
