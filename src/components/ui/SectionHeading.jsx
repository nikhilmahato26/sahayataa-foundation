import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '@/hooks/useReveal'
import Icon from '@/utils/icons.jsx'

export default function SectionHeading({
  eyebrow,
  eyebrowIcon,
  title,
  subtitle,
  align = 'left',
  highlight,
}) {
  const alignCls = align === 'center' ? 'items-center text-center mx-auto' : 'items-start'
  // Optionally bold one word in the title (matches reference accent style)
  const renderTitle = () => {
    if (!highlight || typeof title !== 'string') return title
    const parts = title.split(highlight)
    return (
      <>
        {parts[0]}
        <span className="text-brand-600">{highlight}</span>
        {parts[1]}
      </>
    )
  }

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={`flex max-w-2xl flex-col gap-3 ${alignCls}`}
    >
      {eyebrow && (
        <span className="eyebrow">
          {eyebrowIcon && <Icon name={eyebrowIcon} className="h-4 w-4" />}
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-extrabold leading-[1.1] sm:text-4xl md:text-[2.6rem]">
        {renderTitle()}
      </h2>
      {subtitle && <p className="text-base text-ink-muted sm:text-lg">{subtitle}</p>}
    </motion.div>
  )
}
