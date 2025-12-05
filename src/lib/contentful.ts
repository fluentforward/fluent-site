import { createClient } from 'contentful'
import type {
  IBlogPost,
  IBlogCategory,
  IBlogConfiguration,
  IBlogPostSection,
} from './contentful-types'

if (!process.env.CONTENTFUL_SPACE_ID) {
  throw new Error('CONTENTFUL_SPACE_ID is not defined')
}

if (!process.env.CONTENTFUL_ACCESS_TOKEN) {
  throw new Error('CONTENTFUL_ACCESS_TOKEN is not defined')
}

export const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

/**
 * Fetch blog configuration singleton with featured post
 */
export async function getBlogConfiguration(): Promise<IBlogConfiguration | null> {
  const response = await contentfulClient.getEntries({
    content_type: 'blogConfiguration',
    limit: 1,
    include: 3, // Include featured post, its category, author, sections, content blocks
  })

  const item = response.items[0]
  if (!item) return null

  // Type assertion needed because Contentful's types don't always reflect resolved links
  return item as unknown as IBlogConfiguration
}

/**
 * Fetch all blog categories ordered by order field
 */
export async function getBlogCategories(): Promise<IBlogCategory[]> {
  const response = await contentfulClient.getEntries({
    content_type: 'blogCategory',
    order: ['fields.order'],
  })

  return response.items as unknown as IBlogCategory[]
}

/**
 * Fetch blog posts ordered by creation date descending
 */
export async function getBlogPosts(limit?: number, excludeSlug?: string): Promise<IBlogPost[]> {
  const query: any = {
    content_type: 'blogPost',
    order: ['-sys.createdAt'],
    include: 2, // Include category, author, images
  }

  if (limit) {
    query.limit = limit
  }

  if (excludeSlug) {
    query['fields.slug[ne]'] = excludeSlug
  }

  const response = await contentfulClient.getEntries(query)
  return response.items as unknown as IBlogPost[]
}

/**
 * Fetch a single blog post by slug with all nested content
 */
export async function getBlogPostBySlug(slug: string): Promise<IBlogPost | null> {
  const response = await contentfulClient.getEntries({
    content_type: 'blogPost',
    'fields.slug': slug,
    include: 3, // Include sections, content blocks, category, author, images
  })

  return (response.items[0] as unknown as IBlogPost) || null
}

/**
 * Fetch related posts (most recent in same category, excluding current post)
 */
export async function getRelatedPosts(
  categoryId: string,
  excludePostId: string,
  limit: number = 3
): Promise<IBlogPost[]> {
  const response = await contentfulClient.getEntries({
    content_type: 'blogPost',
    'fields.category.sys.id': categoryId,
    'sys.id[ne]': excludePostId,
    order: ['-sys.createdAt'],
    limit,
    include: 2, // Include category, author, images
  })

  return response.items as unknown as IBlogPost[]
}
