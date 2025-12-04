import Link from 'next/link'
import { Container } from './Container'
import { FadeIn } from './FadeIn'

const footerLinks = {
  product: [
    { title: 'Features', href: '/features' },
    { title: 'Integrations', href: '#solution' },
    { title: 'Pricing', href: '/pricing' },
    { title: 'Security', href: '/contact' },
  ],
  company: [
    { title: 'About', href: '/about' },
    { title: 'Blog', href: '/blog' },
    { title: 'Careers', href: '/contact' },
    { title: 'Contact', href: '/contact' },
  ],
  resources: [
    { title: 'Documentation', href: '/contact' },
    { title: 'Case Studies', href: '/work' },
    { title: 'Support', href: '/contact' },
    { title: 'Book Demo', href: '/book-demo' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-slate-900 py-16 px-6 lg:px-12 text-white/70">
      <Container className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <h3
                className="text-2xl font-bold text-white mb-4"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Cognify Legal
              </h3>
              <p className="leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Intelligence, not dashboards. Purpose-built for mid-market UK law firms seeking data-driven decision making without the complexity of traditional BI.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Product
              </h4>
              <ul className="space-y-2">
                {footerLinks.product.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      className="transition-colors hover:text-lime-500 block"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Company
              </h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      className="transition-colors hover:text-lime-500 block"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Resources
              </h4>
              <ul className="space-y-2">
                {footerLinks.resources.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      className="transition-colors hover:text-lime-500 block"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            <p>
              © {new Date().getFullYear()} Cognify Legal. All rights reserved. |{' '}
              <Link href="/contact" className="hover:text-lime-500 transition-colors">
                Privacy Policy
              </Link>{' '}
              |{' '}
              <Link href="/contact" className="hover:text-lime-500 transition-colors">
                Terms of Service
              </Link>
            </p>
          </div>
        </FadeIn>
      </Container>
    </footer>
  )
}
