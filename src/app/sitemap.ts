import { type MetadataRoute } from 'next'

import { site } from '@/content/site'

const routes = [
  { path: '/', priority: 1 },
  { path: '/ways-we-work', priority: 0.9 },
  { path: '/how-it-works', priority: 0.89 },
  { path: '/profit-engine', priority: 0.88 },
  { path: '/strategy-blueprints', priority: 0.85 },
  { path: '/webinar', priority: 0.86 },
  { path: '/review', priority: 0.82 },
  { path: '/contact', priority: 0.8 },
  { path: '/privacy', priority: 0.2 },
  { path: '/terms', priority: 0.2 },
  { path: '/cookies', priority: 0.2 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return routes.map((route) => ({
    url: `${site.url}${route.path}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: route.priority,
  }))
}
