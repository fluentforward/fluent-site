import Link from 'next/link'
import Image from 'next/image'
import { FadeIn } from './FadeIn'

type BlogPostCardProps = {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  imageAlt: string
  image?: string
  delay?: number
}

export function BlogPostCard({ slug, title, excerpt, category, date, imageAlt, image, delay = 0 }: BlogPostCardProps) {
  return (
    <FadeIn delay={delay}>
      <article className="bg-white border-2 border-slate-200 rounded-xl overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg hover:border-indigo-600 flex flex-col">
        <div className="h-48 relative overflow-hidden border-b-3 border-lime-500">
          {image ? (
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-cover w-full h-full"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          ) : (
            <div className="bg-gradient-to-br from-indigo-100 to-purple-100 w-full h-full flex items-center justify-center p-8 text-center">
              <strong className="text-sm text-slate-700" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {imageAlt}
              </strong>
            </div>
          )}
        </div>
        <div className="p-8 flex-grow flex flex-col">
          <div className="flex gap-4 mb-3 flex-wrap">
            <span className="bg-lime-500 text-slate-900 px-3 py-1 rounded text-xs font-bold uppercase tracking-wide" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {category}
            </span>
            <span className="text-slate-700 opacity-70 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {date}
            </span>
          </div>
          <h3
            className="text-2xl font-bold text-slate-900 mb-3"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {title}
          </h3>
          <p className="text-slate-700 mb-6 leading-relaxed flex-grow text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {excerpt}
          </p>
          <Link
            href={`/blog/${slug}`}
            className="text-indigo-600 font-bold hover:text-lime-500 transition-colors inline-flex items-center gap-2"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Read More →
          </Link>
        </div>
      </article>
    </FadeIn>
  )
}

