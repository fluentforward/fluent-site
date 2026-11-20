const WIDGET_SRC =
  'https://registry.blockmarktech.com/certificates/f28ee0bf-e116-4526-a9d8-c88d9301e26f/widget/?tooltip_position=bottom_right&theme=transparent&hover=t'

export function CyberEssentialsBadge({ className }: { className?: string }) {
  return (
    <iframe
      src={WIDGET_SRC}
      title="Cyber Essentials certificate, verified by BlockMark"
      className={className}
      style={{ border: 'none', height: 132, width: 132 }}
      loading="lazy"
    />
  )
}