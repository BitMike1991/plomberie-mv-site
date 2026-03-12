import Head from "next/head"
import dynamic from "next/dynamic"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import {
  ChevronDown, Building2, Factory, Wrench, ShieldCheck,
  Shield, Users, BadgeCheck, Phone, Mail, MapPin, Clock,
  ClipboardList, HardHat, Handshake, Star, ArrowRight
} from "lucide-react"
import Navbar from "@/src/components/Navbar"
import Footer from "@/src/components/Footer"
import { GlowCard } from "@/src/components/GlowCard"
import { ShimmerButton } from "@/src/components/ShimmerButton"
import { NumberTicker } from "@/src/components/NumberTicker"

// Lazy-load Vanta — never block render
const VantaHero = dynamic(() => import("@/src/components/VantaHero"), { ssr: false })

// ─── HERO ───
function Hero() {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Vanta WAVES background */}
      <VantaHero />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg/80 via-bg/60 to-bg z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-bg/90 via-bg/50 to-transparent z-[1]" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-32 pb-20 md:py-0 w-full">
        <div className="max-w-3xl">
          {/* Tagline pill */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8 opacity-0 animate-fade-in"
            style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
          >
            <Building2 className="w-3.5 h-3.5 text-accent" />
            <span className="text-xs font-semibold text-accent tracking-wider uppercase">
              Plomberie commerciale & résidentielle
            </span>
          </div>

          {/* Headline */}
          <h1 className="mb-8">
            <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold leading-[1.08] text-white opacity-0 animate-fade-in" style={{ animationDelay: "400ms", animationFillMode: "forwards" }}>
              On bâtit l&apos;infrastructure
            </span>
            <span className="block mt-2 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold leading-[1.08] opacity-0 animate-fade-in bg-gradient-to-r from-accent via-accent2 to-accent bg-clip-text text-transparent" style={{ animationDelay: "800ms", animationFillMode: "forwards" }}>
              de demain
            </span>
          </h1>

          {/* Subtext */}
          <p
            className="text-base sm:text-lg text-txt2 mb-10 max-w-xl leading-relaxed opacity-0 animate-fade-in"
            style={{ animationDelay: "1.2s", animationFillMode: "forwards" }}
          >
            Plomberie commerciale et résidentielle d&apos;envergure.
            15+ ans d&apos;expertise en Lanaudière au service des développeurs,
            entrepreneurs généraux et gestionnaires immobiliers.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in"
            style={{ animationDelay: "1.4s", animationFillMode: "forwards" }}
          >
            <a href="#contact">
              <ShimmerButton className="text-base px-8 py-4 w-full sm:w-auto">
                Demander une soumission
              </ShimmerButton>
            </a>
            <a
              href="tel:5140000000"
              className="rounded-xl px-8 py-4 text-base font-semibold border border-border hover:border-accent/50 text-txt2 hover:text-white transition-all duration-300 text-center cursor-pointer inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Urgence 24/7
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 opacity-0 animate-fade-in" style={{ animationDelay: "2.5s", animationFillMode: "forwards" }}>
        <div className="flex flex-col items-center gap-2 text-txt3">
          <span className="text-xs tracking-wider uppercase">Défiler</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </div>
      </div>
    </section>
  )
}

// ─── STATS STRIP ───
function StatsStrip() {
  const stats = [
    { value: 15, suffix: "+", label: "Ans d'expérience" },
    { value: 500, suffix: "+", label: "Projets complétés" },
    { value: 24, suffix: "/7", label: "Service d'urgence" },
    { value: 100, suffix: "%", label: "Satisfaction client" },
  ]
  return (
    <section className="py-16 bg-surface border-y border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl sm:text-4xl font-heading font-bold text-accent">
                <NumberTicker value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-txt2 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── SERVICES ───
function Services() {
  const services = [
    {
      Icon: Building2,
      title: "Construction neuve & multi-logements",
      desc: "Conception et installation complète de systèmes de plomberie pour condos, complexes résidentiels et projets immobiliers d'envergure.",
    },
    {
      Icon: Factory,
      title: "Plomberie commerciale & industrielle",
      desc: "Solutions sur mesure pour commerces, restaurants, bureaux et bâtiments industriels. Conformité aux normes les plus exigeantes.",
    },
    {
      Icon: Wrench,
      title: "Rénovation majeure & urgence",
      desc: "Transformations complètes de systèmes existants et interventions d'urgence 24/7. Réponse rapide, travail garanti.",
    },
  ]

  return (
    <section id="services" className="py-20 bg-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4">Nos Services</h2>
          <p className="text-txt2 max-w-2xl mx-auto">
            Des solutions sur mesure pour les développeurs immobiliers, les entreprises et les institutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map(({ Icon, title, desc }, i) => (
            <GlowCard key={i} className="p-8 group">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <Icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">{title}</h3>
              <p className="text-sm text-txt2 leading-relaxed mb-4">{desc}</p>
              <a href="#contact" className="inline-flex items-center gap-1 text-sm text-accent font-medium hover:gap-2 transition-all">
                En savoir plus <ArrowRight className="w-4 h-4" />
              </a>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── PROJECTS SHOWCASE ───
function Projects() {
  const projects = [
    { title: "Complexe résidentiel", scope: "120 logements", location: "Lanaudière", stat: "Installation complète" },
    { title: "Centre commercial", scope: "15 000 pi²", location: "Joliette", stat: "Plomberie commerciale" },
    { title: "Condo neuf", scope: "48 unités", location: "Repentigny", stat: "Construction neuve" },
    { title: "Hôpital régional", scope: "Rénovation majeure", location: "Saint-Charles-Borromée", stat: "Infrastructure critique" },
  ]

  return (
    <section id="projets" className="py-20 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4">Nos Projets</h2>
          <p className="text-txt2 max-w-2xl mx-auto">
            Des projets d&apos;envergure qui témoignent de notre expertise et de notre engagement envers la qualité.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <GlowCard key={i} className="p-0 overflow-hidden group">
              {/* Gradient placeholder for project image */}
              <div className="h-48 bg-gradient-to-br from-accent/20 via-surface2 to-accent2/10 flex items-center justify-center">
                <Building2 className="w-12 h-12 text-accent/30" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs px-2 py-0.5 rounded-full bg-accent/10 text-accent font-semibold">{project.stat}</span>
                </div>
                <h3 className="text-lg font-heading font-bold mb-1">{project.title}</h3>
                <p className="text-sm text-txt2">{project.scope} — {project.location}</p>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── TRUST SECTION ───
function Trust() {
  const points = [
    { Icon: ShieldCheck, title: "Licence RBQ", desc: "Entreprise licenciée et conforme" },
    { Icon: Shield, title: "Assurances complètes", desc: "Responsabilité civile et garantie de travaux" },
    { Icon: Users, title: "Équipe certifiée", desc: "Techniciens qualifiés et formés en continu" },
    { Icon: BadgeCheck, title: "Garantie de travaux", desc: "Satisfaction garantie sur chaque projet" },
  ]

  return (
    <section id="confiance" className="py-20 bg-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — editorial text */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold leading-tight mb-6">
              Pourquoi les plus grands
              <span className="block text-accent">nous font confiance</span>
            </h2>
            <p className="text-txt2 leading-relaxed mb-8">
              Notre réputation repose sur notre rigueur, notre transparence et
              notre engagement à offrir des résultats impeccables. Des promoteurs
              immobiliers aux municipalités, nos clients reviennent projet après projet.
            </p>
          </div>

          {/* Right — trust points */}
          <div className="grid grid-cols-2 gap-4">
            {points.map(({ Icon, title, desc }, i) => (
              <GlowCard key={i} className="p-5 text-center">
                <Icon className="w-8 h-8 text-accent mx-auto mb-3" />
                <h4 className="font-heading font-bold text-sm mb-1">{title}</h4>
                <p className="text-xs text-txt3">{desc}</p>
              </GlowCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── TESTIMONIAL ───
function Testimonial() {
  return (
    <section className="py-20 bg-surface">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="flex justify-center gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-gold fill-gold" />
          ))}
        </div>
        <blockquote className="text-xl sm:text-2xl font-heading leading-relaxed text-txt mb-6">
          &ldquo;Plomberie M.V nous a accompagnés dans la construction d&apos;un complexe
          de 120 logements. Leur professionnalisme et leur réactivité ont fait toute
          la différence. Un partenaire de confiance pour nos projets d&apos;envergure.&rdquo;
        </blockquote>
        <div>
          <p className="font-heading font-bold text-accent">Gestion Immobilière Lanaudière</p>
          <p className="text-sm text-txt3">Promoteur immobilier</p>
        </div>
      </div>
    </section>
  )
}

// ─── HOW WE WORK ───
function Approach() {
  const steps = [
    { num: "01", Icon: ClipboardList, title: "Consultation & plans", desc: "Analyse détaillée de vos plans et besoins pour élaborer des solutions de plomberie adaptées à votre projet." },
    { num: "02", Icon: HardHat, title: "Installation conforme", desc: "Mise en œuvre par une équipe certifiée respectant les normes et les délais de construction les plus exigeants." },
    { num: "03", Icon: Handshake, title: "Suivi & garantie", desc: "Suivi préventif, inspections régulières et service d'urgence pour assurer la pérennité de vos installations." },
  ]

  return (
    <section id="approche" className="py-20 bg-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4">Notre Approche</h2>
          <p className="text-txt2 max-w-2xl mx-auto">
            Une méthodologie éprouvée qui favorise la transparence et la qualité à chaque étape.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map(({ num, Icon, title, desc }, i) => (
            <div key={i} className="relative">
              {/* Connecting line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[calc(100%)] w-full h-[1px] bg-gradient-to-r from-accent/30 to-transparent z-0" />
              )}
              <GlowCard className="p-8 text-center relative z-10">
                <div className="text-4xl font-heading font-bold text-accent/20 mb-4">{num}</div>
                <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-5">
                  <Icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-lg font-heading font-bold mb-3">{title}</h3>
                <p className="text-sm text-txt2 leading-relaxed">{desc}</p>
              </GlowCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── CONTACT FORM ───
function ContactSection() {
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    // TODO: wire to /api/contact
    await new Promise(r => setTimeout(r, 1500))
    setSending(false)
    setSent(true)
  }

  return (
    <section id="contact" className="py-20 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Parlons de votre projet
          </h2>
          <p className="text-txt2 max-w-2xl mx-auto">
            Soumission gratuite. Réponse rapide. On s&apos;occupe du reste.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Form */}
          <GlowCard className="p-8">
            {sent ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-4">
                  <BadgeCheck className="w-8 h-8 text-success" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-2">Merci!</h3>
                <p className="text-txt2">On vous contacte dans les prochaines minutes.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-txt2 mb-1.5">Nom complet</label>
                  <input type="text" id="name" required
                    className="w-full bg-surface2 border border-border rounded-xl px-4 py-3 text-sm text-txt outline-none focus:border-accent transition-colors" placeholder="Votre nom" />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-txt2 mb-1.5">Entreprise (optionnel)</label>
                  <input type="text" id="company"
                    className="w-full bg-surface2 border border-border rounded-xl px-4 py-3 text-sm text-txt outline-none focus:border-accent transition-colors" placeholder="Nom de votre entreprise" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-txt2 mb-1.5">Téléphone</label>
                    <input type="tel" id="phone" required
                      className="w-full bg-surface2 border border-border rounded-xl px-4 py-3 text-sm text-txt outline-none focus:border-accent transition-colors" placeholder="514-000-0000" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-txt2 mb-1.5">Courriel</label>
                    <input type="email" id="email" required
                      className="w-full bg-surface2 border border-border rounded-xl px-4 py-3 text-sm text-txt outline-none focus:border-accent transition-colors" placeholder="vous@email.com" />
                  </div>
                </div>
                <div>
                  <label htmlFor="project" className="block text-sm font-medium text-txt2 mb-1.5">Type de projet</label>
                  <select id="project" required
                    className="w-full bg-surface2 border border-border rounded-xl px-4 py-3 text-sm text-txt outline-none focus:border-accent transition-colors">
                    <option value="">Sélectionner...</option>
                    <option value="construction">Construction neuve</option>
                    <option value="multi">Multi-logements</option>
                    <option value="commercial">Commercial / industriel</option>
                    <option value="renovation">Rénovation majeure</option>
                    <option value="urgence">Urgence</option>
                  </select>
                </div>
                <ShimmerButton type="submit" className="w-full text-base" disabled={sending}>
                  {sending ? "Envoi en cours..." : "Obtenir ma soumission gratuite"}
                </ShimmerButton>
              </form>
            )}
          </GlowCard>

          {/* Contact info */}
          <div className="space-y-6 lg:pl-8 lg:pt-8">
            <div>
              <h3 className="font-heading font-bold text-xl mb-6">Contactez-nous directement</h3>
            </div>
            <a href="tel:5140000000" className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                <Phone className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="font-semibold group-hover:text-accent transition-colors">514-000-0000</p>
                <p className="text-sm text-txt3">Service d&apos;urgence disponible 24/7</p>
              </div>
            </a>
            <a href="mailto:info@plomberiemv.com" className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                <Mail className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="font-semibold group-hover:text-accent transition-colors">info@plomberiemv.com</p>
                <p className="text-sm text-txt3">Réponse sous 24h</p>
              </div>
            </a>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="font-semibold">Saint-Félix-de-Valois</p>
                <p className="text-sm text-txt3">Lanaudière, Québec</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="font-semibold">Lun-Ven: 7h - 17h</p>
                <p className="text-sm text-txt3">Urgences: disponible en tout temps</p>
              </div>
            </div>

            {/* Trust strip */}
            <div className="mt-8 pt-6 border-t border-border">
              <div className="flex flex-wrap gap-4 text-xs text-txt3">
                <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-accent" /> Soumission gratuite</span>
                <span className="flex items-center gap-1"><BadgeCheck className="w-3.5 h-3.5 text-accent" /> Réponse rapide</span>
                <span className="flex items-center gap-1"><Shield className="w-3.5 h-3.5 text-accent" /> Entreprise licenciée</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── MAIN PAGE ───
export default function Home() {
  return (
    <>
      <Head>
        <title>Plomberie M.V | Experts en plomberie commerciale — Lanaudière</title>
        <meta name="description" content="Plomberie commerciale et résidentielle d'envergure en Lanaudière. Construction neuve, multi-logements, rénovation majeure. 15+ ans d'expertise. Soumission gratuite." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Plomberie M.V | Experts en plomberie commerciale" />
        <meta property="og:description" content="Plomberie commerciale et résidentielle d'envergure en Lanaudière. Soumission gratuite." />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/logo-mv.png" />
      </Head>

      <Navbar />
      <main>
        <Hero />
        <StatsStrip />
        <Services />
        <Projects />
        <Trust />
        <Testimonial />
        <Approach />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
