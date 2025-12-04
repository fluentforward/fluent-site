import { FadeIn } from './FadeIn'

type ShareButtonsProps = {
  url: string
  title: string
  delay?: number
}

export function ShareButtons({ url, title, delay = 0 }: ShareButtonsProps) {
  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)

  const shareLinks = [
    {
      icon: '🐦',
      label: 'Share on Twitter',
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    },
    {
      icon: '💼',
      label: 'Share on LinkedIn',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    },
    {
      icon: '✉️',
      label: 'Share via Email',
      href: `mailto:?subject=${encodedTitle}&body=${encodedUrl}`,
    },
  ]

  return (
    <FadeIn delay={delay}>
      <div className="bg-slate-50 p-8 rounded-xl">
        <h4
          className="text-xl font-bold text-slate-900 mb-6"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Share This Article
        </h4>
        <div className="space-y-3">
          {shareLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target={link.href.startsWith('mailto:') ? undefined : '_blank'}
              rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              className="flex items-center gap-3 px-4 py-3 bg-white border-2 border-slate-200 rounded-lg text-slate-700 font-semibold hover:border-indigo-600 hover:bg-indigo-600 hover:text-white transition-all"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <span>{link.icon}</span>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </FadeIn>
  )
}

