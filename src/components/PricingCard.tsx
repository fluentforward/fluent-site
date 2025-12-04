import Link from 'next/link'
import clsx from 'clsx'

type PricingCardProps = {
  name: string
  description: string
  price: string | number
  pricePeriod: string
  priceNote: string
  features: Array<{ text: string; included: boolean }>
  ctaText: string
  ctaHref: string
  featured?: boolean
  featuredBadge?: string
  ctaVariant?: 'primary' | 'secondary' | 'featured'
}

export function PricingCard({
  name,
  description,
  price,
  pricePeriod,
  priceNote,
  features,
  ctaText,
  ctaHref,
  featured = false,
  featuredBadge,
  ctaVariant = 'secondary',
}: PricingCardProps) {
  return (
    <div
      className={clsx(
        'bg-white rounded-xl p-10 shadow-lg flex flex-col relative border-2 transition-all hover:-translate-y-1 hover:shadow-xl',
        featured ? 'border-lime-500 md:scale-105' : 'border-transparent'
      )}
    >
      {featured && featuredBadge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-lime-500 text-slate-900 px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
          {featuredBadge}
        </div>
      )}
      
      <div className="text-center pb-8 border-b-2 border-slate-50 mb-8">
        <h3
          className="text-2xl font-bold text-slate-900 mb-2"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {name}
        </h3>
        <p className="text-slate-700 text-sm mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          {description}
        </p>
        <div className="my-6">
          {typeof price === 'number' ? (
            <>
              <span
                className="text-5xl font-bold text-slate-900 leading-none"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                <span className="text-2xl align-super">£</span>
                {price.toLocaleString()}
              </span>
              <div className="text-slate-700 mt-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {pricePeriod}
              </div>
            </>
          ) : (
            <>
              <span
                className="text-5xl font-bold text-slate-900 leading-none"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {price}
              </span>
              <div className="text-slate-700 mt-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {pricePeriod}
              </div>
            </>
          )}
          <p className="text-slate-600 text-sm mt-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {priceNote}
          </p>
        </div>
      </div>
      
      <ul className="space-y-4 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <span
              className={clsx(
                'font-bold flex-shrink-0 mt-0.5',
                feature.included ? 'text-lime-500' : 'text-slate-300'
              )}
            >
              {feature.included ? '✓' : '✗'}
            </span>
            <span className="text-slate-700 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {feature.text}
            </span>
          </li>
        ))}
      </ul>
      
      <Link
        href={ctaHref}
        className={clsx(
          'block w-full py-4 rounded-lg font-bold text-center transition-all border-2',
          ctaVariant === 'primary' &&
            'bg-indigo-600 text-white border-indigo-600 hover:bg-slate-900 hover:border-slate-900',
          ctaVariant === 'secondary' &&
            'bg-transparent text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-white',
          ctaVariant === 'featured' &&
            'bg-lime-500 text-slate-900 border-lime-500 shadow-lg shadow-lime-500/25 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-lime-500/35'
        )}
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {ctaText}
      </Link>
    </div>
  )
}

