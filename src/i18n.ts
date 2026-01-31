export type Locale = 'en' | 'pt';

export const locales: Locale[] = ['en', 'pt'];
export const defaultLocale: Locale = 'en';

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}
