"use client";

import { useState, useEffect } from "react";
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

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 10);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function closeMobileMenu() {
    setIsMobileMenuOpen(false);
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-primary/95 shadow-lg backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#inicio" className="flex items-center gap-2">
          <span className="text-2xl" role="img" aria-label="Impresora">
            🖨️
          </span>
          <div>
            <span className="text-lg font-bold text-white">
              {siteConfig.name}
            </span>
            <span className="hidden text-xs text-white/70 sm:block">
              {siteConfig.tagline}
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm text-white/80 transition-colors hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="ml-2 rounded-full bg-accent px-5 py-2 text-sm font-semibold text-primary-dark transition-colors hover:bg-accent-dark"
          >
            Solicita tu servicio
          </a>
        </nav>

        <button
          type="button"
          className="rounded-md p-2 text-white lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMobileMenuOpen}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {isMobileMenuOpen && (
        <nav
          className="border-t border-white/10 bg-primary/95 backdrop-blur-sm lg:hidden"
          aria-label="Navegación móvil"
        >
          <div className="space-y-1 px-4 py-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
                className="block rounded-md px-3 py-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={closeMobileMenu}
              className="mt-2 block rounded-full bg-accent px-5 py-2 text-center font-semibold text-primary-dark transition-colors hover:bg-accent-dark"
            >
              Solicita tu servicio
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
