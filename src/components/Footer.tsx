import { siteConfig } from "@/data/site-config";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#marcas", label: "Marcas" },
  { href: "#por-que-elegirnos", label: "¿Por qué elegirnos?" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#contacto", label: "Contacto" },
  { href: "#ubicacion", label: "Ubicación" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark py-12 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <span className="text-2xl" role="img" aria-label="Impresora">
                🖨️
              </span>
              <span className="text-lg font-bold">{siteConfig.name}</span>
            </div>
            <p className="text-sm leading-relaxed text-white/60">
              Mantenimiento y Reparación de Copiadoras, Impresoras y
              Multifuncionales
            </p>
            <p className="mt-2 text-sm text-white/60">
              Zona Centro, León, Guanajuato
            </p>
          </div>

          <div>
            <h3 className="mb-3 font-bold text-white/90">Navegación</h3>
            <nav aria-label="Navegación del footer">
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h3 className="mb-3 font-bold text-white/90">Síguenos</h3>
            <div className="flex gap-4">
              <a
                href={siteConfig.socialMedia.facebook}
                className="text-white/60 transition-colors hover:text-white"
                aria-label="Facebook"
              >
                Facebook
              </a>
              <a
                href={siteConfig.socialMedia.whatsapp}
                className="text-white/60 transition-colors hover:text-white"
                aria-label="WhatsApp"
              >
                WhatsApp
              </a>
              <a
                href={siteConfig.socialMedia.instagram}
                className="text-white/60 transition-colors hover:text-white"
                aria-label="Instagram"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <p className="text-xs leading-relaxed text-white/40">
            Los nombres de marcas y productos mencionados en este sitio son
            propiedad de sus respectivos fabricantes. Soportec León es un
            servicio técnico independiente y no está afiliado, asociado ni
            autorizado por ninguno de los fabricantes mencionados.
          </p>
          <p className="mt-3 text-xs text-white/40">
            &copy; {currentYear} {siteConfig.name}. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
