import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Soportec León | Reparación de Copiadoras, Impresoras y Multifuncionales en León, Gto.",
  description:
    "Servicio técnico especializado en reparación y mantenimiento de copiadoras, impresoras y multifuncionales en León, Guanajuato. Atención a empresas y particulares. Diagnóstico sin costo. Más de 15 años de experiencia.",
  keywords:
    "reparación copiadoras León, reparación impresoras León, mantenimiento multifuncional León, servicio técnico impresoras Guanajuato, reparación HP León, reparación Canon León",
  openGraph: {
    title:
      "Soportec León | Reparación de Copiadoras, Impresoras y Multifuncionales",
    description:
      "Servicio técnico especializado en reparación y mantenimiento de copiadoras, impresoras y multifuncionales en León, Guanajuato.",
    type: "website",
    locale: "es_MX",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
