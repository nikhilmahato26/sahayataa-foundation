import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { heroSlides, org } from '@/data/siteContent'
import { whatsappLink } from '@/utils/helpers'
import Button from '@/components/ui/Button'
import SmartImage from '@/components/ui/SmartImage'

export default function Hero() {
  const [index, setIndex] = useState(0)
  const count = heroSlides.length

  const go = useCallback((i) => setIndex((i + count) % count), [count])

  useEffect(() => {
    if (count <= 1) return
    const t = setInterval(() => setIndex((i) => (i + 1) % count), 6000)
    return () => clearInterval(t)
  }, [count])

  const slide = heroSlides[index]

  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[78vh] min-h-[520px] w-full">
        {/* Background image */}
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <SmartImage
              src={slide.image}
              alt={slide.title}
              label="Hero photo — add to /public/images"
              icon="HandHeart"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/55 to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Content */}
        <div className="container-x relative flex h-full items-center">
          <div className="max-w-2xl text-white">
            <span className="eyebrow-soft bg-white/15 text-white backdrop-blur">
              {org.tagline}
            </span>
            <AnimatePresence mode="wait">
              <motion.h1
                key={`t-${index}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="mt-4 font-display text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl md:text-6xl"
              >
                {slide.title}
              </motion.h1>
            </AnimatePresence>
            <p className="mt-4 max-w-xl text-lg text-white/85">{slide.subtitle}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button to={slide.cta.to} variant="primary" size="lg" iconRight="ArrowRight">
                {slide.cta.label}
              </Button>
              <Button
                href={whatsappLink(`Hi ${org.name}, I'd like to volunteer.`)}
                target="_blank"
                rel="noreferrer"
                variant="outline"
                size="lg"
                icon="MessageCircle"
                className="bg-white/10 text-white ring-white/30 hover:bg-white/20 hover:text-white"
              >
                Volunteer
              </Button>
            </div>
          </div>
        </div>

        {/* Dots */}
        {count > 1 && (
          <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => go(i)}
                className={`h-2.5 rounded-full transition-all ${
                  i === index ? 'w-7 bg-white' : 'w-2.5 bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
