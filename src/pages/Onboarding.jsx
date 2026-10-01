import { useState } from "react";
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
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2, Rocket } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { site } from "@/content/site";

const Go = [
  { id: "contact", title: "Business Contact" },
  { id: "services", title: "Services & Products" },
  { id: "website", title: "Website & Social" },
  { id: "branding", title: "Branding & Personal" },
];

export default function Onboarding() {
  const [e, t] = useState(0),
    [n, r] = useState(!1),
    [o, s] = useState(!1),
    [error, setError] = useState(""),
    l = useNavigate(),
    [c, u] = useState({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      companyName: "",
      taxId: "",
      website: "",
      hoursOfOperation: "",
      bbbLink: "",
      mainServices: "",
      specificServices: "",
      topLocations: "",
      discounts: "",
      aboutUs: "",
      specialThings: "",
      instagram: "",
      facebookLink: "",
      tiktok: "",
      yelp: "",
      needLogo: "",
      brandColors: "",
      address1: "",
      termsAccepted: !1,
    }),
    d = () => {
      e < Go.length - 1 && t((g) => g + 1);
    },
    f = () => {
      e > 0 && t((g) => g - 1);
    },
    h = async (g) => {
      (g.preventDefault(), r(!0), setError(""));
      try {
        const payload = { ...c, submittedAt: new Date().toISOString() };
        if (site.onboardingEndpoint) {
          const res = await fetch(site.onboardingEndpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify(payload),
          });
          if (!res.ok) throw new Error(String(res.status));
        } else {
          const body = Object.entries(payload)
            .map(([k, v]) => `${k}: ${v}`)
            .join("\n");
          window.location.href = `mailto:${site.email}?subject=${encodeURIComponent("Onboarding - " + (c.companyName || c.firstName))}&body=${encodeURIComponent(body)}`;
        }
        s(!0);
      } catch {
        setError("Something went wrong. Please try again, or email us at " + site.email + ".");
      } finally {
        r(!1);
      }
    },
    p = (g, y) => {
      u((b) => ({
        ...b,
        [g]: y,
      }));
    };
  return o ? (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <div className="absolute inset-0 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
      <Card className="max-w-md w-full glass-card border-white/10 relative z-10 text-center py-12">
        <CardContent className="flex flex-col items-center gap-6">
          <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
            <CheckCircle2 className="w-10 h-10 text-primary" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-2">You're All Set!</h2>
            <p className="text-muted-foreground mb-6">
              Your onboarding details have been sent. Our team will review your information and reach out via email to
              kick off your build.
            </p>
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mb-6 text-left">
              <h4 className="font-bold text-primary mb-2">Final Step: Send Your Photos 📸</h4>
              <p className="text-sm text-muted-foreground mb-4">
                {
                  "To complete your setup, please email 25-60 of your best photos (including a picture of yourself/team) to "
                }
                <strong>{site.email}</strong>.
              </p>
              <Button
                onClick={() =>
                  (window.location.href = `mailto:${site.email}?subject=Website Photos - ${encodeURIComponent(c.companyName)}&body=Hi Yugen team,%0A%0AHere are the photos for my new website!`)
                }
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Click here to send email now
              </Button>
            </div>
          </div>
          <Button onClick={() => l("/")} variant="outline" className="w-full">
            {"Return Home "}
            <ArrowUpRight className="ml-2 w-4 h-4" />
          </Button>
        </CardContent>
      </Card>
    </div>
  ) : (
    <div className="min-h-screen bg-background flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 relative">
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
            Fill out the details below so we can start building your website, SEO and lead system.
          </p>
        </div>
        <div className="mb-8">
          <div className="flex justify-between text-sm font-medium text-muted-foreground mb-4 px-2">
            {Go.map((g, y) => (
              <div className={`flex flex-col items-center gap-2 ${y <= e ? "text-primary" : ""}`} key={g.id}>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-colors ${y < e ? "bg-primary border-primary text-primary-foreground" : y === e ? "border-primary text-primary" : "border-muted-foreground/30"}`}
                >
                  {y < e ? <CheckCircle2 className="w-5 h-5" /> : y + 1}
                </div>
                <span className="hidden sm:block text-xs">{g.title}</span>
              </div>
            ))}
          </div>
          <Progress value={((e + 1) / Go.length) * 100} className="h-2 bg-muted" />
        </div>
        <Card className="glass-card border-white/10 shadow-2xl">
          <form
            onSubmit={
              e === Go.length - 1
                ? h
                : (g) => {
                    (g.preventDefault(), d());
                  }
            }
          >
            <CardHeader>
              <CardTitle className="text-2xl">{Go[e].title}</CardTitle>
              <CardDescription>
                {e === 0 && "Let's start with your contact details."}
                {e === 1 && "Tell us about your services and where you operate."}
                {e === 2 && "Help us craft your website content and link your social media."}
                {e === 3 && "Share your branding preferences and shipping address."}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className={e === 0 ? "block space-y-4" : "hidden"}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      required={!0}
                      value={c.firstName}
                      onChange={(g) => p("firstName", g.target.value)}
                      className="bg-background/50 border-white/10"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      required={!0}
                      value={c.lastName}
                      onChange={(g) => p("lastName", g.target.value)}
                      className="bg-background/50 border-white/10"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Company Email (Professional email preferred)</Label>
                    <Input
                      id="email"
                      type="email"
                      required={!0}
                      value={c.email}
                      onChange={(g) => p("email", g.target.value)}
                      className="bg-background/50 border-white/10"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Business Phone (For new lead notifications)</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required={!0}
                      value={c.phone}
                      onChange={(g) => p("phone", g.target.value)}
                      className="bg-background/50 border-white/10"
                    />
                  </div>
                </div>
                <div className="space-y-2 pt-2">
                  <Label htmlFor="companyName">Your Official Business Name (For business cards)</Label>
                  <Input
                    id="companyName"
                    required={!0}
                    value={c.companyName}
                    onChange={(g) => p("companyName", g.target.value)}
                    className="bg-background/50 border-white/10"
                  />
                </div>
                <div className="space-y-2 pt-2">
                  <Label htmlFor="taxId">Your Businesses Tax ID or EIN #</Label>
                  <Input
                    id="taxId"
                    value={c.taxId}
                    onChange={(g) => p("taxId", g.target.value)}
                    className="bg-background/50 border-white/10"
                  />
                </div>
                <div className="space-y-2 pt-2">
                  <Label htmlFor="website">Link to your current website (IF YOU HAVE ONE)</Label>
                  <Input
                    id="website"
                    value={c.website}
                    onChange={(g) => p("website", g.target.value)}
                    className="bg-background/50 border-white/10"
                  />
                </div>
                <div className="space-y-2 pt-2">
                  <Label htmlFor="hoursOfOperation">
                    Your business's hour of operations (ex: 9 am to 5 pm Mon Friday) *Required*
                  </Label>
                  <Input
                    id="hoursOfOperation"
                    required={!0}
                    value={c.hoursOfOperation}
                    onChange={(g) => p("hoursOfOperation", g.target.value)}
                    className="bg-background/50 border-white/10"
                  />
                </div>
                <div className="space-y-2 pt-2">
                  <Label htmlFor="bbbLink">Business Better Business Bureau Page Link (if applicable)</Label>
                  <Input
                    id="bbbLink"
                    value={c.bbbLink}
                    onChange={(g) => p("bbbLink", g.target.value)}
                    className="bg-background/50 border-white/10"
                  />
                </div>
              </div>
              <div className={e === 1 ? "block space-y-4" : "hidden"}>
                <div className="space-y-2">
                  <Label htmlFor="mainServices">What main services or products do you offer?</Label>
                  <Textarea
                    id="mainServices"
                    required={e === 1}
                    value={c.mainServices}
                    onChange={(g) => p("mainServices", g.target.value)}
                    className="bg-background/50 border-white/10 min-h-[80px]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="specificServices">
                    All the services you offer, be as SPECIFIC as possible *Required*
                  </Label>
                  <Textarea
                    id="specificServices"
                    required={e === 1}
                    value={c.specificServices}
                    onChange={(g) => p("specificServices", g.target.value)}
                    className="bg-background/50 border-white/10 min-h-[100px]"
                    placeholder="List at least 4 services that your company provides"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="topLocations">
                    Your TOP Location and Areas you service. Be as SPECIFIC as possible! (DO NOT ADD MORE THAN 14)
                  </Label>
                  <Textarea
                    id="topLocations"
                    required={e === 1}
                    value={c.topLocations}
                    onChange={(g) => p("topLocations", g.target.value)}
                    className="bg-background/50 border-white/10 min-h-[80px]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="discounts">
                    IMPORTANT: Discounts you would offer for return customers or friends of past customers
                  </Label>
                  <Input
                    id="discounts"
                    value={c.discounts}
                    onChange={(g) => p("discounts", g.target.value)}
                    className="bg-background/50 border-white/10"
                    placeholder="ex $500 off your next roof / 15% off your next driveway wash"
                  />
                </div>
              </div>
              <div className={e === 2 ? "block space-y-4" : "hidden"}>
                <h3 className="text-lg font-semibold text-primary border-b border-white/10 pb-2 mb-4 mt-2">
                  Website SETUP
                </h3>
                <div className="space-y-2">
                  <Label htmlFor="aboutUs">
                    {'Your "About Us" section (3-5 sentences about yourself and how you got started) *Required*'}
                  </Label>
                  <Textarea
                    id="aboutUs"
                    required={e === 2}
                    value={c.aboutUs}
                    onChange={(g) => p("aboutUs", g.target.value)}
                    className="bg-background/50 border-white/10 min-h-[100px]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="specialThings">
                    Give us a few special things about your business that we can show off on your website!
                  </Label>
                  <Input
                    id="specialThings"
                    value={c.specialThings}
                    onChange={(g) => p("specialThings", g.target.value)}
                    className="bg-background/50 border-white/10"
                    placeholder="Ex: 10+ Years in business, Veteran Owned, Fully Insured"
                  />
                </div>
                <h3 className="text-lg font-semibold text-primary border-b border-white/10 pb-2 mb-4 mt-6">
                  Social Media Links
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="instagram">Your Instagram page</Label>
                    <Input
                      id="instagram"
                      value={c.instagram}
                      onChange={(g) => p("instagram", g.target.value)}
                      className="bg-background/50 border-white/10"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="facebookLink">Your Facebook Page</Label>
                    <Input
                      id="facebookLink"
                      value={c.facebookLink}
                      onChange={(g) => p("facebookLink", g.target.value)}
                      className="bg-background/50 border-white/10"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="tiktok">Business Tiktok Page Link</Label>
                    <Input
                      id="tiktok"
                      value={c.tiktok}
                      onChange={(g) => p("tiktok", g.target.value)}
                      className="bg-background/50 border-white/10"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="yelp">Yelp Business Page Link</Label>
                    <Input
                      id="yelp"
                      value={c.yelp}
                      onChange={(g) => p("yelp", g.target.value)}
                      className="bg-background/50 border-white/10"
                    />
                  </div>
                </div>
              </div>
              <div className={e === 3 ? "block space-y-4" : "hidden"}>
                <h3 className="text-lg font-semibold text-primary border-b border-white/10 pb-2 mb-4 mt-2">Branding</h3>
                <div className="space-y-2">
                  <Label htmlFor="needLogo">Do you need us to make you a logo?</Label>
                  <Input
                    id="needLogo"
                    value={c.needLogo}
                    onChange={(g) => p("needLogo", g.target.value)}
                    className="bg-background/50 border-white/10"
                    placeholder="Yes or No"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="companyLogo">Your Company Logo (Let us know if you need us to make you one)</Label>
                  <Input
                    id="companyLogo"
                    type="file"
                    className="bg-background/50 border-white/10 cursor-pointer text-muted-foreground file:bg-primary file:text-primary-foreground file:border-0 file:rounded-md file:px-4 file:py-2 file:mr-4 file:hover:bg-primary/90 file:cursor-pointer"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="brandColors">
                    Brand colors or preferred color palette (MAIN COLOR AND SECONDARY COLOR)
                  </Label>
                  <Input
                    id="brandColors"
                    value={c.brandColors}
                    onChange={(g) => p("brandColors", g.target.value)}
                    className="bg-background/50 border-white/10"
                    placeholder="Example - #FFFFFF"
                  />
                </div>
                <h3 className="text-lg font-semibold text-primary border-b border-white/10 pb-2 mb-4 mt-6">Personal</h3>
                <div className="space-y-2">
                  <Label htmlFor="address1">FULL SHIPPING ADDRESS (NO PO BOXES PLEASE) *Required*</Label>
                  <Input
                    id="address1"
                    required={e === 3}
                    value={c.address1}
                    onChange={(g) => p("address1", g.target.value)}
                    className="bg-background/50 border-white/10"
                    placeholder="EX: 2119 S Jackson St., Chicago, IL 60609"
                  />
                </div>
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mt-6">
                  <h4 className="font-bold text-primary mb-2 flex items-center gap-2">PHOTOS: 📸</h4>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-foreground/90">
                    <li>
                      {"Send 25-60 of your best photos to "}
                      <strong>{site.email}</strong>
                    </li>
                    <li>
                      Please include a nice picture of yourself and or your team (customers want to know who they will
                      be working with)
                    </li>
                  </ol>
                </div>
                <div className="flex items-start space-x-3 mt-6 p-4 bg-white/[0.02] border border-white/5 rounded-lg">
                  <input
                    type="checkbox"
                    id="termsAccepted"
                    required={e === 3}
                    checked={c.termsAccepted}
                    onChange={(g) => p("termsAccepted", g.target.checked)}
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <Label htmlFor="termsAccepted" className="text-sm font-normal leading-relaxed text-muted-foreground">
                    {"I agree to "}
                    <a href="#" className="text-primary underline hover:text-primary/80">
                      terms & conditions
                    </a>
                    {
                      " provided by the company. By providing my phone number, I agree to receive text messages from the Yugen Systems"
                    }
                  </Label>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between border-t border-white/5 pt-6 bg-white/[0.02] rounded-b-xl">
              <Button
                type="button"
                variant="ghost"
                onClick={f}
                disabled={e === 0 || n}
                className="text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                {" Back"}
              </Button>
              {e < Go.length - 1 ? (
                <Button type="submit" className="bg-primary hover:bg-primary/90">
                  {"Next Step "}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button
                  type="submit"
                  disabled={n}
                  className="bg-primary hover:bg-primary/90 shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
                >
                  {n ? "Submitting..." : "Submit Application"} <CheckCircle2 className="w-4 h-4 ml-2" />
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
