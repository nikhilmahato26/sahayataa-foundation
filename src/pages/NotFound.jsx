import Button from '@/components/ui/Button'

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="font-display text-7xl font-extrabold text-brand-600">404</p>
      <h1 className="mt-3 text-2xl font-bold">Page not found</h1>
      <p className="mt-2 text-ink-muted">The page you're looking for doesn't exist.</p>
      <Button to="/" variant="primary" size="lg" className="mt-6" iconRight="ArrowRight">
        Back home
      </Button>
    </section>
  )
}
