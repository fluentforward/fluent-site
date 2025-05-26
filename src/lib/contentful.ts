import { createClient } from 'contentful'
import type { IPageBlogPost, IPageBlogPostSkeleton } from './contentful-types'

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


export async function getBlogPosts(): Promise<Array<IPageBlogPost>> {
  const response = await contentfulClient.getEntries<IPageBlogPostSkeleton>({
    content_type: 'pageBlogPost',
    // @ts-ignore
    order: ['-fields.publishedDate'],
  })

  return response.items
}

export async function getBlogPostBySlug(slug: string): Promise<IPageBlogPost | null> {
  const response = await contentfulClient.getEntries<IPageBlogPostSkeleton>({
    content_type: 'pageBlogPost',
    // @ts-ignore
    'fields.slug': slug,
  })

  return response.items[0] || null
} 