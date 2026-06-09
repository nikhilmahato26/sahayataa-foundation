import { useState } from 'react'
import Icon from '@/utils/icons.jsx'

/**
 * Renders an <img>; if the src is missing/empty or fails to load,
 * shows a branded placeholder. Lets the site look complete before
 * the client's real photos are dropped into /public/images.
 */
export default function SmartImage({
  src,
  alt = '',
  className = '',
  label,
  icon = 'Sparkles',
  ...props
}) {
  const [failed, setFailed] = useState(!src)

  if (failed) {
    return (
      <div
        className={`flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-brand-100 to-brand-50 text-brand-600 ${className}`}
        role="img"
        aria-label={alt || label || 'Photo placeholder'}
      >
        <Icon name={icon} className="h-8 w-8 opacity-70" />
        <span className="px-3 text-center text-xs font-semibold text-brand-700/80">
          {label || alt || 'Photo coming soon'}
        </span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={className}
      {...props}
    />
  )
}
