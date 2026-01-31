import { getContent } from '@/content';
import type { Locale } from '@/i18n';

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = getContent(locale as Locale).services;

  return (
    <main className="min-h-screen bg-[var(--brand-background)] text-white pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">{t.title}</h1>
        <p className="text-[var(--text-muted)] max-w-2xl mb-12">{t.subtitle}</p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-[var(--surface-2)] border border-[var(--border)]">
            <h2 className="text-xl font-semibold text-[var(--brand-primary)] mb-2">
              {t.web.title}
            </h2>
            <p className="text-[var(--text-muted)]">{t.web.description}</p>
          </div>
          <div className="p-6 rounded-xl bg-[var(--surface-2)] border border-[var(--border)]">
            <h2 className="text-xl font-semibold text-[var(--brand-primary)] mb-2">
              {t.mobile.title}
            </h2>
            <p className="text-[var(--text-muted)]">{t.mobile.description}</p>
          </div>
          <div className="p-6 rounded-xl bg-[var(--surface-2)] border border-[var(--border)]">
            <h2 className="text-xl font-semibold text-[var(--brand-primary)] mb-2">
              {t.apis.title}
            </h2>
            <p className="text-[var(--text-muted)]">{t.apis.description}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
