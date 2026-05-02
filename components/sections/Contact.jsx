import React, { useState } from "react";
import { Send, Check, Mail, AlertCircle } from "lucide-react";
import { VscGithubAlt } from "react-icons/vsc";
import { FiLinkedin } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { profile } from "../../data/mock";

const FloatingField = ({ id, label, type = "text", multiline = false, value, onChange, error }) => {
  const [focused, setFocused] = useState(false);
  const active = focused || (value && value.length > 0);
  const InputTag = multiline ? "textarea" : "input";
  return (
    <div className="relative pt-6">
      <label
        htmlFor={id}
        className="absolute left-0 font-grotesk text-sm transition-all duration-500 pointer-events-none"
        style={{
          top: active ? 0 : 28,
          fontSize: active ? 11 : 15,
          letterSpacing: active ? "0.28em" : "0.04em",
          textTransform: active ? "uppercase" : "none",
          color: focused ? "var(--accent)" : "rgba(224,225,221,0.55)",
        }}
      >
        {label}
      </label>
      <InputTag
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        rows={multiline ? 4 : undefined}
        aria-label={label}
        className="w-full bg-transparent outline-none border-0 border-b py-3 font-grotesk text-base resize-none"
        style={{
          borderBottomColor: error
            ? "#ff6b6b"
            : focused
            ? "var(--accent)"
            : "rgba(224,225,221,0.2)",
          color: "var(--text)",
          boxShadow: focused ? "0 1px 0 0 var(--accent)" : "none",
          transition: "border-color 500ms cubic-bezier(0.16,1,0.3,1), box-shadow 500ms",
        }}
      />
      {error && (
        <div
          className="mt-2 flex items-center gap-2 font-grotesk text-xs"
          style={{ color: "#ff8a8a" }}
          role="alert"
        >
          <AlertCircle size={14} strokeWidth={1.6} />
          {error}
        </div>
      )}
    </div>
  );
};

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  // Initialize EmailJS
  React.useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
  }, []);

  const handle = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Tu nombre es requerido";
    if (!form.email.trim()) e.email = "Tu email es requerido";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email))
      e.email = "Email inválido";
    if (!form.message.trim() || form.message.trim().length < 10)
      e.message = "Contame un poco más (mínimo 10 caracteres)";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    
    try {
      const templateParams = {
        name: form.name,
        message: form.message,
      };

      console.log("Sending email with params:", {
        service: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        template: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        params: templateParams,
      });

      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams
      );

      console.log("Email sent successfully:", response);
      setStatus("success");
      toast.success("Mensaje enviado", { 
        description: "Te respondo en menos de 24h." 
      });
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 2400);
    } catch (err) {
      console.error("Error sending email:", err);
      console.error("Error details:", {
        status: err.status,
        text: err.text,
        message: err.message,
      });
      setStatus("error");
      toast.error("Algo falló", { 
        description: "Intentá de nuevo en un momento." 
      });
      setTimeout(() => setStatus("idle"), 2400);
    }
  };

  return (
    <section id="contact" className="relative w-full md:pl-[88px] py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left */}
          <div className="lg:col-span-5 reveal">
            <div className="flex items-center gap-4 mb-6">
              <span
                className="font-grotesk text-xs tracking-[0.32em] uppercase"
                style={{ color: "var(--accent)" }}
              >
                03
              </span>
              <span
                className="h-px w-12"
                style={{ background: "var(--accent)" }}
              />
            </div>
            <h2
              className="font-display text-4xl md:text-6xl mb-6"
              style={{ color: "var(--text)", fontWeight: 800, letterSpacing: "-0.025em", lineHeight: 1 }}
            >
              Iniciemos tu próximo proyecto.
            </h2>
            <p
              className="font-grotesk text-base md:text-lg max-w-md"
              style={{ color: "rgba(224,225,221,0.7)" }}
            >
              ¿Tenés una idea, producto o desafío técnico? Escribime y arranquemos la conversación.
            </p>

            <div className="mt-12 space-y-4">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 font-grotesk text-sm tracking-wide group"
                style={{ color: "var(--text)" }}
              >
                <Mail size={18} strokeWidth={1.5} style={{ color: "var(--accent)" }} />
                <span className="group-hover:text-[var(--accent)] transition-colors duration-500">
                  {profile.email}
                </span>
              </a>
              <div className="flex items-center gap-4 pt-4">
                <a
                  href={profile.social.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="w-11 h-11 inline-flex items-center justify-center border transition-all duration-500"
                  style={{ borderColor: "rgba(224,225,221,0.18)", color: "var(--text)" }}
                >
                  <VscGithubAlt size={20} />
                </a>
                <a
                  href={profile.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="w-11 h-11 inline-flex items-center justify-center border transition-all duration-500"
                  style={{ borderColor: "rgba(224,225,221,0.18)", color: "var(--text)" }}
                >
                  <FiLinkedin size={20} strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </div>

          {/* Right - form */}
          <div className="lg:col-span-7 reveal">
            <form
              onSubmit={onSubmit}
              noValidate
              className="p-6 md:p-10 border"
              style={{
                borderColor: "rgba(224,225,221,0.10)",
                background: "rgba(13,20,33,0.55)",
                backdropFilter: "blur(14px)",
              }}
            >
              <div className="space-y-2">
                <FloatingField
                  id="name"
                  label="Nombre"
                  value={form.name}
                  onChange={handle("name")}
                  error={errors.name}
                />
                <FloatingField
                  id="email"
                  label="Email"
                  type="email"
                  value={form.email}
                  onChange={handle("email")}
                  error={errors.email}
                />
                <FloatingField
                  id="message"
                  label="Mensaje"
                  multiline
                  value={form.message}
                  onChange={handle("message")}
                  error={errors.message}
                />
              </div>

              <div className="mt-10 flex items-center justify-between">
                <span className="font-grotesk text-[11px] tracking-[0.28em] uppercase text-white/45">
                  Respondo en menos de 24h
                </span>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  aria-label="Enviar mensaje"
                  className="relative inline-flex items-center justify-center transition-all duration-500"
                  style={{
                    width: status === "success" ? 56 : 168,
                    height: 56,
                    background:
                      status === "success" ? "var(--accent)" : "transparent",
                    color:
                      status === "success" ? "#0d1421" : "var(--text)",
                    border: `1px solid ${
                      status === "success" ? "var(--accent)" : "rgba(224,225,221,0.4)"
                    }`,
                    boxShadow: status === "success" ? "var(--glow-accent)" : "none",
                  }}
                >
                  {status === "success" ? (
                    <Check size={22} strokeWidth={2} />
                  ) : (
                    <span className="flex items-center gap-3 font-grotesk text-[12px] tracking-[0.28em] uppercase">
                      {status === "sending" ? "Enviando..." : "Enviar"}
                      <Send size={14} strokeWidth={1.6} />
                    </span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;