import Link from 'next/link'
import { FadeIn } from './FadeIn'

type FeaturedPostProps = {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  imageAlt: string
  delay?: number
}

export function FeaturedPost({ slug, title, excerpt, category, date, imageAlt, delay = 0 }: FeaturedPostProps) {
  return (
    <FadeIn delay={delay}>
      <div className="bg-white rounded-xl overflow-hidden shadow-lg grid grid-cols-1 lg:grid-cols-5 gap-0">
        <div className="bg-gradient-to-br from-indigo-100 to-purple-100 lg:col-span-2 border-b-4 lg:border-b-0 lg:border-r-4 border-lime-500 min-h-[400px] flex items-center justify-center p-12 text-center">
          <strong className="text-lg text-slate-700" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {imageAlt}
          </strong>
        </div>
        <div className="lg:col-span-3 p-12 flex flex-col justify-center">
          <div className="flex gap-4 mb-4 flex-wrap">
            <span className="bg-lime-500 text-slate-900 px-3 py-1 rounded text-xs font-bold uppercase tracking-wide" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {category}
            </span>
            <span className="text-slate-700 opacity-70 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {date}
            </span>
          </div>
          <h2
            className="text-3xl font-bold text-slate-900 mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {title}
          </h2>
          <p className="text-slate-700 mb-6 leading-relaxed text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {excerpt}
          </p>
          <Link
            href={`/blog/${slug}`}
            className="text-indigo-600 font-bold hover:text-lime-500 transition-colors inline-flex items-center gap-2"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Read Full Article →
          </Link>
        </div>
      </div>
    </FadeIn>
  )
}

