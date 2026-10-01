import { Seo } from '../components/Seo'
import { Container } from '../components/ui'
import { CtaBand, FaqSection, PageHero, Steps } from '../components/sections'
import { homeFaqs, steps } from '../content/home'

export default function HowItWorks() {
  return (
    <>
      <Seo
        title="How It Works"
        description="From strategy call to a fully connected growth system: how Yugen Systems audits, builds, launches and optimizes your marketing."
        path="/how-it-works"
      />
      <PageHero
        eyebrow="How It Works"
        title="From First Call to"
        accent="Fully Booked."
        body="A simple four-step process. You stay focused on running your business while we build and run the system that keeps it growing."
      />
      <section className="pb-24">
        <Container>
          <Steps steps={steps} />
        </Container>
      </section>
      <FaqSection faqs={homeFaqs} />
      <CtaBand />
    </>
  )
}
