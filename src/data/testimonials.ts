/**
 * DATOS DE EJEMPLO - REEMPLAZAR CON INFORMACION REAL ANTES DE PRODUCCION
 * Los testimonios, direccion, telefono y demas datos son ficticios.
 */

import type { Testimonial } from "@/types";

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Roberto Méndez",
    company: "Distribuidora del Bajío S.A.",
    equipment: "8 copiadoras Kyocera",
    text: "Tenemos contrato de mantenimiento para nuestras 8 copiadoras y el servicio ha sido excelente. Respuesta rápida y técnicos muy profesionales. Desde que contratamos a Soportec León, las fallas se redujeron drásticamente.",
    rating: 5,
  },
  {
    id: "t2",
    name: "Laura Patricia Herrera",
    company: "Despacho Contable Herrera & Asociados",
    equipment: "Multifuncional HP LaserJet",
    text: "Nuestra multifuncional dejó de escanear en plena temporada de declaraciones. Llamamos a Soportec y al día siguiente ya estaba reparada. Servicio puntual y precio justo.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Miguel Ángel Torres",
    company: "Papelería y Copiado Express",
    equipment: "Impresora Xerox de alto volumen",
    text: "Mi impresora de alto volumen es esencial para el negocio. Cuando falló, pensé que tendría que comprar una nueva, pero los técnicos de Soportec la dejaron como nueva a una fracción del costo.",
    rating: 5,
  },
  {
    id: "t4",
    name: "Ana Gabriela Ruiz",
    company: "Oficina de Registro Municipal",
    equipment: "Copiadoras Canon y Ricoh",
    text: "Necesitábamos servicio de urgencia para nuestras copiadoras en periodo de alta demanda. Soportec León respondió el mismo día y resolvió el problema sin complicaciones. Muy recomendables.",
    rating: 4,
  },
  {
    id: "t5",
    name: "Carlos Enrique Vega",
    company: null,
    equipment: "Impresora Epson EcoTank",
    text: "Mi impresora personal tenía un problema con el sistema de tinta. Llevé el equipo al taller y en dos días lo tenían listo. El diagnóstico fue sin costo y el precio de la reparación muy accesible.",
    rating: 5,
  },
];
