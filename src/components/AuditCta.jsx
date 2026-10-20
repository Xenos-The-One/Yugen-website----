import { ArrowRight, Calendar } from "lucide-react";
import { track } from "@vercel/analytics/react";
import { BookingDialog } from "@/components/BookingDialog";
import { Button } from "@/components/ui/button";
import { auditCta } from "@/content/site";

// Sends an event to Vercel Analytics and to GTM's dataLayer, so GA4 can mark it as a key event.
export function trackEvent(name, props = {}) {
  track(name, props);
  if (typeof window !== "undefined") (window.dataLayer = window.dataLayer || []).push({ event: name, ...props });
}

const sizes = {
  sm: "h-10 px-6 text-sm",
  lg: "h-14 px-8 text-base",
};

// The site's one primary call to action: the free visibility & lead audit.
export function AuditCta({ location, label = auditCta.label, href = auditCta.href, size = "lg", className = "" }) {
  return (
    <a
      href={href}
      onClick={() => trackEvent("audit_click", { location })}
      className={`group inline-flex items-center justify-center gap-2 rounded-full bg-white text-black font-bold hover:bg-white/90 shadow-[0_0_30px_rgba(255,255,255,0.15)] transition-all ${sizes[size]} ${className}`}
    >
      {label}
      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
    </a>
  );
}

// Secondary call to action: opens the strategy call booking dialog.
export function BookCallButton({ location, label = "Book a Strategy Call", size = "lg", className = "" }) {
  return (
    <BookingDialog location={location}>
      <Button
        variant="outline"
        className={`rounded-full border-white/15 bg-white/5 text-white font-bold hover:bg-white/10 hover:text-white ${sizes[size]} ${className}`}
      >
        {label} <Calendar className="w-4 h-4 ml-1" />
      </Button>
    </BookingDialog>
  );
}

// Primary audit button with the booking option beside it.
export function CtaPair({ location, primaryHref, primaryLabel, className = "" }) {
  return (
    <div className={`flex flex-col sm:flex-row gap-3 ${className}`}>
      <AuditCta location={location} href={primaryHref} label={primaryLabel} />
      <BookCallButton location={location} />
    </div>
  );
}
