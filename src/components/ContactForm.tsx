"use client";

import { useState } from "react";
import type { ContactFormData } from "@/types";

const equipmentTypes = [
  "Copiadora",
  "Impresora láser",
  "Impresora de inyección",
  "Multifuncional",
  "Otro",
];

const brandOptions = [
  "HP",
  "Canon",
  "Epson",
  "Brother",
  "Xerox",
  "Kyocera",
  "Ricoh",
  "Samsung",
  "Lexmark",
  "Konica Minolta",
  "Otra",
];

const serviceTypes = [
  "Reparación",
  "Mantenimiento preventivo",
  "Contrato de mantenimiento",
  "Configuración de red",
  "Cambio de consumibles",
  "Otro",
];

type FormStatus = "idle" | "loading" | "success" | "error";

interface FieldErrors {
  name?: string;
  phone?: string;
  email?: string;
  equipmentType?: string;
  brand?: string;
  serviceType?: string;
  message?: string;
}

function sanitize(value: string): string {
  return value.replace(/[<>]/g, "").trim();
}

function validateForm(data: ContactFormData): FieldErrors {
  const errors: FieldErrors = {};

  if (!data.name || data.name.length < 2) {
    errors.name = "El nombre es obligatorio (mínimo 2 caracteres).";
  }
  if (data.name.length > 100) {
    errors.name = "El nombre no puede exceder 100 caracteres.";
  }

  if (!data.phone || !/^[\d\s()+-]{7,15}$/.test(data.phone)) {
    errors.phone = "Ingresa un teléfono válido.";
  }

  if (
    !data.email ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)
  ) {
    errors.email = "Ingresa un email válido.";
  }
  if (data.email.length > 254) {
    errors.email = "El email no puede exceder 254 caracteres.";
  }

  if (!data.equipmentType) {
    errors.equipmentType = "Selecciona el tipo de equipo.";
  }

  if (!data.brand) {
    errors.brand = "Selecciona la marca del equipo.";
  }

  if (!data.serviceType) {
    errors.serviceType = "Selecciona el tipo de servicio.";
  }

  if (!data.message || data.message.length < 10) {
    errors.message =
      "Describe el problema o necesidad (mínimo 10 caracteres).";
  }
  if (data.message.length > 1000) {
    errors.message = "El mensaje no puede exceder 1000 caracteres.";
  }

  return errors;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    company: "",
    phone: "",
    email: "",
    equipmentType: "",
    brand: "",
    model: "",
    serviceType: "",
    message: "",
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FieldErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const sanitizedData: ContactFormData = {
      name: sanitize(formData.name),
      company: sanitize(formData.company),
      phone: sanitize(formData.phone),
      email: sanitize(formData.email),
      equipmentType: formData.equipmentType,
      brand: formData.brand,
      model: sanitize(formData.model),
      serviceType: formData.serviceType,
      message: sanitize(formData.message),
    };

    const validationErrors = validateForm(sanitizedData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("loading");
    setErrors({});

    // Simulate server action
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setStatus("success");
  }

  if (status === "success") {
    return (
      <section id="contacto" className="bg-gray-50 py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <div className="rounded-xl bg-white p-10 shadow-sm">
            <div className="mb-4 text-5xl">✅</div>
            <h2 className="mb-4 text-2xl font-bold text-primary">
              ¡Solicitud recibida!
            </h2>
            <p className="text-gray-600">
              Nuestro equipo técnico te contactará en menos de 24 horas hábiles
              para coordinar tu servicio.
            </p>
            <button
              type="button"
              onClick={() => {
                setStatus("idle");
                setFormData({
                  name: "",
                  company: "",
                  phone: "",
                  email: "",
                  equipmentType: "",
                  brand: "",
                  model: "",
                  serviceType: "",
                  message: "",
                });
              }}
              className="mt-6 rounded-full bg-primary px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
            >
              Enviar otra solicitud
            </button>
          </div>
        </div>
      </section>
    );
  }

  const inputBase =
    "w-full rounded-lg border bg-white px-4 py-3 text-gray-800 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20";
  const errorBorder = "border-red-400";
  const normalBorder = "border-gray-200";

  return (
    <section id="contacto" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <h2 className="mb-4 text-3xl font-bold text-primary sm:text-4xl">
            Solicita tu servicio o diagnóstico
          </h2>
          <p className="text-lg text-gray-600">
            Cuéntanos sobre tu equipo y nos pondremos en contacto contigo a la
            brevedad
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="space-y-5 rounded-xl bg-white p-6 shadow-sm sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Nombre completo <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                maxLength={100}
                value={formData.name}
                onChange={handleChange}
                className={`${inputBase} ${errors.name ? errorBorder : normalBorder}`}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">{errors.name}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="company"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Empresa / Negocio
              </label>
              <input
                type="text"
                id="company"
                name="company"
                maxLength={150}
                value={formData.company}
                onChange={handleChange}
                className={`${inputBase} ${normalBorder}`}
              />
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="phone"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Teléfono <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                maxLength={15}
                value={formData.phone}
                onChange={handleChange}
                className={`${inputBase} ${errors.phone ? errorBorder : normalBorder}`}
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                maxLength={254}
                value={formData.email}
                onChange={handleChange}
                className={`${inputBase} ${errors.email ? errorBorder : normalBorder}`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="equipmentType"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Tipo de equipo <span className="text-red-500">*</span>
              </label>
              <select
                id="equipmentType"
                name="equipmentType"
                required
                value={formData.equipmentType}
                onChange={handleChange}
                className={`${inputBase} ${errors.equipmentType ? errorBorder : normalBorder}`}
              >
                <option value="">Selecciona...</option>
                {equipmentTypes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
              {errors.equipmentType && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.equipmentType}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="brand"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Marca del equipo <span className="text-red-500">*</span>
              </label>
              <select
                id="brand"
                name="brand"
                required
                value={formData.brand}
                onChange={handleChange}
                className={`${inputBase} ${errors.brand ? errorBorder : normalBorder}`}
              >
                <option value="">Selecciona...</option>
                {brandOptions.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
              {errors.brand && (
                <p className="mt-1 text-sm text-red-500">{errors.brand}</p>
              )}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="model"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Modelo aproximado
              </label>
              <input
                type="text"
                id="model"
                name="model"
                maxLength={100}
                placeholder="Ej: HP LaserJet Pro M404n"
                value={formData.model}
                onChange={handleChange}
                className={`${inputBase} ${normalBorder}`}
              />
            </div>

            <div>
              <label
                htmlFor="serviceType"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Tipo de servicio <span className="text-red-500">*</span>
              </label>
              <select
                id="serviceType"
                name="serviceType"
                required
                value={formData.serviceType}
                onChange={handleChange}
                className={`${inputBase} ${errors.serviceType ? errorBorder : normalBorder}`}
              >
                <option value="">Selecciona...</option>
                {serviceTypes.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              {errors.serviceType && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.serviceType}
                </p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Describe el problema o necesidad{" "}
              <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              maxLength={1000}
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className={`${inputBase} resize-y ${errors.message ? errorBorder : normalBorder}`}
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-500">{errors.message}</p>
            )}
          </div>

          {status === "error" && (
            <p className="rounded-lg bg-red-50 p-3 text-sm text-red-600">
              Hubo un error al enviar la solicitud. Por favor, intenta de nuevo.
            </p>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full rounded-full bg-accent px-8 py-4 text-lg font-bold text-primary-dark transition-colors hover:bg-accent-dark disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "loading" ? "Enviando..." : "Enviar solicitud"}
          </button>
        </form>
      </div>
    </section>
  );
}
