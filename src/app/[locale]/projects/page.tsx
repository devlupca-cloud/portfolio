import Link from 'next/link';
import { getContent } from '@/content';
import { projetos } from '@/data/projetos';
import type { Locale } from '@/i18n';

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = getContent(locale as Locale).projects;

  return (
    <main className="min-h-screen bg-[var(--brand-background)] text-white pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">{t.title}</h1>
        <p className="text-[var(--text-muted)] max-w-xl mb-12">{t.subtitle}</p>
        {projetos.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-6">
            {projetos.map((p) => (
              <Link
                key={p.id}
                href={`/${locale}/projects#${p.id}`}
                className="block p-6 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] hover:border-[var(--brand-primary)]/40 transition-colors"
              >
                <h2 className="text-xl font-semibold text-[var(--brand-primary)] mb-2">
                  {p.titulo}
                </h2>
                <p className="text-[var(--text-muted)] text-sm mb-4 line-clamp-2">
                  {p.descricao}
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.tecnologias.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-0.5 rounded bg-[var(--brand-background)] text-[var(--text-muted)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-[var(--text-muted)]">{t.empty}</p>
        )}
      </div>
    </main>
  );
}
