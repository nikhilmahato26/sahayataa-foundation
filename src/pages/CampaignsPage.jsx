import PageHeader from '@/components/ui/PageHeader'
import Campaigns from '@/components/sections/Campaigns'
import DonateCTA from '@/components/sections/DonateCTA'

export default function CampaignsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Campaigns"
        eyebrowIcon="Heart"
        title="Support an active campaign"
        subtitle="Back a cause that matters — every rupee fuels a camp, a kit or a life saved."
      />
      <Campaigns />
      <DonateCTA />
    </>
  )
}
