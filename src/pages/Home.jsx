import Hero from '@/components/sections/Hero'
import ImpactStats from '@/components/sections/ImpactStats'
import WhatWeDo from '@/components/sections/WhatWeDo'
import Campaigns from '@/components/sections/Campaigns'
import EventsGallery from '@/components/sections/EventsGallery'
import StoriesOfChange from '@/components/sections/StoriesOfChange'
import DonateCTA from '@/components/sections/DonateCTA'
import Offices from '@/components/sections/Offices'

export default function Home() {
  return (
    <>
      <Hero />
      <ImpactStats />
      <WhatWeDo />
      <Campaigns />
      <EventsGallery />
      <StoriesOfChange />
      <DonateCTA />
      <Offices />
    </>
  )
}
