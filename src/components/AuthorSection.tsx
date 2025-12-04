import Link from 'next/link'
import { FadeIn } from './FadeIn'

type AuthorSectionProps = {
  name: string
  title: string
  bio: string
  learnMoreHref: string
  delay?: number
}

export function AuthorSection({ name, title, bio, learnMoreHref, delay = 0 }: AuthorSectionProps) {
  return (
    <FadeIn delay={delay}>
      <div className="bg-slate-50 p-8 rounded-xl flex flex-col md:flex-row gap-8 items-start">
        <div className="bg-gradient-to-br from-indigo-600 to-lime-500 w-24 h-24 rounded-full flex items-center justify-center text-5xl flex-shrink-0 mx-auto md:mx-0">
          👤
        </div>
        <div>
          <h4
            className="text-xl font-bold text-slate-900 mb-2"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {name}
          </h4>
          <p className="text-indigo-600 font-semibold mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {title}
          </p>
          <p className="text-slate-700 leading-relaxed mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {bio}
          </p>
          <Link
            href={learnMoreHref}
            className="text-indigo-600 font-semibold hover:text-lime-500 transition-colors"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Learn more about our story →
          </Link>
        </div>
      </div>
    </FadeIn>
  )
}

