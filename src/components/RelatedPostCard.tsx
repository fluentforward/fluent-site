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
      <article className="bg-white/5 border-l-4 border-fluent-red rounded overflow-hidden transition-all hover:-translate-y-1 hover:bg-white/10">
        <div className="bg-warm-gray h-44 flex items-center justify-center p-6 text-center">
          <strong className="text-xs text-charcoal">
            {imageAlt}
          </strong>
        </div>
        <div className="p-8">
          <h4 className="font-display font-extrabold text-xl text-white mb-3 leading-snug">
            {title}
          </h4>
          <p className="text-white/80 text-sm leading-relaxed mb-4">
            {excerpt}
          </p>
          <Link
            href={`/blog/${slug}`}
            className="text-fluent-red font-semibold hover:text-white transition-colors"
          >
            Read More →
          </Link>
        </div>
      </article>
    </FadeIn>
  )
}

