import { FadeInEase } from "@/components/motion";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MapPin, MessageSquare, Phone, Sparkles, Video } from "lucide-react";
import { track } from "@vercel/analytics/react";
import { Seo } from "@/components/Seo";
import { site } from "@/content/site";
import { ContactForm } from "@/components/ContactForm";
import { BookingDialog } from "@/components/BookingDialog";

export default function Contact() {
  const e = useMotionValue(0),
    t = useMotionValue(0);
  function n({ currentTarget: r, clientX: o, clientY: s }) {
    const { left: i, top: l } = r.getBoundingClientRect();
    (e.set(o - i), t.set(s - l));
  }
  return (
    <div className="bg-background text-foreground selection:bg-primary/30">
      <Seo title="Contact" description="Talk to Raindrop Marketing about SEO, AI search, content, websites, ads and automated lead systems for your business." path="/contact" />
      <div onMouseMove={n} className="min-h-screen bg-[#030303] relative overflow-hidden pt-32 pb-20">
        <motion.div
          className="pointer-events-none absolute -inset-px opacity-50 transition duration-300 z-0"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                800px circle at ${e}px ${t}px,
                rgba(6,182,212, 0.15),
                transparent 80%
              )
            `,
          }}
        />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#06b6d4]/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 flex flex-col gap-10">
              <FadeInEase>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm text-white/80 shadow-[0_0_30px_rgba(6,182,212,0.2)] mb-8">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="font-medium">Let's Build Your System</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-tight text-white">
                  {"Ready to "}
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#99f6e4] animate-gradient-x">
                    Scale Up?
                  </span>
                </h1>
                <p className="text-xl text-white/60 leading-relaxed font-light">
                  Whether you have questions about how our AI systems work or you're ready to start capturing more
                  leads, our team is here to help.
                </p>
              </FadeInEase>
              <div className="flex flex-col gap-6 mt-8">
                {[
                  {
                    icon: <MessageSquare className="w-6 h-6" />,
                    title: "Email Us",
                    desc: "We reply within one business day.",
                    info: site.email,
                    href: `mailto:${site.email}`,
                    event: "email_click",
                  },
                  site.phone && {
                    icon: <Phone className="w-6 h-6" />,
                    title: "Call or Text",
                    desc: "Talk to the founder directly.",
                    info: site.phone,
                    href: site.phoneHref,
                    event: "phone_click",
                  },
                  site.googleBusinessProfile && {
                    icon: <MapPin className="w-6 h-6" />,
                    title: "Find Us on Google",
                    desc: "See our Business Profile and reviews.",
                    info: "View our Google profile",
                    href: site.googleBusinessProfile,
                    event: "gbp_click",
                    external: true,
                  },
                ].filter(Boolean).map((r, o) => (
                  <FadeInEase delay={0.2 + o * 0.1} key={o}>
                    <div className="glass-card p-6 rounded-3xl border border-white/5 hover:border-primary/30 transition-all duration-300 flex items-start gap-6 group bg-[#0a0a0c]/50">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.4)] shrink-0">
                        {r.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{r.title}</h3>
                        <p className="text-white/50 text-sm mb-2">{r.desc}</p>
                        <a
                          href={r.href}
                          onClick={() => track(r.event, { location: "contact_page" })}
                          {...(r.external && { target: "_blank", rel: "noreferrer" })}
                          className="text-white font-medium hover:text-primary transition-colors"
                        >
                          {r.info}
                        </a>
                      </div>
                    </div>
                  </FadeInEase>
                ))}
                <FadeInEase delay={0.3}>
                  <BookingDialog location="contact_page">
                    <button className="w-full text-left glass-card p-6 rounded-3xl border border-white/5 hover:border-primary/30 transition-all duration-300 flex items-start gap-6 group bg-[#0a0a0c]/50">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.4)] shrink-0">
                        <Video className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">Prefer to Talk?</h3>
                        <p className="text-white/50 text-sm mb-2">Book a free 30-minute strategy call on Google Meet.</p>
                        <span className="text-white font-medium group-hover:text-primary transition-colors">Book a call →</span>
                      </div>
                    </button>
                  </BookingDialog>
                </FadeInEase>
              </div>
            </div>
            <div className="lg:col-span-7">
              <FadeInEase delay={0.3}>
                <div className="relative rounded-[2.5rem] overflow-hidden p-1 bg-gradient-to-br from-primary/30 via-[#06b6d4]/30 to-transparent shadow-[0_0_80px_hsl(var(--primary)/0.15)] group">
                  <div className="absolute inset-0 bg-[#0a0a0c]/95 backdrop-blur-3xl" />
                  <div className="relative p-2 md:p-4">
                    <ContactForm />
                  </div>
                </div>
              </FadeInEase>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
