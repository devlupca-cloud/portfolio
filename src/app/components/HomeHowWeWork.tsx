'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Locale } from '@/i18n';
import { getContent } from '@/content';

export default function HomeHowWeWork({ locale }: { locale: Locale }) {
  const t = getContent(locale).howWeWork;

  return (
    <section className="py-20 border-t border-[var(--border)] bg-[var(--surface-2)]/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">{t.title}</h2>
          <p className="text-[var(--text-muted)] max-w-2xl">{t.subtitle}</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {t.steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-xl bg-[var(--brand-background)] border border-[var(--border)]"
            >
              <span className="text-xs font-mono text-[var(--brand-primary)]">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="text-lg font-semibold mt-2 mb-1">{step.title}</h3>
              <p className="text-[var(--text-muted)] text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
        <p className="text-[var(--brand-primary)]/90 text-sm max-w-xl mb-8">
          {t.aiLine}
        </p>
        <Link
          href={`/${locale}/how-we-work`}
          className="text-[var(--brand-primary)] font-semibold hover:underline"
        >
          {t.cta} →
        </Link>
      </div>
    </section>
  );
}
