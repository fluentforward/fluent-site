import { CookieSettingsButton } from '@/components/consent/CookieConsentProvider'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Heading, Lede } from '@/components/ui/Heading'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import type { CookieInventoryRow } from '@/content/cookies'
import { cookiePolicyVersion } from '@/content/cookies'

function InventoryTable({ rows }: { rows: readonly CookieInventoryRow[] }) {
  return (
    <div className="mt-8 overflow-x-auto">
      <table className="w-full min-w-[640px] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-line">
            <th scope="col" className="py-3 pr-4 font-medium text-ink">
              Name
            </th>
            <th scope="col" className="py-3 pr-4 font-medium text-ink">
              Type
            </th>
            <th scope="col" className="py-3 pr-4 font-medium text-ink">
              Category
            </th>
            <th scope="col" className="py-3 pr-4 font-medium text-ink">
              Purpose
            </th>
            <th scope="col" className="py-3 font-medium text-ink">
              Retention
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.name + row.type} className="border-b border-line">
              <td className="py-4 pr-4 align-top font-mono text-xs text-ink">
                {row.name}
              </td>
              <td className="py-4 pr-4 align-top text-slate">{row.type}</td>
              <td className="py-4 pr-4 align-top text-slate">{row.category}</td>
              <td className="py-4 pr-4 align-top leading-relaxed text-slate">
                {row.purpose}
              </td>
              <td className="py-4 align-top leading-relaxed text-slate">
                {row.retention}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function CookieNoticePage({
  title,
  lastUpdated,
  intro,
  inventory,
}: {
  title: string
  lastUpdated: string
  intro: string
  inventory: readonly CookieInventoryRow[]
}) {
  return (
    <>
      <Section tone="paper" className="pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="max-w-3xl">
          <Eyebrow>Legal</Eyebrow>
          <Heading as="h1" size="display-sm" className="mt-6">
            {title}
          </Heading>
          <p className="mt-5 font-mono text-xs tracking-wide text-mist uppercase">
            Last updated {lastUpdated}
          </p>
          <p className="mt-3 font-mono text-xs tracking-wide text-mist uppercase">
            Policy version {cookiePolicyVersion}
          </p>
          <Lede className="mt-7">{intro}</Lede>
          <CookieSettingsButton
            className="mt-8 rounded-btn border border-line-strong bg-transparent px-6 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-paper-2"
          >
            Cookie settings
          </CookieSettingsButton>
        </div>
      </Section>

      <Section tone="paper" border>
        <Reveal as="section" className="max-w-5xl">
          <h2 className="text-sub text-ink">Technologies in use</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-slate">
            Optional analytics and marketing tools load only after you consent.
            Strictly necessary items include consent memory, security-related
            hosting logs, and the booking calendar when you choose to open it.
          </p>
          <InventoryTable rows={inventory} />
        </Reveal>
      </Section>
    </>
  )
}
