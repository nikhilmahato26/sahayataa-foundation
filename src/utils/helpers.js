import { org, donate } from '@/data/siteContent'

/** Build a wa.me link with a prefilled message. */
export function whatsappLink(message = '') {
  const base = `https://wa.me/${org.whatsapp}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}

/** tel: link */
export function telLink() {
  return `tel:+${org.phoneRaw}`
}

/** mailto: link with optional subject/body */
export function mailLink({ subject = '', body = '' } = {}) {
  const params = []
  if (subject) params.push(`subject=${encodeURIComponent(subject)}`)
  if (body) params.push(`body=${encodeURIComponent(body)}`)
  return `mailto:${org.email}${params.length ? `?${params.join('&')}` : ''}`
}

/** UPI deep link — also used to generate the donate QR. */
export function upiLink(amount) {
  const p = new URLSearchParams({
    pa: donate.upiId,
    pn: donate.payeeName,
    cu: 'INR',
    tn: donate.note,
  })
  if (amount) p.set('am', String(amount))
  return `upi://pay?${p.toString()}`
}

/** ₹ formatter (Indian grouping). */
export function inr(value) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value)
}

/** Copy text to clipboard, resolves to boolean. */
export async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    return false
  }
}
