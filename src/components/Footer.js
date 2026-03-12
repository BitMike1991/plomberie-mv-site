import { Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-3">
              Plomberie <span className="text-accent">M.V</span>
            </h3>
            <p className="text-sm text-txt2 leading-relaxed">
              Plomberie commerciale et résidentielle d'envergure en Lanaudière.
              15+ ans d'expertise au service des développeurs et entrepreneurs.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-txt2 mb-3">Navigation</h4>
            <div className="space-y-2">
              {["Accueil", "Services", "Projets", "Approche", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-sm text-txt3 hover:text-accent transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-txt2 mb-3">Contact</h4>
            <div className="space-y-3">
              <a href="tel:5140000000" className="flex items-center gap-2 text-sm text-txt3 hover:text-accent transition-colors">
                <Phone className="w-4 h-4" /> 514-000-0000
              </a>
              <a href="mailto:info@plomberiemv.com" className="flex items-center gap-2 text-sm text-txt3 hover:text-accent transition-colors">
                <Mail className="w-4 h-4" /> info@plomberiemv.com
              </a>
              <div className="flex items-start gap-2 text-sm text-txt3">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" /> Saint-Félix-de-Valois, Lanaudière
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-txt3">
            &copy; {new Date().getFullYear()} Plomberie M.V. Tous droits réservés.
          </p>
          <p className="text-xs text-txt3">
            Site propulsé par{" "}
            <a href="https://bluewiseai.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              BlueWise
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
