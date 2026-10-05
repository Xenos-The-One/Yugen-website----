import { useEffect, useState } from "react";
import { Check, CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input, Label, Textarea } from "@/components/ui/form";
import { auditOption, serviceOptions, site } from "@/content/site";
import { submitForm } from "@/lib/submit";
import { track } from "@vercel/analytics/react";

const field = "bg-white/[0.03] border-white/10 h-12";

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", business: "", website: "", interests: [], message: "", company_url: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const toggle = (o) =>
    setForm((f) => ({ ...f, interests: f.interests.includes(o) ? f.interests.filter((x) => x !== o) : [...f.interests, o] }));
  const wantsAudit = form.interests.includes(auditOption);

  useEffect(() => {
    if (new URLSearchParams(window.location.search).get("interest") === "audit") setForm((f) => ({ ...f, interests: [auditOption] }));
  }, []);

  async function submit(e) {
    e.preventDefault();
    setSending(true);
    setError("");
    try {
      await submitForm("contact", {
        Name: form.name,
        Email: form.email,
        Phone: form.phone,
        Business: form.business,
        Website: form.website,
        "Interested in": form.interests,
        Message: form.message,
        company_url: form.company_url,
      });
      track("contact_submit", { interest: form.interests.join(", ") || "none" });
      setSent(true);
    } catch {
      setError(`Something went wrong. Please email us at ${site.email}.`);
    } finally {
      setSending(false);
    }
  }

  if (sent) {
    return (
      <div className="min-h-[420px] flex flex-col items-center justify-center text-center gap-4 p-10">
        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8 text-primary" />
        </div>
        <h2 className="text-3xl font-black text-white">Thanks, we got it.</h2>
        <p className="text-white/60 text-lg max-w-md">We'll get back to you within one business day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="relative p-6 sm:p-8 space-y-5">
      <div>
        <h2 className="text-3xl md:text-4xl font-black text-white mb-2">Send Us a Message</h2>
        <p className="text-white/50">Tell us a little about your business and what you need. We reply within one business day.</p>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="c-name" className="text-white/80">Name *</Label>
          <Input id="c-name" required value={form.name} onChange={set("name")} className={field} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="c-business" className="text-white/80">Business Name</Label>
          <Input id="c-business" value={form.business} onChange={set("business")} className={field} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="c-email" className="text-white/80">Email *</Label>
          <Input id="c-email" type="email" required value={form.email} onChange={set("email")} className={field} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="c-phone" className="text-white/80">Phone</Label>
          <Input id="c-phone" type="tel" value={form.phone} onChange={set("phone")} className={field} />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="c-website" className="text-white/80">Website{wantsAudit ? " *" : ""}</Label>
        <Input
          id="c-website"
          inputMode="url"
          placeholder="yourbusiness.com"
          required={wantsAudit}
          value={form.website}
          onChange={set("website")}
          className={field}
        />
      </div>
      {/* Honeypot: hidden from people, filled by bots; the API drops submissions that include it. */}
      <div aria-hidden="true" className="absolute -left-[9999px] w-px h-px overflow-hidden">
        <label htmlFor="c-company-url">Company URL</label>
        <input id="c-company-url" tabIndex={-1} autoComplete="off" value={form.company_url} onChange={set("company_url")} />
      </div>
      <fieldset className="space-y-3">
        <legend className="text-sm font-medium text-white/80 mb-3">
          What are you interested in? <span className="text-white/40 font-normal">Pick as many as you like.</span>
        </legend>
        <div className="flex flex-wrap gap-2">
          {[auditOption, ...serviceOptions].map((o) => {
            const on = form.interests.includes(o);
            return (
              <button
                type="button"
                key={o}
                aria-pressed={on}
                onClick={() => toggle(o)}
                className={`inline-flex items-center gap-1.5 rounded-full border px-4 h-10 text-sm transition-colors ${on ? "border-primary bg-primary/15 text-white" : "border-white/10 bg-white/[0.03] text-white/70 hover:border-white/30 hover:text-white"}`}
              >
                {on && <Check className="w-4 h-4 text-primary" />}
                {o}
              </button>
            );
          })}
        </div>
        {wantsAudit && (
          <p className="text-sm text-primary/90">
            Add your website above. Within 2 business days we'll send you a short video showing how you appear on Google and in ChatGPT, Gemini and Perplexity, and what we'd fix first.
          </p>
        )}
      </fieldset>
      <div className="space-y-2">
        <Label htmlFor="c-message" className="text-white/80">Message</Label>
        <Textarea id="c-message" value={form.message} onChange={set("message")} className="bg-white/[0.03] border-white/10 min-h-[140px]" />
      </div>
      <Button
        type="submit"
        disabled={sending}
        className="w-full h-14 text-lg font-bold rounded-full bg-white text-black hover:bg-white/90 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-[1.02] transition-all"
      >
        {sending ? "Sending..." : "Send Message"} <Send className="w-5 h-5" />
      </Button>
      {error && <p className="text-sm text-red-400 text-center">{error}</p>}
    </form>
  );
}
