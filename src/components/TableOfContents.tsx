'use client'

import { FadeIn } from './FadeIn'

type TableOfContentsProps = {
  items: Array<{ label: string; href: string }>
  delay?: number
}

export function TableOfContents({ items, delay = 0 }: TableOfContentsProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const targetElement = document.getElementById(targetId)
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
      // Update URL hash without triggering scroll
      window.history.pushState(null, '', href)
    }
  }

  return (
    <FadeIn delay={delay}>
      <div className="bg-warm-gray p-8 rounded border-l-4 border-fluent-red">
        <h4 className="font-display font-extrabold text-xl text-charcoal mb-6">
          Table of Contents
        </h4>
        <ul className="space-y-3">
          {items.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className="text-charcoal text-sm hover:text-fluent-red transition-colors block hover:pl-2 cursor-pointer"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </FadeIn>
  )
}

