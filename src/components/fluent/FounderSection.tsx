import { SectionContainer } from './SectionContainer'
import { SectionHeader } from './SectionHeader'

const bioItems = [
  'Helped clients achieve in 1 day what previously took 3 weeks',
  'Scaled e-commerce systems from thousands to tens of millions of orders daily — with less infrastructure and lower costs',
  'Technique before volume: refine systems first, then scale',
  'Full-stack capability: I code, strategise, and ship',
  'Building my own platforms — applying the methodology to my own business, not just clients',
]

const stats = [
  {
    value: '40–60%',
    label: 'Time savings proven in conveyancing workflows',
  },
  {
    value: '800+',
    label: 'Prospect database built before first partner conversation',
  },
  {
    value: '3×',
    label: 'Faster — what took 3 weeks, done in 1 day',
  },
  {
    value: '4',
    label: 'Maximum concurrent fractional engagements',
  },
]

export function FounderSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <SectionContainer>
        <SectionHeader title="Built By Someone Who Lives It" />

        <div className="grid grid-cols-1 md:grid-cols-[1fr_360px] gap-12 md:gap-16 items-start mt-12">
          <div>
            <h3 className="font-display font-extrabold text-2xl md:text-3xl leading-tight mb-6">
              Execution Abundance isn&apos;t theory.
              <br />
              It&apos;s personal practice.
            </h3>
            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
              Technical founder, ultra-endurance athlete, father of two. I apply
              the same principles to business that let me complete the Bristol
              Channel swim on 10–15 hours/week of training versus the typical
              25–30. The constraint isn&apos;t always the resource — it&apos;s
              usually the assumption about the resource.
            </p>
            <ul className="list-none">
              {bioItems.map((item, i) => (
                <li
                  key={i}
                  className="py-3 border-b border-neutral-200 flex gap-3 text-neutral-600 leading-relaxed last:border-b-0"
                >
                  <span className="text-fluent-red shrink-0">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-warm-gray border border-neutral-200 p-8 md:p-9">
            <p className="font-display font-bold text-[10px] tracking-widest uppercase text-neutral-500 mb-6">
              By the numbers
            </p>
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="py-4 border-b border-neutral-200 last:border-b-0"
              >
                <p className="font-display font-extrabold text-3xl text-fluent-red leading-none mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-neutral-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>
    </section>
  )
}
