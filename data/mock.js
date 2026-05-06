// Mock data for Franco Galeano's Portfolio
// This data will later be replaced by backend integration where needed.

export const profile = {
  name: "Franco Galeano",
  shortName: "Franco",
  title: "Full-Stack Developer",
  subtitlePrefix: "I am",
  rotatingRoles: ["developer", "freelancer"],
  tagline:
    "Construyo interfaces vivas, precisas y sofisticadas. Especializado en frontend con sensibilidad de diseño y arquitectura full-stack.",
  location: "Buenos Aires, Argentina",
  email: "fg.francogaleano@gmail.com",
  social: {
    github: "https://github.com/fg-francogaleano",
    linkedin: "https://www.linkedin.com/in/fran-galeano/",
  },
  avatar:
    "/profile1.png",
  heroImage:
    "https://customer-assets.emergentagent.com/job_f343db4b-d885-4ade-94d4-464ac5685c4d/artifacts/q8ixn74o_image-hero.png",
};

export const aboutCopy = {
  sectionNumber: "01",
  sectionTitle: "Sobre m\u00ed",
  paragraphs: [
    "Soy desarrollador web full-stack con foco en frontend. Dise\u00f1o y construyo productos digitales que se sienten r\u00e1pidos, accesibles y memorables.",
    "Trabajo en la intersecci\u00f3n entre c\u00f3digo y dise\u00f1o: cada interacci\u00f3n importa, cada milisegundo cuenta. Mi stack favorito incluye React, Next.js y Node, con TypeScript de cabecera.",
    "Disponible para proyectos freelance, colaboraciones y posiciones full-time donde la calidad t\u00e9cnica y el detalle visual sean prioridad.",
  ],
};

export const stats = [
  { value: "3+", label: "A\u00f1os de experiencia" },
  // { value: "32", label: "Proyectos completados" },
  { value: "15", label: "Tecnolog\u00edas dominadas" },
  // { value: "99%", label: "Clientes satisfechos" },
];

export const skills = [
  {
    category: "Frontend",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Material MUI",
    ],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express"],
  },
  {
    category: "Bases de datos",
    items: ["PostgreSQL", "MongoDB"],
  },
  {
    category: "Tooling",
    items: ["GitHub", "Vercel", "Figma"],
  },
];

export const projects = [
  {
    id: "p1",
    title: "Puerta de Paz",
    description:
      "Landing page autogestionable con Sanity Studio para administrar eventos, información y donaciones fácilmente.",
    tags: ["Vite.js", "React", "sanity.io", "Material MUI"],
    year: "2025",
    client: "SaaS / Producto propio",
    image:
      "/puerta-de-paz.png",
    link: "https://template-church-neon.vercel.app/",
    span: "large",
  },
  {
    id: "p2",
    title: "Frident",
    description:
      "Sitio web premium para clínica odontológica, integrando dos sistemas automatizados para captación de pacientes.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    year: "2026",
    client: "Cliente freelance",
    image:
      "/frident1.png",
    link: "https://frident.vercel.app/",
    span: "small",
  },
  {
    id: "p3",
    title: "Dolar Actual",
    description:
      "Portal financiero en tiempo real con cotizaciones del dólar y agregador de noticias económicas, políticas y financieras.",
    tags: ["Next.js", "Tailwind CSS", "Mongo DB"],
    year: "2026",
    client: "Proyecto personal",
    image:
      "/dolar-actual.png",
    link: "https://www.dolaractual.com.ar/",
    span: "full",
  },
];

export const navItems = [
  { id: "hero", label: "Inicio", icon: "Home" },
  { id: "about", label: "Sobre m\u00ed", icon: "User" },
  { id: "projects", label: "Proyectos", icon: "FolderGit2" },
  { id: "contact", label: "Contacto", icon: "Mail" },
];
