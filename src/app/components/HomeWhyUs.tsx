'use client';

import { motion } from 'framer-motion';
import type { Locale } from '@/i18n';
import { getContent } from '@/content';

export default function HomeWhyUs({ locale }: { locale: Locale }) {
  const t = getContent(locale).whyUs;

  return (
    <section className="py-20 border-t border-[var(--border)] bg-[var(--surface-2)]/30">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          {t.title}
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {t.items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <h3 className="text-lg font-semibold text-[var(--brand-primary)] mb-2">
                {item.title}
              </h3>
              <p className="text-[var(--text-muted)] text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
