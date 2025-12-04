import { FadeIn } from './FadeIn'

type TableOfContentsProps = {
  items: Array<{ label: string; href: string }>
  delay?: number
}

export function TableOfContents({ items, delay = 0 }: TableOfContentsProps) {
  return (
    <FadeIn delay={delay}>
      <div className="bg-slate-50 p-8 rounded-xl">
        <h4
          className="text-xl font-bold text-slate-900 mb-6"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Table of Contents
        </h4>
        <ul className="space-y-3">
          {items.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="text-slate-700 text-sm hover:text-indigo-600 transition-colors block hover:pl-2"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
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

