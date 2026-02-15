import Link from 'next/link'
import Image from 'next/image'
import { FadeIn } from './FadeIn'

type BlogPostCardProps = {
  slug: string
  title: string
  excerpt: string
  category: string
  imageAlt: string
  image?: string
  delay?: number
}

export function BlogPostCard({ slug, title, excerpt, category, imageAlt, image, delay = 0 }: BlogPostCardProps) {
  return (
    <FadeIn delay={delay}>
      <article className="bg-white border-l-4 border-fluent-red rounded overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl flex flex-col">
        <div className="h-48 relative overflow-hidden">
          {image ? (
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-cover w-full h-full"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          ) : (
            <div className="bg-warm-gray w-full h-full flex items-center justify-center p-8 text-center">
              <strong className="text-sm text-charcoal">
                {imageAlt}
              </strong>
            </div>
          )}
        </div>
        <div className="p-6 md:p-8 flex-grow flex flex-col">
          <div className="flex gap-4 mb-3 flex-wrap">
            <span className="bg-fluent-red text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wide">
              {category}
            </span>
          </div>
          <h3 className="font-display font-extrabold text-xl md:text-2xl text-charcoal mb-3">
            {title}
          </h3>
          <p className="text-neutral-600 mb-6 leading-relaxed flex-grow text-sm">
            {excerpt}
          </p>
          <Link
            href={`/blog/${slug}`}
            className="text-fluent-red font-semibold hover:text-charcoal transition-colors inline-flex items-center gap-2"
          >
            Read More →
          </Link>
        </div>
      </article>
    </FadeIn>
  )
}

