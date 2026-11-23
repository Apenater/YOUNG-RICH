/**
 * Todo el contenido de la landing vive aquí.
 * Edita textos, fechas y links en este archivo sin tocar los componentes.
 * Lo marcado con TODO falta confirmarlo o reemplazarlo.
 */
import type { IconName } from "@/components/icons";

export const site = {
  name: "Young & Rich",
  price: "$97",
  startLabel: "4 de enero",
  // TODO: confirmar año y zona horaria (se asume El Salvador, UTC-6).
  startISO: "2027-01-04T19:45:00-06:00",
  days: "Lunes y jueves",
  time: "7:45 pm",
  links: {
    // TODO: reemplazar por el link real de pago.
    checkout: "#",
    // TODO: reemplazar por el link de WhatsApp (https://wa.me/<número>).
    whatsapp: "#",
  },
};

export const topics = [
  "Acciones",
  "Criptomonedas",
  "Trading",
  "Negocios desde 0",
  "Mentalidad",
  "Pagos cripto",
];

export type ClassItem = {
  n: string;
  // TODO: fechas calculadas a partir del 4 de enero (lunes y jueves, una clase por sesión). Confirmar.
  date: string;
  dateTime: string;
  title: string;
  tag: string;
  icon: IconName;
};

export const classes: ClassItem[] = [
  { n: "01", date: "Lun 04 Ene", dateTime: "2027-01-04", title: "Cómo invertir en acciones desde 0", tag: "Acciones · Bolsa", icon: "trend" },
  { n: "02", date: "Jue 07 Ene", dateTime: "2027-01-07", title: "Cómo comenzar un negocio desde 0", tag: "Emprendimiento", icon: "briefcase" },
  { n: "03", date: "Lun 11 Ene", dateTime: "2027-01-11", title: "La mentalidad correcta para invertir y los mejores libros", tag: "Mentalidad · Libros", icon: "bookOpen" },
  { n: "04", date: "Jue 14 Ene", dateTime: "2027-01-14", title: "Cómo invertir en criptomonedas", tag: "Criptomonedas", icon: "hexagon" },
  { n: "05", date: "Lun 18 Ene", dateTime: "2027-01-18", title: "Cómo hacer trading desde 0", tag: "Trading", icon: "candles" },
  { n: "06", date: "Jue 21 Ene", dateTime: "2027-01-21", title: "Cómo pagar con criptomonedas y usar tarjetas cripto", tag: "Pagos cripto", icon: "card" },
];

export type Social = {
  network: string;
  handle: string;
  href: string;
};

export type Mentor = {
  name: string;
  role: string;
  photoLabel: string;
  /** Ruta en /public, p. ej. "/javier.jpg". Sin foto se muestra un espacio reservado. */
  photo?: string;
  chips: string[];
  socials: Social[];
  bio: string[];
};

export const mentors: Mentor[] = [
  {
    name: "Javier Portillo",
    role: "Trader · Inversionista · Emprendedor",
    photoLabel: "Foto · Javier Portillo",
    chips: ["21 años", "Fundador · JP MENTORY"],
    socials: [
      { network: "TikTok", handle: "@javierportilloo7", href: "https://www.tiktok.com/@javierportilloo7" },
    ],
    bio: [
      "A mis 21 años he construido mi camino en el mundo de las inversiones, las criptomonedas y los diferentes mercados bursátiles, impulsado por mi pasión por las finanzas y el emprendimiento.",
      "Soy fundador de JP MENTORY, donde comparto mis conocimientos y experiencias en trading e inversiones para ayudar a más personas a desarrollar su educación financiera.",
    ],
  },
  {
    // TODO: completar rol, edad, foto y bio de David.
    name: "David Barrientos",
    role: "[Rol de David]",
    photoLabel: "Foto · David",
    chips: ["[Edad]", "Tienda TNX"],
    socials: [
      { network: "TikTok", handle: "@davusiness", href: "https://www.tiktok.com/@davusiness" },
    ],
    bio: [
      "[Bio de David: quién es, su experiencia en negocios y cómo nació TNX. El documento todavía no incluye su presentación.]",
    ],
  },
];

export type IncludeItem = {
  title: string;
  text: string;
  icon: IconName;
};

export const includes: IncludeItem[] = [
  { title: "Grupo privado de WhatsApp", text: "Acceso a un grupo privado donde recibirás toda la información del programa.", icon: "chat" },
  { title: "Grabaciones para siempre", text: "Acceso a todas las grabaciones de las clases de manera permanente.", icon: "play" },
  { title: "Material de apoyo", text: "Material de apoyo para todo el programa.", icon: "file" },
  { title: "Soporte directo", text: "Soporte directo con Javier y David durante el programa.", icon: "headset" },
  { title: "Libros recomendados", text: "Los libros que han ayudado a Javier y David en su camino.", icon: "book" },
];

export const benefits = [
  "Tienda TNX de David",
  "Suplementos TNX",
  "Cursos privados de JP MENTORY",
];

export type Partner = {
  name: string;
  /** Texto que se muestra en el recuadro mientras no haya logo. */
  wordmark: string;
  /** Ruta en /public, p. ej. "/partners/xtb.svg". Si existe, reemplaza al texto. */
  logo?: string;
  tag: string;
  description: string;
  cta: string;
  href: string;
  /** Enlace de referido: se marca con rel="sponsored". */
  sponsored?: boolean;
};

export const partners: Partner[] = [
  {
    name: "XTB",
    wordmark: "xtb",
    logo: "/partners/xtb.png",
    tag: "Broker",
    description:
      "Broker de trading e inversión online. Una plataforma de acciones recomendada por Javier Portillo.",
    cta: "Crear cuenta",
    // TODO: confirmar que este es el enlace de referido correcto para Young & Rich.
    href: "https://geolink.xtb.com/6284I",
    sponsored: true,
  },
  {
    name: "ÉDÉN Studio",
    wordmark: "EDÉN",
    logo: "/partners/eden-lockup.png",
    tag: "Dev",
    description: "Desarrollo de software e identidad digital.",
    cta: "Conocer más",
    href: "https://edenstudio.dev/",
  },
];

export const eden = {
  name: "ÉDÉN Studio",
  href: "https://edenstudio.dev/",
  email: "info@edenstudio.dev",
  /** Logo de los créditos (16:9, para fondo claro) e ícono de la insignia, en public/partners/. */
  logo: "/partners/eden-footer.png",
  icon: "/partners/eden-icon.png",
};

export const ticketChecklist = [
  "6 clases en vivo · lunes y jueves",
  "Grupo privado de WhatsApp",
  "Grabaciones con acceso permanente",
  "Material de apoyo",
  "Soporte directo con Javier y David",
  "Libros recomendados",
  "Descuentos en TNX y JP MENTORY",
];

export const faqs = [
  {
    q: "¿Necesito experiencia previa?",
    a: "No. Las clases empiezan desde 0: acciones, negocios, trading y criptomonedas explicados desde cero.",
  },
  {
    q: "¿Cuándo empiezan las clases?",
    a: "El 4 de enero. Las sesiones son los lunes y jueves a las 7:45 pm.",
  },
  {
    q: "¿Qué pasa si no puedo asistir a una clase en vivo?",
    a: "Tendrás acceso permanente a todas las grabaciones de las clases, así que puedes verlas cuando quieras.",
  },
  {
    q: "¿Cómo recibo la información del programa?",
    a: "A través de un grupo privado de WhatsApp, donde recibirás toda la información.",
  },
  {
    q: "¿Cuánto cuesta?",
    a: "El ticket cuesta $97.",
  },
  {
    q: "¿Tendré soporte durante el programa?",
    a: "Sí. Tienes soporte directo con Javier y David, además de material de apoyo para todo el programa.",
  },
];
