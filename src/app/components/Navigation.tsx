'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { Locale } from '@/i18n';
import { getContent } from '@/content';

const locales: { code: Locale; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'pt', label: 'PT' },
];

export default function Navigation({ locale }: { locale: Locale }) {
  const t = getContent(locale);
  const pathname = usePathname() ?? '';
  const pathWithoutLocale = pathname.replace(/^\/(en|pt)/, '') || '';

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 text-white backdrop-blur-md"
      style={{
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.9) 50%, transparent 100%)',
      }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link
            href={`/${locale}`}
            className="flex items-center rounded-lg p-1 -ml-1 transition-opacity hover:opacity-90"
            aria-label="Devlup — Home"
          >
            <Image
              src="/devlup_logo_final.svg"
              alt="Devlup"
              width={40}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>
          <div className="hidden md:flex items-center gap-1">
            <Link
              href={`/${locale}/services`}
              className="px-3 py-2 rounded-md text-[var(--brand-primary)] font-medium hover:bg-white/10 transition-colors"
            >
              {t.nav.services}
            </Link>
            <Link
              href={`/${locale}/how-we-work`}
              className="px-3 py-2 rounded-md text-white/95 font-medium hover:bg-white/10 hover:text-white transition-colors"
            >
              {t.nav.howWeWork}
            </Link>
            <Link
              href={`/${locale}/projects`}
              className="px-3 py-2 rounded-md text-white/95 font-medium hover:bg-white/10 hover:text-white transition-colors"
            >
              {t.nav.projects}
            </Link>
            <Link
              href={`/${locale}/about`}
              className="px-3 py-2 rounded-md text-white/95 font-medium hover:bg-white/10 hover:text-white transition-colors"
            >
              {t.nav.about}
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="ml-2 px-5 py-2.5 rounded-lg font-semibold bg-[var(--brand-primary)] text-white hover:bg-[var(--brand-primary-strong)] transition-colors shadow-sm"
            >
              {t.nav.contact}
            </Link>
            <div className="flex items-center gap-0.5 border-l border-white/25 pl-4 ml-2">
              {locales.map(({ code, label }) => (
                <Link
                  key={code}
                  href={`/${code}${pathWithoutLocale}`}
                  className={`px-2.5 py-1.5 rounded-md text-sm font-medium transition-colors ${
                    locale === code
                      ? 'text-[var(--brand-primary)] bg-white/15'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
