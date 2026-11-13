/** Redact PII before any model call. The session keeps the original text. */

export const REDACTED_EMAIL = '[redacted-email]'
export const REDACTED_PHONE = '[redacted-phone]'
export const REDACTED_URL = '[redacted-url]'
export const REDACTED_NAME = '[redacted-name]'

const EMAIL_RE = /[A-Z0-9._%+-]+@[A-Z0-9-]+(?:\.[A-Z0-9-]+)*\.[A-Z]{2,}/gi
/** UK and international numbers: 10 to 13 digits with optional +, spaces, dots, dashes and brackets. */
const PHONE_RE =
  /(?<![\w+])(?:\+\d{1,3}[\s.-]?)?(?:\(\d{1,5}\)[\s.-]?)?\d(?:[\s.-]?\d){4,12}(?!\w)/g
const URL_RE =
  /\b(?:https?:\/\/\S+|www\.[a-z0-9-]+(?:\.[a-z0-9-]+)+\S*|[a-z0-9-]+(?:\.[a-z0-9-]+)*\.(?:com|co\.uk|org\.uk|uk|io|ai|co|net|org|app|dev|eu|biz|info)(?:\/\S*)?)(?![\w.-]*@)/gi

export type RedactionContext = {
  name?: string | null
}

export function redactFreeText(text: string, context: RedactionContext = {}): string {
  let out = text.replace(EMAIL_RE, REDACTED_EMAIL)
  out = out.replace(URL_RE, REDACTED_URL)
  out = out.replace(PHONE_RE, (match) => (digitCount(match) >= 10 ? REDACTED_PHONE : match))
  if (context.name) {
    out = replacePhrase(out, context.name, REDACTED_NAME)
    for (const part of context.name.split(/\s+/).filter((word) => word.length >= 3)) {
      out = replaceProperNoun(out, part, REDACTED_NAME)
    }
  }
  return out
}

export function redactJson<T>(value: T, context: RedactionContext = {}): T {
  if (typeof value === 'string') return redactFreeText(value, context) as T
  if (Array.isArray(value)) return value.map((item) => redactJson(item, context)) as T
  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value as Record<string, unknown>).map(([key, item]) => [key, redactJson(item, context)]),
    ) as T
  }
  return value
}

/** True when redaction removed the substance, so we should ask them to rephrase. */
export function isEmptiedByRedaction(original: string, redacted: string): boolean {
  if (original.trim().length < 8) return false
  const leftover = redacted
    .replace(/\[redacted-(email|phone|url|name)\]/g, '')
    .replace(/\s+/g, '')
  return leftover.length < 8
}

function digitCount(value: string): number {
  return value.replace(/\D/g, '').length
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function replacePhrase(text: string, phrase: string, token: string): string {
  const trimmed = phrase.trim()
  if (trimmed.length < 2) return text
  return text.replace(new RegExp(`(?<!\\w)${escapeRegExp(trimmed)}(?!\\w)`, 'gi'), token)
}

/** Name parts only when capitalised, so a first name like "Will" leaves the verb "will" alone. */
function replaceProperNoun(text: string, word: string, token: string): string {
  const proper = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  return text.replace(
    new RegExp(`(?<!\\w)(?:${escapeRegExp(proper)}|${escapeRegExp(word.toUpperCase())})(?!\\w)`, 'g'),
    token,
  )
}
