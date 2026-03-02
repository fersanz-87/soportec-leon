import type { DifferentiatorItem } from "@/types";

const differentiators: DifferentiatorItem[] = [
  {
    id: "experiencia",
    icon: "🏆",
    title: "Más de 15 años de experiencia",
    description: "Amplia trayectoria en el ramo de impresión y copiado.",
  },
  {
    id: "respuesta",
    icon: "⚡",
    title: "Respuesta rápida",
    description: "Atención en menos de 24 horas en la zona metropolitana.",
  },
  {
    id: "diagnostico",
    icon: "🔍",
    title: "Diagnóstico sin costo",
    description: "Evaluamos tu equipo en nuestro taller sin compromiso.",
  },
  {
    id: "garantia",
    icon: "🛡️",
    title: "Garantía en reparaciones",
    description: "Todas nuestras reparaciones cuentan con garantía.",
  },
  {
    id: "empresas",
    icon: "🏢",
    title: "Atención a empresas",
    description: "Contratos de mantenimiento con atención prioritaria.",
  },
  {
    id: "ubicacion",
    icon: "📍",
    title: "Ubicación céntrica",
    description:
      "En León, Gto. con servicio a domicilio en toda la zona metro.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="por-que-elegirnos" className="bg-primary py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            ¿Por qué elegirnos?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/70">
            Razones por las que somos la mejor opción para el cuidado de tus
            equipos
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {differentiators.map((item) => (
            <div
              key={item.id}
              className="rounded-xl bg-white/10 p-6 backdrop-blur-sm transition-all hover:bg-white/15"
            >
              <div className="mb-3 text-4xl" role="img" aria-hidden="true">
                {item.icon}
              </div>
              <h3 className="mb-2 text-lg font-bold text-white">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-white/70">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
