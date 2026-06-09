import { motion } from 'framer-motion'
import { offices } from '@/data/siteContent'
import { fadeUp, stagger, viewportOnce } from '@/hooks/useReveal'
import SectionHeading from '@/components/ui/SectionHeading'
import Icon from '@/utils/icons.jsx'

export default function Offices() {
  return (
    <section className="container-x py-20">
      <SectionHeading
        eyebrow="Our presence"
        eyebrowIcon="MapPin"
        title="Offices across India"
        subtitle="Reach us at any of our regional offices — we work where the need is."
      />
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {offices.map((o) => (
          <motion.div key={o.city} variants={fadeUp} className="card p-6">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-brand-100 text-brand-700">
              <Icon name="MapPin" className="h-5 w-5" />
            </span>
            <h3 className="mt-4 text-lg font-bold">{o.city}</h3>
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-700">
              {o.state}
            </p>
            <address className="mt-2 text-sm not-italic leading-relaxed text-ink-muted">
              {o.lines.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </address>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
