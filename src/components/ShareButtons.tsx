import { FadeIn } from './FadeIn'

function XIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function LinkedInIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

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
      icon: XIcon,
      label: 'Share on X',
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    },
    {
      icon: LinkedInIcon,
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
          {shareLinks.map((link, index) => {
            const isStringIcon = typeof link.icon === 'string'
            const IconComponent = isStringIcon ? null : link.icon
            const stringIcon: string | null = isStringIcon ? (link.icon as string) : null
            return (
              <a
                key={index}
                href={link.href}
                target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                className="flex items-center gap-3 px-4 py-3 bg-white border-2 border-slate-200 rounded-lg text-slate-700 font-semibold hover:border-indigo-600 hover:bg-indigo-600 hover:text-white transition-all group"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {IconComponent ? (
                  <IconComponent className="h-5 w-5 fill-current group-hover:fill-white" />
                ) : stringIcon ? (
                  <span>{stringIcon}</span>
                ) : null}
                {link.label}
              </a>
            )
          })}
        </div>
      </div>
    </FadeIn>
  )
}

