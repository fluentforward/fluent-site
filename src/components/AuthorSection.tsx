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
      <div className="bg-warm-gray p-8 rounded border-l-4 border-fluent-red flex flex-col md:flex-row gap-8 items-start">
        <div className="bg-fluent-red w-24 h-24 rounded-full flex items-center justify-center text-5xl flex-shrink-0 mx-auto md:mx-0">
          👤
        </div>
        <div>
          <h4 className="font-display font-extrabold text-xl text-charcoal mb-2">
            {name}
          </h4>
          <p className="text-fluent-red font-semibold mb-4">
            {title}
          </p>
          <p className="text-neutral-600 leading-relaxed mb-4">
            {bio}
          </p>
          <Link
            href={learnMoreHref}
            className="text-fluent-red font-semibold hover:text-charcoal transition-colors"
          >
            Learn more about our story →
          </Link>
        </div>
      </div>
    </FadeIn>
  )
}

