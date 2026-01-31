'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Locale } from '@/i18n';
import { getContent } from '@/content';

export default function HomeServices({ locale }: { locale: Locale }) {
  const t = getContent(locale).services;
  const services = [
    { title: t.web.title, description: t.web.description },
    { title: t.mobile.title, description: t.mobile.description },
    { title: t.apis.title, description: t.apis.description },
  ];

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
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-6 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] hover:border-[var(--brand-primary)]/40 transition-colors"
            >
              <h3 className="text-xl font-semibold text-[var(--brand-primary)] mb-2">
                {s.title}
              </h3>
              <p className="text-[var(--text-muted)] text-sm">{s.description}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center">
          <Link
            href={`/${locale}/services`}
            className="text-[var(--brand-primary)] font-semibold hover:underline"
          >
            {t.cta} →
          </Link>
        </div>
      </div>
    </section>
  );
}
