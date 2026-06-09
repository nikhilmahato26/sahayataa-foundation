import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { nav, org } from '@/data/siteContent'
import { whatsappLink } from '@/utils/helpers'
import Icon from '@/utils/icons.jsx'
import Button from '@/components/ui/Button'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  return (
    <header className="sticky top-0 z-50">
      {/* Top utility bar */}
      <div className="bg-brand-700 text-center text-sm font-bold uppercase tracking-wide text-white">
        <div className="container-x flex items-center justify-center gap-2 py-2">
          <Icon name="Sparkles" className="h-4 w-4 text-brand-200" />
          {org.name}
        </div>
      </div>

      {/* Main bar */}
      <nav
        className={`border-b transition-all ${
          scrolled
            ? 'border-slate-200/70 bg-white/90 backdrop-blur-md'
            : 'border-transparent bg-white'
        }`}
      >
        <div className="container-x flex items-center justify-between gap-4 py-3">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-brand-600 text-white">
              <Icon name="HandHeart" className="h-5 w-5" />
            </span>
            <span className="leading-tight">
              <span className="block font-display text-lg font-extrabold text-ink">
                {org.shortName}
              </span>
              <span className="block text-[11px] font-semibold uppercase tracking-wider text-brand-700">
                Foundation
              </span>
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `rounded-full px-4 py-2 text-sm font-bold transition ${
                      isActive
                        ? 'bg-brand-50 text-brand-700'
                        : 'text-ink-soft hover:bg-slate-50 hover:text-ink'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-2 lg:flex">
            <Button
              href={whatsappLink(`Hi ${org.name}, I'd like to know more.`)}
              target="_blank"
              rel="noreferrer"
              variant="outline"
              size="sm"
              icon="MessageCircle"
            >
              WhatsApp
            </Button>
            <Button to="/join-us" variant="primary" size="sm" icon="Heart">
              Donate / Join
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-2xl bg-brand-50 text-brand-700 lg:hidden"
          >
            <Icon name={open ? 'X' : 'Menu'} className="h-5 w-5" />
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="border-t border-slate-100 bg-white lg:hidden">
            <ul className="container-x flex flex-col py-2">
              {nav.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    className={({ isActive }) =>
                      `block rounded-xl px-4 py-3 text-base font-bold ${
                        isActive ? 'bg-brand-50 text-brand-700' : 'text-ink-soft'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
              <li className="flex gap-2 px-2 py-3">
                <Button
                  href={whatsappLink(`Hi ${org.name}, I'd like to know more.`)}
                  target="_blank"
                  rel="noreferrer"
                  variant="outline"
                  size="md"
                  icon="MessageCircle"
                  className="flex-1"
                >
                  WhatsApp
                </Button>
                <Button to="/join-us" variant="primary" size="md" icon="Heart" className="flex-1">
                  Donate / Join
                </Button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}
