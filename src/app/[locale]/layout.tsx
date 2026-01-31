import { notFound } from 'next/navigation';
import { isValidLocale } from '@/i18n';
import type { Locale } from '@/i18n';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import SetLocaleLang from '../components/SetLocaleLang';

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const loc = locale as Locale;

  return (
    <>
      <SetLocaleLang locale={loc} />
      <Navigation locale={loc} />
      {children}
      <Footer locale={loc} />
      <WhatsAppButton />
    </>
  );
}
