import { motion } from 'framer-motion'
import { fadeUp } from '@/hooks/useReveal'
import Icon from '@/utils/icons.jsx'

export default function PageHeader({ eyebrow, eyebrowIcon, title, subtitle }) {
  return (
    <section className="border-b border-slate-100 bg-gradient-to-b from-brand-50/70 to-transparent">
      <div className="container-x py-14 sm:py-16">
        <motion.div variants={fadeUp} initial="hidden" animate="show" className="max-w-3xl">
          {eyebrow && (
            <span className="eyebrow">
              {eyebrowIcon && <Icon name={eyebrowIcon} className="h-4 w-4" />}
              {eyebrow}
            </span>
          )}
          <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight sm:text-5xl">
            {title}
          </h1>
          {subtitle && <p className="mt-3 text-lg text-ink-muted">{subtitle}</p>}
        </motion.div>
      </div>
    </section>
  )
}
