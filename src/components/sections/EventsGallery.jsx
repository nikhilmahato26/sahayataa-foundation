import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { events } from '@/data/siteContent'
import { fadeUp, stagger, viewportOnce } from '@/hooks/useReveal'
import SectionHeading from '@/components/ui/SectionHeading'
import SmartImage from '@/components/ui/SmartImage'
import Icon from '@/utils/icons.jsx'

export default function EventsGallery({ heading = true }) {
  const [active, setActive] = useState(null) // event object
  const [photoIdx, setPhotoIdx] = useState(0)

  const open = (ev) => {
    setActive(ev)
    setPhotoIdx(0)
  }
  const close = useCallback(() => setActive(null), [])

  const step = useCallback(
    (dir) => {
      if (!active) return
      const n = active.photos.length
      setPhotoIdx((i) => (i + dir + n) % n)
    },
    [active]
  )

  // keyboard nav + lock scroll
  useEffect(() => {
    if (!active) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [active, close, step])

  return (
    <section className="container-x py-20">
      {heading && (
        <SectionHeading
          eyebrow="On the ground"
          eyebrowIcon="HandHeart"
          title="Events & camps we've run"
          subtitle="Blood donation drives, medical camps and community programs — across our regions."
        />
      )}

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {events.map((ev) => (
          <motion.article
            key={ev.id}
            variants={fadeUp}
            className="card group overflow-hidden transition-shadow hover:shadow-card-hover"
          >
            <button
              type="button"
              onClick={() => open(ev)}
              className="block w-full text-left"
            >
              <div className="relative h-52 overflow-hidden">
                <SmartImage
                  src={ev.cover}
                  alt={ev.title}
                  label={`${ev.title} — add photos`}
                  icon="HeartPulse"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-brand-700 backdrop-blur">
                  {ev.photos.length} photos
                </span>
              </div>
            </button>
            <div className="p-6">
              <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-ink-muted">
                <span className="inline-flex items-center gap-1 text-brand-700">
                  <Icon name="MapPin" className="h-3.5 w-3.5" /> {ev.location}
                </span>
                {ev.date && (
                  <span className="inline-flex items-center gap-1">
                    <Icon name="Clock" className="h-3.5 w-3.5" /> {ev.date}
                  </span>
                )}
              </div>
              <h3 className="mt-2 text-lg font-bold">{ev.title}</h3>
              <p className="mt-1.5 line-clamp-3 text-sm text-ink-muted">{ev.note}</p>
              <button
                type="button"
                onClick={() => open(ev)}
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-brand-700 hover:gap-2.5"
              >
                View gallery <Icon name="ArrowRight" className="h-4 w-4" />
              </button>
            </div>
          </motion.article>
        ))}
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/80 p-4 backdrop-blur-sm"
            onClick={close}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl overflow-hidden rounded-3xl bg-white"
            >
              <button
                type="button"
                aria-label="Close"
                onClick={close}
                className="absolute right-3 top-3 z-10 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-ink shadow-card hover:bg-white"
              >
                <Icon name="X" className="h-5 w-5" />
              </button>

              <div className="relative aspect-[16/10] bg-slate-900">
                <SmartImage
                  src={active.photos[photoIdx]}
                  alt={`${active.title} ${photoIdx + 1}`}
                  label={`${active.title} — photo ${photoIdx + 1}`}
                  className="h-full w-full object-contain"
                />
                {active.photos.length > 1 && (
                  <>
                    <NavBtn side="left" onClick={() => step(-1)} />
                    <NavBtn side="right" onClick={() => step(1)} />
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-ink/70 px-3 py-1 text-xs font-bold text-white">
                      {photoIdx + 1} / {active.photos.length}
                    </div>
                  </>
                )}
              </div>

              <div className="p-6">
                <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-brand-700">
                  <span className="inline-flex items-center gap-1">
                    <Icon name="MapPin" className="h-3.5 w-3.5" /> {active.location}
                  </span>
                  {active.date && <span>• {active.date}</span>}
                </div>
                <h3 className="mt-1 text-xl font-extrabold">{active.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{active.note}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

function NavBtn({ side, onClick }) {
  const isLeft = side === 'left'
  return (
    <button
      type="button"
      aria-label={isLeft ? 'Previous photo' : 'Next photo'}
      onClick={onClick}
      className={`absolute top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-ink shadow-card transition hover:bg-white ${
        isLeft ? 'left-3' : 'right-3'
      }`}
    >
      <Icon name="ArrowRight" className={`h-5 w-5 ${isLeft ? 'rotate-180' : ''}`} />
    </button>
  )
}
