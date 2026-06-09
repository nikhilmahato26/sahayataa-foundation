import PageHeader from '@/components/ui/PageHeader'
import EventsGallery from '@/components/sections/EventsGallery'

export default function EventsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Events & camps"
        eyebrowIcon="HandHeart"
        title="Moments from the ground"
        subtitle="Blood donation drives, medical camps and community programs. Tap any event to view its photos."
      />
      <EventsGallery heading={false} />
    </>
  )
}
