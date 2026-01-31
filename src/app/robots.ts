import { MetadataRoute } from 'next'
import { company } from './data/company'

export default function robots(): MetadataRoute.Robots {
  const base = company.siteUrl
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${base}/sitemap.xml`,
  }
}

