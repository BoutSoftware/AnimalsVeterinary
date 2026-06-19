import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Animal's Clinica Veterinaria",
  description: "Clínica Veterinaria Animal's, cuidando a tus mascotas con amor y profesionalismo. Ofrecemos servicios de salud, vacunación, cirugía y atención personalizada para perros, gatos y pequeños animales. ¡Agenda tu cita hoy mismo!",
  keywords: [
    "clínica veterinaria",
    "veterinaria",
    "cuidado de mascotas",
    "salud animal",
    "vacunación",
    "cirugía veterinaria",
    "atención personalizada",
    "perros",
    "gatos",
    "pequeños animales",
    "citas veterinarias",
    "servicios veterinarios",
    "Queretaro",
    "México",
    "Cerca de mi"
  ],

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} bg-slate-50 text-slate-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}
