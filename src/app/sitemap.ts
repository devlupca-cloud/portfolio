import { MetadataRoute } from 'next';
import { company } from './data/company';
import { locales } from '@/i18n';

const paths = ['', '/about', '/services', '/projects', '/contact', '/how-we-work'];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = company.siteUrl;
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const path of paths) {
      const url = path === '' ? `${base}/${locale}` : `${base}/${locale}${path}`;
      const priority = path === '' ? 1 : path === '/contact' || path === '/services' ? 0.8 : path === '/projects' ? 0.7 : 0.5;
      entries.push({
        url,
        lastModified: now,
        changeFrequency: path === '/about' ? 'yearly' : 'monthly' as const,
        priority,
      });
    }
  }

  return entries;
}
