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
import { getBlogPostBySlugWithResponse, getRelatedPosts } from '@/lib/contentful'
import { formatDate } from '@/lib/formatDate'
import { getAssetUrl } from '@/lib/getAssetUrl'
import { calculateReadingTime } from '@/lib/calculateReadingTime'
import type { Document } from '@contentful/rich-text-types'
import type {
  IBlogPost,
  IBlogPostFields,
  IBlogPostSectionFields,
  IBlogCategoryFields,
  IAuthorFields,
} from '@/lib/contentful-types'

// ISR: Revalidate every hour (3600 seconds)
export const revalidate = 3600
// Skip static generation at build time - generate on-demand
export const dynamic = 'force-dynamic'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { post } = await getBlogPostBySlugWithResponse(params.slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  const fields = post.fields as IBlogPostFields

  return {
    title: fields.seoTitle ?? fields.title,
    description: fields.seoDescription ?? fields.excerpt,
    keywords: fields.seoKeywords,
  }
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const { post, response } = await getBlogPostBySlugWithResponse(params.slug)

  if (!post) {
    notFound()
  }

  // Type assertion to fix TypeScript inference issues with Contentful types
  const fields = post.fields as IBlogPostFields

  // Extract linked assets from the response for rich text rendering
  const linkedAssets = (response.includes?.Asset || []) as any[]

  // Generate table of contents from sections
  const tableOfContents = fields.sections.map((section) => {
    const sectionFields = section.fields as IBlogPostSectionFields
    return {
      label: sectionFields.title,
      href: `#${sectionFields.slug}`,
    }
  })

  // Calculate reading time from introduction + all content blocks
  const documentsToCount: (Document | undefined)[] = [fields.introduction]
  fields.sections.forEach((section) => {
    const sectionFields = section.fields as IBlogPostSectionFields
    sectionFields.contentBlocks.forEach((block) => {
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
  const featuredImageUrl = getAssetUrl(fields.featuredImage)
  const imageAlt = fields.title

  // Get category name
  const categoryFields = fields.category.fields as IBlogCategoryFields
  const categoryName = categoryFields.name

  // Fetch related posts (3 most recent in same category, excluding current post)
  const relatedPosts = await getRelatedPosts(
    fields.category.sys.id,
    post.sys.id,
    3
  )

  // Transform related posts
  const transformedRelatedPosts = relatedPosts.map((relatedPost) => {
    const postFields = relatedPost.fields as IBlogPostFields
    return {
      slug: postFields.slug,
      title: postFields.title,
      excerpt: postFields.excerpt,
      imageAlt: postFields.title,
    }
  })

  // Get author data
  const authorFields = fields.author.fields as IAuthorFields
  const author = authorFields

  return (
    <>
      {/* Article Header */}
      <section className="relative mt-20 bg-warm-gray py-16 px-6 lg:px-12">
        <Container className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="flex gap-2 mb-8 text-sm">
              <Link href="/blog" className="text-fluent-red hover:text-charcoal transition-colors">
                Blog
              </Link>
              <span className="text-neutral-600">/</span>
              <span className="text-neutral-600">{categoryName}</span>
            </div>

            <div className="flex gap-4 mb-8 flex-wrap">
              <span className="bg-fluent-red text-white px-4 py-1 rounded text-xs font-bold uppercase tracking-wide">
                {categoryName}
              </span>
              <span className="text-neutral-600 text-sm flex items-center gap-2">
                📅 {publishedDate}
              </span>
              <span className="text-neutral-600 text-sm flex items-center gap-2">
                ⏱️ {readTime}
              </span>
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-charcoal mb-6 leading-tight">
              {fields.title}
            </h1>
            <p className="text-xl text-neutral-600 leading-relaxed">
              {fields.excerpt}
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
                  {fields.introduction && (
                    <div className="mb-12">
                      <RichTextRenderer content={fields.introduction} linkedAssets={linkedAssets} />
                    </div>
                  )}

                  {/* Sections */}
                  {fields.sections.map((section) => {
                    const sectionFields = section.fields as IBlogPostSectionFields
                    return (
                      <div key={section.sys.id} className="mb-12">
                        <h2
                          id={sectionFields.slug}
                          className="font-display font-extrabold text-3xl text-charcoal mb-6 mt-12 scroll-mt-24"
                        >
                          {sectionFields.title}
                        </h2>
                        {sectionFields.contentBlocks.map((block, blockIndex) => (
                          <ContentBlockRenderer key={block.sys.id || blockIndex} block={block} linkedAssets={linkedAssets} />
                        ))}
                      </div>
                    )
                  })}

                  {/* Author Section */}
                  <AuthorSection
                    name={authorFields.name}
                    title={authorFields.title}
                    bio={authorFields.bio}
                    learnMoreHref={authorFields.learnMoreHref || '/about'}
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
                  url={`https://fluentforward.com/blog/${fields.slug}`}
                  title={fields.title}
                  delay={0.3}
                />
                <FadeIn delay={0.4}>
                  <div className="bg-charcoal text-white p-8 rounded border-l-4 border-fluent-red text-center">
                    <h4 className="font-display font-extrabold text-xl mb-4">
                      Ready to Move From Scarcity to Abundance?
                    </h4>
                    <p className="text-white/90 mb-6 text-sm">
                      Let's map your constraints and architect your execution system.
                    </p>
                    <Link
                      href="/#contact"
                      className="inline-block bg-fluent-red text-white px-6 py-3 rounded font-semibold transition-all hover:bg-fluent-red/90"
                    >
                      Book a Constraint Audit
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
      <section className="relative bg-charcoal py-16 md:py-24 px-6 lg:px-12 text-white">
        <Container className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16">
            <h3 className="font-display font-extrabold text-3xl md:text-4xl text-white mb-4">
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
