export interface Project {
  title: string;
  description: string;
  stack: string[];
  slug: string;
  url?: string;
  image?: string;
  hoverImage?: string;
}

export const projects: Project[] = [
  {
    title: "iCards (icards.fun)",
    description: "Plataforma de Flashcards potenciada por IA. Integración de LLMs para generación automática de contenido y servidores MCP personalizados para maximizar la retención del conocimiento.",
    stack: ["Next.js", "LLMs", "FastMCP", "Tailwind"],
    slug: "icards-ai",
    url: "https://icards.fun",
    image: "/landingpage_screen_icards.png",
    hoverImage: "/home_icards_screen.png"
  },
  {
    title: "Sistemas Operativos para Valientes",
    description: "Plataforma educativa de Sistemas Operativos. Parseo de hojas de ruta, manejo interactivo de diagramas de memoria, TLB y traducciones virtuales.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    slug: "so-website",
    url: "https://so-website-learn.vercel.app/",
    image: "/so_screen.png",
    hoverImage: "/so_2.png"
  }
];
