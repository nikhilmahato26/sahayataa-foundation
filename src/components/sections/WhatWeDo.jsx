import { motion } from 'framer-motion'
import { focusAreas } from '@/data/siteContent'
import { fadeUp, stagger, viewportOnce } from '@/hooks/useReveal'
import SectionHeading from '@/components/ui/SectionHeading'
import Icon from '@/utils/icons.jsx'

export default function WhatWeDo() {
  return (
    <section className="container-x py-20">
      <SectionHeading
        eyebrow="What we do"
        eyebrowIcon="Sparkles"
        title="Focus areas we drive across communities"
        subtitle="Rooted in care, dignity and sustained impact — from health camps to learning support."
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {focusAreas.map((f) => (
          <motion.article
            key={f.title}
            variants={fadeUp}
            className="card p-6 transition-all hover:-translate-y-1 hover:shadow-card-hover"
          >
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-100 text-brand-700">
              <Icon name={f.icon} className="h-6 w-6" />
            </span>
            <h3 className="mt-4 text-lg font-bold">{f.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{f.desc}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}
