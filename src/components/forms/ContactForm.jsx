import { useState } from 'react'
import { org } from '@/data/siteContent'
import { whatsappLink } from '@/utils/helpers'
import Button from '@/components/ui/Button'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }))

  const submit = (e) => {
    e.preventDefault()
    const msg = [
      `*Enquiry — ${org.name}*`,
      `Name: ${form.name}`,
      form.phone && `Phone: ${form.phone}`,
      form.email && `Email: ${form.email}`,
      `Message: ${form.message}`,
    ]
      .filter(Boolean)
      .join('\n')
    window.open(whatsappLink(msg), '_blank', 'noopener')
  }

  return (
    <form onSubmit={submit} className="card p-6 sm:p-8">
      <h3 className="text-2xl font-extrabold text-brand-700">Send us an enquiry</h3>
      <div className="mt-5 space-y-4">
        <label className="block">
          <span className="label">Full name *</span>
          <input
            className="field"
            required
            value={form.name}
            onChange={(e) => set('name', e.target.value)}
            placeholder="Enter your full name"
          />
        </label>
        <label className="block">
          <span className="label">Email</span>
          <input
            className="field"
            type="email"
            value={form.email}
            onChange={(e) => set('email', e.target.value)}
            placeholder="Enter your email"
          />
        </label>
        <label className="block">
          <span className="label">Phone</span>
          <input
            className="field"
            type="tel"
            value={form.phone}
            onChange={(e) => set('phone', e.target.value)}
            placeholder="Enter your phone number"
          />
        </label>
        <label className="block">
          <span className="label">Your message *</span>
          <textarea
            className="field min-h-[120px] resize-y"
            required
            value={form.message}
            onChange={(e) => set('message', e.target.value)}
            placeholder="Write your message here…"
          />
        </label>
      </div>
      <Button as="button" type="submit" variant="primary" size="lg" icon="Send" className="mt-6">
        Submit enquiry
      </Button>
    </form>
  )
}
