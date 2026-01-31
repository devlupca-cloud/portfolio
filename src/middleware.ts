import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { defaultLocale } from './i18n';

const localePrefix = new RegExp(`^/(${['en', 'pt'].join('|')})(/|$)`);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip API, static files, favicon
  if (
    pathname.startsWith('/api/') ||
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/icons/') ||
    pathname.includes('.') // favicon, images, etc.
  ) {
    return NextResponse.next();
  }

  // If path has no locale prefix, redirect to default locale
  if (!localePrefix.test(pathname)) {
    const locale = defaultLocale;
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}${pathname === '/' ? '' : pathname}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next|api|favicon|icons|.*\\.).*)'],
};
