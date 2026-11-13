import { createHmac, timingSafeEqual } from 'node:crypto'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import Link from 'next/link'

import { isDatabaseConfigured } from '@/db'
import { listPlannerAdmin } from '@/lib/planner/store'

import '@/components/planner/planner.css'

export const dynamic = 'force-dynamic'

const ADMIN_COOKIE = 'ff_planner_admin'

function stamp(value: Date | string | null): string {
  if (!value) return ''
  const date = value instanceof Date ? value : new Date(value)
  if (Number.isNaN(date.getTime())) return ''
  return date.toISOString().slice(0, 16).replace('T', ' ')
}

export const metadata = {
  title: 'Planner leads',
  robots: { index: false, follow: false },
}

function adminCookieValue(secret: string): string {
  return createHmac('sha256', secret).update('ff-planner-admin-v1').digest('base64url')
}

function unlocked(): boolean {
  const secret = process.env.PLANNER_ADMIN_TOKEN
  if (!secret) return false
  const value = cookies().get(ADMIN_COOKIE)?.value
  if (!value) return false
  const expected = adminCookieValue(secret)
  const left = Buffer.from(value)
  const right = Buffer.from(expected)
  if (left.length !== right.length) return false
  return timingSafeEqual(left, right)
}

async function unlock(formData: FormData) {
  'use server'
  const secret = process.env.PLANNER_ADMIN_TOKEN || ''
  const token = String(formData.get('token') || '')
  const left = Buffer.from(token)
  const right = Buffer.from(secret)
  const matches = secret && left.length === right.length && timingSafeEqual(left, right)
  if (!matches) redirect('/internal/planner?error=1')
  cookies().set(ADMIN_COOKIE, adminCookieValue(secret), {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/internal',
    maxAge: 60 * 60 * 12,
  })
  redirect('/internal/planner')
}

export default async function PlannerAdminPage({
  searchParams,
}: {
  searchParams: { error?: string }
}) {
  if (!process.env.PLANNER_ADMIN_TOKEN) {
    return (
      <main className="ffp-admin mx-auto max-w-3xl">
        <h1 className="text-2xl font-semibold">Planner leads</h1>
        <p className="mt-3 text-lede-dark">Set PLANNER_ADMIN_TOKEN on this deployment to open the list.</p>
      </main>
    )
  }

  if (!unlocked()) {
    return (
      <main className="ffp-admin mx-auto max-w-md">
        <h1 className="text-2xl font-semibold">Planner leads</h1>
        <form action={unlock} className="mt-6 flex flex-col gap-3">
          <label htmlFor="admin-token" className="ffp-label text-mist">
            Access token
          </label>
          <input id="admin-token" name="token" type="password" autoComplete="current-password" required />
          <button type="submit" className="rounded-btn bg-accent px-5 py-3 font-semibold text-ink">
            Open
          </button>
          {searchParams.error ? <p className="text-sm text-mist">That token did not match.</p> : null}
        </form>
      </main>
    )
  }

  if (!isDatabaseConfigured()) {
    return (
      <main className="ffp-admin mx-auto max-w-3xl">
        <h1 className="text-2xl font-semibold">Planner leads</h1>
        <p className="mt-3 text-lede-dark">DATABASE_URL is not set, so there is nothing to list yet.</p>
      </main>
    )
  }

  const { sessions, runs } = await listPlannerAdmin()
  const emails = new Map(sessions.map((session) => [session.id, session.email || '']))

  return (
    <main className="ffp-admin mx-auto max-w-page">
      <p className="ffp-label text-mist">Agent Planner</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-[-0.03em]">Leads and runs</h1>
      <p className="mt-2 text-sm text-mist">{sessions.length} most recent sessions.</p>

      <div className="mt-8 overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>When</th>
              <th>Phase</th>
              <th>Name</th>
              <th>Email</th>
              <th>Plan</th>
              <th>Problem</th>
              <th>Email sent</th>
            </tr>
          </thead>
          <tbody>
            {sessions.map((session) => {
              const title = session.partialPlan?.title || session.fullPlan?.title || session.refusal || ''
              return (
                <tr key={session.id}>
                  <td>{stamp(session.createdAt)}</td>
                  <td>{session.phase}</td>
                  <td>{session.name || ''}</td>
                  <td>{session.email || ''}</td>
                  <td>{title}</td>
                  <td>{session.problem.slice(0, 240)}</td>
                  <td>{session.emailedAt ? 'Yes' : session.deliveryError || ''}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <h2 className="mt-12 text-xl font-semibold">Recent model runs</h2>
      <div className="mt-4 overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>When</th>
              <th>Email</th>
              <th>Slot</th>
              <th>Model</th>
              <th>Tokens</th>
              <th>Latency</th>
              <th>Degraded</th>
            </tr>
          </thead>
          <tbody>
            {runs.map((run) => (
              <tr key={run.id}>
                <td>{stamp(run.createdAt)}</td>
                <td>{emails.get(run.sessionId) || ''}</td>
                <td>{run.slot}</td>
                <td>{run.model || ''}</td>
                <td>
                  {run.inputTokens ?? 0}/{run.outputTokens ?? 0}
                </td>
                <td>{run.latencyMs ?? ''}ms</td>
                <td>{run.degraded ? 'Yes' : ''}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-8 text-sm text-mist">
        <Link href="/" className="underline">
          Back to the site
        </Link>
      </p>
    </main>
  )
}
