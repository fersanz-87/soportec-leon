import { siteConfig } from "@/data/site-config";

export default function MapSection() {
  return (
    <section id="ubicacion" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <h2 className="mb-4 text-3xl font-bold text-primary sm:text-4xl">
            Ubicación y Contacto
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Visítanos en nuestro taller o solicita servicio a domicilio
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-xl shadow-sm">
            <iframe
              title="Ubicación de Soportec León en el centro de León, Guanajuato"
              src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3721.5!2d${siteConfig.coordinates.lng}!3d${siteConfig.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2smx!4v1700000000000!5m2!1ses!2smx`}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl" role="img" aria-hidden="true">
                  📍
                </span>
                <div>
                  <h3 className="font-bold text-primary">Dirección</h3>
                  <p className="text-gray-600">{siteConfig.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-2xl" role="img" aria-hidden="true">
                  📞
                </span>
                <div>
                  <h3 className="font-bold text-primary">Teléfono</h3>
                  <p className="text-gray-600">{siteConfig.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-2xl" role="img" aria-hidden="true">
                  💬
                </span>
                <div>
                  <h3 className="font-bold text-primary">WhatsApp</h3>
                  <p className="text-gray-600">{siteConfig.whatsapp}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-2xl" role="img" aria-hidden="true">
                  ✉️
                </span>
                <div>
                  <h3 className="font-bold text-primary">Email</h3>
                  <p className="text-gray-600">{siteConfig.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-2xl" role="img" aria-hidden="true">
                  🕐
                </span>
                <div>
                  <h3 className="font-bold text-primary">Horario taller</h3>
                  <p className="text-gray-600">{siteConfig.workshopHours}</p>
                  <h3 className="mt-2 font-bold text-primary">
                    Horario servicio a domicilio
                  </h3>
                  <p className="text-gray-600">
                    {siteConfig.homeServiceHours}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-accent/10 p-4">
              <p className="flex items-center gap-2 font-semibold text-primary">
                <span role="img" aria-hidden="true">🚗</span>
                Servicio a domicilio disponible en la zona metropolitana de León
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
