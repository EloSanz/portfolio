"use client";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { ExternalLink, Code2, Database, LayoutTemplate, Server, GitBranch, Terminal, Sparkles, GraduationCap, Kanban } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import { experiences } from "@/data/experience";
import { FaGithub, FaLinkedin, FaYoutube, FaJava, FaLinux, FaAws } from "react-icons/fa";
import { SiPostgresql, SiMongodb, SiRedis, SiApachekafka, SiSpringboot, SiPython, SiDocker, SiNodedotjs, SiTypescript, SiPrisma, SiNginx, SiAngular, SiDatadog, SiGrafana } from "react-icons/si";

const getSkillIcon = (skill: string) => {
  const s = skill.toLowerCase();
  if (s.includes("java") && !s.includes("script")) return <FaJava className="w-3.5 h-3.5" />;
  if (s.includes("spring")) return <SiSpringboot className="w-3.5 h-3.5" />;
  if (s.includes("redis")) return <SiRedis className="w-3.5 h-3.5" />;
  if (s.includes("kafka")) return <SiApachekafka className="w-3.5 h-3.5" />;
  if (s.includes("postgres")) return <SiPostgresql className="w-3.5 h-3.5" />;
  if (s.includes("sql") && !s.includes("nosql")) return <Database className="w-3.5 h-3.5" />;
  if (s.includes("nosql") || s.includes("mongo")) return <SiMongodb className="w-3.5 h-3.5" />;
  if (s.includes("mcp")) return <Sparkles className="w-3.5 h-3.5" />;
  if (s.includes("python")) return <SiPython className="w-3.5 h-3.5" />;
  if (s.includes("docker")) return <SiDocker className="w-3.5 h-3.5" />;
  if (s.includes("node")) return <SiNodedotjs className="w-3.5 h-3.5" />;
  if (s.includes("typescript")) return <SiTypescript className="w-3.5 h-3.5" />;
  if (s.includes("lambda") || s.includes("aws")) return <FaAws className="w-3.5 h-3.5" />;
  if (s.includes("prisma")) return <SiPrisma className="w-3.5 h-3.5" />;
  if (s.includes("nginx")) return <SiNginx className="w-3.5 h-3.5" />;
  if (s.includes("ci/cd") || s.includes("github")) return <GitBranch className="w-3.5 h-3.5" />;
  if (s.includes("angular")) return <SiAngular className="w-3.5 h-3.5" />;
  if (s.includes("vps") || s.includes("linux")) return <FaLinux className="w-3.5 h-3.5" />;
  if (s.includes("datadog")) return <SiDatadog className="w-3.5 h-3.5" />;
  if (s.includes("grafana")) return <SiGrafana className="w-3.5 h-3.5" />;
  if (s.includes("scrum") || s.includes("agile")) return <Kanban className="w-3.5 h-3.5" />;
  return <Terminal className="w-3.5 h-3.5" />;
};

export default function Home() {
  return (
    <>
      {/* ================= HERO BENTO GRID ================= */}
      <section id="about" className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-[auto_auto] gap-4">

        {/* Celda Principal: Saludo */}
        <div className="md:col-span-2 md:row-span-1 rounded-3xl bg-zinc-900 border border-zinc-800/60 p-8 flex flex-col justify-center relative overflow-hidden group hover:border-zinc-700 transition-colors">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <div className="relative z-10 w-full">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Hola, soy <span className="text-yellow-500">Eliseo Tomás Sanz</span>.
            </h1>
            <p className="text-lg text-zinc-400 max-w-lg mb-6 leading-relaxed">
              Backend Software Developer en <strong className="text-zinc-100">Mercado Libre</strong>. Desarrollador apasionado con una sólida formación en sistemas backend de alto rendimiento orientados al producto real.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="#projects" className={buttonVariants({ variant: "default", className: "bg-yellow-500 text-zinc-950 hover:bg-yellow-400 font-semibold border-none" })}>
                Ver Proyectos
              </Link>
              <a href="https://github.com/EloSanz/" target="_blank" rel="noopener noreferrer" aria-label="Github Profile" className={buttonVariants({ variant: "outline", size: "icon", className: "border-zinc-700 bg-zinc-900 text-zinc-300 hover:text-yellow-400 hover:border-yellow-500/50" })}>
                <FaGithub className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/eliseo-tom%C3%A1s-sanz-3564a125a/?locale=en" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className={buttonVariants({ variant: "outline", size: "icon", className: "border-zinc-700 bg-zinc-900 text-zinc-300 hover:text-yellow-400 hover:border-yellow-500/50" })}>
                <FaLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Celda: Foto Working / Lifestyle con Filtro */}
        <div className="relative md:col-span-1 md:row-span-2 rounded-3xl overflow-hidden border border-zinc-800/60 group min-h-[350px]">
          <div className="absolute inset-0 bg-zinc-900/60 mix-blend-multiply z-10 group-hover:bg-zinc-900/40 transition-colors duration-500 pointer-events-none" />
          <Image
            src="/pp.jpeg"
            alt="Eliseo Tomás Sanz"
            fill
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            priority
          />
        </div>

        {/* Celdas pequeñas: Core Stats (Estilo Ingeniero / Consola) */}
        <div className="rounded-3xl bg-zinc-900 border border-zinc-800/60 p-6 flex flex-col justify-center font-mono hover:border-yellow-500/30 transition-colors group">
          <span className="text-yellow-500 mb-2 group-hover:scale-110 transition-transform origin-left"><Terminal className="w-5 h-5" /></span>
          <span className="text-3xl font-bold text-zinc-100">+3</span>
          <span className="text-sm text-zinc-500 uppercase tracking-widest mt-1">Años Exp.</span>
        </div>
        <div className="rounded-3xl bg-zinc-900 border border-zinc-800/60 p-6 flex flex-col justify-center font-mono hover:border-yellow-500/30 transition-colors group">
          <span className="text-yellow-500 mb-2 group-hover:scale-110 transition-transform origin-left"><GitBranch className="w-5 h-5" /></span>
          <span className="text-3xl font-bold text-zinc-100">+40</span>
          <span className="text-sm text-zinc-500 uppercase tracking-widest mt-1">Materias UNLaM</span>
        </div>

      </section>

      {/* ================= EXPERIENCIA TÉCNICA ================= */}
      <section id="experience" className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Experiencia Profesional</h2>
          <p className="text-zinc-400 mt-2 font-mono text-sm border-l-2 border-yellow-500 pl-4 py-1">
            Enfoque técnico: Sistemas altamente disponibles, Serverless e Integración de IA.
          </p>
        </div>
        <div className="relative border-l border-zinc-800 ml-4 space-y-12">

          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-8 group">
              <span className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.5)] group-hover:scale-125 transition-transform"></span>
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                <h3 className="text-xl font-bold text-zinc-100 group-hover:text-yellow-400 transition-colors">
                  {exp.role} <span className="text-zinc-500 font-normal">@ {exp.company}</span>
                </h3>
                <span className="text-sm font-mono text-yellow-500/80 mt-1 md:mt-0">{exp.period}</span>
              </div>
              <p className="text-zinc-400 leading-relaxed max-w-3xl mb-4">
                {exp.description}
              </p>
              <ul className="list-none text-sm text-zinc-300 space-y-2 mb-4">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="text-yellow-500 mt-0.5">▹</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mb-4">
                {exp.skills.map(skill => (
                  <span key={skill} className="flex items-center gap-1.5 px-2.5 py-1 bg-zinc-800/40 text-zinc-300 rounded-md text-xs font-mono border border-zinc-800/80 hover:bg-zinc-800/80 hover:border-yellow-500/50 transition-colors group/skill">
                    <span className="text-zinc-500 group-hover/skill:text-yellow-500 transition-colors">
                      {getSkillIcon(skill)}
                    </span>
                    {skill}
                  </span>
                ))}
              </div>

              {exp.details && (
                <details className="group/details bg-zinc-900/40 rounded-xl border border-zinc-800/60 overflow-hidden transition-all duration-300 open:bg-zinc-900">
                  <summary className="p-3 text-sm font-medium text-zinc-300 cursor-pointer list-none flex items-center justify-between hover:bg-zinc-800/50 transition-colors focus:outline-none">
                    <span className="flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-yellow-500" />
                      Profundizar rol e impacto de negocio
                    </span>
                    <span className="text-yellow-500 transition-transform duration-300 group-open/details:rotate-180">
                      ↓
                    </span>
                  </summary>
                  <div className="p-4 pt-0 text-sm text-zinc-400 leading-relaxed border-t border-zinc-800/30">
                    <div className="pt-3">
                      {exp.details}
                    </div>
                  </div>
                </details>
              )}
            </div>
          ))}

        </div>
      </section>

      {/* ================= PROYECTOS (CASE STUDIES) ================= */}
      <section id="projects" className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Proyectos Destacados</h2>
          <p className="text-zinc-400 mt-2 font-mono text-sm">Desarrollos personales y herramientas de impacto.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <Card key={idx} className="flex flex-col h-full bg-zinc-900/40 border-zinc-800/60 backdrop-blur-md hover:bg-zinc-900/80 transition-all duration-300 hover:border-yellow-500/30 group overflow-hidden">
              {project.image && (
                <div className="relative w-full h-48 border-b border-zinc-800/60 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className={`object-cover object-top transition-all duration-500 ${project.hoverImage ? 'group-hover:opacity-0 group-hover:scale-100' : 'group-hover:scale-105'}`}
                  />
                  {project.hoverImage && (
                    <Image
                      src={project.hoverImage}
                      alt={`${project.title} hover preview`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-top opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    />
                  )}
                  <div className="absolute inset-0 bg-zinc-950/20 group-hover:bg-zinc-950/0 transition-colors duration-500" />
                </div>
              )}
              <CardHeader className="flex-1">
                <CardTitle className="flex justify-between items-center group-hover:text-yellow-400 transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-zinc-400 pt-2 leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <Badge variant="secondary" key={tech} className="bg-zinc-800/50 text-zinc-300 hover:bg-zinc-700 font-mono text-xs border border-zinc-700">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="mt-auto">
                {project.url ? (
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: "outline", className: "w-full border-zinc-700 text-zinc-300 hover:text-yellow-400 hover:border-yellow-500/50 bg-transparent flex items-center justify-center gap-2" })}>
                    Visitar Proyecto <ExternalLink className="w-4 h-4" />
                  </a>
                ) : (
                  <Link href={`/projects/${project.slug}`} className={buttonVariants({ variant: "outline", className: "w-full border-zinc-700 text-zinc-300 hover:text-yellow-400 hover:border-yellow-500/50 bg-transparent" })}>
                    Deep Dive Técnico
                  </Link>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* ================= TECH STACK & TOOLS ================= */}
      <section className="space-y-8 pb-12">
        <h2 className="text-3xl font-bold tracking-tight">Especialidad Tech</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          {/* Main Languages */}
          <div className="rounded-2xl border border-zinc-800/60 p-6 flex flex-col items-center gap-4 bg-zinc-900/30 hover:bg-zinc-900 hover:border-yellow-500/30 transition-colors group">
            <Code2 className="w-8 h-8 text-yellow-500 group-hover:scale-110 transition-transform" />
            <div className="text-center">
              <div className="font-mono text-sm font-bold text-zinc-300 group-hover:text-yellow-400 transition-colors">Lenguajes</div>
              <div className="text-xs text-zinc-500 mt-1">Java, TypeScript, Python</div>
            </div>
          </div>

          {/* Infrastructure */}
          <div className="rounded-2xl border border-zinc-800/60 p-6 flex flex-col items-center gap-4 bg-zinc-900/30 hover:bg-zinc-900 hover:border-yellow-500/30 transition-colors group">
            <Server className="w-8 h-8 text-yellow-500 group-hover:scale-110 transition-transform" />
            <div className="text-center">
              <div className="font-mono text-sm font-bold text-zinc-300 group-hover:text-yellow-400 transition-colors">Infra</div>
              <div className="text-xs text-zinc-500 mt-1">Docker, AWS Lambda, Nginx</div>
            </div>
          </div>

          {/* Databases & Queue */}
          <div className="rounded-2xl border border-zinc-800/60 p-6 flex flex-col items-center gap-4 bg-zinc-900/30 hover:bg-zinc-900 hover:border-yellow-500/30 transition-colors group">
            <Database className="w-8 h-8 text-yellow-500 group-hover:scale-110 transition-transform" />
            <div className="text-center">
              <div className="font-mono text-sm font-bold text-zinc-300 group-hover:text-yellow-400 transition-colors">Data & Cola</div>
              <div className="text-xs text-zinc-500 mt-1">PostgreSQL, Redis, Kafka</div>
            </div>
          </div>

          {/* Frameworks & AI */}
          <div className="rounded-2xl border border-zinc-800/60 p-6 flex flex-col items-center gap-4 bg-zinc-900/30 hover:bg-zinc-900 hover:border-yellow-500/30 transition-colors group">
            <LayoutTemplate className="w-8 h-8 text-yellow-500 group-hover:scale-110 transition-transform" />
            <div className="text-center">
              <div className="font-mono text-sm font-bold text-zinc-300 group-hover:text-yellow-400 transition-colors">Frameworks / Ecosistema</div>
              <div className="text-xs text-zinc-500 mt-1">Spring Boot, Next.js, FastMCP</div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= ABOUT ME ================= */}
      <section id="about-me" className="space-y-8 pb-12 border-t border-zinc-800/60 pt-12">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Sobre Mí & Comunidad</h2>
          <p className="text-zinc-400 mt-2 font-mono text-sm border-l-2 border-yellow-500 pl-4 py-1">
            Más allá del código: IA, Automatización y Educación.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* AI Interest */}
          <div className="rounded-3xl bg-zinc-900/40 border border-zinc-800/60 p-8 flex flex-col gap-4 relative overflow-hidden group hover:bg-zinc-900/80 transition-all duration-300 hover:border-yellow-500/30">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Sparkles className="w-24 h-24 text-yellow-500" />
            </div>
            <div className="flex items-center gap-3 relative z-10">
              <div className="p-3 rounded-xl bg-zinc-800/50 border border-zinc-700/50">
                <Sparkles className="w-6 h-6 text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold text-zinc-100">Pasión por la IA</h3>
            </div>
            <p className="text-zinc-400 leading-relaxed relative z-10">
              En mi día a día trabajo constantemente resolviendo problemas complejos utilizando LLMs como Claude y Gemini. Me encanta iterar distintos modelos, crear <strong className="text-zinc-300">Servidores MCP</strong> a medida, integrar flujos de tipo <strong className="text-zinc-300">RAG</strong> y desarrollar frameworks orientados a agentes autónomos empleando Python.
            </p>
          </div>

          {/* Mentoring & YouTube */}
          <div className="rounded-3xl bg-zinc-900/40 border border-zinc-800/60 p-8 flex flex-col gap-4 relative overflow-hidden group hover:bg-zinc-900/80 transition-all duration-300 hover:border-yellow-500/30">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <GraduationCap className="w-24 h-24 text-yellow-500" />
            </div>
            <div className="flex items-center gap-3 relative z-10">
              <div className="p-3 rounded-xl bg-zinc-800/50 border border-zinc-700/50">
                <GraduationCap className="w-6 h-6 text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold text-zinc-100">Team Player & Mentoring</h3>
            </div>
            <p className="text-zinc-400 leading-relaxed relative z-10">
              Fui mentor en materias de programación universitarias (UNLaM), ayudando a múltiples estudiantes a sentar bases sólidas en algoritmos y estructuras de datos. Además, comparto material educativo en mi canal de YouTube, donde explico código en alto y bajo nivel como C.
            </p>
            <div className="mt-auto pt-4 relative z-10">
              <a href="https://www.youtube.com/@Doc1703_" target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: "outline", className: "w-fit border-zinc-700 text-zinc-300 hover:text-red-500 hover:border-red-500/50 bg-zinc-900 flex items-center gap-2 transition-colors" })}>
                <FaYoutube className="w-5 h-5" /> Visitar Canal
              </a>
            </div>
          </div>

        </div>
      </section>

    </>
  );
}
