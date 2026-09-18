import { DefinitionGrid } from '@/components/sections/DefinitionGrid'
import { engineDefinition } from '@/content/home'

export function EngineDefinitionSection() {
  return (
    <DefinitionGrid
      eyebrow={engineDefinition.eyebrow}
      heading={engineDefinition.heading}
      lede={engineDefinition.lede}
      plainLine={engineDefinition.plainLine}
      items={engineDefinition.chips}
      closing={engineDefinition.closing}
      tone="paper"
    />
  )
}
