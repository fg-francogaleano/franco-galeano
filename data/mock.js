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
  email: "hello@francogaleano.dev",
  social: {
    github: "https://github.com/francogaleano",
    linkedin: "https://linkedin.com/in/francogaleano",
  },
  avatar:
    "https://images.pexels.com/photos/19805878/pexels-photo-19805878.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
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
  { value: "5+", label: "A\u00f1os de experiencia" },
  { value: "32", label: "Proyectos completados" },
  { value: "18", label: "Tecnolog\u00edas dominadas" },
  { value: "99%", label: "Clientes satisfechos" },
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
    title: "Atlas Analytics",
    description:
      "Plataforma SaaS de visualizaci\u00f3n de datos en tiempo real con paneles personalizables y alertas inteligentes.",
    tags: ["Next.js", "TypeScript", "D3.js", "PostgreSQL"],
    year: "2025",
    client: "SaaS / Producto propio",
    image:
      "https://images.pexels.com/photos/27141316/pexels-photo-27141316.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    link: "#",
    span: "large",
  },
  {
    id: "p2",
    title: "Noir Atelier",
    description:
      "E-commerce premium para una marca de moda independiente. Checkout sin fricci\u00f3n y catalog\u00e1cion editorial.",
    tags: ["React", "Stripe", "Tailwind", "Sanity"],
    year: "2024",
    client: "Cliente freelance",
    image:
      "https://images.pexels.com/photos/10976285/pexels-photo-10976285.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    link: "#",
    span: "small",
  },
  {
    id: "p3",
    title: "Constellation OS",
    description:
      "Experiencia interactiva 3D para una agencia creativa. Animaciones WebGL, audio reactivo y narrativa scroll-driven.",
    tags: ["Three.js", "GSAP", "WebGL", "Framer Motion"],
    year: "2024",
    client: "Agencia creativa",
    image:
      "https://images.unsplash.com/photo-1741795990628-7ec99d7d2044?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwzfHxhYnN0cmFjdCUyMG5lb24lMjBjb2RlfGVufDB8fHx8MTc3NzM4MzcyMHww&ixlib=rb-4.1.0&q=85",
    link: "#",
    span: "full",
  },
];

export const navItems = [
  { id: "hero", label: "Inicio", icon: "Home" },
  { id: "about", label: "Sobre m\u00ed", icon: "User" },
  { id: "projects", label: "Proyectos", icon: "FolderGit2" },
  { id: "contact", label: "Contacto", icon: "Mail" },
];
