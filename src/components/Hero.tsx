export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-primary-dark via-primary to-primary-light"
    >
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-20 left-10 text-8xl">🖨️</div>
        <div className="absolute top-40 right-20 text-7xl">🖥️</div>
        <div className="absolute bottom-40 left-1/4 text-6xl">📄</div>
        <div className="absolute bottom-20 right-1/3 text-8xl">🔧</div>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 py-32 text-center sm:px-6 lg:px-8">
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
          Tu equipo de impresión siempre funcionando
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-white/80 sm:text-xl">
          Servicio técnico especializado en copiadoras, impresoras y
          multifuncionales en León, Guanajuato. Atención a empresas y
          particulares.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contacto"
            className="inline-block rounded-full bg-accent px-8 py-4 text-lg font-bold text-primary-dark shadow-lg transition-all hover:bg-accent-dark hover:shadow-xl"
          >
            Solicita tu diagnóstico
          </a>
          <a
            href="#servicios"
            className="inline-block rounded-full border-2 border-white/30 px-8 py-4 text-lg font-semibold text-white transition-all hover:border-white hover:bg-white/10"
          >
            Conoce nuestros servicios
          </a>
        </div>
      </div>
    </section>
  );
}
