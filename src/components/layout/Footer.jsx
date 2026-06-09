import { Link } from 'react-router-dom'
import { org, footerLinks, socials, offices } from '@/data/siteContent'
import { whatsappLink, telLink, mailLink } from '@/utils/helpers'
import Icon from '@/utils/icons.jsx'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-20">
      {/* Main footer */}
      <div className="bg-brand-700 text-white">
        <div className="container-x grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-white/15">
                <Icon name="HandHeart" className="h-5 w-5" />
              </span>
              <span className="font-display text-lg font-extrabold">{org.name}</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-white/80">{org.mission}</p>
            <div className="mt-5 flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 transition hover:bg-white/20"
                >
                  <Icon name={s.icon} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <FooterCol title="Explore" links={footerLinks.explore} />
          {/* Support */}
          <FooterCol title="Get Involved" links={footerLinks.support} />

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white/70">
              Reach us
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={telLink()} className="flex items-center gap-2 hover:underline">
                  <Icon name="Phone" className="h-4 w-4 text-brand-200" />
                  {org.phone}
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink(`Hi ${org.name}!`)}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:underline"
                >
                  <Icon name="MessageCircle" className="h-4 w-4 text-brand-200" />
                  WhatsApp us
                </a>
              </li>
              <li>
                <a href={mailLink()} className="flex items-center gap-2 break-all hover:underline">
                  <Icon name="Mail" className="h-4 w-4 text-brand-200" />
                  {org.email}
                </a>
              </li>
            </ul>
            <p className="mt-4 flex items-start gap-2 text-sm text-white/80">
              <Icon name="MapPin" className="mt-0.5 h-4 w-4 shrink-0 text-brand-200" />
              {offices.length} offices across India — Noida, Gurgaon, Lucknow &amp; Patna.
            </p>
          </div>
        </div>

        {/* Sub bar */}
        <div className="border-t border-white/10">
          <div className="container-x flex flex-col items-center justify-between gap-2 py-5 text-center text-sm text-white/70 sm:flex-row sm:text-left">
            <p>
              © {year} {org.name} — All rights reserved.
            </p>
            <p className="font-semibold text-white/80">Real Help • Real Change</p>
          </div>
        </div>
      </div>

      {/* Powered by — pinned at the very bottom */}
      <div className="bg-ink py-3 text-center text-xs text-white/60">
        Powered by <span className="font-bold text-white">{org.poweredBy}</span>
      </div>
    </footer>
  )
}

function FooterCol({ title, links }) {
  return (
    <div>
      <h4 className="text-sm font-bold uppercase tracking-wider text-white/70">{title}</h4>
      <ul className="mt-4 space-y-2.5 text-sm">
        {links.map((l) => (
          <li key={l.label}>
            <Link to={l.to} className="text-white/85 transition hover:text-white hover:underline">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
