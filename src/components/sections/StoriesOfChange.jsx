import { motion } from 'framer-motion'
import { stories } from '@/data/siteContent'
import { fadeUp, stagger, viewportOnce } from '@/hooks/useReveal'
import SectionHeading from '@/components/ui/SectionHeading'
import SmartImage from '@/components/ui/SmartImage'

export default function StoriesOfChange() {
  return (
    <section className="bg-brand-50/60 py-20">
      <div className="container-x">
        <SectionHeading
          eyebrow="Stories of change"
          eyebrowIcon="Heart"
          title="Real journeys, real change"
          subtitle="The people behind the numbers — and how a single camp or kit changed things."
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-10 grid gap-6 md:grid-cols-3"
        >
          {stories.map((s) => (
            <motion.figure
              key={s.name}
              variants={fadeUp}
              className="card overflow-hidden border-b-4 border-brand-500"
            >
              <SmartImage
                src={s.image}
                alt={s.name}
                label={`${s.name} — add photo`}
                className="h-44 w-full object-cover"
              />
              <figcaption className="p-6">
                <blockquote className="text-sm leading-relaxed text-ink-soft">
                  “{s.quote}”
                </blockquote>
                <p className="mt-3 font-bold text-brand-700">— {s.name}</p>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
