import { useState } from "react";
import { Seo } from "@/components/Seo";
import { useNavigate } from "react-router-dom";

export default function Legal() {
  const [e, t] = useState(!1);
  return (
    useNavigate(),
    (
      <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
        <Seo title="Legal" description="Terms of Use and Privacy Policy for Yugen Systems." path="/legal" />
        <section className="pt-40 pb-20 px-4 text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
          <div className="container mx-auto max-w-4xl relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight">
              {"Legal "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#99f6e4]">
                Information
              </span>
            </h1>
          </div>
        </section>
        <section className="py-10 px-4 pb-32">
          <div className="container mx-auto max-w-4xl">
            <div className="glass-card p-8 md:p-12 rounded-3xl border border-white/10 text-muted-foreground space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Terms of Use</h2>
                <p className="leading-relaxed mb-4">
                  By accessing this website, you are agreeing to be bound by these website Terms and Conditions of Use,
                  all applicable laws and regulations, and agree that you are responsible for compliance with any
                  applicable local laws.
                </p>
                <p className="leading-relaxed">
                  If you do not agree with any of these terms, you are prohibited from using or accessing this site. The
                  materials contained in this website are protected by applicable copyright and trademark law.
                </p>
              </div>
              <hr className="border-white/10" />
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Privacy Policy</h2>
                <p className="leading-relaxed mb-4">
                  Your privacy is important to us. It is Yugen Systems' policy to respect your privacy regarding any
                  information we may collect from you across our website.
                </p>
                <p className="leading-relaxed">
                  We only ask for personal information when we truly need it to provide a service to you. We collect it
                  by fair and lawful means, with your knowledge and consent. We also let you know why we're collecting
                  it and how it will be used.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  );
}
