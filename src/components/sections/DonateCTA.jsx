import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '@/hooks/useReveal'
import DonateBlock from '@/components/donate/DonateBlock'
import SectionHeading from '@/components/ui/SectionHeading'

export default function DonateCTA() {
  return (
    <section className="relative overflow-hidden bg-brand-700 py-20">
      <div className="pointer-events-none absolute inset-0 opacity-20 [background:radial-gradient(600px_300px_at_15%_10%,#fff,transparent)]" />
      <div className="container-x relative">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mb-10 max-w-2xl text-white"
        >
          <span className="eyebrow-soft bg-white/15 text-white">Make a difference</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">
            Your support runs the next camp
          </h2>
          <p className="mt-3 text-white/85">
            Donate securely via UPI or bank transfer. 100% goes towards medical
            camps, blood drives and learning support.
          </p>
        </motion.div>
        <DonateBlock />
      </div>
    </section>
  )
}
