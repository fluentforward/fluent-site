import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import { FadeIn } from './FadeIn'
import Image from 'next/image'

type Capability = {
  text: string
}

type AppFeatureProps = {
  title: string
  description: string
  capabilities: Capability[]
  screenshotTitle?: string
  screenshotDescription?: string
  reverse?: boolean
  delay?: number
  screenshot?: {
    image: StaticImport
    alt: string
  }
}

export function AppFeature({
  title,
  description,
  capabilities,
  screenshotTitle,
  screenshotDescription,
  screenshot,
  reverse = false,
  delay = 0,
}: AppFeatureProps) {
  return (
    <FadeIn delay={delay}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 items-center">
        <div className={reverse ? 'lg:order-2' : ''}>
          {screenshot ? (
            <div className="relative">
              <div className="relative w-full" style={{ minHeight: 400, maxHeight: 500 }}>
                <Image
                  src={screenshot.image}
                  alt={screenshot.alt}
                  className="rounded-xl shadow-2xl bg-white object-contain"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          ) : (
            <div className="bg-gradient-to-br from-indigo-100 to-purple-100 border-2 border-dashed border-indigo-600 rounded-xl p-12 text-center min-h-[350px] flex flex-col justify-center items-center">
              <strong className="block text-xl text-slate-900 mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {screenshotTitle}
              </strong>
              <small className="block text-sm text-slate-700 max-w-[90%]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {screenshotDescription}
              </small>
            </div>
          )}
        </div>
        <div className={reverse ? 'lg:order-1' : ''}>
          <h3
            className="text-3xl font-bold text-slate-900 mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {title}
          </h3>
          <p className="text-lg text-slate-700 mb-8 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {description}
          </p>
          <ul className="space-y-5">
            {capabilities.map((capability, index) => (
              <li key={index} className="flex gap-4 items-start">
                <div className="bg-lime-500 text-slate-900 w-8 h-8 rounded-lg flex items-center justify-center font-bold flex-shrink-0 text-lg">
                  ✓
                </div>
                <span className="text-slate-700 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {capability.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </FadeIn>
  )
}

