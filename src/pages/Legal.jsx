import { Seo } from "@/components/Seo";
import { site } from "@/content/site";

const updated = "October 5, 2026";

const terms = [
  {
    h: "Using this website",
    p: [
      `By using ${site.url.replace("https://", "")}, you agree to these terms and to all applicable laws. If you don't agree, please don't use the site.`,
      `The content on this site, including text, graphics and code, belongs to ${site.name} and is protected by copyright and trademark law. You may not copy or reuse it without our written permission.`,
    ],
  },
  {
    h: "Information on this site",
    p: [
      "We write our guides and articles to be accurate and useful, but they are general information, not professional advice for your specific situation. Results described on this site are not a guarantee of results for your business.",
      "Product screenshots and dashboards shown on this site are illustrations, not real client data.",
    ],
  },
  {
    h: "Client services",
    p: [
      "Work we do for clients is governed by the agreement or onboarding terms you accept when you sign up. If anything in those terms conflicts with this page, those terms apply.",
    ],
  },
  {
    h: "Liability",
    p: [
      `This site is provided "as is". To the extent the law allows, ${site.name} is not liable for any loss arising from your use of the site or from relying on its content.`,
      "These terms are governed by the laws of the Province of Ontario and the federal laws of Canada that apply there.",
    ],
  },
];

const privacy = [
  {
    h: "What we collect",
    p: [
      "Information you give us: your name, email, phone number, business name, website and anything you write when you use our contact form, book a call, chat with us on the site or text or call us.",
      "Basic usage data: pages visited, referring site, device and browser type, collected through privacy-friendly analytics that don't use cookies to identify you.",
    ],
  },
  {
    h: "How we use it",
    p: [
      "To reply to you, prepare a free audit you requested, schedule calls, provide services you sign up for, and improve this website. We don't sell your personal information.",
    ],
  },
  {
    h: "Texts and calls",
    p: [
      "If you text or call us, or call one of our demo numbers, we may text you back about your inquiry. You can reply STOP at any time to stop receiving texts. Message and data rates may apply.",
      "Marketing emails and texts we send on behalf of our clients follow Canada's Anti-Spam Legislation (CASL), identify the sender and include a way to unsubscribe.",
    ],
  },
  {
    h: "Who we share it with",
    p: [
      "We use trusted service providers to run our business, including Google Workspace (email), Google Calendar (booking), GoHighLevel (chat, texting, inbox and client automation) and Vercel (website hosting and analytics). They process information only to provide their services to us.",
      "Some of these providers store data outside Canada, including in the United States, where it may be subject to local laws.",
    ],
  },
  {
    h: "Client customer data",
    p: [
      "When we run lead and review systems for a client, we handle their customers' contact details on the client's behalf and only to provide those services.",
    ],
  },
  {
    h: "Your choices",
    p: [
      `You can ask to see, correct or delete the personal information we hold about you, or withdraw consent to being contacted, by emailing ${site.email}. We keep information only as long as we need it for the purposes above or as the law requires.`,
      "We handle personal information in line with Canada's Personal Information Protection and Electronic Documents Act (PIPEDA).",
    ],
  },
];

function Block({ id, title, items }) {
  return (
    <div id={id} className="scroll-mt-32">
      <h2 className="text-3xl font-bold text-white mb-6">{title}</h2>
      <div className="space-y-6">
        {items.map((s) => (
          <div key={s.h}>
            <h3 className="text-lg font-bold text-white/90 mb-2">{s.h}</h3>
            {s.p.map((t) => (
              <p key={t} className="leading-relaxed mb-3">
                {t}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Legal() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Seo title="Terms & Privacy" description={`Terms of Use and Privacy Policy for ${site.name}.`} path="/legal" />
      <section className="pt-40 pb-20 px-4 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto max-w-4xl relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight">
            {"Legal "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#99f6e4]">Information</span>
          </h1>
          <p className="text-white/50">Last updated {updated}</p>
        </div>
      </section>
      <section className="py-10 px-4 pb-32">
        <div className="container mx-auto max-w-4xl">
          <div className="glass-card p-8 md:p-12 rounded-3xl border border-white/10 text-muted-foreground space-y-12">
            <Block id="terms" title="Terms of Use" items={terms} />
            <hr className="border-white/10" />
            <Block id="privacy" title="Privacy Policy" items={privacy} />
            <hr className="border-white/10" />
            <p className="leading-relaxed">
              {"Questions about these terms or your privacy? Email "}
              <a href={`mailto:${site.email}`} className="text-white hover:text-primary">
                {site.email}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
