import React from "react";
import { Code2, Server, Database, Wrench } from "lucide-react";
import { profile, aboutCopy, stats, skills } from "../../data/mock";

const categoryIcon = {
  Frontend: Code2,
  Backend: Server,
  "Bases de datos": Database,
  Tooling: Wrench,
};

const About = () => {
  return (
    <section id="about" className="relative w-full md:pl-[88px] py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-14 reveal">
          <span
            className="font-grotesk text-xs tracking-[0.32em] uppercase"
            style={{ color: "var(--accent)" }}
          >
            {aboutCopy.sectionNumber}
          </span>
          <span className="h-px w-12" style={{ background: "var(--accent)" }} />
          <h2
            className="font-display text-3xl md:text-5xl"
            style={{ color: "var(--text)", fontWeight: 700, letterSpacing: "-0.02em" }}
          >
            {aboutCopy.sectionTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Bio */}
          <div className="lg:col-span-7 reveal">
            <div className="space-y-6">
              {aboutCopy.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="font-grotesk text-base md:text-lg leading-relaxed"
                  style={{ color: "rgba(224,225,221,0.78)" }}
                >
                  {p}
                </p>
              ))}
            </div>

            {/* Skills */}
            <div className="mt-14 space-y-8">
              {skills.map((group) => {
                const Icon = categoryIcon[group.category] || Code2;
                return (
                  <div key={group.category} className="reveal">
                    <div className="flex items-center gap-3 mb-4">
                      <Icon size={16} strokeWidth={1.5} style={{ color: "var(--accent)" }} />
                      <span className="font-grotesk text-[11px] tracking-[0.3em] uppercase text-white/55">
                        {group.category}
                      </span>
                      <span className="flex-1 h-px bg-white/5" />
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((it) => (
                        <span
                          key={it}
                          className="font-grotesk text-xs tracking-wide px-3 py-2 border transition-colors duration-500"
                          style={{
                            borderColor: "rgba(224,225,221,0.12)",
                            color: "rgba(224,225,221,0.9)",
                            background: "rgba(13,20,33,0.5)",
                            backdropFilter: "blur(10px)",
                          }}
                        >
                          {it}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right column: portrait + stats */}
          <div className="lg:col-span-5">
            <div className="reveal relative">
              <div
                aria-hidden
                className="absolute -inset-2 z-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(0,210,255,0.18), rgba(255,159,28,0.10))",
                  filter: "blur(20px)",
                  opacity: 0.45,
                }}
              />
              <div
                className="relative z-10 overflow-hidden border"
                style={{ borderColor: "rgba(224,225,221,0.12)" }}
              >
                <img
                  src={profile.avatar}
                  alt={`Retrato de ${profile.name}`}
                  className="w-full h-[420px] md:h-[520px] object-cover grayscale-[0.15]"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 55%, rgba(13,20,33,0.85) 100%)",
                  }}
                />
                <div className="absolute left-0 right-0 bottom-0 p-5 flex items-end justify-between">
                  <div>
                    <div className="font-grotesk text-[10px] tracking-[0.32em] uppercase text-white/50">
                      Based in
                    </div>
                    <div
                      className="font-display text-lg"
                      style={{ color: "var(--text)", fontWeight: 600 }}
                    >
                      {profile.location}
                    </div>
                  </div>
                  <span
                    className="font-grotesk text-[10px] tracking-[0.32em] uppercase"
                    style={{ color: "var(--accent)" }}
                  >
                    Available
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="reveal p-5 border"
                  style={{
                    borderColor: "rgba(224,225,221,0.08)",
                    background: "rgba(13,20,33,0.55)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <div
                    className="font-display text-3xl md:text-4xl"
                    style={{
                      color: "var(--text)",
                      fontWeight: 800,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {s.value}
                  </div>
                  <div className="mt-1 font-grotesk text-[11px] tracking-[0.18em] uppercase text-white/50">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
