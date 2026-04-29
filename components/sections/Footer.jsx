import React from "react";
import { ArrowUp } from "lucide-react";
import { VscGithubAlt } from "react-icons/vsc";
import { FiLinkedin } from "react-icons/fi";
import { profile } from "../../data/mock";

const Footer = () => {
  const top = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <footer className="relative w-full md:pl-[88px] border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <div
              className="font-display text-2xl md:text-3xl"
              style={{ color: "var(--text)", fontWeight: 800, letterSpacing: "-0.02em" }}
            >
              {profile.name}.
            </div>
            <div className="mt-2 font-grotesk text-xs tracking-[0.28em] uppercase text-white/45">
              {profile.title} · {profile.location}
            </div>
          </div>

          <div className="flex items-center gap-4">
                <a
                href={profile.social.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 inline-flex items-center justify-center border transition-colors duration-500 hover:text-[var(--accent)]"
                style={{ borderColor: "rgba(224,225,221,0.15)", color: "var(--text)" }}
                >
                <VscGithubAlt size={20} />
                </a>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 inline-flex items-center justify-center border transition-colors duration-500 hover:text-[var(--accent)]"
              style={{ borderColor: "rgba(224,225,221,0.15)", color: "var(--text)" }}
            >
              <FiLinkedin size={20} strokeWidth={1.5} />
            </a>
            <button
              type="button"
              onClick={top}
              aria-label="Volver arriba"
              className="inline-flex items-center gap-2 px-4 h-10 border font-grotesk text-[11px] tracking-[0.28em] uppercase transition-colors duration-500"
              style={{ borderColor: "rgba(0,210,255,0.35)", color: "var(--accent)" }}
            >
              Top
              <ArrowUp size={14} strokeWidth={1.6} />
            </button>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <span className="font-grotesk text-[11px] tracking-[0.24em] uppercase text-white/35">
            © {new Date().getFullYear()} {profile.name}. Todos los derechos reservados.
          </span>
          <span className="font-grotesk text-[11px] tracking-[0.24em] uppercase text-white/30">
            Diseñado y desarrollado con cuidado · v1.0
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
