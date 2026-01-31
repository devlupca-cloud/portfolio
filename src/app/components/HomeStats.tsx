'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import type { Locale } from '@/i18n';
import { getContent } from '@/content';

function useCountUp(end: number, duration: number, startOnView: boolean, inView: boolean) {
  const [value, setValue] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!startOnView || !inView) return;
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    const start = 0;
    const startTime = performance.now();

    const update = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - (1 - progress) ** 2;
      setValue(Math.round(start + (end - start) * eased));
      if (progress < 1) requestAnimationFrame(update);
    };

    requestAnimationFrame(update);
  }, [end, duration, startOnView, inView]);

  return value;
}

function StatCard({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay }}
      className="rounded-xl border border-[var(--border)] bg-[var(--surface-2)]/60 backdrop-blur-sm px-6 py-8 text-center"
    >
      {children}
    </motion.div>
  );
}

export default function HomeStats({ locale }: { locale: Locale }) {
  const t = getContent(locale).stats;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  const count20 = useCountUp(20, 1200, true, inView);
  const count100a = useCountUp(100, 1200, true, inView);
  const count4 = useCountUp(4, 1200, true, inView);
  const count100b = useCountUp(100, 1200, true, inView);

  return (
    <section
      ref={ref}
      className="py-20 border-t border-[var(--border)] bg-gradient-to-b from-[var(--brand-background)] via-[var(--surface-2)]/30 to-[var(--brand-background)]"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <StatCard delay={0}>
            <div className="text-3xl md:text-4xl font-bold text-[var(--brand-primary)] mb-1 tabular-nums">
              {count20}+
            </div>
            <div className="text-sm text-[var(--text-muted)]">{t.projects}</div>
          </StatCard>
          <StatCard delay={0.05}>
            <div className="text-3xl md:text-4xl font-bold text-[var(--brand-primary)] mb-1 tabular-nums">
              {count100a}%
            </div>
            <div className="text-sm text-[var(--text-muted)]">{t.satisfaction}</div>
          </StatCard>
          <StatCard delay={0.12}>
            <div className="text-3xl md:text-4xl font-bold text-[var(--brand-primary)] mb-1 tabular-nums">
              {count4}
            </div>
            <div className="text-sm text-[var(--text-muted)]">{t.yearsInMarket}</div>
          </StatCard>
          <StatCard delay={0.15}>
            <div className="text-3xl md:text-4xl font-bold text-[var(--brand-primary)] mb-1 tabular-nums">
              {count100b}%
            </div>
            <div className="text-sm text-[var(--text-muted)]">{t.onTime}</div>
          </StatCard>
        </div>
      </div>
    </section>
  );
}
