import React, { useEffect, useRef, useState } from "react";
import { ArrowDownRight, Send } from "lucide-react";
import { profile } from "../../data/mock";

// Custom typed text effect (replaces react-typed dependency)
const useTyped = (words, opts = {}) => {
  const { typeSpeed = 80, deleteSpeed = 45, holdMs = 1400 } = opts;
  const [text, setText] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [phase, setPhase] = useState("typing");

  useEffect(() => {
    const current = words[wordIdx % words.length];
    let t;
    if (phase === "typing") {
      if (text.length < current.length) {
        t = setTimeout(() => setText(current.slice(0, text.length + 1)), typeSpeed);
      } else {
        t = setTimeout(() => setPhase("deleting"), holdMs);
      }
    } else if (phase === "deleting") {
      if (text.length > 0) {
        t = setTimeout(() => setText(current.slice(0, text.length - 1)), deleteSpeed);
      } else {
        setWordIdx((i) => (i + 1) % words.length);
        setPhase("typing");
      }
    }
    return () => clearTimeout(t);
  }, [text, phase, wordIdx, words, typeSpeed, deleteSpeed, holdMs]);

  return text;
};

const MagneticButton = ({ children, onClick, primary = false, ariaLabel, icon: Icon }) => {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const onMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) * 0.18;
    const dy = (e.clientY - cy) * 0.25;
    const clamp = (v) => Math.max(-15, Math.min(15, v));
    setPos({ x: clamp(dx), y: clamp(dy) });
  };
  const reset = () => setPos({ x: 0, y: 0 });

  return (
    <button
      ref={ref}
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      onMouseMove={primary ? onMouseMove : undefined}
      onMouseLeave={reset}
      className="group relative inline-flex items-center gap-3 px-7 py-4 font-grotesk text-[12px] tracking-[0.28em] uppercase border transition-all duration-500 cursor-pointer"
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px)`,
        color: primary ? "#0d1421" : "var(--text)",
        background: primary ? "var(--accent)" : "transparent",
        borderColor: primary ? "var(--accent)" : "rgba(224,225,221,0.35)",
        boxShadow: primary ? "var(--glow-accent)" : "none",
      }}
    >
      <span className="btn-travel" aria-hidden />
      <span className="relative z-10">{children}</span>
      {Icon && <Icon size={16} strokeWidth={1.6} className="relative z-10" />}
    </button>
  );
};

const Hero = () => {
  const typed = useTyped(profile.rotatingRoles);
  const goTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen overflow-hidden flex items-end"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={profile.heroImage}
          alt=""
          aria-hidden
          className="w-full h-full object-cover"
          style={{ opacity: 0.7 }}
        />
        {/* <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 70% 35%, rgba(0,210,255,0.08), transparent 55%), linear-gradient(180deg, rgba(13,20,33,0.35) 0%, rgba(13,20,33,0.55) 45%, rgba(27,38,59,0.95) 80%, var(--bg) 100%)",
          }}
        /> */}
      </div>

      <div className="relative z-10 w-full md:pl-[88px]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 pb-24 md:pb-28 pt-32">
          <div className="flex items-center gap-3 mb-8 reveal">
            <span className="h-px w-12" style={{ background: "var(--accent)" }} />
            <span className="font-grotesk text-[11px] tracking-[0.32em] uppercase text-[var(--accent)]">
              Portfolio · 2026 · Full Stack Developer
            </span>
          </div>

          <h1
            className="font-display reveal"
            style={{
              fontWeight: 800,
              lineHeight: 0.92,
              letterSpacing: "-0.03em",
              fontSize: "clamp(3rem, 9vw, 9rem)",
              color: "var(--text)",
            }}
          >
            {profile.name}
          </h1>

          <div
            className="mt-6 flex flex-wrap items-baseline gap-3 reveal"
            style={{ color: "rgba(224,225,221,0.85)" }}
          >
            <span className="font-grotesk text-base md:text-xl tracking-wide">
              {profile.subtitlePrefix}
            </span>
            <span
              className="font-display text-2xl md:text-4xl"
              style={{ color: "var(--accent)", fontWeight: 700 }}
            >
              {typed}
              <span className="typed-caret" aria-hidden>
                |
              </span>
            </span>
          </div>

          <p
            className="mt-8 max-w-xl font-grotesk text-base md:text-lg leading-relaxed reveal"
            style={{ color: "rgba(224,225,221,0.7)" }}
          >
            {profile.tagline}
          </p>

          <div className="mt-12 flex flex-wrap gap-4 reveal">
            <MagneticButton
              primary
              onClick={() => goTo("projects")}
              ariaLabel="Ver proyectos"
              icon={ArrowDownRight}
            >
              View projects
            </MagneticButton>
            <MagneticButton
              onClick={() => goTo("contact")}
              ariaLabel="Contactar"
              icon={Send}
            >
              Contact me
            </MagneticButton>
          </div>

          <div className="mt-20 flex items-center gap-4 reveal">
            <span className="font-grotesk text-[10px] tracking-[0.4em] uppercase text-white/40">
              Scroll
            </span>
            <span
              className="h-[1px] w-16"
              style={{ background: "rgba(255,255,255,0.25)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;    