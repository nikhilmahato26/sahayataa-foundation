import PageHeader from '@/components/ui/PageHeader'
import MembershipForm from '@/components/forms/MembershipForm'
import DonateBlock from '@/components/donate/DonateBlock'
import Reveal from '@/components/ui/Reveal'
import SectionHeading from '@/components/ui/SectionHeading'

export default function JoinUs() {
  return (
    <>
      <PageHeader
        eyebrow="Get involved"
        eyebrowIcon="Heart"
        title="Volunteer · Membership · Donate"
        subtitle="Join our mission — volunteer, become a member, or support a cause. Everything reaches us directly."
      />

      {/* Membership */}
      <section className="container-x py-16">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <Reveal>
            <MembershipForm />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="card p-6 sm:p-8">
              <h3 className="text-xl font-extrabold">Who fits best?</h3>
              <p className="mt-2 text-ink-soft">
                Anyone committed and compassionate — ready to work on real problems
                in health, education and community welfare.
              </p>
              <ul className="mt-5 space-y-3 text-sm">
                {[
                  'Help run medical & blood donation camps',
                  'Support education and relief drives',
                  'Lend professional skills (design, ops, outreach)',
                  'Partner with us for CSR initiatives',
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2.5">
                    <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-100 text-brand-700">
                      ✓
                    </span>
                    <span className="text-ink-soft">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Donate */}
      <section className="bg-brand-50/60 py-16">
        <div className="container-x">
          <SectionHeading
            eyebrow="Donate"
            eyebrowIcon="Heart"
            align="center"
            title="Support us with a donation"
            subtitle="Pay securely via UPI or bank transfer."
          />
          <div className="mt-10">
            <DonateBlock />
          </div>
        </div>
      </section>
    </>
  )
}
