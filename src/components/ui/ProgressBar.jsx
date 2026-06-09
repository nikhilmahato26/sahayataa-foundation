export default function ProgressBar({ value = 0 }) {
  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
      <div
        className="h-full rounded-full bg-gradient-to-r from-brand-400 to-brand-600 transition-[width] duration-700"
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      />
    </div>
  )
}
