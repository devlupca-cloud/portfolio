import type { Locale } from '@/i18n';
import { en } from './en';
import { pt } from './pt';

const content = { en, pt };

export type Content = typeof en;

export function getContent(locale: Locale): Content {
  return (content[locale] ?? content.en) as Content;
}

export { en, pt };
