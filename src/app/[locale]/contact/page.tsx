import Contact from '../../components/Contact';
import type { Locale } from '@/i18n';

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <main className="min-h-screen bg-[var(--brand-background)] text-white pt-24 pb-16">
      <div className="container mx-auto px-4">
        <Contact locale={locale as Locale} />
      </div>
    </main>
  );
}
