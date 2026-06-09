import PageHeader from '@/components/ui/PageHeader'
import AboutSection from '@/components/sections/AboutSection'
import ImpactStats from '@/components/sections/ImpactStats'

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        eyebrowIcon="Sparkles"
        title="Helping hands, across India"
        subtitle="Who we are, what drives us, and the people making it happen."
      />
      <AboutSection />
      <ImpactStats />
    </>
  )
}
