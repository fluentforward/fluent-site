import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { formatDate } from '@/lib/formatDate'
import { getBlogPosts } from '@/lib/contentful'
import { IComponentAuthorFields, IPageBlogPost, IPageBlogPostFields } from '@/lib/contentful-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { calculateReadingTime } from '@/lib/calculateReadingTime'


export const metadata: Metadata = {
  title: 'Blog',
  description:
    "Insights and analysis on legal technology, AI orchestration, and the future of legal practice in the UK."
}

export default async function Blog() {
  const blogPosts = await getBlogPosts()

  return (
    <>
      <PageIntro eyebrow="Blog" title="Insights on Legal Technology and AI">
        <p>
          Stay informed about the latest developments in legal technology, AI orchestration, and how UK law firms are transforming their practice through innovative solutions.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="space-y-24 lg:space-y-32">
          {blogPosts.map((blogPost: IPageBlogPost) => {
            const blogPostFields = blogPost.fields as IPageBlogPostFields
            const authorFields = blogPostFields.author?.fields as IComponentAuthorFields | undefined
            return (<FadeIn key={blogPost.sys.id}>
              <article>
                <Border className="pt-16">
                  <div className="relative lg:-mx-4 lg:flex lg:justify-end">
                    <div className="pt-10 lg:w-2/3 lg:flex-none lg:px-4 lg:pt-0">
                      <h2 className="font-display text-2xl font-semibold text-neutral-950">
                        <Link href={`/blog/${blogPostFields.slug}`}>{blogPostFields.title}</Link>
                      </h2>
                      <dl className="lg:absolute lg:top-0 lg:left-0 lg:w-1/3 lg:px-4">
                        <dt className="sr-only">Published</dt>
                        <dd className="absolute top-0 left-0 text-sm text-neutral-950 lg:static">
                          <time dateTime={blogPostFields.publishedDate}>
                            {formatDate(blogPostFields.publishedDate)}
                          </time>
                          <div className="mt-1 text-sm text-neutral-600">
                            {calculateReadingTime(blogPostFields.content)} min read
                          </div>
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
                      <p className="mt-6 max-w-2xl text-base text-neutral-600">
                        {blogPostFields.shortDescription}
                      </p>
                      <Button
                        href={`/blog/${blogPostFields.slug}`}
                        aria-label={`Read more: ${blogPostFields.title}`}
                        className="mt-8"
                      >
                        Read more
                      </Button>
                    </div>
                  </div>
                </Border>
              </article>
            </FadeIn>
          )})}
        </div>
      </Container>
    </>
  )
}
