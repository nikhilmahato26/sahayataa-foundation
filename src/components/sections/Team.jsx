import { motion } from 'framer-motion'
import { about } from '@/data/siteContent'
import { fadeUp, viewportOnce } from '@/hooks/useReveal'
import SmartImage from '@/components/ui/SmartImage'
import Icon from '@/utils/icons.jsx'

export default function Team() {
  return (
    <section className="bg-surface-tint py-20 border-y border-slate-100/60">
      <div className="container-x">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="text-center"
        >
          <span className="eyebrow">
            <Icon name="Users" className="h-4 w-4" /> Our Team
          </span>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
            Meet the Hearts Behind Sahayataa
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-ink-soft">
            A dedicated group of professionals and volunteers steering community care, health, and education across India.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {about.team.map((m, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="group card overflow-hidden p-6 transition-all duration-300 hover:shadow-card-hover hover:ring-1 hover:ring-brand-300"
            >
              <div className="relative mx-auto h-44 w-44 overflow-hidden rounded-full ring-4 ring-brand-100 group-hover:ring-brand-200 transition-all duration-300 bg-white">
                <SmartImage
                  src={m.image}
                  alt={m.name}
                  label={m.role}
                  icon="Users"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-xl font-extrabold text-ink">{m.name}</h3>
                <p className="text-sm font-semibold text-brand-700 mt-1 uppercase tracking-wider">{m.role}</p>
                
                {/* Social links */}
                <div className="mt-5 flex justify-center gap-2.5">
                  <a
                    href="#"
                    className="grid h-9 w-9 place-items-center rounded-xl bg-slate-50 text-slate-400 hover:bg-brand-50 hover:text-brand-700 transition"
                    aria-label="LinkedIn"
                  >
                    <Icon name="Linkedin" className="h-4.5 w-4.5" />
                  </a>
                  <a
                    href="#"
                    className="grid h-9 w-9 place-items-center rounded-xl bg-slate-50 text-slate-400 hover:bg-brand-50 hover:text-brand-700 transition"
                    aria-label="Facebook"
                  >
                    <Icon name="Facebook" className="h-4.5 w-4.5" />
                  </a>
                  <a
                    href="#"
                    className="grid h-9 w-9 place-items-center rounded-xl bg-slate-50 text-slate-400 hover:bg-brand-50 hover:text-brand-700 transition"
                    aria-label="Instagram"
                  >
                    <Icon name="Instagram" className="h-4.5 w-4.5" />
                  </a>
                  <a
                    href={`mailto:${m.name.toLowerCase().replace(' ', '.')}@sahayataa.org`}
                    className="grid h-9 w-9 place-items-center rounded-xl bg-slate-50 text-slate-400 hover:bg-brand-50 hover:text-brand-700 transition"
                    aria-label="Email"
                  >
                    <Icon name="Mail" className="h-4.5 w-4.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
