export const locales = ["es", "en"];
export const defaultLocale = "es";
export const localStorageKey = "portfolio_language";

export const content = {
  es: {
    profile: {
      name: "Franco Galeano",
      shortName: "Franco",
      title: "Desarrollador Full-Stack",
      subtitlePrefix: "Soy",
      rotatingRoles: ["desarrollador", "freelancer"],
      tagline:
        "Construyo interfaces vivas, precisas y sofisticadas. Especializado en frontend con sensibilidad de diseño y arquitectura full-stack.",
      location: "Buenos Aires, Argentina",
      email: "fg.francogaleano@gmail.com",
      social: {
        github: "https://github.com/fg-francogaleano",
        linkedin: "https://www.linkedin.com/in/fran-galeano/",
      },
      avatar: "/profile1.png",
      heroImage:
        "https://customer-assets.emergentagent.com/job_f343db4b-d885-4ade-94d4-464ac5685c4d/artifacts/q8ixn74o_image-hero.png",
    },
    navItems: [
      { id: "hero", label: "Inicio", icon: "Home" },
      { id: "about", label: "Sobre mí", icon: "User" },
      { id: "projects", label: "Proyectos", icon: "FolderGit2" },
      { id: "contact", label: "Contacto", icon: "Mail" },
    ],
    sideNav: {
      navLabel: "Navegación principal",
      portfolioLabel: "Portfolio · 2026",
      mobileOpenMenu: "Abrir menú",
      mobileCloseMenu: "Cerrar menú",
      toggleLabel: "Cambiar idioma",
      languageButton: "EN",
    },
    hero: {
      topLabel: "Full Stack Developer",
      viewProjects: "Ver proyectos",
      contactMe: "Contactame",
      scrollHint: "Scroll",
    },
    about: {
      sectionNumber: "01",
      sectionTitle: "Sobre mí",
      paragraphs: [
        "Soy desarrollador web full-stack con foco en frontend. Diseño y construyo productos digitales que se sienten rápidos, accesibles y memorables.",
        "Trabajo en la intersección entre código y diseño: cada interacción importa, cada milisegundo cuenta. Mi stack favorito incluye React, Next.js y Node, con TypeScript de cabecera.",
        "Disponible para proyectos freelance, colaboraciones y posiciones full-time donde la calidad técnica y el detalle visual sean prioridad.",
      ],
      baseIn: "Base en",
      available: "Disponible",
    },
    skills: [
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
    ],
    projects: {
      sectionTitle: "Proyectos seleccionados",
      description:
        "Una selección de trabajos recientes — productos digitales, sitios para marcas y experiencias interactivas.",
      caseStudy: "Ver caso de estudio",
      items: [
        {
          id: "p1",
          title: "Puerta de Paz",
          description:
            "Landing page autogestionable con Sanity Studio para administrar eventos, información y donaciones fácilmente.",
          tags: ["Vite.js", "React", "sanity.io", "Material MUI"],
          year: "2025",
          client: "SaaS / Producto propio",
          image:
            "https://res.cloudinary.com/dexm7t5ty/image/upload/v1778114025/puerta-de-paz_w3zgv2.png",
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
            "https://res.cloudinary.com/dexm7t5ty/image/upload/v1778113682/frident1_mfthfp.png",
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
            "https://res.cloudinary.com/dexm7t5ty/image/upload/v1778113681/dolar-actual_i8rj50.png",
          link: "https://www.dolaractual.com.ar/",
          span: "full",
        },
      ],
    },
    contact: {
      sectionTitle: "Iniciemos tu próximo proyecto.",
      description:
        "¿Tenés una idea, producto o desafío técnico? Escribime y arranquemos la conversación.",
      labels: {
        name: "Nombre",
        email: "Email",
        message: "Mensaje",
      },
      reply24h: "Respondo en menos de 24h",
      submit: "Enviar",
      sending: "Enviando...",
      validation: {
        name: "Tu nombre es requerido",
        email: "Tu email es requerido",
        invalidEmail: "Email inválido",
        message: "Contame un poco más (mínimo 10 caracteres)",
      },
      toast: {
        success: "Mensaje enviado",
        successDescription: "Te respondo en menos de 24h.",
        error: "Algo falló",
        errorDescription: "Intentá de nuevo en un momento.",
      },
    },
    footer: {
      allRightsReserved: "Todos los derechos reservados.",
      designed: "Diseñado y desarrollado con cuidado",
      top: "Volver arriba",
    },
  },
  en: {
    profile: {
      name: "Franco Galeano",
      shortName: "Franco",
      title: "Full-Stack Developer",
      subtitlePrefix: "I am",
      rotatingRoles: ["developer", "freelancer"],
      tagline:
        "I build vibrant, precise and sophisticated interfaces. Specialized in frontend with design sensibility and full-stack architecture.",
      location: "Buenos Aires, Argentina",
      email: "fg.francogaleano@gmail.com",
      social: {
        github: "https://github.com/fg-francogaleano",
        linkedin: "https://www.linkedin.com/in/fran-galeano/",
      },
      avatar: "/profile1.png",
      heroImage:
        "https://customer-assets.emergentagent.com/job_f343db4b-d885-4ade-94d4-464ac5685c4d/artifacts/q8ixn74o_image-hero.png",
    },
    navItems: [
      { id: "hero", label: "Home", icon: "Home" },
      { id: "about", label: "About", icon: "User" },
      { id: "projects", label: "Projects", icon: "FolderGit2" },
      { id: "contact", label: "Contact", icon: "Mail" },
    ],
    sideNav: {
      navLabel: "Main navigation",
      portfolioLabel: "Portfolio · 2026",
      mobileOpenMenu: "Open menu",
      mobileCloseMenu: "Close menu",
      toggleLabel: "Switch language",
      languageButton: "ES",
    },
    hero: {
      topLabel: "Full Stack Developer",
      viewProjects: "View projects",
      contactMe: "Contact me",
      scrollHint: "Scroll",
    },
    about: {
      sectionNumber: "01",
      sectionTitle: "About me",
      paragraphs: [
        "I am a full-stack web developer focused on frontend. I design and build digital products that feel fast, accessible and memorable.",
        "I work at the intersection of code and design: every interaction matters, every millisecond counts. My favorite stack includes React, Next.js and Node, with TypeScript as a staple.",
        "Available for freelance projects, collaborations and full-time roles where technical quality and visual detail are a priority.",
      ],
      baseIn: "Based in",
      available: "Available",
    },
    skills: [
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
        category: "Databases",
        items: ["PostgreSQL", "MongoDB"],
      },
      {
        category: "Tooling",
        items: ["GitHub", "Vercel", "Figma"],
      },
    ],
    projects: {
      sectionTitle: "Selected projects",
      description:
        "A selection of recent work — digital products, brand websites and interactive experiences.",
      caseStudy: "View case study",
      items: [
        {
          id: "p1",
          title: "Puerta de Paz",
          description:
            "Self-managed landing page with Sanity Studio to manage events, information and donations easily.",
          tags: ["Vite.js", "React", "sanity.io", "Material MUI"],
          year: "2025",
          client: "SaaS / Own product",
          image:
            "https://res.cloudinary.com/dexm7t5ty/image/upload/v1778114025/puerta-de-paz_w3zgv2.png",
          link: "https://template-church-neon.vercel.app/",
          span: "large",
        },
        {
          id: "p2",
          title: "Frident",
          description:
            "Premium website for an orthodontic clinic, integrating two automated systems for patient acquisition.",
          tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
          year: "2026",
          client: "Freelance client",
          image:
            "https://res.cloudinary.com/dexm7t5ty/image/upload/v1778113682/frident1_mfthfp.png",
          link: "https://frident.vercel.app/",
          span: "small",
        },
        {
          id: "p3",
          title: "Dolar Actual",
          description:
            "Real-time financial portal with dollar rates and a news aggregator for economic, political and financial content.",
          tags: ["Next.js", "Tailwind CSS", "Mongo DB"],
          year: "2026",
          client: "Personal project",
          image:
            "https://res.cloudinary.com/dexm7t5ty/image/upload/v1778113681/dolar-actual_i8rj50.png",
          link: "https://www.dolaractual.com.ar/",
          span: "full",
        },
      ],
    },
    contact: {
      sectionTitle: "Let's start your next project.",
      description:
        "Have an idea, product or technical challenge? Write me and let's start the conversation.",
      labels: {
        name: "Name",
        email: "Email",
        message: "Message",
      },
      reply24h: "I reply within 24h",
      submit: "Send",
      sending: "Sending...",
      validation: {
        name: "Your name is required",
        email: "Your email is required",
        invalidEmail: "Invalid email",
        message: "Tell me a bit more (minimum 10 characters)",
      },
      toast: {
        success: "Message sent",
        successDescription: "I reply within 24h.",
        error: "Something went wrong",
        errorDescription: "Try again later.",
      },
    },
    footer: {
      allRightsReserved: "All rights reserved.",
      designed: "Designed and developed with care",
      top: "Top",
    },
  },
};
