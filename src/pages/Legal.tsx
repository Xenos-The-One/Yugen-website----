import { Seo } from '../components/Seo'
import { Container } from '../components/ui'
import { site } from '../content/site'

// Placeholder legal copy: have counsel review before launch.
export default function Legal() {
  return (
    <>
      <Seo title="Legal" description={`Terms of Use and Privacy Policy for ${site.name}.`} path="/legal" />
      <section className="pb-24 pt-40">
        <Container className="max-w-3xl space-y-16 text-white/65 [&_h2]:mb-4 [&_h2]:font-display [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-white [&_p]:mb-4 [&_p]:leading-relaxed">
          <div id="terms" className="scroll-mt-32">
            <h2>Terms of Use</h2>
            <p>By using this website you agree to these terms. Content on this site is provided for general information and may change without notice.</p>
            <p>Services are governed by the individual agreement signed with each client. Nothing on this website is a guarantee of specific rankings, AI citations, leads or revenue.</p>
          </div>
          <div id="privacy" className="scroll-mt-32">
            <h2>Privacy Policy</h2>
            <p>We collect the information you submit through our forms (such as name, email, phone and business details) to respond to your inquiry. We do not sell your personal information.</p>
            <p>If you'd like us to delete information you've submitted, email {site.email}.</p>
          </div>
        </Container>
      </section>
    </>
  )
}
