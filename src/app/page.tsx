import LightBox from "@/components/LightBox";
import Link from "next/link";

// CONTACT INFO
const phoneNumber = "+524422176238";
const whatsNumber = "+524422332002";
const whatsMessages = Object.fromEntries(Object.entries({
  cita: "Hola, quisiera agendar una cita para mi mascota.",
  info: "Hola, tengo preguntas sobre sus servicios.",
  tienda: "Hola, quisiera preguntar por la disponibilidad de ...",
  emergency: "Hola, necesito ayuda con una emergencia veterinaria.",
}).map(([key, value]) => [key, encodeURIComponent(value)]));
const whatsappLink = `https://wa.me/${whatsNumber.replace(/\D/g, "")}?text=`; // add message with encode uri
const callLink = `tel:${phoneNumber}`;
const emailLink = "mailto:hola@animalsveterinaria.com";
const mapsAddress = "Animals Clinica Veterinaria Diamante 35, San Roque, 76168 Santiago de Querétaro, Qro"
const mapsAddressLink = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(mapsAddress);
const mapsDirectLink = "https://maps.app.goo.gl/fhworHdvXFFFGTUf8";

// DYNAMIC INFO:
const services = [
  {
    title: "Consulta general",
    icon: "medical_services",
    price: "$500.00",
    description: "Revisión completa, diagnóstico inicial y plan claro para tu mascota.",
  },
  {
    title: "Cirugía y Traumatología",
    icon: "syringe",
    price: "Pregunta por precios.",
    description: "Esterilización, cirugía, traumatología y procedimientos ortopédicos.",
  },
  {
    title: "Rayos X y Ultrasonido",
    icon: "scan",
    price: "$500.00",
    description: "Apoyo para detectar fracturas, cuerpos extraños y problemas internos.",
  },
  {
    title: "Hospitalización",
    icon: "hotel",
    price: null,
    description: "Monitoreo cercano y atención continua cuando tu paciente necesita quedarse.",
  },
  // {
  //   title: "Medicina interna",
  //   icon: "science",
  //   price: "Pregunta por precios.",
  //   description: "Seguimiento de enfermedades crónicas, digestivas, hormonales y metabólicas.",
  // },
  {
    title: "Limpieza dental",
    icon: "dentistry",
    price: "$700.00 - $1,200.00",
    description: "Limpieza profesional y profilaxis para mantener la salud bucal de tu mascota.",
  },
  {
    title: "Vacunas y desparasitantes",
    icon: "vaccines",
    price: null,
    description: "Protección contra enfermedades comunes y control de parásitos externos e internos.",
  },
];

const gallery = [
  {
    src: "https://plus.unsplash.com/premium_photo-1663039950073-187c977da2e9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Fachada de la clínica veterinaria",
    label: "Exterior",
    width: 1200,
    height: 900,
  },
  {
    src: "https://images.unsplash.com/photo-1654895716780-b4664497420d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Consultorio de revisión veterinaria",
    label: "Consultorio",
    width: 1200,
    height: 900,
  },
  {
    src: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Quirófano veterinario",
    label: "Quirófano",
    width: 1200,
    height: 900,
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1663133499103-ab63c5533bf4?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Equipo de rayos X veterinario",
    label: "Rayos X",
    width: 1200,
    height: 900,
  },
  {
    src: "https://images.unsplash.com/photo-1553688738-a278b9f063e0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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

// NAVIGATION INFO
const pageLinks = {
  inicio: {
    title: "Inicio",
    id: "inicio",
  },
  servicios: {
    title: "Servicios",
    id: "servicios",
  },
  galeria: {
    title: "Galería",
    id: "galeria",
  },
  veterinarioTitular: {
    title: "Veterinario Titular",
    id: "veterinario-titular",
  },
  ubicacion: {
    title: "Ubicación",
    id: "ubicacion",
  },
  contacto: {
    title: "Contacto",
    id: "contacto",
  }
}
const quickLinks = Object.values(pageLinks).map(({ title, id }) => [title, `#${id}`] as const);

export default function Home() {
  // const [activeMap, setActiveMap] = useState(true);
  const activeMap = true; // always show map, no need to click to activate
  // const [selectedImage, setSelectedImage] = useState<(typeof gallery)[number] | null>(null);


  return (
    <main className="min-h-screen bg-blue-50 text-blue-900">
      <header className="sticky top-0 z-50 border-b border-blue-200/80 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <Link href="#inicio" className="flex items-center gap-3">
            {/* <div className="h-12 w-12 shrink-0 rounded-2xl bg-blue-900 text-white flex items-center justify-center">
              <span className="material-symbols-outlined">pets</span>
            </div> */}
            <img src="/images/logo.svg" alt="Logo de Animal's Clinica Veterinaria" className="h-12 w-auto" />
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-red-600">
                Animal&apos;s Clinica Veterinaria
              </p>
            </div>
          </Link>

          {/* <nav className="hidden items-center gap-6 lg:flex">
            {quickLinks.map(([label, href]) => (
              <Link key={label} href={href} className="text-sm font-medium text-blue-700 transition hover:text-blue-950">
                {label}
              </Link>
            ))}
          </nav> */}

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href={callLink}
              className="inline-flex h-11 items-center gap-2 rounded-full border border-blue-200 bg-white px-4 text-sm font-semibold text-blue-800 shadow-sm transition hover:border-blue-300 hover:bg-blue-50"
            >
              <span className="material-symbols-outlined text-[20px] text-red-600">call</span>
              <span className="hidden sm:inline">Llamar</span>
            </Link>
            <Link
              href={whatsappLink}
              className="inline-flex h-11 items-center gap-2 rounded-full bg-red-600 px-4 text-sm font-semibold text-white shadow-lg shadow-red-600/25 transition hover:bg-red-700"
            >
              <span className="material-symbols-outlined text-[20px]">chat</span>
              <span className="hidden sm:inline">WhatsApp</span>
            </Link>
          </div>
        </div>
      </header>

      <div id="contenido">
        {/* Hero */}
        <section id={pageLinks.inicio.id} className="relative overflow-hidden bg-blue-950 text-white">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(220,38,38,0.32),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.1),transparent_28%)]" />
          <div className="absolute inset-0 bg-linear-to-r from-blue-950 to-blue-900" />

          {/* Content */}
          <div className="relative mx-auto grid min-h-[calc(100svh-80px)] w-full max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-20">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Clinica veterinaria integral
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-blue-200 sm:text-lg">
                Consulta, cirugía, rayos X, vacunas, hospitalización y más, en un solo lugar.
              </p>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={whatsappLink + whatsMessages.cita}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-6 py-4 text-base font-semibold text-white shadow-xl shadow-red-600/25 transition hover:bg-red-700"
                >
                  <span className="material-symbols-outlined text-[20px]">chat</span>
                  Agenda por WhatsApp
                </Link>
                <Link
                  href={callLink}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-4 text-base font-semibold text-white backdrop-blur transition hover:bg-white/15"
                >
                  <span className="material-symbols-outlined text-[20px]">call</span>
                  Llamar
                </Link>
                <Link
                  href={mapsDirectLink}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-4 text-base font-semibold text-white backdrop-blur transition hover:bg-white/15"
                >
                  <span className="material-symbols-outlined text-[20px]">location_on</span>
                  Ver Mapa
                </Link>
              </div>

              <dl className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  ["+10 años", "de experiencia clínica"],
                  ["Consulta", "por cita y urgencias"],
                  ["Atencion", "rápida y profesional"],
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
                    src="https://images.unsplash.com/photo-1596272875729-ed2ff7d6d9c5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Interior de la clínica veterinaria"
                    // fill
                    // priority
                    className="object-cover h-full w-full"
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
        <section id={pageLinks.servicios.id} className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
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
                    {service.price && (
                      <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-red-50 px-3 py-1 text-sm font-semibold text-red-700">
                        <span className="material-symbols-outlined text-[16px]">payments</span>
                        {service.price}
                      </p>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Store */}
          <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-blue-200 bg-blue-950 text-white shadow-xl shadow-blue-200/60">
            <div className="p-7 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-red-400">Tienda</p>
              <h3 className="mt-3 text-2xl font-black">También contamos con alimento, equipo y accesorios</h3>
              <p className="mt-3 max-w-xl text-sm leading-6 text-blue-300">
                Pregunta disponibilidad por WhatsApp y te compartimos opciones para perro, gato y accesorios básicos.
              </p>
              <Link
                href={whatsappLink + whatsMessages.tienda}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
              >
                <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
                Pregúntanos disponibilidad
              </Link>
            </div>
            <div className="grid gap-4 bg-white/5 p-7 sm:p-8 sm:grid-cols-3">
              {[
                ["Perro", "https://images.unsplash.com/photo-1589924749359-9697080c3577?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 800, 800],
                ["Gato", "https://plus.unsplash.com/premium_photo-1695267061085-0f7cfca592bd?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 800, 800],
                ["Accesorios", "https://images.unsplash.com/photo-1589924648735-e4ddb20adeee?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 800, 800],
              ].map(([label, src, width, height]) => (
                <div key={label as string} className="overflow-hidden rounded-3xl border border-white/10 bg-blue-900">
                  <img
                    src={src as string}
                    alt={label as string}
                    // fill
                    loading="lazy"
                    className="object-cover aspect-video"
                  />
                  <div className="border-t border-white/10 p-4 text-sm font-semibold text-white">{label as string}</div>
                  <div className="hidden" data-width={width} data-height={height} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="veterinario-titular" className="bg-white">
          <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div className="overflow-hidden rounded-4xl border border-blue-200 bg-blue-100 shadow-xl shadow-blue-200/70 aspect-4/5">
              <img
                src="https://plus.unsplash.com/premium_photo-1661963697387-9ba753d0df95?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Fotografía del veterinario principal"
                loading="lazy"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-red-600">Veterinario titular</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-blue-950 sm:text-4xl">MVZ. Lenin Mendez Arriaga</h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-blue-600">
                Médico veterinario con años de experiencia en consulta, cirugía, ortopedia y medicina interna. Su enfoque es práctico, humano y claro: explicar cada paso, priorizar el bienestar del paciente y acompañar a la familia con decisiones bien informadas.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Cédula profesional: 3862786",
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

          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((image, index) => (
              <LightBox key={index} galleryImage={image} />
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
                <Link href={mapsAddressLink} className="block text-lg font-semibold text-white transition hover:text-red-300">
                  Diamante 35, San Roque, 76168 Santiago de Querétaro, Qro.
                </Link>
                <p className="text-sm leading-6 text-blue-300">
                  Estamos ubicados en la calle Diamante, justo en la división de calles, a un costado de la ferretería.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-4xl border border-white/10 bg-blue-900 shadow-2xl shadow-black/25">
              {activeMap ? (
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
                  // onClick={() => setActiveMap(true)}
                  className="flex h-105 w-full flex-col items-center justify-center gap-4 bg-[radial-gradient(circle_at_top,rgba(220,38,38,0.2),transparent_45%),linear-gradient(160deg,rgba(15,23,42,0.95),rgba(15,23,42,0.75))] px-6 text-center"
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

        <section id="contacto" className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8 flex flex-col sm:flex-row gap-8">
          {/* Contact Info */}
          <div className="rounded-4xl border border-blue-200 bg-white p-7 shadow-xl shadow-blue-200/60 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-red-600">Contacto</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-blue-950 sm:text-4xl">Agenda la atención de tu mascota hoy</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-blue-600">
              Acceso directo por llamada, WhatsApp o correo. El mensaje ya viene listo para ahorrar tiempo.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              {[
                ["Llamar", "call", callLink, phoneNumber],
                ["WhatsApp", "chat", whatsappLink + whatsMessages.cita, whatsNumber],
                ["Correo", "email", emailLink, "hola@animalsveterinaria.com"],
              ].map(([label, icon, href, contact]) => (
                <Link key={label} href={href} className="flex flex-col w-full items-start justify-center gap-0 rounded-3xl border border-blue-200 bg-blue-50 p-5 transition hover:border-red-200 hover:bg-red-50">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[28px] text-red-600">{icon}</span>
                    <p className="text-sm font-semibold text-blue-950">{label}</p>
                  </div>
                  <p className="text-sm text-blue-600">{contact}</p>
                </Link>
              ))}
                
            </div>
          </div>

          {/* Horario */}
          <div className="rounded-4xl border border-blue-200 bg-blue-950 p-7 text-white shadow-xl shadow-blue-200/60 sm:p-8">
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
                <p className="text-sm text-blue-600">Cédula profesional 3862786 | MVZ Lenin Mendez Arriaga</p>
              </div>
            </div>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-blue-600">
              Cuidado veterinario integral con enfoque humano y práctico. Consulta, cirugía, rayos X, vacunas y más para tu mascota.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-400">Links</p>
              <div className="mt-3 flex flex-col gap-2">
                {quickLinks.map(([label, href]) => (
                  <Link key={label} href={href} className="text-sm text-blue-600 transition hover:text-blue-950">
                    {label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-400">Redes</p>
              <div className="mt-3 flex gap-3">
                <Link href="https://www.facebook.com/p/Clinica-Veterinaria-Animals-100066834454900/" className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-blue-950 text-white">
                  <span className="material-symbols-outlined text-[22px]">photo_camera</span>
                </Link>
                <Link href="https://maps.app.goo.gl/fhworHdvXFFFGTUf8" className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-blue-950 text-white">
                  <span className="material-symbols-outlined text-[22px]">public</span>
                </Link>
              </div>
            </div>
          </div>
          <span className="self-center text-sm text-blue-600">
            Desarrollado por <Link href="https://bout.sh" className="font-semibold text-blue-950 underline transition hover:text-red-600">Bout</Link>
          </span>
        </div>
      </footer>

      <Link
        href={whatsappLink}
        className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-2 rounded-full bg-red-600 px-4 py-3 text-sm font-semibold text-white shadow-2xl shadow-red-600/30 transition hover:bg-red-700 sm:bottom-6 sm:right-6"
      >
        <span className="material-symbols-outlined text-[20px]">chat</span>
        WhatsApp
      </Link>


    </main>
  );
}
