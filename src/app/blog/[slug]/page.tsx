import { type Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'

import { Border } from '@/components/Border'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { formatDate } from '@/lib/formatDate'
import { getBlogPostBySlug } from '@/lib/contentful'
import { IComponentAuthorFields, IPageBlogPostFields } from '@/lib/contentful-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

interface Props {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const blogPost = await getBlogPostBySlug(params.slug)
  
  if (!blogPost) {
    return {
      title: 'Blog Post Not Found',
    }
  }

  const blogPostFields = blogPost.fields as IPageBlogPostFields
  

  return {
    title: blogPostFields.title,
    description: blogPostFields.shortDescription,
  }
}

export default async function BlogPost({ params }: Props) {
  const blogPost = await getBlogPostBySlug(params.slug)

  if (!blogPost) {
    notFound()
  }

  const blogPostFields = blogPost.fields as IPageBlogPostFields
  const authorFields = blogPostFields.author?.fields as IComponentAuthorFields | undefined

  return (
    <>
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <article>
            <Border className="pt-16">
              <div className="relative lg:-mx-4 lg:flex lg:justify-end">
                <div className="pt-10 lg:w-2/3 lg:flex-none lg:px-4 lg:pt-0">
                  <h1 className="font-display text-4xl font-semibold text-neutral-950">
                    {blogPostFields.title}
                  </h1>
                  <dl className="lg:absolute lg:top-0 lg:left-0 lg:w-1/3 lg:px-4">
                    <dt className="sr-only">Published</dt>
                    <dd className="absolute top-0 left-0 text-sm text-neutral-950 lg:static">
                      <time dateTime={blogPostFields.publishedDate}>
                        {formatDate(blogPostFields.publishedDate)}
                      </time>
                    </dd>
                    <dt className="sr-only">Author</dt>
                    {authorFields && <dd className="mt-6 flex gap-x-4">
                      <div className="flex-none overflow-hidden rounded-xl bg-neutral-100">
                        <Image
                          alt=""
                          src={`https:${authorFields.avatar?.fields.file?.url}`}
                          className="h-12 w-12 object-cover grayscale"
                          width={48}
                          height={48}
                        />
                      </div>
                      <div className="text-sm text-neutral-950">
                        <div className="font-semibold">
                          {authorFields.name}
                        </div>                        
                      </div>
                    </dd>
                    }
                  </dl>
                  <div className="mt-6 max-w-2xl prose prose-neutral-600">
                    {documentToReactComponents(blogPostFields.content)}
                  </div>
                </div>
              </div>
            </Border>
          </article>
        </FadeIn>
      </Container>
    </>
  )
} 