import { FadeIn } from './FadeIn'

type SocialLink = {
  label: string
  href: string
}

type ExperienceItem = {
  title: string
  description: string
}

type FounderProfileProps = {
  name: string
  title: string
  socialLinks: SocialLink[]
  bioTitle: string
  bioParagraphs: string[]
  experience: ExperienceItem[]
  delay?: number
}

export function FounderProfile({
  name,
  title,
  socialLinks,
  bioTitle,
  bioParagraphs,
  experience,
  delay = 0,
}: FounderProfileProps) {
  return (
    <>
      <FadeIn delay={delay}>
        <div className="bg-white/5 border border-white/10 rounded-xl p-10 text-center backdrop-blur-md">
          <div className="bg-gradient-to-br from-indigo-600 to-lime-500 w-48 h-48 rounded-full mx-auto mb-6 flex items-center justify-center text-7xl">
            👤
          </div>
          <h3
            className="text-3xl font-bold text-white mb-2"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {name}
          </h3>
          <p className="text-lime-500 font-semibold mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {title}
          </p>
          <div className="flex justify-center gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-white/70 hover:text-lime-500 transition-colors text-xl"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={delay + 0.1}>
        <div className="bg-white/5 border border-white/10 rounded-xl p-12 backdrop-blur-md">
          <h3
            className="text-3xl font-bold text-white mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {bioTitle}
          </h3>
          {bioParagraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-white/90 leading-relaxed mb-6 text-lg last:mb-0"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {paragraph}
            </p>
          ))}
          <ul className="mt-8 space-y-4">
            {experience.map((item, index) => (
              <li key={index} className="pb-4 border-b border-white/10 last:border-b-0 last:pb-0">
                <strong className="text-lime-500 block mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {item.title}
                </strong>
                <span className="text-white/70 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {item.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </FadeIn>
    </>
  )
}

