'use client'

import { useState } from 'react'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { BlogPostCard } from '@/components/BlogPostCard'
import { BlogCategoryFilter } from '@/components/BlogCategoryFilter'

type Post = {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  imageAlt: string
  image?: string
}

type BlogPostsClientProps = {
  posts: Post[]
  categories: string[]
}

export function BlogPostsClient({ posts, categories }: BlogPostsClientProps) {
  const [selectedCategory, setSelectedCategory] = useState('All Posts')

  const filteredPosts =
    selectedCategory === 'All Posts'
      ? posts
      : posts.filter((post) => post.category === selectedCategory)

  return (
    <>
      {/* Category Filter - Only show if there are posts */}
      {posts.length > 0 && (
        <div className="mb-12">
          <BlogCategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>
      )}

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
    </>
  )
}

