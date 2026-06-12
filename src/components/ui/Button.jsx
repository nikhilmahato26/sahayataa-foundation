import { Link } from 'react-router-dom'
import Icon from '@/utils/icons.jsx'

const variants = {
  primary:
    'bg-brand-600 text-white hover:bg-brand-700 shadow-pill hover:shadow-card-hover',
  secondary: 'bg-accent text-white hover:bg-accent-dark',
  outline:
    'bg-white text-ink ring-1 ring-slate-200 hover:ring-brand-300 hover:text-brand-700',
  ghost: 'bg-brand-50 text-brand-700 hover:bg-brand-100',
  dark: 'bg-ink text-white hover:bg-ink-soft',
  whatsapp: 'bg-[#25D366] text-white hover:bg-[#22c35e] active:scale-[0.98]',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-3 text-sm',
  lg: 'px-7 py-3.5 text-base',
}

export default function Button({
  as,
  to,
  href,
  variant = 'primary',
  size = 'md',
  icon,
  iconRight,
  className = '',
  children,
  ...props
}) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-full font-bold
    transition-all duration-200 focus-visible:outline-none focus-visible:ring-4
    focus-visible:ring-brand-200 ${variants[variant]} ${sizes[size]} ${className}`

  const inner = (
    <>
      {icon && <Icon name={icon} className="h-4 w-4" />}
      {children}
      {iconRight && <Icon name={iconRight} className="h-4 w-4" />}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={cls} {...props}>
        {inner}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={cls} {...props}>
        {inner}
      </a>
    )
  }
  const Tag = as || 'button'
  return (
    <Tag className={cls} {...props}>
      {inner}
    </Tag>
  )
}
