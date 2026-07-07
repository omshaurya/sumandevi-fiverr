import FilmStrip  from './components/FilmStrip'
import Navbar     from './components/Navbar'
import Hero       from './components/Hero'
import Services   from './components/Services'
import Portfolio  from './components/Portfolio'
import Pricing    from './components/Pricing'
import Tools      from './components/Tools'
import About      from './components/About'
import CTA        from './components/CTA'
import Contact    from './components/Contact'
import Footer     from './components/Footer'

export default function App() {
  return (
    <>
      <FilmStrip />
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Pricing />
      <Tools />
      <About />
      <CTA />
      <Contact />
      <Footer />
    </>
  )
}
