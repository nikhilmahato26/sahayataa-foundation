import { org, offices } from '@/data/siteContent'
import { telLink, mailLink, whatsappLink } from '@/utils/helpers'
import Icon from '@/utils/icons.jsx'

export default function ContactInfo() {
  return (
    <div className="card p-6 sm:p-8">
      <h3 className="text-2xl font-extrabold text-brand-700">Contact us</h3>
      <p className="mt-1 text-ink-muted">
        Reach out for any enquiry, partnership or volunteering opportunity.
      </p>

      <ul className="mt-6 space-y-4 text-sm">
        <li className="flex items-start gap-3">
          <Icon name="Phone" className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
          <div>
            <p className="font-bold text-ink">Phone / WhatsApp</p>
            <a href={telLink()} className="text-brand-700 hover:underline">
              {org.phone}
            </a>{' '}
            ·{' '}
            <a
              href={whatsappLink(`Hi ${org.name}!`)}
              target="_blank"
              rel="noreferrer"
              className="text-brand-700 hover:underline"
            >
              Chat
            </a>
          </div>
        </li>
        <li className="flex items-start gap-3">
          <Icon name="Mail" className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
          <div>
            <p className="font-bold text-ink">Email</p>
            <a href={mailLink()} className="break-all text-brand-700 hover:underline">
              {org.email}
            </a>
          </div>
        </li>
      </ul>

      <div className="mt-6">
        <p className="flex items-center gap-2 font-bold text-ink">
          <Icon name="MapPin" className="h-5 w-5 text-brand-600" /> Our offices
        </p>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {offices.map((o) => (
            <div key={o.city} className="rounded-2xl bg-surface-tint p-4">
              <p className="font-bold text-ink">
                {o.city}, {o.state}
              </p>
              <p className="mt-1 text-sm text-ink-muted">{o.lines.join(', ')}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
