import { ArrowLink } from '@/components/ui/ArrowLink'
import { Card } from '@/components/ui/Card'
import { blueprintsPage } from '@/content/blueprints'
import type { StrategyBlueprint } from '@/content/blueprints'

export function BlueprintCard({ blueprint }: { blueprint: StrategyBlueprint }) {
  return (
    <Card hover className="flex h-full flex-col">
      <ul className="flex flex-wrap gap-x-3 gap-y-2">
        {blueprint.tags.map((tag) => (
          <li
            key={tag}
            className="font-mono text-label uppercase text-mist"
          >
            {tag}
          </li>
        ))}
      </ul>
      <h2 className="mt-6 font-display text-sub text-ink">{blueprint.title}</h2>
      <p className="mt-5 flex-1 text-[0.9375rem] leading-[1.72] text-slate">
        {blueprint.summary}
      </p>
      <div className="mt-8 border-t border-line pt-8">
        <ArrowLink href={blueprint.href} newTab>
          {blueprintsPage.ctaLabel}
        </ArrowLink>
      </div>
    </Card>
  )
}
