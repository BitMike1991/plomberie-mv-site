import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X, Phone } from "lucide-react"

const links = [
  { label: "Accueil", href: "#accueil" },
  { label: "Services", href: "#services" },
  { label: "Projets", href: "#projets" },
  { label: "Approche", href: "#approche" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/95 backdrop-blur-lg border-b border-border shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
        {/* Logo */}
        <a href="#accueil" className="flex items-center gap-3 group">
          <div className="relative w-11 h-11 rounded-xl overflow-hidden border border-accent/30 group-hover:border-accent transition-colors bg-surface">
            <Image
              src="/logo-mv.png"
              alt="Logo Plomberie M.V"
              fill
              className="object-cover"
              priority
            />
          </div>
          <span className="font-heading font-bold text-lg tracking-tight">
            Plomberie <span className="text-accent">M.V</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-txt2 hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="tel:5140000000"
          className="hidden md:inline-flex items-center gap-2 bg-accent text-bg px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-accent2 transition-colors cursor-pointer"
        >
          <Phone className="w-4 h-4" />
          Urgence 24/7
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-txt p-2 cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden bg-bg/98 backdrop-blur-lg border-t border-border px-6 py-6 space-y-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-lg font-semibold text-txt hover:text-accent transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:5140000000"
            className="block bg-accent text-bg px-4 py-3 rounded-xl text-center font-semibold mt-4"
          >
            Urgence 24/7
          </a>
        </nav>
      )}
    </header>
  )
}
