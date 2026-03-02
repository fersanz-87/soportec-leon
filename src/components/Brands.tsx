import { brands } from "@/data/brands";

export default function Brands() {
  return (
    <section id="marcas" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <h2 className="mb-4 text-3xl font-bold text-primary sm:text-4xl">
            Marcas que Manejamos
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Trabajamos con las principales marcas del mercado. Si tu equipo no
            aparece en la lista, contáctanos.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="flex items-center justify-center rounded-xl border border-gray-200 bg-white px-6 py-5 text-center transition-all hover:border-accent/40 hover:shadow-md"
            >
              <span className="text-lg font-bold tracking-wide text-primary">
                {brand.name}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-gray-400">
          Los nombres de marcas mencionados son propiedad de sus respectivos
          dueños. Soportec León es un servicio técnico independiente.
        </p>
      </div>
    </section>
  );
}
