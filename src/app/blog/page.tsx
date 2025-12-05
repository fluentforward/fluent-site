import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { FeaturedPost } from '@/components/FeaturedPost'
import { BlogPostCard } from '@/components/BlogPostCard'
import { TopicCard } from '@/components/TopicCard'
import { BlogCategoryFilter } from '@/components/BlogCategoryFilter'
import { getBlogConfiguration, getBlogCategories, getBlogPosts } from '@/lib/contentful'
import { formatDate } from '@/lib/formatDate'
import { getAssetUrl } from '@/lib/getAssetUrl'
import { BlogPostsClient } from './BlogPostsClient'
import blogData from '@/data/blog-posts.json'
import type { IBlogConfiguration, IBlogPost } from '@/lib/contentful-types'

// ISR: Revalidate every hour (3600 seconds)
export const revalidate = 3600

export default async function Blog() {
  // Fetch data from Contentful
  const [config, categories, allPosts] = await Promise.all([
    getBlogConfiguration(),
    getBlogCategories(),
    getBlogPosts(),
  ])

  // Type assertions to handle Contentful's type system
  const configTyped = config as any
  const featuredPost = configTyped?.fields?.featuredPost as any
  const featuredPostSlug = featuredPost?.fields?.slug as string | undefined

  // Get recent posts (max 6, excluding featured)
  const recentPosts = allPosts
    .filter((post: any) => (post.fields.slug as string) !== featuredPostSlug)
    .slice(0, 6)

  // Transform featured post data
  const featuredPostData = featuredPost?.fields
    ? {
        slug: featuredPost.fields.slug as string,
        title: featuredPost.fields.title as string,
        excerpt: featuredPost.fields.excerpt as string,
        category: (featuredPost.fields.category as any)?.fields?.name || 'Uncategorized',
        date: formatDate(featuredPost.sys.createdAt),
        imageAlt: featuredPost.fields.title as string,
        image: getAssetUrl((featuredPost.fields.thumbnailImage as any)?.fields ? featuredPost.fields.thumbnailImage : undefined),
      }
    : null

  // Transform recent posts data
  const transformedPosts = recentPosts.map((post: any) => ({
    slug: post.fields.slug as string,
    title: post.fields.title as string,
    excerpt: post.fields.excerpt as string,
    category: (post.fields.category as any)?.fields?.name || 'Uncategorized',
    date: formatDate(post.sys.createdAt),
    imageAlt: post.fields.title as string,
    image: getAssetUrl((post.fields.thumbnailImage as any)?.fields ? post.fields.thumbnailImage : undefined),
  }))

  // Build categories list: "All Posts" + Contentful categories
  const categoryNames = ['All Posts', ...categories.map((cat: any) => cat.fields.name as string)]

  // Hero content from config or fallback
  const heroTitle = (configTyped?.fields?.heroTitle as string) || 'Insights on Legal Tech & BI'
  const heroDescription =
    (configTyped?.fields?.heroDescription as string) ||
    'Perspectives on business intelligence, law firm operations, and the future of data-driven decision making in professional services.'

  return (
    <>
      {/* Hero Section */}
      <section className="relative mt-20 bg-gradient-to-br from-indigo-600 via-indigo-500 to-purple-600 py-24 px-6 lg:px-12 overflow-hidden text-center">
        {/* Animated background pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1' cy='1' r='1' fill='white' opacity='0.1'/%3E%3C/svg%3E")`,
            animation: 'float 20s linear infinite',
          }}
          aria-hidden="true"
        />

        <Container className="relative z-10 max-w-4xl mx-auto">
          <FadeIn>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {heroTitle}
            </h1>
            <p className="text-xl text-white/90 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {heroDescription}
            </p>
          </FadeIn>
        </Container>
      </section>


      {/* Featured Post Section */}
      {featuredPostData && (
        <section className="relative bg-white py-24 px-6 lg:px-12">
          <Container className="max-w-7xl mx-auto">
            <FadeIn className="text-center mb-12">
              <div className="text-sm font-bold uppercase tracking-widest text-indigo-600 mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Featured Post
              </div>
            </FadeIn>
            <FeaturedPost {...featuredPostData} delay={0.2} />
          </Container>
        </section>
      )}

      {/* Recent Posts Section */}
      <section className="relative bg-white py-24 px-6 lg:px-12">
        <Container className="max-w-7xl mx-auto">
          <BlogPostsClient posts={transformedPosts} categories={categoryNames} />
        </Container>
      </section>

      {/* Coming Soon / Newsletter Section */}
      <section className="relative bg-lime-500 py-24 px-6 lg:px-12">
        <Container className="max-w-4xl mx-auto">
          <FadeIn className="text-center mb-12">
            <h2
              className="text-4xl font-bold text-slate-900 mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              More Content Coming Soon
            </h2>
            <p className="text-lg text-slate-800 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              We're building out our content library covering everything from BI best practices to law firm operations. Here are some topics we'll be exploring:
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {blogData.upcomingTopics.map((topic, index) => (
              <TopicCard key={index} {...topic} delay={index * 0.1} />
            ))}
          </div>

          <FadeIn delay={0.4}>
            <div className="bg-slate-900 p-10 rounded-xl text-white">
              <h3
                className="text-2xl font-bold mb-4"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Get Notified About New Posts
              </h3>
              <p className="text-white/90 mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Subscribe to receive updates when we publish new content on legal tech and business intelligence.
              </p>
              <form action="/api/newsletter" method="post" className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  required
                  className="flex-grow px-4 py-3 border-2 border-white/20 rounded-lg bg-white/10 text-white placeholder-white/50 focus:outline-none focus:border-lime-500 focus:bg-white/15 transition-colors"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                />
                <button
                  type="submit"
                  className="bg-lime-500 text-slate-900 px-8 py-3 rounded-lg font-bold transition-all hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Subscribe
                </button>
              </form>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  )
}
