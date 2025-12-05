'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { FeaturedPost } from '@/components/FeaturedPost'
import { BlogPostCard } from '@/components/BlogPostCard'
import { TopicCard } from '@/components/TopicCard'
import blogData from '@/data/blog-posts.json'

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All Posts')

  const filteredPosts =
    selectedCategory === 'All Posts'
      ? blogData.posts
      : blogData.posts.filter((post) => post.category === selectedCategory)

  const handleNewsletterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const email = formData.get('email') as string

    // For now, just log the email. Later we can integrate with a newsletter service
    console.log('Newsletter subscription:', email)
    alert('Thank you for subscribing! We\'ll notify you when new posts are published.')
    e.currentTarget.reset()
  }

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
              Insights on Legal Tech & BI
            </h1>
            <p className="text-xl text-white/90 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Perspectives on business intelligence, law firm operations, and the future of data-driven decision making in professional services.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Categories Section - Sticky */}
      <section className="sticky top-20 z-50 bg-white border-b border-slate-200 py-8 px-6 lg:px-12">
        <Container className="max-w-7xl mx-auto">
          <div className="flex justify-center gap-4 flex-wrap">
            {blogData.categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full font-semibold text-sm transition-all border-2 ${
                  selectedCategory === category
                    ? 'bg-indigo-600 text-white border-indigo-600'
                    : 'bg-slate-50 text-slate-700 border-transparent hover:bg-slate-100'
                }`}
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {category}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured Post Section */}
      <section className="relative bg-white py-24 px-6 lg:px-12">
        <Container className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-12">
            <div className="text-sm font-bold uppercase tracking-widest text-indigo-600 mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Featured Post
            </div>
          </FadeIn>
          <FeaturedPost {...blogData.featuredPost} delay={0.2} />
        </Container>
      </section>

      {/* Recent Posts Section */}
      <section className="relative bg-white py-24 px-6 lg:px-12">
        <Container className="max-w-7xl mx-auto">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <BlogPostCard key={post.slug} {...post} delay={index * 0.1} />
              ))}
            </div>
          ) : (
            <FadeIn>
              <div className="text-center py-16">
                <p className="text-lg text-slate-700" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  No posts found in this category.
                </p>
              </div>
            </FadeIn>
          )}
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
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4">
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
