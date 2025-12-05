import { type Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { AuthorSection } from '@/components/AuthorSection'
import { TableOfContents } from '@/components/TableOfContents'
import { ShareButtons } from '@/components/ShareButtons'
import { RelatedPostCard } from '@/components/RelatedPostCard'
import { RichTextRenderer } from '@/components/RichTextRenderer'
import { ContentBlockRenderer } from '@/components/ContentBlockRenderer'
import { getBlogPostBySlug, getRelatedPosts } from '@/lib/contentful'
import { formatDate } from '@/lib/formatDate'
import { getAssetUrl } from '@/lib/getAssetUrl'
import { calculateReadingTime } from '@/lib/calculateReadingTime'
import type { Document } from '@contentful/rich-text-types'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getBlogPostBySlug(params.slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.fields.seoTitle || post.fields.title,
    description: post.fields.seoDescription || post.fields.excerpt,
    keywords: post.fields.seoKeywords,
  }
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  // Generate table of contents from sections
  const tableOfContents = post.fields.sections.map((section) => ({
    label: section.fields.title,
    href: `#${section.fields.slug}`,
  }))

  // Calculate reading time from introduction + all content blocks
  const documentsToCount: (Document | undefined)[] = [post.fields.introduction]
  post.fields.sections.forEach((section) => {
    section.fields.contentBlocks.forEach((block) => {
      const contentTypeId = block.sys.contentType.sys.id
      if (contentTypeId === 'richTextBlock') {
        documentsToCount.push((block as any).fields.content)
      } else if (contentTypeId === 'calloutBlock') {
        documentsToCount.push((block as any).fields.content)
      }
    })
  })
  const readTimeMinutes = calculateReadingTime(...documentsToCount)

  // Format dates
  const publishedDate = formatDate(post.sys.createdAt)
  const readTime = `${readTimeMinutes} min read`

  // Get image URLs
  const featuredImageUrl = getAssetUrl(post.fields.featuredImage)
  const imageAlt = post.fields.title

  // Get category name
  const categoryName = post.fields.category.fields.name

  // Fetch related posts (3 most recent in same category, excluding current post)
  const relatedPosts = await getRelatedPosts(
    post.fields.category.sys.id,
    post.sys.id,
    3
  )

  // Transform related posts
  const transformedRelatedPosts = relatedPosts.map((relatedPost) => ({
    slug: relatedPost.fields.slug,
    title: relatedPost.fields.title,
    excerpt: relatedPost.fields.excerpt,
    imageAlt: relatedPost.fields.title,
  }))

  // Get author data
  const author = post.fields.author.fields

  return (
    <>
      {/* Article Header */}
      <section className="relative mt-20 bg-slate-50 py-16 px-6 lg:px-12">
        <Container className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="flex gap-2 mb-8 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <Link href="/blog" className="text-indigo-600 hover:text-lime-500 transition-colors">
                Blog
              </Link>
              <span className="text-slate-700">/</span>
              <span className="text-slate-700">{categoryName}</span>
            </div>

            <div className="flex gap-4 mb-8 flex-wrap">
              <span className="bg-lime-500 text-slate-900 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {categoryName}
              </span>
              <span className="text-slate-700 opacity-70 text-sm flex items-center gap-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                📅 {publishedDate}
              </span>
              <span className="text-slate-700 opacity-70 text-sm flex items-center gap-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                ⏱️ {readTime}
              </span>
            </div>

            <h1
              className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 leading-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {post.fields.title}
            </h1>
            <p className="text-xl text-slate-700 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {post.fields.excerpt}
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Featured Image */}
      {featuredImageUrl && (
        <section className="relative bg-white py-8">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeIn delay={0.2}>
              <div className="relative w-full rounded-xl overflow-hidden" style={{ aspectRatio: '2288 / 1242' }}>
                <Image
                  src={featuredImageUrl}
                  alt={imageAlt}
                  fill
                  className="object-cover w-full h-full"
                  sizes="100vw"
                  priority
                />
            </div>
          </FadeIn>
          </div>
      </section>
      )}

      {/* Article Body */}
      <section className="relative bg-white py-24 px-6 lg:px-12">
        <Container className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <article className="lg:col-span-3 max-w-4xl">
              <div
                className="prose prose-lg max-w-none"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <FadeIn delay={0.2}>
                  {/* Introduction */}
                  {post.fields.introduction && (
                    <div className="mb-12">
                      <RichTextRenderer content={post.fields.introduction} />
                    </div>
                  )}

                  {/* Sections */}
                  {post.fields.sections.map((section) => (
                    <div key={section.sys.id} className="mb-12">
                      <h2
                        id={section.fields.slug}
                        className="text-3xl font-bold text-slate-900 mb-6 mt-12 scroll-mt-24"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                        {section.fields.title}
                  </h2>
                      {section.fields.contentBlocks.map((block, blockIndex) => (
                        <ContentBlockRenderer key={block.sys.id || blockIndex} block={block} />
                      ))}
                    </div>
                  ))}

                  {/* Author Section */}
                  <AuthorSection
                    name={author.name}
                    title={author.title}
                    bio={author.bio}
                    learnMoreHref={author.learnMoreHref || '/about'}
                    delay={0.3}
                  />
                </FadeIn>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {tableOfContents.length > 0 && (
                <TableOfContents items={tableOfContents} delay={0.2} />
                )}
                <ShareButtons
                  url={`https://cognifylegal.com/blog/${post.fields.slug}`}
                  title={post.fields.title}
                  delay={0.3}
                />
                <FadeIn delay={0.4}>
                  <div className="bg-indigo-600 text-white p-8 rounded-xl text-center">
                    <h4
                      className="text-xl font-bold mb-4"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      See Cognify in Action
                    </h4>
                    <p className="text-white/90 mb-6 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      Book a demo to see how we eliminate the adoption problem by embedding intelligence into Microsoft 365.
                    </p>
                    <Link
                      href="/book-demo"
                      className="inline-block bg-lime-500 text-slate-900 px-6 py-3 rounded-lg font-bold transition-all hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      Book a Demo
                    </Link>
                  </div>
                </FadeIn>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* Related Posts */}
      {transformedRelatedPosts.length > 0 && (
      <section className="relative bg-slate-900 py-24 px-6 lg:px-12 text-white">
        <Container className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16">
            <h3
              className="text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Related Articles
            </h3>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {transformedRelatedPosts.map((relatedPost, index) => (
                <RelatedPostCard key={relatedPost.slug} {...relatedPost} delay={index * 0.1} />
            ))}
          </div>
        </Container>
      </section>
      )}
    </>
  )
}
