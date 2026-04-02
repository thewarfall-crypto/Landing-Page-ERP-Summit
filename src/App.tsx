import { type PropsWithChildren } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  About,
  ConfirmedBrands,
  Experience,
  Footer,
  FormSection,
  Gallery,
  Hero,
  Networking,
  Stats,
  Venue,
  VenueAtmosphere
} from './components/sections'

const Reveal = ({ children }: PropsWithChildren) => {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.section
      initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
      whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  )
}

const App = () => {
  return (
    <div className="page-shell">
      <Hero />
      <Reveal>
        <About />
      </Reveal>
      <Reveal>
        <Experience />
      </Reveal>
      <Reveal>
        <Venue />
      </Reveal>
      <Reveal>
        <VenueAtmosphere />
      </Reveal>
      <Reveal>
        <Stats />
      </Reveal>
      <Reveal>
        <ConfirmedBrands />
      </Reveal>
      <Reveal>
        <Gallery />
      </Reveal>
      <Reveal>
        <Networking />
      </Reveal>
      <Reveal>
        <FormSection />
      </Reveal>
      <Footer />
    </div>
  )
}

export default App
