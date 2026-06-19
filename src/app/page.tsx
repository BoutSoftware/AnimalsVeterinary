"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

const phoneNumber = "+524422176238";
const whatsappLink = `https://wa.me/${phoneNumber.replace(/\D/g, "")}?text=${encodeURIComponent(
  "Hola, quisiera agendar una cita para mi mascota."
)}`;
const callLink = `tel:${phoneNumber}`;
const emailLink = "mailto:hola@animalsveterinaria.com";
const mapLinkAddress = "Animals Clinica Veterinaria Diamante 35, San Roque, 76168 Santiago de Querétaro, Qro"
const mapLink = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(mapLinkAddress);
const mapEmbed = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3734.5699959245126!2d-100.39956912398063!3d20.605610902176267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d35ad8daea0377%3A0x54a5fbc460d5b037!2sVeterinary%20Clinic%20Animal&#39;s!5e0!3m2!1sen!2smx!4v1781883026038!5m2!1sen!2smx";

/*
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3734.5699959245126!2d-100.39956912398063!3d20.605610902176267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d35ad8daea0377%3A0x54a5fbc460d5b037!2sVeterinary%20Clinic%20Animal&#39;s!5e0!3m2!1sen!2smx!4v1781883026038!5m2!1sen!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
*/


const services = [
  {
    title: "Consulta general",
    icon: "medical_services",
    price: "$500.00",
    description: "Revisión completa, diagnóstico inicial y plan claro para tu mascota.",
  },
  {
    title: "Cirugía",
    icon: "syringe",
    price: "Pregunta por precios.",
    description: "Esterilización, cirugía de tejidos blandos y procedimientos ortopédicos.",
  },
  {
    title: "Rayos X",
    icon: "scan",
    price: "$800.00",
    description: "Apoyo para detectar fracturas, cuerpos extraños y problemas internos.",
  },
  {
    title: "Hospitalización",
    icon: "hotel",
    price: "Pregunta por precios.",
    description: "Monitoreo cercano y atención continua cuando tu paciente necesita quedarse.",
  },
  {
    title: "Medicina interna",
    icon: "science",
    price: "Pregunta por precios.",
    description: "Seguimiento de enfermedades crónicas, digestivas, hormonales y metabólicas.",
  },
  {
    title: "Vacunas y desparasitantes",
    icon: "vaccines",
    price: "Pregunta por precios.",
    description: "Protección contra enfermedades comunes y control de parásitos externos e internos.",
  },
];

const gallery = [
  {
    src: "/images/clinic-exterior.jpg",
    alt: "Fachada de la clínica veterinaria",
    label: "Exterior",
    width: 1200,
    height: 900,
  },
  {
    src: "/images/exam-room.jpg",
    alt: "Consultorio de revisión veterinaria",
    label: "Consultorio",
    width: 1200,
    height: 900,
  },
  {
    src: "/images/surgery-room.jpg",
    alt: "Quirófano veterinario",
    label: "Quirófano",
    width: 1200,
    height: 900,
  },
  {
    src: "/images/xray-equipment.jpg",
    alt: "Equipo de rayos X veterinario",
    label: "Rayos X",
    width: 1200,
    height: 900,
  },
  {
    src: "/images/laser-therapy.jpg",
    alt: "Equipo para terapia láser",
    label: "Terapia láser",
    width: 1200,
    height: 900,
  },
  {
    src: "/images/hospitalization-area.jpg",
    alt: "Área de hospitalización veterinaria",
    label: "Hospitalización",
    width: 1200,
    height: 900,
  },
];

const hours = [
  ["Lunes a viernes", "10:00 - 20:00"],
  ["Sábado", "10:00 - 16:00"],
  ["Domingo", "10:00 - 14:00"],
];

const quickLinks = [
  ["Inicio", "#inicio"],
  ["Servicios", "#servicios"],
  ["Galería", "#galeria"],
  ["Sobre el Vet", "#sobre-el-vet"],
  ["Ubicación", "#ubicacion"],
  ["Contacto", "#contacto"],
];

export default function Home() {
  const [activeMap, setActiveMap] = useState(true);
  const [selectedImage, setSelectedImage] = useState<(typeof gallery)[number] | null>(null);

  const galleryPreview = useMemo(() => gallery.slice(0, 6), []);

  return (
    <main className="min-h-screen bg-blue-50 text-blue-900">
      <header className="sticky top-0 z-50 border-b border-blue-200/80 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <a href="#inicio" className="flex items-center gap-3">
            <div className="h-12 w-12 shrink-0 rounded-2xl bg-blue-900 text-white flex items-center justify-center">
              <span className="material-symbols-outlined">pets</span>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-red-600">
                Animal&apos;s Clinica Veterinaria
              </p>
            </div>
          </a>

          {/* <nav className="hidden items-center gap-6 lg:flex">
            {quickLinks.map(([label, href]) => (
              <a key={label} href={href} className="text-sm font-medium text-blue-700 transition hover:text-blue-950">
                {label}
              </a>
            ))}
          </nav> */}

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={callLink}
              className="inline-flex h-11 items-center gap-2 rounded-full border border-blue-200 bg-white px-4 text-sm font-semibold text-blue-800 shadow-sm transition hover:border-blue-300 hover:bg-blue-50"
            >
              <span className="material-symbols-outlined text-[20px] text-red-600">call</span>
              <span className="hidden sm:inline">Llamar</span>
            </a>
            <a
              href={whatsappLink}
              className="inline-flex h-11 items-center gap-2 rounded-full bg-red-600 px-4 text-sm font-semibold text-white shadow-lg shadow-red-600/25 transition hover:bg-red-700"
            >
              <span className="material-symbols-outlined text-[20px]">chat</span>
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>
        </div>
      </header>

      <div id="contenido">
        {/* Hero */}
        <section id="inicio" className="relative overflow-hidden bg-blue-950 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(220,38,38,0.32),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.1),transparent_28%)]" />
          <div className="absolute inset-0 bg-linear-to-r from-blue-950 to-blue-900" />
          <div className="relative mx-auto grid min-h-[calc(100svh-80px)] w-full max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-20">
            <div className="max-w-2xl">
              {/* <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/85 backdrop-blur">
                <span className="material-symbols-outlined text-[18px] text-red-400">location_on</span>
                Atención rápida, trato humano y contacto directo por WhatsApp
              </div> */}
              <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Cuidado veterinario integral
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-blue-200 sm:text-lg">
                Cirugía, rayos X, terapia láser y hospitalización en un solo lugar.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappLink}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-6 py-4 text-base font-semibold text-white shadow-xl shadow-red-600/25 transition hover:bg-red-700"
                >
                  <span className="material-symbols-outlined text-[20px]">chat</span>
                  Agenda por WhatsApp
                </a>
                <a
                  href={callLink}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-4 text-base font-semibold text-white backdrop-blur transition hover:bg-white/15"
                >
                  <span className="material-symbols-outlined text-[20px]">call</span>
                  Llamar ahora
                </a>
              </div>
              <dl className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  ["+10 años", "de experiencia clínica"],
                  ["Atención", "por cita y urgencias"],
                  ["WhatsApp", "respuesta directa"],
                ].map(([value, label]) => (
                  <div key={value} className="rounded-3xl border border-white/10 bg-white/8 p-4 backdrop-blur-sm">
                    <dt className="text-2xl font-bold text-white">{value}</dt>
                    <dd className="mt-1 text-sm text-blue-300">{label}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="relative">
              {/* Gradient background */}
              <div className="absolute -left-6 top-8 hidden h-24 w-24 rounded-full bg-red-500/35 blur-3xl sm:block" />
              <div className="absolute -right-4 bottom-0 hidden h-28 w-28 rounded-full bg-sky-400/20 blur-3xl sm:block" />


              <div className="overflow-hidden rounded-4xl border border-white/10 bg-white/10 shadow-2xl shadow-black/30 backdrop-blur-sm">
                <div className="relative aspect-4/5 w-full">
                  <img
                    src="/images/hero-clinic.jpg"
                    alt="Interior de la clínica veterinaria"
                    // fill
                    // priority
                    className="object-cover"
                  />
                </div>
                <div className="border-t border-white/10 bg-blue-950/55 p-5">
                  <div className="flex items-center gap-3">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-red-600 text-white">
                      <span className="material-symbols-outlined text-[22px]">verified</span>
                    </div>
                    <p className="font-semibold text-white">Atención de calidad garantizada</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Servicios */}
        <section id="servicios" className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          {/* Title */}
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-red-600">Servicios</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-blue-950 sm:text-4xl">Contamos con todo lo esencial</h2>
            {/* <p className="mt-4 text-base leading-7 text-blue-600">
              Un menú claro de atención para que la familia entienda rápido qué resolvemos y cómo pedir ayuda.
            </p> */}
          </div>

          {/* Services List */}
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="group rounded-[1.75rem] border border-blue-200 bg-white p-6 shadow transition hover:-translate-y-1 hover:border-red-200 hover:shadow-lg hover:shadow-blue-200/60"
              >
                <div className="flex items-start gap-4">
                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-blue-950 text-white transition group-hover:bg-red-600">
                    <span className="material-symbols-outlined text-[28px]">{service.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-950">{service.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-blue-600">{service.description}</p>
                    <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-red-50 px-3 py-1 text-sm font-semibold text-red-700">
                      <span className="material-symbols-outlined text-[16px]">payments</span>
                      {service.price}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Store */}
          <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-blue-200 bg-blue-950 text-white shadow-xl shadow-blue-200/60">
            <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="p-7 sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-red-400">Tienda</p>
                <h3 className="mt-3 text-2xl font-black">También contamos con alimento, equipo y accesorios</h3>
                <p className="mt-3 max-w-xl text-sm leading-6 text-blue-300">
                  Pregunta disponibilidad por WhatsApp y te compartimos opciones para perro, gato y accesorios básicos.
                </p>
                <a
                  href={whatsappLink}
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
                >
                  <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
                  Pregúntanos disponibilidad
                </a>
              </div>
              <div className="grid gap-4 bg-white/5 p-7 sm:p-8 sm:grid-cols-3">
                {[
                  ["Perro", "/images/dog-category.jpg", 800, 800],
                  ["Gato y accesorios", "/images/cat-accessories.jpg", 800, 800],
                ].map(([label, src, width, height]) => (
                  <div key={label as string} className="overflow-hidden rounded-3xl border border-white/10 bg-blue-900">
                    <div className="relative aspect-square w-full">
                      <Image
                        src={src as string}
                        alt={label as string}
                        fill
                        loading="lazy"
                        sizes="(max-width: 1024px) 50vw, 18vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="border-t border-white/10 p-4 text-sm font-semibold text-white">{label as string}</div>
                    <div className="hidden" data-width={width} data-height={height} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="sobre-el-vet" className="bg-white">
          <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div className="overflow-hidden rounded-4xl border border-blue-200 bg-blue-100 shadow-xl shadow-blue-200/70">
              <div className="relative aspect-4/5 w-full">
                <img
                  src="/images/vet-portrait.jpg"
                  alt="Fotografía del veterinario principal"
                  // fill
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 38vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-red-600">Sobre el Vet</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-blue-950 sm:text-4xl">MVZ. Lenin Mendez Arriaga</h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-blue-600">
                Médico veterinario con años de experiencia en consulta, cirugía, ortopedia y medicina interna. Su enfoque es práctico, humano y claro: explicar cada paso, priorizar el bienestar del paciente y acompañar a la familia con decisiones bien informadas.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Cédula profesional: 1234567",
                  "Certificación en ortopedia veterinaria",
                  "Certificación en cirugía de tejidos blandos",
                  "Actualización continua en medicina interna",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-blue-200 bg-blue-50 p-4">
                    <span className="material-symbols-outlined mt-0.5 text-[20px] text-red-600">check_circle</span>
                    <p className="text-sm leading-6 text-blue-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="galeria" className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-red-600">Galería</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-blue-950 sm:text-4xl">Instalaciones y equipo</h2>
            <p className="mt-4 text-base leading-7 text-blue-600">
              Nuestras instalaciones, equipo y ambiente de atención donde se cuidan y atienden a tus mascotas.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryPreview.map((image) => (
              <button
                key={image.src}
                type="button"
                onClick={() => setSelectedImage(image)}
                className="group overflow-hidden rounded-[1.5rem] border border-blue-200 bg-white text-left shadow-sm transition hover:-tranblue-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] w-full bg-blue-100">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 31vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex items-center justify-between gap-3 p-4">
                  <div>
                    <p className="text-sm font-semibold text-blue-950">{image.label}</p>
                    <p className="text-sm text-blue-500">Toca para ampliar</p>
                  </div>
                  <span className="material-symbols-outlined text-[20px] text-red-600">open_in_full</span>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.slice(6).map((image) => (
              <button
                key={image.src}
                type="button"
                onClick={() => setSelectedImage(image)}
                className="group overflow-hidden rounded-[1.5rem] border border-blue-200 bg-white text-left shadow-sm transition hover:-tranblue-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] w-full bg-blue-100">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 31vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex items-center justify-between gap-3 p-4">
                  <div>
                    <p className="text-sm font-semibold text-blue-950">{image.label}</p>
                    <p className="text-sm text-blue-500">Toca para ampliar</p>
                  </div>
                  <span className="material-symbols-outlined text-[20px] text-red-600">open_in_full</span>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section id="ubicacion" className="bg-blue-950 text-white">
          <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-red-400">Ubicación</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Encuéntranos fácilmente</h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-blue-300">
                Mapa embebido con enlace para abrir en Google Maps o en la app del teléfono.
              </p>

              <div className="mt-8 space-y-4 rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
                <a href={mapLink} className="block text-lg font-semibold text-white transition hover:text-red-300">
                  Diamante 35, San Roque, 76168 Santiago de Querétaro, Qro.
                </a>
                <p className="text-sm leading-6 text-blue-300">Frente a la plaza principal. Estacionamiento disponible cerca.</p>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-blue-900 shadow-2xl shadow-black/25">
              {activeMap ? (
                // <iframe
                //   src={mapEmbed}
                //   width="100%"
                //   height="100%"
                //   style={{ border: 0 }}
                // />
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3734.5699959245126!2d-100.39956912398063!3d20.605610902176267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d35ad8daea0377%3A0x54a5fbc460d5b037!2sVeterinary%20Clinic%20Animal&#39;s!5e0!3m2!1sen!2smx!4v1781883026038!5m2!1sen!2smx"
                  // src={mapEmbed}
                  className="h-full w-full min-h-105"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              ) : (
                <button
                  type="button"
                  onClick={() => setActiveMap(true)}
                  className="flex h-[420px] w-full flex-col items-center justify-center gap-4 bg-[radial-gradient(circle_at_top,rgba(220,38,38,0.2),transparent_45%),linear-gradient(160deg,rgba(15,23,42,0.95),rgba(15,23,42,0.75))] px-6 text-center"
                >
                  <span className="material-symbols-outlined text-[56px] text-red-400">map</span>
                  <span className="text-lg font-semibold">Toca para cargar el mapa</span>
                  <span className="max-w-sm text-sm leading-6 text-blue-300">
                    El mapa se carga solo cuando el usuario lo solicita para no frenar el rendimiento inicial.
                  </span>
                </button>
              )}
            </div>
          </div>
        </section>

        <section id="contacto" className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[2rem] border border-blue-200 bg-white p-7 shadow-xl shadow-blue-200/60 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-red-600">Contacto</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-blue-950 sm:text-4xl">Agenda la atención de tu mascota hoy</h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-blue-600">
                Acceso directo por llamada, WhatsApp o correo. El mensaje ya viene listo para ahorrar tiempo.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <a href={callLink} className="flex items-center gap-4 rounded-3xl border border-blue-200 bg-blue-50 p-5 transition hover:border-red-200 hover:bg-red-50">
                  <span className="material-symbols-outlined text-[28px] text-red-600">call</span>
                  <div>
                    <p className="text-sm font-semibold text-blue-950">Llamar</p>
                    <p className="text-sm text-blue-600">{phoneNumber}</p>
                  </div>
                </a>
                <a href={whatsappLink} className="flex items-center gap-4 rounded-3xl border border-blue-600 bg-blue-100 p-5 transition hover:bg-blue-200">
                  <span className="material-symbols-outlined text-[28px] text-red-600">chat</span>
                  <div>
                    <p className="text-sm font-semibold text-blue-950">WhatsApp</p>
                    <p className="text-sm text-blue-600">{phoneNumber}</p>
                  </div>
                </a>
                <a href={emailLink} className="flex items-center gap-4 rounded-3xl border border-blue-200 bg-blue-50 p-5 transition hover:border-red-200 hover:bg-red-50">
                  <span className="material-symbols-outlined text-[28px] text-red-600">email</span>
                  <div>
                    <p className="text-sm font-semibold text-blue-950">Correo</p>
                    <p className="text-sm text-blue-600">hola@animalsveterinaria.com</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-blue-200 bg-blue-950 p-7 text-white shadow-xl shadow-blue-200/60 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-red-400">Horario</p>
              <h3 className="mt-3 text-2xl font-black">Estamos listos para atender</h3>
              <div className="mt-6 space-y-3">
                {hours.map(([day, range]) => (
                  <div key={day} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    <span className="text-sm font-medium text-blue-100">{day}</span>
                    <span className="text-sm text-blue-300">{range}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-5 text-sm leading-6 text-blue-300">
                Mensaje sugerido: Hola, quisiera agendar una cita para mi mascota.
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="border-t border-blue-200 bg-white">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_auto] lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-blue-900 text-white">
                <span className="material-symbols-outlined text-[22px]">pets</span>
              </div>
              <div>
                <p className="font-semibold text-blue-950">Animal&apos;s Veterinary Clinic</p>
                <p className="text-sm text-blue-600">Cédula profesional 1234567 | Ciudad, Estado</p>
              </div>
            </div>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-blue-600">
              Cuidado veterinario pensado para responder rápido, explicar claro y dar confianza desde el primer contacto.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-400">Links</p>
              <div className="mt-3 flex flex-col gap-2">
                {quickLinks.map(([label, href]) => (
                  <a key={label} href={href} className="text-sm text-blue-600 transition hover:text-blue-950">
                    {label}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-400">Redes</p>
              <div className="mt-3 flex gap-3">
                <a href="https://www.facebook.com/p/Clinica-Veterinaria-Animals-100066834454900/" className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-blue-950 text-white">
                  <span className="material-symbols-outlined text-[22px]">photo_camera</span>
                </a>
                <a href="https://maps.app.goo.gl/fhworHdvXFFFGTUf8" className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-blue-950 text-white">
                  <span className="material-symbols-outlined text-[22px]">public</span>
                </a>
              </div>
            </div>
          </div>
          <span className="self-center text-sm text-blue-600">
            Desarrollado por <a href="https://bout.sh" className="font-semibold text-blue-950 underline transition hover:text-red-600">Bout</a>
          </span>
        </div>
      </footer>

      <a
        href={whatsappLink}
        className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-2 rounded-full bg-red-600 px-4 py-3 text-sm font-semibold text-white shadow-2xl shadow-red-600/30 transition hover:bg-red-700 sm:bottom-6 sm:right-6"
      >
        <span className="material-symbols-outlined text-[20px]">chat</span>
        WhatsApp
      </a>

      {selectedImage ? (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-blue-950/90 px-4 py-6 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-white shadow-2xl" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute right-3 top-3 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-blue-950/80 text-white transition hover:bg-blue-950"
            >
              <span className="material-symbols-outlined text-[22px]">close</span>
            </button>
            <div className="relative aspect-[16/10] w-full bg-blue-100">
              <Image src={selectedImage.src} alt={selectedImage.alt} fill sizes="100vw" className="object-cover" />
            </div>
            <div className="p-5">
              <p className="text-sm font-semibold text-blue-950">{selectedImage.label}</p>
              <p className="mt-1 text-sm text-blue-600">Imagen de muestra con ruta placeholder. Reemplázala cuando tengas el material final.</p>
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}
