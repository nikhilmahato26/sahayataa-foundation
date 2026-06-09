import PageHeader from '@/components/ui/PageHeader'
import WhatWeDo from '@/components/sections/WhatWeDo'
import StoriesOfChange from '@/components/sections/StoriesOfChange'

export default function OurWork() {
  return (
    <>
      <PageHeader
        eyebrow="Our work"
        eyebrowIcon="Sparkles"
        title="What we do"
        subtitle="A look at the focus areas we drive across communities — rooted in care, dignity and impact."
      />
      <WhatWeDo />
      <StoriesOfChange />
    </>
  )
}
