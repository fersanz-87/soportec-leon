import { testimonials } from "@/data/testimonials";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} de 5 estrellas`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span
          key={i}
          className={i < rating ? "text-accent" : "text-gray-300"}
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonios" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <h2 className="mb-4 text-3xl font-bold text-primary sm:text-4xl">
            Lo que dicen nuestros clientes
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            La satisfacción de nuestros clientes es nuestra mejor carta de
            presentación
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <article
              key={t.id}
              className="rounded-xl border border-gray-100 bg-gray-50 p-6"
            >
              <StarRating rating={t.rating} />
              <blockquote className="mt-4 mb-4 text-gray-700 leading-relaxed">
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <footer>
                <p className="font-bold text-primary">{t.name}</p>
                {t.company && (
                  <p className="text-sm text-gray-500">{t.company}</p>
                )}
                <p className="mt-1 text-xs text-gray-400">
                  Equipo: {t.equipment}
                </p>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
