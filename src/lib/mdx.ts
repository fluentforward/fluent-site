import { type ImageProps } from 'next/image'
import glob from 'fast-glob'

async function loadEntries<T extends { date: string }>(
  directory: string,
): Promise<Array<MDXEntry<T>>> {
  const entries = await Promise.all(
    (await glob('**/page.mdx', { cwd: `src/app/${directory}` })).map(
      async (filename) => {
        // Import the MDX file and get its frontmatter
        const mod = await import(`../app/${directory}/${filename}`)
        const metadata = mod.frontmatter as T
        return {
          ...metadata,
          metadata,
          href: `/${directory}/${filename.replace(/\/page\.mdx$/, '')}`,
        }
      },
    ),
  )
  // Filter out entries without a date
  return entries.filter(entry => entry.date).sort((a, b) => b.date.localeCompare(a.date))
}

type ImagePropsWithOptionalAlt = Omit<ImageProps, 'alt'> & { alt?: string }

export type MDXEntry<T> = T & { href: string; metadata: T }

export interface Article {
  date: string
  title: string
  description: string
  author: {
    name: string
    role: string
    image: ImagePropsWithOptionalAlt | string
  }
}

export interface CaseStudy {
  date: string
  client: string
  title: string
  description: string
  summary: Array<string>
  logo: ImageProps['src']
  image: ImagePropsWithOptionalAlt
  service: string
  testimonial: {
    author: {
      name: string
      role: string
    }
    content: string
  }
}

export function loadArticles() {
  return loadEntries<Article>('blog')
}

export function loadCaseStudies() {
  return loadEntries<CaseStudy>('work')
}
