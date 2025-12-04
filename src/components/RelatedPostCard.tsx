import Link from 'next/link'
import { FadeIn } from './FadeIn'

type RelatedPostCardProps = {
  slug: string
  title: string
  excerpt: string
  imageAlt: string
  delay?: number
}

export function RelatedPostCard({ slug, title, excerpt, imageAlt, delay = 0 }: RelatedPostCardProps) {
  return (
    <FadeIn delay={delay}>
      <article className="bg-white/5 border border-white/10 rounded-xl overflow-hidden transition-all hover:-translate-y-1 hover:border-lime-500 backdrop-blur-md">
        <div className="bg-gradient-to-br from-indigo-100 to-purple-100 h-44 flex items-center justify-center p-6 text-center">
          <strong className="text-xs text-slate-700" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {imageAlt}
          </strong>
        </div>
        <div className="p-8">
          <h4
            className="text-xl font-bold text-white mb-3 leading-snug"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {title}
          </h4>
          <p className="text-white/80 text-sm leading-relaxed mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {excerpt}
          </p>
          <Link
            href={`/blog/${slug}`}
            className="text-lime-500 font-bold hover:text-white transition-colors"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Read More →
          </Link>
        </div>
      </article>
    </FadeIn>
  )
}

