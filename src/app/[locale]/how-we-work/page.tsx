import { getContent } from '@/content';
import type { Locale } from '@/i18n';

export default async function HowWeWorkPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = getContent(locale as Locale).howWeWork;

  return (
    <main className="min-h-screen bg-[var(--brand-background)] text-white pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">{t.title}</h1>
        <p className="text-[var(--text-muted)] max-w-2xl mb-16">{t.subtitle}</p>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {t.steps.map((step, i) => (
            <div
              key={step.title}
              className="p-6 rounded-xl bg-[var(--surface-2)] border border-[var(--border)]"
            >
              <span className="text-xs font-mono text-[var(--brand-primary)]">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h2 className="text-xl font-semibold mt-2 mb-2">{step.title}</h2>
              <p className="text-[var(--text-muted)]">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="p-6 rounded-xl bg-[var(--surface-2)] border border-[var(--brand-primary)]/30 max-w-2xl">
          <p className="text-[var(--brand-primary)] font-medium">{t.aiLine}</p>
        </div>
      </div>
    </main>
  );
}
