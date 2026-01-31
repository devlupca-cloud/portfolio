import type { Locale } from '@/i18n';
import HomeHero from '../components/HomeHero';
import HomeStats from '../components/HomeStats';
import HomeCoreMessage from '../components/HomeCoreMessage';
import HomeServices from '../components/HomeServices';
import HomeHowWeWork from '../components/HomeHowWeWork';
import HomeProjects from '../components/HomeProjects';
import HomeWhyUs from '../components/HomeWhyUs';
import Contact from '../components/Contact';

export default async function LocaleHome({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <main className="min-h-screen bg-[var(--brand-background)] text-white">
      <HomeHero locale={locale as Locale} />
      <HomeStats locale={locale as Locale} />
      <HomeCoreMessage locale={locale as Locale} />
      <HomeServices locale={locale as Locale} />
      <HomeHowWeWork locale={locale as Locale} />
      <HomeProjects locale={locale as Locale} />
      <HomeWhyUs locale={locale as Locale} />
      <Contact locale={locale as Locale} />
    </main>
  );
}
