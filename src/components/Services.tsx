import { services } from "@/data/services";

export default function Services() {
  return (
    <section id="servicios" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <h2 className="mb-4 text-3xl font-bold text-primary sm:text-4xl">
            Nuestros Servicios
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Soluciones completas para tus equipos de impresión, copiado, cómputo y telefonía
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.id}
              className="group rounded-xl border border-gray-100 bg-gray-50 p-6 transition-all hover:border-accent/30 hover:shadow-lg"
            >
              <div className="mb-4 text-4xl" role="img" aria-hidden="true">
                {service.icon}
              </div>
              <h3 className="mb-2 text-lg font-bold text-primary group-hover:text-primary-light">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
