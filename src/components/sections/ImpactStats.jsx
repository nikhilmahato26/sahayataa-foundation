import { motion } from 'framer-motion'
import { impact } from '@/data/siteContent'
import { fadeUp, stagger, viewportOnce } from '@/hooks/useReveal'
import SectionHeading from '@/components/ui/SectionHeading'
import SmartImage from '@/components/ui/SmartImage'
import Icon from '@/utils/icons.jsx'

export default function ImpactStats() {
  return (
    <section className="container-x py-20">
      <SectionHeading eyebrow={impact.eyebrow} title={impact.title} />

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        {/* Stat cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-5 sm:grid-cols-2"
        >
          {impact.cards.map((c) => (
            <motion.div
              key={c.label}
              variants={fadeUp}
              className="card group p-6 transition-shadow hover:shadow-card-hover"
            >
              <div className="flex items-start justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-600">
                  <Icon name={c.icon} className="h-6 w-6" />
                </span>
                <span className="eyebrow-soft">{c.tag}</span>
              </div>
              <p className="mt-5 font-display text-4xl font-extrabold text-brand-600">
                {c.value}
              </p>
              <p className="mt-1 font-bold text-ink">{c.label}</p>
              <p className="text-sm text-ink-muted">{c.note}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Side image */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative overflow-hidden rounded-3xl shadow-card"
        >
          <SmartImage
            src="/images/impact-side.jpg"
            alt="On-ground camp"
            label="Add an on-ground photo"
            icon="Stethoscope"
            className="h-full min-h-[280px] w-full object-cover"
          />
          <div className="absolute bottom-4 left-4 rounded-full bg-white/95 px-4 py-2 text-sm font-bold text-ink shadow-card">
            On-ground community camp
          </div>
        </motion.div>
      </div>
    </section>
  )
}
