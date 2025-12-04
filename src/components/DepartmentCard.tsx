import { FadeIn } from './FadeIn'

type DepartmentCardProps = {
  icon: string
  title: string
  description: string
  email: string
  delay?: number
}

export function DepartmentCard({ icon, title, description, email, delay = 0 }: DepartmentCardProps) {
  return (
    <FadeIn delay={delay}>
      <div className="bg-white/5 border border-white/10 rounded-xl p-10 backdrop-blur-md">
        <div className="text-4xl mb-6">{icon}</div>
        <h3
          className="text-2xl font-bold text-white mb-4"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {title}
        </h3>
        <p className="text-white/80 mb-6 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          {description}
        </p>
        <a
          href={`mailto:${email}`}
          className="text-lime-500 font-bold hover:text-white transition-colors inline-block"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          {email}
        </a>
      </div>
    </FadeIn>
  )
}

