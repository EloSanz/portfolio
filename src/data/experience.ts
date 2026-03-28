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

const baseExperience = {
  meli: {
    id: "meli",
    role: "Backend Software Developer",
    company: "Mercado Libre",
    skills: ["Java", "Spring Boot", "Redis", "Kafka", "SQL", "NoSQL", "MCP", "FastMCP", "Python", "Docker", "Datadog", "Grafana", "Scrum"]
  },
  sirius: {
    id: "sirius",
    role: "Software Developer",
    company: "Sirius Software",
    skills: ["Node.js", "TypeScript", "AWS Lambda", "PostgreSQL", "Prisma", "Nginx", "CI/CD"]
  },
  unlam: {
    id: "unlam-conicet",
    role: "Full Stack Developer",
    skills: ["Angular", "Spring Boot", "Java", "SQL", "Linux VPS"]
  }
};

export const experiencesES: Experience[] = [
  {
    ...baseExperience.meli,
    period: "Dic 2024 – Actualidad",
    description: "Desarrollo, optimización y mantenimiento de APIs de alto rendimiento y microservicios.",
    highlights: [
      "Implementación de estrategias de caché con Redis y colas asincrónicas con Kafka.",
      "Gestión de bases de datos MySQL, PostgreSQL y MongoDB en alta disponibilidad.",
      "Diseño e integración de MCP Servers (FastMCP) con sistemas RAG para troubleshooting interno.",
      "Pruebas E2E automatizadas empleando Karate y despliegues robustos."
    ],
    details: "Conozco gran parte de las APIs del marketplace y soy owner de una aplicación que orquesta ventas E2E en Brasil bajo la modalidad Direct Fulfillment (sin stock físico e integración directa con vendors como Electrolux, Mondial y Whirlpool). También entiendo a fondo el negocio 3PL, donde el almacenamiento y la logística de entrega corren por parte de un servicio de logística de terceros."
  },
  {
    ...baseExperience.sirius,
    period: "Ene 2024 – Dic 2024",
    description: "Desarrollo Full-stack para diversos clientes como Emergencias Salud, Wag y Argenetics.",
    highlights: [
      "Arquitecto de soluciones serverless con AWS Lambda y Python, con encriptación y fragmentación (chunking).",
      "Diseño de esquemas de bases de datos escalables utilizando Prisma ORM y PostgreSQL.",
      "Automatización de reportes de negocio vía integración de Node.js con API de Notion.",
      "Gestión de infraestructura VPS (DNS, Nginx, SSH) y automatización de despliegues (GitHub Actions)."
    ],
    details: "Desarrollo del front-end para Emergencias Salud, y gestión del backoffice para Wag (startup de USA). En clientes como Argenetics, implementé y automaticé funciones en AWS Lambda para el procesamiento analítico de muestras de estudios de laboratorio y cálculos biomédicos complejos."
  },
  {
    ...baseExperience.unlam,
    company: "Centro de Desarrollo e Investigaciones Tecnológicas UNLaM",
    period: "Jul 2023 – Ene 2024",
    description: "Desarrollador Full Stack e Investigador Tecnológico en proyecto financiado por CONICET.",
    highlights: [
      "Modelado y optimización de estructuras de datos relacionales, mejorando la eficiencia de los sistemas.",
      "Traducción de necesidades de negocio en especificaciones técnicas mediante elicitación directa.",
      "Implementación de interfaces de usuario funcionales y responsivas mediante maquetado UI en Angular.",
      "Responsable del despliegue continuo y mantenimiento preventivo en infraestructura VPS propia."
    ],
    details: "Desarrollo de un repositorio de contenidos para docentes avalado por la UNLaM y financiado por el CONICET, enfocado fuertemente en facilitar material de estudio adaptado para alumnos con discapacidad visual, auditiva y cognitiva. Trabajé tanto en el análisis y elicitación de usabilidad inclusiva, como en la arquitectura y despliegue del software mediante integraciones full stack."
  }
];

export const experiencesEN: Experience[] = [
  {
    ...baseExperience.meli,
    period: "Dec 2024 – Present",
    description: "Development, optimization, and maintenance of high-performance APIs and microservices.",
    highlights: [
      "Implementation of caching strategies with Redis and asynchronous queues with Kafka.",
      "High-availability management of MySQL, PostgreSQL, and MongoDB databases.",
      "Design and integration of MCP Servers (FastMCP) with RAG systems for internal troubleshooting.",
      "Automated E2E testing using Karate and robust deployments."
    ],
    details: "I am deeply familiar with a significant portion of the marketplace APIs and act as the owner of an application that orchestrates E2E sales in Brazil under the Direct Fulfillment modality (without physical stock, integrating directly with vendors like Electrolux, Mondial, and Whirlpool). I also possess comprehensive knowledge of the 3PL business, where storage and delivery logistics are handled by third-party logistics services."
  },
  {
    ...baseExperience.sirius,
    period: "Jan 2024 – Dec 2024",
    description: "Full-stack development for various clients such as Emergencias Salud, Wag, and Argenetics.",
    highlights: [
      "Architected serverless solutions with AWS Lambda and Python, including encryption and chunking.",
      "Design of scalable database schemas using Prisma ORM and PostgreSQL.",
      "Automation of business reports via Node.js integration with the Notion API.",
      "VPS infrastructure management (DNS, Nginx, SSH) and deployment automation (GitHub Actions)."
    ],
    details: "Developed the front-end for Emergencias Salud and managed the backoffice for Wag (a US startup). For clients like Argenetics, I implemented and automated AWS Lambda functions for analytical processing of laboratory study samples and complex biomedical calculations."
  },
  {
    ...baseExperience.unlam,
    company: "UNLaM Tech Research Center",
    period: "Jul 2023 – Jan 2024",
    description: "Full Stack Developer and Technology Researcher on a CONICET-funded project.",
    highlights: [
      "Modeling and optimization of relational data structures, significantly improving system efficiency.",
      "Translation of business needs into technical specifications through direct elicitation.",
      "Implementation of functional and responsive user interfaces using Angular UI mockups.",
      "Responsible for continuous deployment and preventive maintenance on our own VPS infrastructure."
    ],
    details: "Developed a content repository for educators, endorsed by UNLaM and funded by CONICET, strongly focused on providing study material adapted for students with visual, auditory, and cognitive disabilities. My work included analysis and elicitation of inclusive usability, as well as software architecture and deployment through full stack integrations."
  }
];
