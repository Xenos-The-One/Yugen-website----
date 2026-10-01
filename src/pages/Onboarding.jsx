import { useState } from "react";
import { Head } from "vite-react-ssg";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  Label,
  Progress,
  Textarea,
} from "@/components/ui/form";
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2, Rocket, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { site } from "@/content/site";

const fieldClass = "bg-background/50 border-white/10";

// Each step is a list of sections; each field: [key, label, type, options]
const steps = [
  {
    id: "business",
    title: "Business & Contact",
    description: "Let's start with who you are and how to reach you.",
    sections: [
      {
        fields: [
          { key: "firstName", label: "First Name", required: true, half: true },
          { key: "lastName", label: "Last Name", required: true, half: true },
          { key: "email", label: "Email", type: "email", required: true, half: true },
          { key: "phone", label: "Phone", type: "tel", required: true, half: true },
          { key: "businessName", label: "Business Name", required: true },
          { key: "website", label: "Current Website (if you have one)", placeholder: "https://" },
          { key: "industry", label: "Industry", required: true, placeholder: "e.g. HVAC, real estate, dental, SaaS" },
          { key: "address", label: "Business Address", placeholder: "Leave blank if you don't serve customers at a location" },
          { key: "hours", label: "Hours of Operation", placeholder: "e.g. Mon–Fri, 9am–5pm" },
        ],
      },
    ],
  },
  {
    id: "goals",
    title: "Goals & Services",
    description: "Tell us what you sell, where, and what success looks like.",
    sections: [
      {
        fields: [
          {
            key: "plan",
            label: "Which package are you starting with?",
            type: "select",
            required: true,
            options: ["Growth ($2,497/mo)", "Authority ($3,497/mo)", "Individual service", "Not sure yet"],
          },
          { key: "services", label: "Your main services or products (list at least 4)", type: "textarea", required: true },
          { key: "locations", label: "Cities or areas you want to rank in", type: "textarea", required: true, placeholder: "List your most important areas first" },
          { key: "keywords", label: "Searches you want to show up for", type: "textarea", placeholder: "e.g. emergency plumber Miami, best mortgage broker near me" },
          { key: "competitors", label: "Your top 3 competitors (names or websites)", type: "textarea" },
          { key: "goals", label: "What would make the next 6 months a win?", type: "textarea", required: true },
        ],
      },
    ],
  },
  {
    id: "access",
    title: "Website & Accounts",
    description: "So we can audit and optimize what you already have.",
    sections: [
      {
        note: "Never type passwords into this form. We'll send access invites to the email you gave us, and you approve them from your own accounts.",
        fields: [
          {
            key: "platform",
            label: "What is your website built on?",
            type: "select",
            options: ["WordPress", "Wix", "Squarespace", "Shopify", "Webflow", "GoDaddy", "Custom-built", "I don't have a website", "Not sure"],
          },
          { key: "domainProvider", label: "Where is your domain registered?", placeholder: "e.g. GoDaddy, Namecheap, Google Domains, not sure" },
          { key: "gbp", label: "Do you have a Google Business Profile?", type: "select", options: ["Yes", "No", "Not sure"] },
          { key: "searchConsole", label: "Do you have Google Search Console set up?", type: "select", options: ["Yes", "No", "Not sure"] },
          { key: "analytics", label: "Do you have Google Analytics set up?", type: "select", options: ["Yes", "No", "Not sure"] },
          { key: "emailPlatform", label: "Email marketing platform (for newsletters)", placeholder: "e.g. Mailchimp, Klaviyo, none" },
        ],
      },
    ],
  },
  {
    id: "brand",
    title: "Brand & Content",
    description: "Help us write content that sounds like you.",
    sections: [
      {
        heading: "Your story",
        fields: [
          { key: "about", label: "Tell us about your business", type: "textarea", required: true, placeholder: "How you started, who you serve, how long you've been doing it" },
          { key: "different", label: "What makes you different from competitors?", type: "textarea" },
          {
            key: "voice",
            label: "How should your content sound?",
            type: "select",
            options: ["Friendly & conversational", "Professional & polished", "Bold & direct", "Technical & expert", "Let Yugen decide"],
          },
          { key: "avoid", label: "Topics, claims or words we should avoid", type: "textarea" },
        ],
      },
      {
        heading: "Branding",
        fields: [
          { key: "brandColors", label: "Brand colors", placeholder: "e.g. #0F172A and #2DD4BF" },
          { key: "needLogo", label: "Do you need a logo?", type: "select", options: ["No, I have one", "Yes", "Not sure"] },
        ],
      },
      {
        heading: "Social profiles",
        fields: [
          { key: "instagram", label: "Instagram", half: true },
          { key: "facebook", label: "Facebook", half: true },
          { key: "linkedin", label: "LinkedIn", half: true },
          { key: "tiktok", label: "TikTok / YouTube", half: true },
        ],
      },
    ],
  },
];

const allFields = steps.flatMap((s) => s.sections.flatMap((sec) => sec.fields));
const initial = Object.fromEntries([...allFields.map((f) => [f.key, ""]), ["termsAccepted", false]]);

function Field({ field, value, onChange, active }) {
  const required = field.required && active;
  const common = { id: field.key, value, required, onChange: (e) => onChange(field.key, e.target.value) };
  return (
    <div className={`space-y-2 ${field.half ? "" : "sm:col-span-2"}`}>
      <Label htmlFor={field.key}>
        {field.label}
        {field.required && <span className="text-primary"> *</span>}
      </Label>
      {field.type === "textarea" ? (
        <Textarea {...common} placeholder={field.placeholder} className={`${fieldClass} min-h-[90px]`} />
      ) : field.type === "select" ? (
        <select
          {...common}
          className="flex h-10 w-full rounded-md border border-white/10 bg-background/50 px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <option value="" disabled>
            Select one
          </option>
          {field.options.map((o) => (
            <option key={o} value={o} className="bg-[#0a0a0c]">
              {o}
            </option>
          ))}
        </select>
      ) : (
        <Input {...common} type={field.type || "text"} placeholder={field.placeholder} className={fieldClass} />
      )}
    </div>
  );
}

export default function Onboarding() {
  const [step, setStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState(initial);
  const navigate = useNavigate();
  const last = step === steps.length - 1;

  const update = (key, value) => setForm((f) => ({ ...f, [key]: value }));

  async function submit(e) {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    const payload = { ...form, submittedAt: new Date().toISOString() };
    try {
      if (site.onboardingEndpoint) {
        const res = await fetch(site.onboardingEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error(String(res.status));
      } else {
        const body = allFields.map((f) => `${f.label}: ${form[f.key] || "-"}`).join("\n");
        window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`Onboarding - ${form.businessName}`)}&body=${encodeURIComponent(body)}`;
      }
      setDone(true);
    } catch {
      setError(`Something went wrong. Please try again, or email us at ${site.email}.`);
    } finally {
      setSubmitting(false);
    }
  }

  if (done) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 pt-32">
        <Head>
          <title>Onboarding | Yugen Systems</title>
          <meta name="robots" content="noindex" />
        </Head>
        <div className="absolute inset-0 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
        <Card className="max-w-md w-full glass-card border-white/10 relative z-10 text-center py-12">
          <CardContent className="flex flex-col items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-2">You're All Set!</h2>
              <p className="text-muted-foreground mb-6">
                Your onboarding details have been sent. Watch your inbox for access invites and your kickoff call.
              </p>
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mb-6 text-left">
                <h4 className="font-bold text-primary mb-2">Final Step: Send Your Logo & Photos 📸</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  {"Email your logo and your best business photos (including one of you or your team) to "}
                  <strong>{site.email}</strong>.
                </p>
                <Button
                  onClick={() =>
                    (window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`Logo & Photos - ${form.businessName}`)}`)
                  }
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Click here to send email now
                </Button>
              </div>
            </div>
            <Button onClick={() => navigate("/")} variant="outline" className="w-full">
              {"Return Home "}
              <ArrowUpRight className="ml-2 w-4 h-4" />
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col items-center pt-32 pb-12 px-4 sm:px-6 lg:px-8 relative">
      <Head>
        <title>Onboarding | Yugen Systems</title>
        <meta name="robots" content="noindex" />
      </Head>
      <div className="absolute top-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background pointer-events-none" />
      <div className="w-full max-w-3xl relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-6 border border-primary/20">
            <Rocket className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            {"Let's Build Your "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#99f6e4]">System</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            This takes about 10 minutes. Your answers shape your SEO strategy, AI search optimization and content plan.
          </p>
        </div>
        <div className="mb-8">
          <div className="flex justify-between text-sm font-medium text-muted-foreground mb-4 px-2">
            {steps.map((s, i) => (
              <div className={`flex flex-col items-center gap-2 ${i <= step ? "text-primary" : ""}`} key={s.id}>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-colors ${i < step ? "bg-primary border-primary text-primary-foreground" : i === step ? "border-primary text-primary" : "border-muted-foreground/30"}`}
                >
                  {i < step ? <CheckCircle2 className="w-5 h-5" /> : i + 1}
                </div>
                <span className="hidden sm:block text-xs">{s.title}</span>
              </div>
            ))}
          </div>
          <Progress value={((step + 1) / steps.length) * 100} className="h-2 bg-muted" />
        </div>
        <Card className="glass-card border-white/10 shadow-2xl">
          <form
            onSubmit={
              last
                ? submit
                : (e) => {
                    e.preventDefault();
                    setStep((s) => s + 1);
                    window.scrollTo(0, 0);
                  }
            }
          >
            <CardHeader>
              <CardTitle className="text-2xl">{steps[step].title}</CardTitle>
              <CardDescription>{steps[step].description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {steps.map((s, i) => (
                <div className={i === step ? "block space-y-6" : "hidden"} key={s.id}>
                  {s.sections.map((sec, j) => (
                    <div key={j}>
                      {sec.heading && (
                        <h3 className="text-lg font-semibold text-primary border-b border-white/10 pb-2 mb-4">{sec.heading}</h3>
                      )}
                      {sec.note && (
                        <div className="flex items-start gap-3 bg-primary/10 border border-primary/20 rounded-lg p-4 mb-5 text-sm text-foreground/90">
                          <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          {sec.note}
                        </div>
                      )}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {sec.fields.map((f) => (
                          <Field key={f.key} field={f} value={form[f.key]} onChange={update} active={i === step} />
                        ))}
                      </div>
                    </div>
                  ))}
                  {i === steps.length - 1 && (
                    <div className="flex items-start space-x-3 p-4 bg-white/[0.02] border border-white/5 rounded-lg">
                      <input
                        type="checkbox"
                        id="termsAccepted"
                        required={last}
                        checked={form.termsAccepted}
                        onChange={(e) => update("termsAccepted", e.target.checked)}
                        className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <Label htmlFor="termsAccepted" className="text-sm font-normal leading-relaxed text-muted-foreground">
                        {"I agree to the "}
                        <a href="/legal" className="text-primary underline hover:text-primary/80">
                          terms & conditions
                        </a>
                        {" and agree to receive emails and text messages from Yugen Systems about my project."}
                      </Label>
                    </div>
                  )}
                </div>
              ))}
            </CardContent>
            <CardFooter className="flex justify-between border-t border-white/5 pt-6 bg-white/[0.02] rounded-b-xl">
              <Button
                type="button"
                variant="ghost"
                onClick={() => setStep((s) => Math.max(0, s - 1))}
                disabled={step === 0 || submitting}
                className="text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                {" Back"}
              </Button>
              {last ? (
                <Button
                  type="submit"
                  disabled={submitting}
                  className="bg-primary hover:bg-primary/90 shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
                >
                  {submitting ? "Submitting..." : "Submit Onboarding"} <CheckCircle2 className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button type="submit" className="bg-primary hover:bg-primary/90">
                  {"Next Step "}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              )}
            </CardFooter>
            {error && <p className="px-6 pb-6 text-sm text-red-400 text-center">{error}</p>}
          </form>
        </Card>
      </div>
    </div>
  );
}
