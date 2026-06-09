import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '@/hooks/useReveal'

/** Lightweight scroll-reveal wrapper. */
export default function Reveal({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
