import { Seo } from '../components/Seo'
import { Container, Reveal, SectionHeading } from '../components/ui'
import { CtaBand, IconCard, PageHero } from '../components/sections'
import { advantages } from '../content/home'

export default function About() {
  return (
    <>
      <Seo
        title="About"
        description="Yugen Systems is a growth agency that combines AI with hands-on marketing to help businesses get found, chosen and booked."
        path="/about"
      />
      <PageHero
        eyebrow="About Yūgen"
        title="Marketing With"
        accent="Depth Behind It."
        body="Yūgen is a Japanese idea: a quiet, profound depth you feel before you can explain it. That's how good marketing should work. Customers just find you, trust you and book, while the system underneath does the heavy lifting."
      />
      <section className="py-24">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <SectionHeading center={false} eyebrow="Why We Exist" title="Search Changed." accent="Most Agencies Didn't." />
          <Reveal delay={0.1} className="space-y-5 text-lg leading-relaxed text-white/60">
            <p>
              Customers don't just Google anymore. They ask ChatGPT, read AI Overviews, scroll social feeds and expect a reply in minutes. Most small businesses are still paying for a website, an SEO retainer and an ads freelancer that never talk to each other.
            </p>
            <p>
              We built Yugen Systems to fix that: one team, one connected system that combines SEO, AI search, content, ads, websites and automated follow-up, with reporting that ties back to booked revenue.
            </p>
          </Reveal>
        </Container>
      </section>
      <section className="py-24">
        <Container>
          <SectionHeading eyebrow="How We Work" title="What You Can" accent="Count On." />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map((a, i) => (
              <IconCard key={a.title} icon={a.icon} title={a.title} body={a.body} delay={i * 0.08} />
            ))}
          </div>
        </Container>
      </section>
      <CtaBand />
    </>
  )
}
