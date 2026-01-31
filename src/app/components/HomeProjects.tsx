'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Locale } from '@/i18n';
import { getContent } from '@/content';
import { getProjetosDestaque } from '@/data/projetos';

export default function HomeProjects({ locale }: { locale: Locale }) {
  const t = getContent(locale).projects;
  const projects = getProjetosDestaque();

  return (
    <section className="py-20 border-t border-[var(--border)]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">{t.title}</h2>
          <p className="text-[var(--text-muted)] max-w-xl">{t.subtitle}</p>
        </motion.div>
        {projects.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {projects.slice(0, 2).map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={`/${locale}/projects#${p.id}`}
                  className="block p-6 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] hover:border-[var(--brand-primary)]/40 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-[var(--brand-primary)] mb-2">
                    {p.titulo}
                  </h3>
                  <p className="text-[var(--text-muted)] text-sm line-clamp-2">
                    {p.descricao}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="text-[var(--text-muted)] mb-10">{t.empty}</p>
        )}
        <div className="text-center">
          <Link
            href={`/${locale}/projects`}
            className="text-[var(--brand-primary)] font-semibold hover:underline"
          >
            {t.cta} →
          </Link>
        </div>
      </div>
    </section>
  );
}
