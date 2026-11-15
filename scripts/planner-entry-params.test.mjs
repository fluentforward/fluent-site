import assert from 'node:assert/strict'
import { test } from 'node:test'

import {
  PLANNER_SCOPING_CTA_MIN_TEAM_SIZE,
  isPlanOnlyTeamSize,
  normalizeTeamSizeParam,
  parsePlannerEntryFromSearch,
  parsePlannerProblemParam,
  sessionIsPlanOnly,
  stripPlannerPiiFromUrl,
  teamSizeShowsScopingCta,
} from '../src/lib/planner/entry-params.ts'

test('problem param accepts q and problem alias', () => {
  assert.equal(parsePlannerProblemParam('From Xero', undefined), 'From Xero')
  assert.equal(parsePlannerProblemParam(undefined, 'From the CRM'), 'From the CRM')
  assert.equal(parsePlannerProblemParam('  first  ', 'second'), 'first')
})

test('team size normalisation', () => {
  assert.equal(normalizeTeamSizeParam('1-9'), '1-9')
  assert.equal(normalizeTeamSizeParam('10-49'), '10-49')
  assert.equal(normalizeTeamSizeParam('200+'), '200+')
  assert.equal(normalizeTeamSizeParam('200%2B'), '200+')
  assert.equal(normalizeTeamSizeParam('200plus'), '200+')
  assert.equal(normalizeTeamSizeParam('200PLUS'), '200+')
  assert.equal(normalizeTeamSizeParam('11-20'), null)
  assert.equal(normalizeTeamSizeParam(''), null)
})

test('entry parsing caps and validates fields', () => {
  const params = new URLSearchParams({
    q: 'We rebuild client reports every month from Xero and spreadsheets.',
    size: '10-49',
    name: 'Ada Lovelace',
    email: 'ada@firm.co.uk',
    company: 'Analytical Engines Ltd',
    meta_lead_id: 'MetaLead123',
    utm_medium: 'instant_form',
    utm_source: 'facebook',
  })
  const entry = parsePlannerEntryFromSearch(params)
  assert.equal(entry.teamSize, '10-49')
  assert.equal(entry.name, 'Ada Lovelace')
  assert.equal(entry.email, 'ada@firm.co.uk')
  assert.equal(entry.company, 'Analytical Engines Ltd')
  assert.equal(entry.metaLeadId, 'MetaLead123')
  assert.equal(entry.problem.startsWith('We rebuild'), true)

  const badEmail = parsePlannerEntryFromSearch(new URLSearchParams({ email: 'not-an-email' }))
  assert.equal(badEmail.email, '')

  const badLead = parsePlannerEntryFromSearch(
    new URLSearchParams({ meta_lead_id: 'lead-with-dashes-is-invalid' }),
  )
  assert.equal(badLead.metaLeadId, '')
})

test('scoping CTA routing uses the named minimum team size', () => {
  assert.equal(PLANNER_SCOPING_CTA_MIN_TEAM_SIZE, 10)
  assert.equal(teamSizeShowsScopingCta(null), false)
  assert.equal(teamSizeShowsScopingCta('1-9'), false)
  assert.equal(teamSizeShowsScopingCta('10-49'), true)
  assert.equal(teamSizeShowsScopingCta('50-199'), true)
  assert.equal(teamSizeShowsScopingCta('200+'), true)
})

test('plan-only routing: organic missing size keeps scoping; Meta missing is plan-only; 1-9 always plan-only', () => {
  assert.equal(sessionIsPlanOnly({ teamSize: null, leadSource: 'agent_planner' }), false)
  assert.equal(sessionIsPlanOnly({ teamSize: null, leadSource: 'meta_form' }), true)
  assert.equal(sessionIsPlanOnly({ teamSize: null }), false)
  assert.equal(isPlanOnlyTeamSize('1-9', 'agent_planner'), true)
  assert.equal(isPlanOnlyTeamSize('1-9', 'meta_form'), true)
  assert.equal(sessionIsPlanOnly({ teamSize: '10-49', leadSource: 'agent_planner' }), false)
  assert.equal(sessionIsPlanOnly({ teamSize: '10-49', leadSource: 'meta_form' }), false)
})

test('stripPlannerPiiFromUrl removes PII and problem keys but keeps UTMs', () => {
  const href =
    'https://www.fluentforward.com/agent-planner?q=hello&name=Ada&email=a%40b.co&company=Co&meta_lead_id=abc123&size=1-9&utm_source=meta&utm_medium=instant_form'
  const stripped = stripPlannerPiiFromUrl(href)
  assert.equal(stripped.includes('name='), false)
  assert.equal(stripped.includes('email='), false)
  assert.equal(stripped.includes('company='), false)
  assert.equal(stripped.includes('meta_lead_id='), false)
  assert.equal(stripped.includes('q='), false)
  assert.equal(stripped.includes('utm_source=meta'), true)
  assert.equal(stripped.includes('size=1-9'), true)
})