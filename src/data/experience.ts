export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
  skills: string[];
  details?: string;
}

export const experiences: Experience[] = [
  {
    id: "meli",
    role: "Backend Software Developer",
    company: "Mercado Libre",
    period: "Dic 2024 – Actualidad",
    description: "Desarrollo, optimización y mantenimiento de APIs de alto rendimiento y microservicios.",
    highlights: [
      "Implementación de estrategias de caché con Redis y colas asincrónicas con Kafka.",
      "Gestión de bases de datos MySQL, PostgreSQL y MongoDB en alta disponibilidad.",
      "Diseño e integración de MCP Servers (FastMCP) con sistemas RAG para troubleshooting interno.",
      "Pruebas E2E automatizadas empleando Karate y despliegues robustos."
    ],
    skills: ["Java", "Spring Boot", "Redis", "Kafka", "SQL", "NoSQL", "MCP", "FastMCP", "Python", "Docker", "Datadog", "Grafana", "Scrum"],
    details: "Conozco gran parte de las APIs del marketplace y soy owner de una aplicación que orquesta ventas E2E en Brasil bajo la modalidad Direct Fulfillment (sin stock físico e integración directa con vendors como Electrolux, Mondial y Whirlpool). También entiendo a fondo el negocio 3PL, donde el almacenamiento y la logística de entrega corren por parte de un servicio de logística de terceros."
  },
  {
    id: "sirius",
    role: "Software Developer",
    company: "Sirius Software",
    period: "Ene 2024 – Dic 2024",
    description: "Desarrollo Full-stack para diversos clientes como Emergencias Salud, Wag y Argenetics.",
    highlights: [
      "Arquitecto de soluciones serverless con AWS Lambda y Python, con encriptación y fragmentación (chunking).",
      "Diseño de esquemas de bases de datos escalables utilizando Prisma ORM y PostgreSQL.",
      "Automatización de reportes de negocio vía integración de Node.js con API de Notion.",
      "Gestión de infraestructura VPS (DNS, Nginx, SSH) y automatización de despliegues (GitHub Actions)."
    ],
    skills: ["Node.js", "TypeScript", "AWS Lambda", "PostgreSQL", "Prisma", "Nginx", "CI/CD"],
    details: "Desarrollo del front-end para Emergencias Salud, y gestión del backoffice para Wag (startup de USA). En clientes como Argenetics, implementé y automaticé funciones en AWS Lambda para el procesamiento analítico de muestras de estudios de laboratorio y cálculos biomédicos complejos."
  },
  {
    id: "unlam-conicet",
    role: "Full Stack Developer",
    company: "Centro de Desarrollo e Investigaciones Tecnológicas UNLaM",
    period: "Jul 2023 – Ene 2024",
    description: "Desarrollador Full Stack e Investigador Tecnológico en proyecto financiado por CONICET.",
    highlights: [
      "Modelado y optimización de estructuras de datos relacionales, mejorando la eficiencia de los sistemas.",
      "Traducción de necesidades de negocio en especificaciones técnicas mediante elicitación directa.",
      "Implementación de interfaces de usuario funcionales y responsivas mediante maquetado UI en Angular.",
      "Responsable del despliegue continuo y mantenimiento preventivo en infraestructura VPS propia."
    ],
    skills: ["Angular", "Spring Boot", "Java", "SQL", "Linux VPS"],
    details: "Desarrollo de un repositorio de contenidos para docentes avalado por la UNLaM y financiado por el CONICET, enfocado fuertemente en facilitar material de estudio adaptado para alumnos con discapacidad visual, auditiva y cognitiva. Trabajé tanto en el análisis y elicitación de usabilidad inclusiva, como en la arquitectura y despliegue del software mediante integraciones full stack."
  }
];
