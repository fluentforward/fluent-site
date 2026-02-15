import Link from 'next/link'
import Image from 'next/image'
import { FadeIn } from './FadeIn'

type FeaturedPostProps = {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  imageAlt: string
  image?: string
  delay?: number
}

export function FeaturedPost({ slug, title, excerpt, category, date, imageAlt, image, delay = 0 }: FeaturedPostProps) {
  return (
    <FadeIn delay={delay}>
      <div className="rounded overflow-hidden shadow-lg grid grid-cols-1 lg:grid-cols-5 gap-0 border-l-4 lg:border-l-0 lg:border-t-4 border-fluent-red">
        <div className="lg:col-span-2 min-h-[250px] sm:min-h-[300px] lg:min-h-[400px] relative">
          {image ? (
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
              priority
            />
          ) : (
            <div className="bg-warm-gray w-full h-full flex items-center justify-center p-8 sm:p-12 text-center">
              <strong className="text-lg text-charcoal">
                {imageAlt}
              </strong>
            </div>
          )}
        </div>
        <div className="lg:col-span-3 p-8 md:p-12 flex flex-col justify-center bg-white">
          <div className="flex gap-4 mb-4 flex-wrap">
            <span className="bg-fluent-red text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wide">
              {category}
            </span>
            <span className="text-neutral-500 text-sm">
              {date}
            </span>
          </div>
          <h2 className="font-display font-extrabold text-2xl md:text-3xl text-charcoal mb-4">
            {title}
          </h2>
          <p className="text-neutral-600 mb-6 leading-relaxed text-lg">
            {excerpt}
          </p>
          <Link
            href={`/blog/${slug}`}
            className="text-fluent-red font-semibold hover:text-charcoal transition-colors inline-flex items-center gap-2"
          >
            Read Full Article →
          </Link>
        </div>
      </div>
    </FadeIn>
  )
}

