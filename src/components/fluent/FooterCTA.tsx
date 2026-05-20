import Link from 'next/link'

import { Button } from './Button'
import { CalBookingButton } from './CalBookingButton'

export function FooterCTA() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-charcoal text-white">
      <div className="max-w-[1200px] mx-auto px-[5%]">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 md:gap-16 items-end">
          <div>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl mb-4 leading-tight">
              Ready to move from
              <br />
              scarcity to abundance?
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-90 max-w-xl leading-relaxed">
              Let&apos;s map your constraints and architect your execution
              system. Whether you&apos;re building a platform, exploring the
              partner programme, or need fractional strategic support — start
              with a conversation. No commitment required.
            </p>
            <div className="flex flex-wrap gap-4">
              <CalBookingButton label="Book a Constraint Audit" />
              <Button href="/#services" variant="secondary">
                Explore Services
              </Button>
            </div>
          </div>
          <div className="md:text-right">
            <p className="font-display font-bold text-[10px] tracking-widest uppercase text-neutral-400 mb-2">
              Or reach out directly
            </p>
            <Link
              href="mailto:strategy@fluentforward.com"
              className="font-display font-extrabold text-lg text-white hover:text-fluent-red transition-colors no-underline"
            >
              strategy@fluentforward.com
            </Link>
            <p className="text-xs text-neutral-500 mt-1 italic">
              Response within one working day.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
