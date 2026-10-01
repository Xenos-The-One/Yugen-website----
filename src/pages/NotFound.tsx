import { Head } from 'vite-react-ssg'
import { Button, Container } from '../components/ui'
import { Backdrop } from '../components/sections'

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden pt-32">
      <Head>
        <title>Page not found | Yugen Systems</title>
        <meta name="robots" content="noindex" />
      </Head>
      <Backdrop />
      <Container className="relative text-center">
        <p className="font-display text-8xl font-extrabold text-gradient">404</p>
        <h1 className="mt-4 font-display text-3xl font-bold">This page drifted off.</h1>
        <p className="mt-3 text-white/55">The page you're looking for doesn't exist or has moved.</p>
        <Button to="/" className="mt-8">Back Home</Button>
      </Container>
    </section>
  )
}
