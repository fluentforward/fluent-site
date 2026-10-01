import { Card } from '@/components/ui/Card'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import {
  compareColumns,
  compareRowLabels,
  compareRowOrder,
  type CompareCellValue,
  type CompareRowKey,
} from '@/content/options'

function CompareCellContent({ value }: { value: CompareCellValue }) {
  if (typeof value === 'string') {
    return value
  }

  return (
    <ul className="space-y-3">
      {value.map((item) => (
        <li key={item} className="flex gap-3">
          <span aria-hidden="true" className="shrink-0 text-steel">
            &bull;
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function CompareCard({
  title,
  rows,
}: {
  title: string
  rows: Record<CompareRowKey, CompareCellValue>
}) {
  return (
    <article className="flex min-w-0 flex-col">
      <Card className="h-full">
        <h2 className="font-display text-[1.125rem] font-medium tracking-[-0.015em] text-ink">
          {title}
        </h2>
        <dl className="mt-8">
          {compareRowOrder.map((key) => (
            <div
              key={key}
              className="border-t border-line py-5 first:border-t-0 first:pt-0"
            >
              <dt className="font-mono text-label uppercase text-mist">
                {compareRowLabels[key]}
              </dt>
              <dd className="mt-2 text-[0.9375rem] leading-[1.72] text-slate">
                <CompareCellContent value={rows[key]} />
              </dd>
            </div>
          ))}
        </dl>
      </Card>
    </article>
  )
}

export function OptionsCompareSection() {
  return (
    <Section tone="muted" border>
      <div className="lg:hidden">
        <div className="grid grid-cols-1 gap-6">
          {compareColumns.map((column, index) => (
            <Reveal key={column.title} delay={index * 60}>
              <CompareCard title={column.title} rows={column.rows} />
            </Reveal>
          ))}
        </div>
      </div>

      <div className="hidden lg:block">
        <Reveal>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[56rem] border-collapse text-left">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="w-[11rem] border-b border-line pb-4 pr-6 font-mono text-label uppercase text-mist"
                  >
                    <span className="sr-only">Criteria</span>
                  </th>
                  {compareColumns.map((column) => (
                    <th
                      key={column.title}
                      scope="col"
                      className="border-b border-line pb-4 pr-6 align-bottom font-display text-[1.0625rem] font-medium tracking-[-0.015em] text-ink last:pr-0"
                    >
                      {column.title}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {compareRowOrder.map((key) => (
                  <tr key={key} className="border-b border-line last:border-b-0">
                    <th
                      scope="row"
                      className="py-5 pr-6 align-top font-mono text-label uppercase text-mist"
                    >
                      {compareRowLabels[key]}
                    </th>
                    {compareColumns.map((column) => (
                      <td
                        key={column.title + key}
                        className="py-5 pr-6 align-top text-[0.9375rem] leading-[1.72] text-slate last:pr-0"
                      >
                        <CompareCellContent value={column.rows[key]} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
