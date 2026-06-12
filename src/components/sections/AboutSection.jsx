import { useState } from 'react'
import { motion } from 'framer-motion'
import { about } from '@/data/siteContent'
import { fadeUp, viewportOnce } from '@/hooks/useReveal'
import SmartImage from '@/components/ui/SmartImage'
import Icon from '@/utils/icons.jsx'

const TAB_META = {
  vision: { label: 'Our Vision', icon: 'Eye' },
  mission: { label: 'Our Mission', icon: 'Target' },
  goal: { label: 'Goal', icon: 'Sparkles' },
}

export default function AboutSection({ showTeam = true }) {
  const [tab, setTab] = useState('vision')
  const tabs = Object.keys(about.tabs)
  const active = about.tabs[tab]

  return (
    <section className="container-x py-20">
      {/* Intro */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid gap-6 lg:grid-cols-[1.3fr_1fr]"
      >
        <div className="card p-8">
          <span className="eyebrow">
            <Icon name="Sparkles" className="h-4 w-4" /> About us
          </span>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
            {about.heading}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">{about.intro}</p>
        </div>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-400 to-brand-700 shadow-card">
          <SmartImage
            src="/images/events/raja-mahendra-pratap-sahayata-foundation-delhi-2025/WhatsApp Image 2026-06-11 at 13.10.08.jpeg"
            alt="Our work"
            label="Add a team / field photo"
            icon="Users"
            className="h-full min-h-[260px] w-full object-cover mix-blend-overlay"
          />
          <div className="absolute bottom-4 left-4 rounded-full bg-white/95 px-4 py-2 text-sm font-bold text-ink">
            Real help • Real change
          </div>
        </div>
      </motion.div>

      {/* Tabs */}
      <div className="mt-8">
        <div className="flex flex-wrap gap-2">
          {tabs.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition ${
                tab === t
                  ? 'bg-brand-400 text-ink shadow-pill'
                  : 'bg-white text-ink-soft ring-1 ring-slate-200 hover:ring-brand-300'
              }`}
            >
              <Icon name={TAB_META[t].icon} className="h-4 w-4" />
              {TAB_META[t].label}
            </button>
          ))}
        </div>

        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="card mt-5 p-8"
        >
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-600">
            <Icon name={TAB_META[tab].icon} className="h-6 w-6" />
          </span>
          <h3 className="mt-4 text-2xl font-extrabold">{active.title}</h3>
          <p className="mt-2 max-w-3xl text-lg text-ink-soft">{active.body}</p>
        </motion.div>
      </div>

      {/* Team */}
      {showTeam && (
        <div className="mt-12">
          <h3 className="text-2xl font-extrabold">Our team</h3>
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {about.team.map((m, i) => (
              <div key={i} className="card flex items-center gap-4 p-5">
                <SmartImage
                  src={m.image}
                  alt={m.name || m.role}
                  label="Photo"
                  icon="Users"
                  className="h-16 w-16 shrink-0 rounded-2xl object-cover"
                />
                <div>
                  <p className="font-bold text-ink">{m.name || 'Team member'}</p>
                  <p className="text-sm font-semibold text-brand-700">{m.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
