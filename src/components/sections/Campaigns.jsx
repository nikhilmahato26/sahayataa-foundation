import { motion } from 'framer-motion'
import { campaigns } from '@/data/siteContent'
import { fadeUp, stagger, viewportOnce } from '@/hooks/useReveal'
import { inr } from '@/utils/helpers'
import SectionHeading from '@/components/ui/SectionHeading'
import SmartImage from '@/components/ui/SmartImage'
import ProgressBar from '@/components/ui/ProgressBar'
import Button from '@/components/ui/Button'

export default function Campaigns({ limit }) {
  const list = limit ? campaigns.slice(0, limit) : campaigns

  return (
    <section className="container-x py-20">
      <SectionHeading
        eyebrow="Recent campaigns"
        align="center"
        title="Our campaigns carry the spirit of our work."
        highlight="spirit"
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {list.map((c) => (
          <motion.article
            key={c.title}
            variants={fadeUp}
            className="card overflow-hidden transition-shadow hover:shadow-card-hover"
          >
            <div className="relative h-48">
              <SmartImage
                src={c.image}
                alt={c.title}
                label={`${c.category} photo`}
                className="h-full w-full object-cover"
              />
              <span className="absolute left-3 top-3 rounded-full bg-brand-100/95 px-3 py-1 text-xs font-bold text-brand-700 backdrop-blur">
                {c.category}
              </span>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between text-sm">
                <span className="rounded-full bg-slate-100 px-3 py-1 font-bold text-ink-soft">
                  Goal: {inr(c.goal)}
                </span>
                <span className="font-extrabold text-ink">{c.progress}%</span>
              </div>
              <div className="mt-3">
                <ProgressBar value={c.progress} />
              </div>
              <h3 className="mt-4 text-xl font-bold">{c.title}</h3>
              <p className="mt-1.5 text-sm text-ink-muted">{c.desc}</p>
              <div className="mt-5 flex gap-2">
                <Button to="/join-us#donate" variant="primary" size="sm" className="flex-1">
                  Donate now
                </Button>
                <Button to="/campaigns" variant="secondary" size="sm" className="flex-1">
                  Know more
                </Button>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}
