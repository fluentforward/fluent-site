import Link from 'next/link'
import { FadeIn } from './FadeIn'

type ContactCardProps = {
  icon: string
  title: string
  description: string
  linkText: string
  href: string
  delay?: number
}

export function ContactCard({ icon, title, description, linkText, href, delay = 0 }: ContactCardProps) {
  return (
    <FadeIn delay={delay}>
      <div className="bg-slate-50 p-10 rounded-xl text-center transition-all hover:-translate-y-1 hover:shadow-lg border-t-4 border-indigo-600">
        <div className="bg-gradient-to-br from-indigo-600 to-lime-500 text-white w-16 h-16 rounded-xl flex items-center justify-center text-3xl mx-auto mb-6">
          {icon}
        </div>
        <h3
          className="text-xl font-bold text-slate-900 mb-4"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {title}
        </h3>
        <p className="text-slate-700 mb-6 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          {description}
        </p>
        <Link
          href={href}
          className="text-indigo-600 font-bold hover:text-lime-500 transition-colors inline-block"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          {linkText}
        </Link>
      </div>
    </FadeIn>
  )
}

