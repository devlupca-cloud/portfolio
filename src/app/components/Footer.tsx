import Link from 'next/link';
import type { Locale } from '@/i18n';
import { getContent } from '@/content';

export default function Footer({ locale }: { locale: Locale }) {
  const t = getContent(locale).footer;

  return (
    <footer className="w-full bg-[var(--brand-background)] text-[var(--text-muted)] border-t border-[var(--border)] mt-24">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--brand-primary)]/30 via-white/10 to-transparent" />
      <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row gap-6 items-center md:items-start justify-between">
        <div className="text-center md:text-left">
          <div className="text-white font-semibold text-lg">{t.company}</div>
          <div className="text-sm text-[var(--text-muted)]">{t.tagline}</div>
        </div>
        <div className="flex gap-8">
          <div className="flex flex-col gap-2 text-sm">
            <div className="text-white font-medium">{t.companyLabel}</div>
            <Link href={`/${locale}/about`} className="hover:text-white">
              {locale === 'en' ? 'About' : 'Sobre'}
            </Link>
            <Link href={`/${locale}/services`} className="hover:text-white">
              {locale === 'en' ? 'Services' : 'Serviços'}
            </Link>
            <Link href={`/${locale}/projects`} className="hover:text-white">
              {locale === 'en' ? 'Projects' : 'Projetos'}
            </Link>
            <Link href={`/${locale}/contact`} className="hover:text-white">
              {locale === 'en' ? 'Contact' : 'Contato'}
            </Link>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <div className="text-white font-medium">{t.legal}</div>
            <Link href={`/${locale}/terms`} className="hover:text-white">
              {t.terms}
            </Link>
            <Link href={`/${locale}/privacy`} className="hover:text-white">
              {t.privacy}
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-[var(--border)] py-4 text-center text-xs text-[var(--text-subtle)]">
        © {new Date().getFullYear()} Devlup. {t.rights}
      </div>
    </footer>
  );
}
