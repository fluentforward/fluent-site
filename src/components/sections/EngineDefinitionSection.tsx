import { DefinitionGrid } from '@/components/sections/DefinitionGrid'
import { engineDefinition } from '@/content/home'

export function EngineDefinitionSection() {
  return (
    <DefinitionGrid
      eyebrow={engineDefinition.eyebrow}
      heading={engineDefinition.heading}
      lede={engineDefinition.lede}
      items={engineDefinition.chips}
      tone="muted"
    />
  )
}
