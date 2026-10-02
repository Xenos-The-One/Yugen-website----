import { useState } from "react";
import { Head } from "vite-react-ssg";
import { Button } from "@/components/ui/button";
import { Card, CardContent, Input, Label, Textarea } from "@/components/ui/form";
import { ArrowUpRight, CheckCircle2, Rocket } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { serviceOptions, site } from "@/content/site";
import { submitForm } from "@/lib/submit";

const field = "bg-background/50 border-white/10";

const empty = {
  name: "",
  email: "",
  phone: "",
  business: "",
  website: "",
  industry: "",
  area: "",
  services: "",
  needs: [],
  notes: "",
};

export default function Onboarding() {
  const [form, setForm] = useState(empty);
  const [agreed, setAgreed] = useState(false);
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const toggleNeed = (n) =>
    setForm((f) => ({ ...f, needs: f.needs.includes(n) ? f.needs.filter((x) => x !== n) : [...f.needs, n] }));

  async function submit(e) {
    e.preventDefault();
    setSending(true);
    setError("");
    try {
      await submitForm("onboarding", {
        Name: form.name,
        Email: form.email,
        Phone: form.phone,
        Business: form.business,
        Website: form.website,
        Industry: form.industry,
        "Service area": form.area,
        "Services to promote": form.services,
        "Needs help with": form.needs,
        Notes: form.notes,
      });
      setDone(true);
    } catch {
      setError(`Something went wrong. Please try again, or email us at ${site.email}.`);
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="min-h-screen bg-background flex flex-col items-center pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative">
      <Head>
        <title>Onboarding | Raindrop Marketing</title>
        <meta name="robots" content="noindex" />
      </Head>
      <div className="absolute top-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background pointer-events-none" />
      <div className="w-full max-w-2xl relative z-10">
        {done ? (
          <Card className="glass-card border-white/10 text-center py-12">
            <CardContent className="flex flex-col items-center gap-6">
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10 text-primary" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-2">You're All Set!</h2>
                <p className="text-muted-foreground">
                  We've got your details and will reach out by email to schedule your kickoff call. If you have a logo or
                  photos, reply to that email with them.
                </p>
              </div>
              <Button onClick={() => navigate("/")} variant="outline" className="w-full">
                {"Return Home "}
                <ArrowUpRight className="ml-2 w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        ) : (
          <>
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-6 border border-primary/20">
                <Rocket className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl font-bold tracking-tight mb-4">
                {"Let's Get "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#99f6e4]">Started</span>
              </h1>
              <p className="text-lg text-muted-foreground">A few key details so we can hit the ground running. Takes about 3 minutes.</p>
            </div>
            <Card className="glass-card border-white/10 shadow-2xl">
              <form onSubmit={submit}>
                <CardContent className="p-6 sm:p-8 space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name *</Label>
                      <Input id="name" required value={form.name} onChange={set("name")} className={field} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="business">Business Name *</Label>
                      <Input id="business" required value={form.business} onChange={set("business")} className={field} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" required value={form.email} onChange={set("email")} className={field} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone *</Label>
                      <Input id="phone" type="tel" required value={form.phone} onChange={set("phone")} className={field} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="website">Current Website</Label>
                      <Input id="website" placeholder="If you have one" value={form.website} onChange={set("website")} className={field} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="industry">Industry *</Label>
                      <Input id="industry" required placeholder="e.g. HVAC, real estate, dental" value={form.industry} onChange={set("industry")} className={field} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="area">Cities or areas you serve *</Label>
                    <Input id="area" required placeholder="e.g. Vaughan, Toronto, Mississauga" value={form.area} onChange={set("area")} className={field} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="services">Main services you want customers to find you for *</Label>
                    <Textarea id="services" required value={form.services} onChange={set("services")} className={`${field} min-h-[90px]`} />
                  </div>
                  <div className="space-y-3">
                    <Label>What do you need help with?</Label>
                    <div className="flex flex-wrap gap-2">
                      {serviceOptions.map((n) => {
                        const on = form.needs.includes(n);
                        return (
                          <button
                            type="button"
                            key={n}
                            onClick={() => toggleNeed(n)}
                            aria-pressed={on}
                            className={`px-4 py-2 rounded-full border text-sm font-medium transition-colors ${on ? "bg-primary text-primary-foreground border-primary" : "border-white/10 bg-white/5 text-white/70 hover:border-primary/50 hover:text-white"}`}
                          >
                            {n}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="notes">Anything else we should know?</Label>
                    <Textarea id="notes" value={form.notes} onChange={set("notes")} className={`${field} min-h-[80px]`} />
                  </div>
                  <div className="flex items-start space-x-3 p-4 bg-white/[0.02] border border-white/5 rounded-lg">
                    <input
                      type="checkbox"
                      id="agree"
                      required
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                      className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <Label htmlFor="agree" className="text-sm font-normal leading-relaxed text-muted-foreground">
                      {"I agree to the "}
                      <a href="/legal" className="text-primary underline hover:text-primary/80">
                        terms & conditions
                      </a>
                      {" and to receive emails and texts from Raindrop Marketing about my project."}
                    </Label>
                  </div>
                  <Button
                    type="submit"
                    disabled={sending}
                    className="w-full h-14 text-lg font-bold rounded-xl bg-primary hover:bg-primary/90 shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
                  >
                    {sending ? "Sending..." : "Submit"}
                  </Button>
                  {error && <p className="text-sm text-red-400 text-center">{error}</p>}
                </CardContent>
              </form>
            </Card>
          </>
        )}
      </div>
    </div>
  );
}
