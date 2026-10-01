import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input, Label, Textarea } from "@/components/ui/form";
import { serviceOptions, site } from "@/content/site";
import { submitForm } from "@/lib/submit";

const field = "bg-white/[0.03] border-white/10 h-12";

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", business: "", interest: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

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
        "Interested in": form.interest,
        Message: form.message,
      });
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
    <form onSubmit={submit} className="p-6 sm:p-8 space-y-5">
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
        <Label htmlFor="c-interest" className="text-white/80">What are you interested in?</Label>
        <select
          id="c-interest"
          value={form.interest}
          onChange={set("interest")}
          className="flex h-12 w-full rounded-md border border-white/10 bg-white/[0.03] px-3 text-sm text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <option value="" className="bg-[#0a0a0c]">Select one</option>
          {serviceOptions.map((o) => (
            <option key={o} value={o} className="bg-[#0a0a0c]">
              {o}
            </option>
          ))}
        </select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="c-message" className="text-white/80">Message *</Label>
        <Textarea id="c-message" required value={form.message} onChange={set("message")} className="bg-white/[0.03] border-white/10 min-h-[140px]" />
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
