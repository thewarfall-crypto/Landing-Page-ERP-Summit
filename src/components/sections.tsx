import { motion, useReducedMotion } from 'framer-motion'

const FadeStagger = ({ children }: { children: React.ReactNode }) => {
  const reduced = useReducedMotion()

  return (
    <motion.div
      initial={reduced ? false : 'hidden'}
      whileInView={reduced ? 'visible' : 'visible'}
      viewport={{ once: true, amount: 0.25 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.08 } }
      }}
    >
      {children}
    </motion.div>
  )
}

const itemVariant = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }
}

export const Hero = () => (
  <header className="hero section">
    <div className="container hero-grid">
      <FadeStagger>
        <motion.p variants={itemVariant} className="eyebrow">
          3ª edición · Lima
        </motion.p>
        <motion.h1 variants={itemVariant}>ERP SUMMIT PERÚ</motion.h1>
        <motion.p variants={itemVariant} className="lead">
          El punto de encuentro entre software, gestión e innovación empresarial en Perú.
        </motion.p>
        <motion.div variants={itemVariant} className="cta-row">
          <a href="#preinscripcion" className="btn btn-primary">
            Preinscríbete ahora
          </a>
          <a href="#preinscripcion" className="btn btn-secondary">
            Recibir novedades oficiales
          </a>
        </motion.div>
      </FadeStagger>
      <motion.div
        className="hero-image media-placeholder"
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      >
        Placeholder visual
      </motion.div>
    </div>
  </header>
)

export const About = () => (
  <section className="section about">
    <div className="container slim">
      <h2>El mayor evento global sobre software y gestión</h2>
      <p>
        ERP Summit Perú reúne a líderes, especialistas, empresas y decisores que están transformando la gestión
        empresarial con tecnología, estrategia e innovación.
      </p>
    </div>
  </section>
)

const experienceItems = [
  ['Contenido estratégico', 'Conferencias y paneles orientados a decisiones, productividad y crecimiento real.'],
  ['Networking de alto nivel', 'Conecta con ejecutivos, líderes de TI y tomadores de decisión en un entorno premium.'],
  ['Innovación aplicada', 'Conoce casos concretos de transformación digital, automatización y data en gestión empresarial.'],
  ['Oportunidades de negocio', 'Identifica alianzas, proveedores y nuevas rutas de expansión para tu organización.']
]

export const Experience = () => (
  <section className="section experience">
    <div className="container">
      <h2>La experiencia ERP Summit</h2>
      <div className="experience-grid">
        {experienceItems.map(([title, text]) => (
          <motion.article whileHover={{ y: -6, scale: 1.01 }} className="card" key={title}>
            <h3>{title}</h3>
            <p>{text}</p>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
)

export const Venue = () => (
  <section className="section venue">
    <div className="container venue-grid">
      <div className="venue-copy">
        <h2>Lima Convention Center será el escenario de la 3ª edición</h2>
        <p>
          Uno de los espacios más relevantes para grandes encuentros corporativos en Lima recibirá al ERP Summit Perú
          en una jornada dedicada a software, gestión y transformación empresarial.
        </p>
        <aside className="address-card">
          <strong>Lima Convention Center</strong>
          <span>Av. de la Arqueología 206, San Borja 15021, Perú</span>
        </aside>
      </div>
      <div className="media-placeholder venue-image">Placeholder venue</div>
    </div>
  </section>
)

export const VenueAtmosphere = () => (
  <section className="section venue-atmosphere">
    <div className="container atmosphere-grid">
      <div className="media-placeholder atmosphere-image">Placeholder ambiente</div>
      <div>
        <h2>Dónde las conversaciones se convierten en oportunidades</h2>
        <p>
          Una sede a la altura de un encuentro que reúne tecnología, liderazgo, tendencias de mercado y relaciones
          estratégicas en un solo día.
        </p>
      </div>
    </div>
  </section>
)

const stats = [
  ['1000', 'audiencia esperada'],
  ['+100', 'palestrantes'],
  ['1', 'día de evento']
]

export const Stats = () => (
  <section className="section stats">
    <div className="container stats-grid">
      {stats.map(([value, label]) => (
        <motion.div className="stat" key={value} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 14 }}>
          <span>{value}</span>
          <p>{label}</p>
        </motion.div>
      ))}
    </div>
  </section>
)

const brands = ['LOGO 01', 'LOGO 02', 'LOGO 03', 'LOGO 04', 'LOGO 05', 'LOGO 06']

export const ConfirmedBrands = () => (
  <section className="section brands">
    <div className="container">
      <h2>Marcas confirmadas</h2>
      <div className="marquee" aria-label="logos">
        <div className="marquee-track">
          {[...brands, ...brands].map((item, idx) => (
            <div key={`${item}-${idx}`} className="brand-chip">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)

const galleryImages = [
  'https://erpsummit.pe/wp-content/uploads/2025/08/55.jpg',
  'https://erpsummit.pe/wp-content/uploads/2025/11/Design-sem-nome-9.png',
  'https://erpsummit.pe/wp-content/uploads/2025/11/Design-sem-nome-8.png',
  'https://erpsummit.pe/wp-content/uploads/2025/11/Design-sem-nome-6.png',
  'https://erpsummit.pe/wp-content/uploads/2025/11/Design-sem-nome-9.png'
]

export const Gallery = () => (
  <section className="section gallery">
    <div className="container">
      <h2>Así se vive el ERP Summit</h2>
      <div className="gallery-grid">
        <img src={galleryImages[0]} alt="Evento ERP Summit" className="main" loading="lazy" />
        <img src={galleryImages[1]} alt="Galería 1" loading="lazy" />
        <img src={galleryImages[2]} alt="Galería 2" loading="lazy" />
        <img src={galleryImages[3]} alt="Galería 3" loading="lazy" />
        <img src={galleryImages[4]} alt="Galería 4" loading="lazy" />
      </div>
    </div>
  </section>
)

const networkSlides = [
  ['CONEXIÓN', 'Nuestro ecosistema genera un networking estratégico que abre puertas a nuevos clientes, alianzas e inversiones.'],
  ['EXPERIENCIAS', 'Vive una experiencia única, conectándote con líderes, explorando tendencias y transformando ideas en grandes oportunidades de negocio.'],
  ['NEGOCIOS', 'Genera negocios, descubre nuevas oportunidades y conéctate con quienes impulsan el mercado.']
]

export const Networking = () => (
  <section className="section networking">
    <div className="container">
      <h2>¡Networking que genera resultados!</h2>
      <div className="network-slider">
        {networkSlides.map(([title, text]) => (
          <article key={title} className="network-card">
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export const FormSection = () => (
  <section className="section form" id="preinscripcion">
    <div className="container form-grid">
      <div>
        <h2>Preinscríbete y mantente cerca de todo lo que viene</h2>
        <p>
          Completa tus datos para recibir anuncios oficiales, promociones de entradas, novedades sobre speakers,
          agenda y oportunidades especiales del ERP Summit Perú.
        </p>
      </div>
      <form className="lead-form" data-replaceable="activecampaign-embed">
        <label>
          Nombre completo
          <input type="text" name="nombre" required />
        </label>
        <label>
          Correo corporativo
          <input type="email" name="correo" required />
        </label>
        <label>
          Empresa
          <input type="text" name="empresa" required />
        </label>
        <label>
          Cargo
          <input type="text" name="cargo" required />
        </label>
        <button type="submit" className="btn btn-primary">
          Quiero recibir acceso prioritario
        </button>
      </form>
    </div>
  </section>
)

export const Footer = () => (
  <footer className="footer section">
    <div className="container footer-grid">
      <div>
        <h3>ERP Summit Perú</h3>
        <ul>
          <li>LinkedIn</li>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>ERP Summit Online</li>
        </ul>
      </div>
      <div className="newsletter">
        <h3>Suscríbete al boletín oficial</h3>
        <p>Recibe novedades, anuncios y contenidos clave del ERP Summit Perú en tu correo.</p>
        <form>
          <input type="email" placeholder="Email" aria-label="Email" />
          <button className="btn btn-secondary" type="submit">
            Suscribirme
          </button>
        </form>
      </div>
    </div>
  </footer>
)
