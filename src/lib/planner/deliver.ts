import { put } from '@vercel/blob'

import { site } from '@/content/site'
import { signPdfLink } from '@/lib/planner/ids'
import { loopsClientFromEnv } from '@/lib/planner/loops'
import {
  contactUpdateBody,
  planCompletedEvent,
  planTransactionalBody,
  staffTransactionalBody,
} from '@/lib/planner/loops-payload'
import { renderPlanPdf } from '@/lib/planner/pdf'
import { adaptLegacyPlan, parseStoredPlan } from '@/lib/planner/plan-schema'
import {
  getSessionById,
  incrementDeliveryAttempts,
  logEvent,
  markDeliveryField,
  markEmailed,
} from '@/lib/planner/store'
import type { PlannerAttribution } from '@/lib/planner/types'

export async function deliverPlan(sessionId: string): Promise<void> {
  const session = await getSessionById(sessionId)
  if (!session?.email || !session.fullPlan || session.emailedAt || session.phase === 'emailed') return
  if (session.deliveryAttempts >= 8) return
  const plan = parseStoredPlan(session.fullPlan) ?? adaptLegacyPlan(session.fullPlan)
  if (!plan || !session.name) return

  await incrementDeliveryAttempts(session.id)
  const scopingUrl = `${site.url}/contact?plan=${encodeURIComponent(session.publicId)}`
  const firstName = session.name.trim().split(/\s+/)[0] || 'there'

  try {
    const pdf = await renderPlanPdf({ plan, name: session.name, scopingUrl })
    let storedPath: string | null = session.pdfPathname
    if (!storedPath) {
      const stored = await put(`planner/${session.publicId}.pdf`, pdf, {
        access: 'private',
        contentType: 'application/pdf',
        addRandomSuffix: false,
      })
      storedPath = stored.pathname
      await markDeliveryField(session.id, { pdfPathname: stored.pathname })
    }

    const downloadUrl = signPdfLink(session.publicId, site.url)
    if (!downloadUrl) {
      throw new Error('PLANNER_PDF_SIGNING_SECRET is not set')
    }

    const loops = loopsClientFromEnv()
    const attribution = (session.attribution || { variant: 'agent_planner' }) as PlannerAttribution
    const hasKey = Boolean(process.env.LOOPS_API_KEY?.trim())
    const transactionalId = process.env.LOOPS_PLAN_TRANSACTIONAL_ID?.trim()
    const staffId = process.env.LOOPS_STAFF_TRANSACTIONAL_ID?.trim()
    const notifyEmail = process.env.PLANNER_NOTIFY_EMAIL?.trim()

    if (hasKey && !transactionalId) {
      throw new Error('LOOPS_PLAN_TRANSACTIONAL_ID is not set')
    }

    try {
      await loops.updateContact(
        contactUpdateBody({
          email: session.email,
          userId: session.id,
          firstName,
          scopingCallBooked: Boolean(session.scopingBookedAt),
        }),
      )
    } catch (error) {
      console.error('[planner] loops contact', session.id, error)
    }

    if (!session.loopsPlanSentAt) {
      await loops.sendTransactional(
        planTransactionalBody({
          email: session.email,
          transactionalId: transactionalId || 'local-log',
          firstName,
          planTitle: plan.title,
          scopingUrl,
          downloadUrl,
        }),
        `${session.id}:plan`,
      )
      await markDeliveryField(session.id, { loopsPlanSentAt: new Date() })
    }

    if (!session.loopsEventSentAt) {
      await loops.sendEvent(
        planCompletedEvent({
          email: session.email,
          userId: session.id,
          planId: session.publicId,
          planTitle: plan.title,
          scopingUrl,
          attribution,
        }),
        `${session.id}:event`,
      )
      await markDeliveryField(session.id, { loopsEventSentAt: new Date() })
    }

    if (!session.loopsStaffSentAt) {
      if (hasKey && staffId && notifyEmail) {
        try {
          await loops.sendTransactional(
            staffTransactionalBody({
              transactionalId: staffId,
              notifyEmail,
              leadName: session.name,
              leadEmail: session.email,
              planTitle: plan.title,
              adminUrl: `${site.url}/internal/planner`,
            }),
            `${session.id}:staff`,
          )
        } catch (error) {
          console.error('[planner] staff email', session.id, error)
        }
      }
      await markDeliveryField(session.id, { loopsStaffSentAt: new Date() })
    }

    await markEmailed(session.id)
    await logEvent(session.id, 'email_sent')
  } catch (error) {
    const message = error instanceof Error ? error.message : 'delivery failed'
    console.error('[planner] deliver', session.id, message)
    await markDeliveryField(session.id, { deliveryError: message.slice(0, 500) }).catch(() => undefined)
    await logEvent(session.id, 'email_failed').catch(() => undefined)
  }
}

export async function retryUnsentPlans(): Promise<number> {
  const { listUnsentClaims, runRetention } = await import('@/lib/planner/store')
  const pending = await listUnsentClaims()
  for (const session of pending) {
    await deliverPlan(session.id)
  }
  const now = new Date()
  if (now.getUTCHours() === 3 && now.getUTCMinutes() < 5) {
    await runRetention()
  }
  return pending.length
}
