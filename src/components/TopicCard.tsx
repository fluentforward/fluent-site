import { FadeIn } from './FadeIn'

type TopicCardProps = {
  icon: string
  title: string
  description: string
  delay?: number
}

export function TopicCard({ icon, title, description, delay = 0 }: TopicCardProps) {
  return (
    <FadeIn delay={delay}>
      <div className="bg-white p-8 rounded border-l-4 border-fluent-red shadow-md text-left">
        <div className="text-3xl mb-4">{icon}</div>
        <h3 className="font-display font-extrabold text-xl text-charcoal mb-2">
          {title}
        </h3>
        <p className="text-neutral-600 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </FadeIn>
  )
}

