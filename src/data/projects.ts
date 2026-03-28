export interface Project {
  title: string;
  description: string;
  stack: string[];
  slug: string;
  url?: string;
  image?: string;
  hoverImage?: string;
}

const baseProjects = {
  icards: {
    stack: ["Next.js", "LLMs", "FastMCP", "Tailwind", "PostgreSQL", "React"],
    slug: "icards-ai",
    url: "https://icards.fun",
    image: "/landingpage_screen_icards.png",
    hoverImage: "/home_icards_screen.png"
  },
  so: {
    stack: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
    slug: "so-website",
    url: "https://so-website-learn.vercel.app/",
    image: "/so_screen.png",
    hoverImage: "/so_2.png"
  }
}

export const projectsES: Project[] = [
  {
    ...baseProjects.icards,
    title: "iCards (icards.fun)",
    description: "Plataforma de Flashcards potenciada por IA. Integración de LLMs para generación automática de contenido y servidores MCP personalizados para maximizar la retención del conocimiento."
  },
  {
    ...baseProjects.so,
    title: "Sistemas Operativos para Valientes",
    description: "Plataforma educativa de Sistemas Operativos. Parseo de hojas de ruta, manejo interactivo de diagramas de memoria, TLB y traducciones virtuales."
  }
];

export const projectsEN: Project[] = [
  {
    ...baseProjects.icards,
    title: "iCards (icards.fun)",
    description: "AI-powered Flashcards platform. LLM integration for automatic content generation and custom MCP servers to maximize knowledge retention."
  },
  {
    ...baseProjects.so,
    title: "Operating Systems for the Brave",
    description: "Educational platform for Operating Systems. Roadmap parsing, interactive handling of memory diagrams, TLB, and virtual translations."
  }
];
