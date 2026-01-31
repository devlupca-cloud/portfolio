import { getContent } from '@/content';
import type { Locale } from '@/i18n';

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = getContent(locale as Locale).about;

  return (
    <main className="min-h-screen bg-[var(--brand-background)] text-white pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">{t.title}</h1>
        <p className="text-[var(--text-muted)] text-lg mb-16">{t.subtitle}</p>
        <div className="max-w-3xl space-y-6 text-[var(--text-muted)] text-lg leading-relaxed">
          <h2 className="text-2xl font-semibold text-[var(--brand-primary)]">
            {t.story.title}
          </h2>
          <p>{t.story.p1}</p>
          <p>{t.story.p2}</p>
          <p>{t.story.p3}</p>
        </div>
      </div>
    </main>
  );
}
