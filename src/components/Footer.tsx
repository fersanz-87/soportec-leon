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
        <div className="grid gap-8 md:grid-cols-2">
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
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
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
          <p className="mt-4 text-center text-sm tracking-wide text-white/40">
            Desarrollado por{" "}
            <a
              href="https://fersanz.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white/70 transition-colors hover:text-white"
            >
              Fer Sanz Web Development
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
