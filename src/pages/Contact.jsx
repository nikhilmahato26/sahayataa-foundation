import PageHeader from '@/components/ui/PageHeader'
import ContactInfo from '@/components/sections/ContactInfo'
import ContactForm from '@/components/forms/ContactForm'
import Reveal from '@/components/ui/Reveal'

export default function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Contact us"
        eyebrowIcon="Phone"
        title="Let's talk"
        subtitle="Questions, partnerships or volunteering — we'd love to hear from you."
      />
      <section className="container-x py-16">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <ContactInfo />
          </Reveal>
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  )
}
