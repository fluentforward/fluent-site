import Image from 'next/image'

import { SectionContainer } from './SectionContainer'
import { SectionHeader } from './SectionHeader'

const bioItems = [
  'Proven efficiency gains: Helped clients achieve in 1 day what previously took 3 weeks',
  'Scale without bloat: Scaled e-commerce systems from thousands to tens of millions of orders daily—with less infrastructure and lower costs',
  'Technique before volume: Refine systems first, then scale—achieving elite results with constrained resources',
  'Full-stack capability: I code, strategize, and ship—removing the founder-technical divide',
  'Building my own platforms: £50K+ invested in WeMove/LegalMatch, applying Execution Abundance to legal tech while maintaining client work and family commitments',
]

export function FounderSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <SectionContainer>
        <SectionHeader
          title="Built By Someone Who Lives It"
          subtitle="Execution Abundance isn't theory. It's personal practice."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center mt-12">
          <div className="relative h-80 md:h-[400px] border-[3px] border-fluent-red overflow-hidden">
            <Image
              src="/images/bristol-channel-swim.png"
              alt="Matt Todd - Bristol Channel swim"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
          <div>
            <h3 className="font-display font-extrabold text-2xl mb-4">
              Matt Todd
            </h3>
            <p className="text-lg mb-6">
              Technical founder, ultra-endurance athlete, father of two. I apply
              the same principles to business that let me complete the Bristol
              Channel swim on 10-15 hours/week of training (versus typical 25-30
              hours).
            </p>
            <ul className="list-none mt-6">
              {bioItems.map((item, i) => (
                <li
                  key={i}
                  className="py-3 pl-8 relative before:content-['→'] before:absolute before:left-0 before:text-fluent-red before:font-bold"
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 italic text-neutral-500">
              I don't teach theory. I build systems that create abundance, then
              help others do the same.
            </p>
          </div>
        </div>
      </SectionContainer>
    </section>
  )
}
