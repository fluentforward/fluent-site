import { type MetadataRoute } from 'next'

import { site } from '@/content/site'

const routes = [
  { path: '/', priority: 1 },
  { path: '/how-it-works', priority: 0.9 },
  { path: '/about', priority: 0.7 },
  { path: '/results', priority: 0.6 },
  { path: '/contact', priority: 0.8 },
  { path: '/privacy', priority: 0.2 },
  { path: '/terms', priority: 0.2 },
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
