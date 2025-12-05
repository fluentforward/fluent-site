import Image from 'next/image'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { formatDate } from '@/lib/formatDate'
import { IBlogPost, IBlogPostFields } from '@/lib/contentful-types'

interface BlogPostListProps {
  posts: IBlogPost[]
}

export function BlogPostList({ posts }: BlogPostListProps) {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn>
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold text-neutral-950">
            Latest from our blog
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Insights and analysis on legal technology, AI orchestration, and the future of legal practice.
          </p>
        </div>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => {
            const fields = post.fields as IBlogPostFields
            return (
              <article key={fields.slug} className="flex flex-col">
                <Border className="flex flex-col flex-1 p-2 rounded-xl">
                  {fields.featuredImage?.fields?.file?.url && (
                    <Link href={`/blog/${fields.slug}`}>
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <Image
                          alt=""
                          src={`https:${fields.featuredImage.fields.file.url}`}
                          className="object-contain rounded-xl"
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        />
                      </div>
                    </Link>
                  )}
                  <div className="flex flex-1 flex-col p-6">
                    <time
                      dateTime={post.sys.createdAt}
                      className="text-sm text-neutral-600"
                    >
                      {formatDate(post.sys.createdAt)}
                    </time>
                    <h3 className="mt-2 font-display text-xl font-semibold text-neutral-950">
                      <Link href={`/blog/${fields.slug}`}>{fields.title}</Link>
                    </h3>
                    <p className="mt-2 text-neutral-600 line-clamp-3">
                      {fields.excerpt}
                    </p>
                    <Link
                      href={`/blog/${fields.slug}`}
                      className="mt-4 text-sm font-semibold text-neutral-950"
                    >
                      Read more
                      <span aria-hidden="true"> →</span>
                    </Link>
                  </div>
                </Border>
              </article>
            )
          })}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-xl bg-neutral-950 px-8 py-4 text-sm font-semibold text-white hover:bg-neutral-800 transition"
          >
            See all posts
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </FadeIn>
    </Container>
  )
} 