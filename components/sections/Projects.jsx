import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../../data/mock";

const spanClass = (span) => {
  if (span === "large") return "lg:col-span-8";
  if (span === "small") return "lg:col-span-4";
  return "lg:col-span-12";
};

const ProjectCard = ({ project }) => {
  const [hover, setHover] = useState(false);
  const isFull = project.span === "full";
  return (
    <article
      className={`group relative overflow-hidden border reveal ${spanClass(project.span)}`}
      style={{ borderColor: "rgba(224,225,221,0.10)" }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className={`relative w-full overflow-hidden ${
          isFull ? "h-[420px] md:h-[560px]" : "h-[300px] md:h-[420px]"
        }`}
      >
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700"
          style={{ transform: hover ? "scale(1.04)" : "scale(1)" }}
        />
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            background:
              "linear-gradient(180deg, rgba(13,20,33,0.05) 0%, rgba(13,20,33,0.55) 60%, rgba(13,20,33,0.95) 100%)",
            opacity: hover ? 1 : 0.85,
          }}
        />
      </div>

      {/* Meta */}
      <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
        <span
          className="font-grotesk text-[10px] tracking-[0.32em] uppercase px-3 py-1"
          style={{
            background: "rgba(13,20,33,0.6)",
            backdropFilter: "blur(10px)",
            color: "var(--accent)",
            border: "1px solid rgba(0,210,255,0.25)",
          }}
        >
          {project.year}
        </span>
        <span className="font-grotesk text-[10px] tracking-[0.32em] uppercase text-white/60">
          {project.client}
        </span>
      </div>

      {/* Bottom content */}
      <div className="absolute left-0 right-0 bottom-0 p-6 md:p-8">
        <h3
          className="font-display text-2xl md:text-4xl mb-3"
          style={{ color: "var(--text)", fontWeight: 700, letterSpacing: "-0.02em" }}
        >
          {project.title}
        </h3>
        <p
          className="font-grotesk text-sm md:text-base max-w-xl mb-4 transition-all duration-500"
          style={{
            color: "rgba(224,225,221,0.78)",
            opacity: hover ? 1 : 0.0,
            transform: hover ? "translateY(0)" : "translateY(8px)",
            maxHeight: hover ? "200px" : "0",
            overflow: "hidden",
          }}
        >
          {project.description}
        </p>
        <div className="flex flex-wrap items-center gap-2 mb-5">
          {project.tags.map((t) => (
            <span
              key={t}
              className="font-grotesk text-[10px] tracking-[0.2em] uppercase px-2.5 py-1 border"
              style={{
                borderColor: "rgba(224,225,221,0.18)",
                color: "rgba(224,225,221,0.85)",
              }}
            >
              {t}
            </span>
          ))}
        </div>
        <a
          href={project.link}
          className="inline-flex items-center gap-2 font-grotesk text-xs tracking-[0.28em] uppercase transition-colors duration-500"
          style={{ color: hover ? "var(--accent)" : "var(--text)" }}
        >
          <span>Ver caso de estudio</span>
          <ArrowUpRight
            size={16}
            strokeWidth={1.6}
            className="transition-transform duration-500"
            style={{ transform: hover ? "translate(2px,-2px)" : "none" }}
          />
        </a>
      </div>

      {/* Border travel */}
      <span className="card-travel" aria-hidden />
    </article>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="relative w-full md:pl-[88px] py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14 reveal">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span
                className="font-grotesk text-xs tracking-[0.32em] uppercase"
                style={{ color: "var(--accent)" }}
              >
                02
              </span>
              <span
                className="h-px w-12"
                style={{ background: "var(--accent)" }}
              />
            </div>
            <h2
              className="font-display text-3xl md:text-5xl"
              style={{ color: "var(--text)", fontWeight: 700, letterSpacing: "-0.02em" }}
            >
              Proyectos seleccionados
            </h2>
          </div>
          <p
            className="font-grotesk text-sm md:text-base max-w-md"
            style={{ color: "rgba(224,225,221,0.65)" }}
          >
            Una selección de trabajos recientes — productos digitales, sitios para marcas y experiencias interactivas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-7">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
