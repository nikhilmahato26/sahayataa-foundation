import { useState } from 'react'
import { membership, org } from '@/data/siteContent'
import { whatsappLink } from '@/utils/helpers'
import Icon from '@/utils/icons.jsx'
import Button from '@/components/ui/Button'

const initial = {
  type: 'volunteer',
  name: '',
  phone: '',
  email: '',
  city: '',
  interests: [],
  message: '',
}

export default function MembershipForm() {
  const [form, setForm] = useState(initial)

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }))

  const toggleInterest = (i) =>
    setForm((f) => ({
      ...f,
      interests: f.interests.includes(i)
        ? f.interests.filter((x) => x !== i)
        : [...f.interests, i],
    }))

  const typeLabel =
    membership.types.find((t) => t.id === form.type)?.label ?? form.type

  const submit = (e) => {
    e.preventDefault()
    const msg = [
      `*New ${typeLabel} request — ${org.name}*`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.email && `Email: ${form.email}`,
      form.city && `City: ${form.city}`,
      form.interests.length && `Interested in: ${form.interests.join(', ')}`,
      form.message && `Message: ${form.message}`,
    ]
      .filter(Boolean)
      .join('\n')
    window.open(whatsappLink(msg), '_blank', 'noopener')
  }

  return (
    <form onSubmit={submit} className="card p-6 sm:p-8">
      <h3 className="text-2xl font-extrabold">Join the mission</h3>
      <p className="mt-1 text-sm text-ink-muted">{membership.intro}</p>

      {/* Type */}
      <div className="mt-5">
        <span className="label">I want to join as</span>
        <div className="flex flex-wrap gap-2">
          {membership.types.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => set('type', t.id)}
              className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                form.type === t.id
                  ? 'bg-brand-600 text-white shadow-pill'
                  : 'bg-brand-50 text-brand-700 hover:bg-brand-100'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <Field label="Full name" required>
          <input
            className="field"
            required
            value={form.name}
            onChange={(e) => set('name', e.target.value)}
            placeholder="Your name"
          />
        </Field>
        <Field label="Phone" required>
          <input
            className="field"
            required
            type="tel"
            value={form.phone}
            onChange={(e) => set('phone', e.target.value)}
            placeholder="10-digit mobile"
          />
        </Field>
        <Field label="Email">
          <input
            className="field"
            type="email"
            value={form.email}
            onChange={(e) => set('email', e.target.value)}
            placeholder="name@email.com"
          />
        </Field>
        <Field label="City">
          <input
            className="field"
            value={form.city}
            onChange={(e) => set('city', e.target.value)}
            placeholder="Your city"
          />
        </Field>
      </div>

      {/* Interests */}
      <div className="mt-5">
        <span className="label">Areas of interest</span>
        <div className="flex flex-wrap gap-2">
          {membership.interests.map((i) => {
            const on = form.interests.includes(i)
            return (
              <button
                key={i}
                type="button"
                onClick={() => toggleInterest(i)}
                className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-semibold transition ${
                  on
                    ? 'bg-brand-100 text-brand-700 ring-1 ring-brand-300'
                    : 'bg-slate-100 text-ink-soft hover:bg-slate-200'
                }`}
              >
                {on && <Icon name="Check" className="h-3.5 w-3.5" />}
                {i}
              </button>
            )
          })}
        </div>
      </div>

      <div className="mt-5">
        <Field label="Message (optional)">
          <textarea
            className="field min-h-[100px] resize-y"
            value={form.message}
            onChange={(e) => set('message', e.target.value)}
            placeholder="Tell us how you'd like to help…"
          />
        </Field>
      </div>

      <Button as="button" type="submit" variant="primary" size="lg" icon="MessageCircle" className="mt-6 w-full sm:w-auto">
        Send on WhatsApp
      </Button>
      <p className="mt-2 text-xs text-ink-muted">
        Submitting opens WhatsApp with your details pre-filled to {org.phone}.
      </p>
    </form>
  )
}

function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="label">
        {label} {required && <span className="text-brand-600">*</span>}
      </span>
      {children}
    </label>
  )
}
