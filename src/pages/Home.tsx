import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Seo, faqJsonLd, orgJsonLd } from '../components/Seo'
import { Button, Container, Eyebrow, Reveal, SectionHeading } from '../components/ui'
import {
  Backdrop,
  Counter,
  CtaBand,
  FaqSection,
  FeatureBlock,
  IconCard,
  Marquee,
  RevealLine,
  TestimonialMarquee,
} from '../components/sections'
import { ServiceIcon } from '../components/ServiceIcon'
import { AdsMock, AiAnswerMock, LeadMock, RankMock } from '../components/mocks'
import { heroStats, site } from '../content/site'
import { services } from '../content/services'
import { advantages, homeFaqs, industries } from '../content/home'

export default function Home() {
  return (
    <>
      <Seo
        title="Yugen Systems | AI SEO, Marketing & Automated Lead Systems"
        description="Yugen Systems helps businesses get found on Google and AI search, turn traffic into booked calls, and grow with SEO, AI SEO, content, ads, websites and automated lead follow-up."
        path="/"
        jsonLd={[orgJsonLd, faqJsonLd(homeFaqs)]}
      />

      <section className="relative overflow-hidden pb-16 pt-40 sm:pt-48">
        <Backdrop />
        <Container className="relative text-center">
          <Reveal>
            <Eyebrow>The AI Growth System for Modern Businesses</Eyebrow>
          </Reveal>
          <h1 className="mx-auto mt-8 font-display text-5xl font-extrabold leading-[1] tracking-tight sm:text-7xl md:text-8xl">
            <RevealLine delay={0.05}>Get Found.</RevealLine>
            <RevealLine delay={0.15}>
              <span className="text-gradient">Get Chosen.</span>
            </RevealLine>
            <RevealLine delay={0.25}>Get Booked.</RevealLine>
          </h1>
          <Reveal delay={0.4}>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/60 sm:text-xl">
              Your customers search on Google, ask ChatGPT and scroll past ads. We make sure you show up everywhere they look, then answer, follow up and book every lead automatically.
            </p>
          </Reveal>
          <Reveal delay={0.5} className="mt-10 flex flex-wrap justify-center gap-4">
            <Button to={site.bookingUrl}>Book a Strategy Call</Button>
            <Button to="/how-it-works" variant="ghost">See How It Works</Button>
          </Reveal>

          <Reveal delay={0.6} className="mx-auto mt-20 grid max-w-4xl grid-cols-2 gap-y-10 md:grid-cols-4">
            {heroStats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-4xl font-bold sm:text-5xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/45">{s.label}</p>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      <section className="border-y border-white/5 bg-surface/40 py-6">
        <Marquee
          items={services.map((s) => (
            <span className="flex items-center gap-3 px-6 font-display text-lg font-semibold text-white/70">
              <ServiceIcon name={s.icon} className="h-5 w-5 text-jade" />
              {s.name}
            </span>
          ))}
        />
      </section>

      <TestimonialMarquee />

      <section className="py-24 sm:py-32">
        <Container>
          <SectionHeading
            eyebrow="What We Do"
            title="Seven Services."
            accent="One Growth System."
            body="Most businesses juggle an SEO guy, a web designer, an ads freelancer and a CRM nobody uses. We run it all as one connected system, so every channel feeds the next."
          />
          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 0.08} className="h-full">
                <Link
                  to={`/services/${s.slug}`}
                  className="group flex h-full flex-col rounded-3xl border border-white/10 bg-surface/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-jade/40 hover:bg-surface"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-jade/10 text-jade transition-colors group-hover:bg-jade group-hover:text-ink">
                    <ServiceIcon name={s.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-6 font-display text-xl font-bold">{s.name}</h3>
                  <p className="mt-2 flex-1 leading-relaxed text-white/55">{s.short}</p>
                  <span className="mt-6 flex items-center gap-1.5 text-sm font-semibold text-jade">
                    Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
            <Reveal delay={0.16} className="h-full">
              <Link
                to={site.bookingUrl}
                className="flex h-full flex-col justify-center rounded-3xl border border-dashed border-jade/30 bg-jade/[0.04] p-7 text-center transition-colors hover:bg-jade/10"
              >
                <p className="font-display text-xl font-bold">Not sure where to start?</p>
                <p className="mt-2 text-white/55">We'll audit your business and recommend the two or three moves that pay back fastest.</p>
                <span className="mt-5 text-sm font-semibold text-jade">Get a free growth audit →</span>
              </Link>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="space-y-32 py-16 sm:space-y-40">
        <Container>
          <FeatureBlock
            eyebrow="AI SEO"
            title="Be the Answer"
            accent="AI Recommends."
            body="Buyers now ask ChatGPT, Perplexity and Google's AI Overviews who to hire. We structure your brand and content so the AI names you, not your competitor."
            bullets={['AI visibility audit across every major engine', 'Schema and entity optimization', 'Answer-first content built to be cited']}
            cta="Explore AI SEO"
            to="/services/ai-seo"
            mock={<AiAnswerMock />}
          />
        </Container>
        <Container>
          <FeatureBlock
            flip
            eyebrow="SEO & Content"
            title="Rank Higher."
            accent="Stay There."
            body="Technical fixes, local SEO and a steady stream of AI-assisted, human-edited content that builds authority month after month."
            bullets={['Technical and local SEO', 'Content calendar mapped to buying keywords', 'Monthly ranking and lead reports']}
            cta="Explore SEO"
            to="/services/seo"
            mock={<RankMock />}
          />
        </Container>
        <Container>
          <FeatureBlock
            eyebrow="Automated Lead Systems"
            title="Zero-Second"
            accent="Lead Response."
            body="If you don't answer in five minutes, you lose the deal. Our systems reply to every chat, form and missed call instantly and book them straight onto your calendar."
            bullets={['AI website chat that books appointments', 'Missed-call text back', 'Automated SMS and email follow-up']}
            cta="Explore Lead Systems"
            to="/services/lead-systems"
            mock={<LeadMock />}
          />
        </Container>
        <Container>
          <FeatureBlock
            flip
            eyebrow="Paid Ads"
            title="Ads Measured"
            accent="in Revenue."
            body="Google, Meta and Local Services ads tracked all the way to the booked appointment, so you know exactly what every dollar returns."
            bullets={['Google, Meta and LSA campaigns', 'Dedicated landing pages', 'Weekly optimization and spend reports']}
            cta="Explore Paid Ads"
            to="/services/ads"
            mock={<AdsMock />}
          />
        </Container>
      </section>

      <section className="py-24 sm:py-32">
        <Container>
          <SectionHeading
            eyebrow="Industries"
            title="Built for"
            accent="Your Business."
            body="Our systems adapt to your industry: the questions your customers ask, the way they buy and the way you book."
          />
          <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {industries.map((ind, i) => (
              <Reveal key={ind.name} delay={(i % 4) * 0.05}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="h-full rounded-2xl border border-white/10 bg-surface/60 p-5 transition-colors hover:border-jade/40"
                >
                  <p className="font-display font-bold">{ind.name}</p>
                  <p className="mt-1 text-sm text-white/50">{ind.note}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 sm:py-32">
        <Container className="grid items-center gap-14 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <div>
            <SectionHeading
              center={false}
              eyebrow="The Yūgen Advantage"
              title="Most Agencies Sell Activity."
              accent="We Build Systems."
              body="We don't report on impressions and reach. We measure leads, booked calls and revenue, and we build everything to move those numbers."
            />
            <Reveal delay={0.2}>
              <Button to={site.bookingUrl} variant="ghost" className="mt-9">See What We'd Build</Button>
            </Reveal>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {advantages.map((a, i) => (
              <IconCard key={a.title} icon={a.icon} title={a.title} body={a.body} delay={i * 0.08} />
            ))}
          </div>
        </Container>
      </section>

      <FaqSection faqs={homeFaqs} />
      <CtaBand />
    </>
  )
}
