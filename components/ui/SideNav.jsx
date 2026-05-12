import React, { useEffect, useRef, useState } from "react";
import { Home, User, FolderGit2, Mail, Menu, X, Globe } from "lucide-react";
import { useLocale } from "./LocaleProvider";

const iconMap = { Home, User, FolderGit2, Mail };

const SideNav = () => {
  const { locale, setLocale, t } = useLocale();
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const desktopLanguageMenuRef = useRef(null);
  const mobileLanguageMenuRef = useRef(null);
  const desktopLanguageButtonRef = useRef(null);
  const mobileLanguageButtonRef = useRef(null);

  const otherLocale = locale === "en" ? "es" : "en";
  const otherLocaleLabel = locale === "es" ? "English" : "Español";

  useEffect(() => {
    const onScroll = () => {
      const offsets = t.navItems.map((n) => {
        const el = document.getElementById(n.id);
        if (!el) return { id: n.id, top: Infinity };
        const rect = el.getBoundingClientRect();
        return { id: n.id, top: Math.abs(rect.top - 120) };
      });
      offsets.sort((a, b) => a.top - b.top);
      if (offsets[0]) setActive(offsets[0].id);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [t.navItems]);

  useEffect(() => {
    if (!languageMenuOpen) return;
    const handleClickOutside = (event) => {
      const isClickInDesktopMenu =
        desktopLanguageMenuRef.current &&
        desktopLanguageMenuRef.current.contains(event.target);
      const isClickInMobileMenu =
        mobileLanguageMenuRef.current &&
        mobileLanguageMenuRef.current.contains(event.target);
      const isClickOnDesktopButton =
        desktopLanguageButtonRef.current &&
        desktopLanguageButtonRef.current.contains(event.target);
      const isClickOnMobileButton =
        mobileLanguageButtonRef.current &&
        mobileLanguageButtonRef.current.contains(event.target);

      if (
        isClickInDesktopMenu ||
        isClickInMobileMenu ||
        isClickOnDesktopButton ||
        isClickOnMobileButton
      ) {
        return;
      }
      setLanguageMenuOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [languageMenuOpen]);

  const go = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <>
      {/* Desktop side nav */}
      <nav
        aria-label={t.sideNav.navLabel}
        className="hidden md:flex fixed left-0 top-0 h-screen w-22 z-40 flex-col items-center justify-between border-r border-white/5 py-10"
        style={{ backdropFilter: "blur(14px)" }}
      >
        <div className="select-none">
          <span
            className="text-[var(--accent)] font-grotesk text-xs tracking-[0.3em]"
            aria-hidden
          >
            FG
          </span>
        </div>

        <ul className="flex flex-col gap-1">
          {t.navItems.map((n) => {
            const Icon = iconMap[n.icon] || Home;
            const isActive = active === n.id;
            return (
              <li key={n.id}>
                <button
                  type="button"
                  onClick={() => go(n.id)}
                  aria-label={n.label}
                  className="group relative flex items-center justify-center w-14 h-14 transition-colors duration-500 cursor-pointer"
                  style={{
                    color: isActive
                      ? "var(--accent)"
                      : "rgba(224,225,221,0.55)",
                  }}
                >
                  <Icon size={22} strokeWidth={1.5} />
                  <span
                    className="absolute left-full ml-3 px-3 py-1 font-grotesk text-[11px] uppercase tracking-[0.18em] whitespace-nowrap opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 pointer-events-none border"
                    style={{
                      background: "rgba(13,20,33,0.3)",
                      backdropFilter: "blur(14px)",
                    }}
                  >
                    {n.label}
                  </span>
                  {isActive && (
                    <span
                      aria-hidden
                      className="absolute -left-[1px] top-1/2 -translate-y-1/2 h-7 w-[2px]"
                      style={{
                        background: "var(--accent)",
                        boxShadow: "var(--glow-accent)",
                      }}
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        <div className="relative">
          <button
            ref={desktopLanguageButtonRef}
            type="button"
            aria-label={t.sideNav.toggleLabel}
            onClick={() => setLanguageMenuOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center text-white/80 transition-colors duration-300 hover:text-white cursor-pointer"
          >
            <Globe size={18} strokeWidth={1.5} />
          </button>

          {languageMenuOpen && (
            <div
              ref={desktopLanguageMenuRef}
              className="absolute top-9 left-1/2 -translate-x-1/2 w-max overflow-hidden rounded-3xl border p-2 shadow-[0_15px_50px_rgba(0,0,0,0.35)]"
              style={{
                background: "rgba(13,20,33,0.1)",
                backdropFilter: "blur(10px)",
              }}
            >
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setLocale(otherLocale);
                  setLanguageMenuOpen(false);
                }}
                className="w-full rounded-2xl text-left font-grotesk text-xs uppercase tracking-[0.18em] transition-colors duration-200"
              >
                <span className="text-xs cursor-pointer">
                  {otherLocaleLabel}
                </span>
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile top bar */}
      <div
        className="md:hidden fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-5 h-14 border-b border-white/5"
        style={{
          background: "rgba(13,20,33,0.2",
          backdropFilter: "blur(20px)",
        }}
      >
        <span className="font-grotesk text-xs tracking-[0.3em] text-accent">
          FG
        </span>
        <div className="flex items-center gap-3">
          <div className="relative flex items-center gap-3">
            <button
              ref={mobileLanguageButtonRef}
              type="button"
              aria-label={t.sideNav.toggleLabel}
              onClick={() => setLanguageMenuOpen((v) => !v)}
              className="text-white/80 inline-flex h-10 w-10 items-center justify-center transition-colors duration-300"
            >
              <Globe size={18} strokeWidth={1.5} />
            </button>

            {languageMenuOpen && (
              <div
                ref={mobileLanguageMenuRef}
                className="absolute right-0 top-7 mt-2 overflow-hidden rounded-2xl border shadow-[0_15px_50px_rgba(0,0,0,0.35)]"
              >
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setLocale(otherLocale);
                    setLanguageMenuOpen(false);
                  }}
                  className="w-full rounded-xl px-4 py-3 text-left font-grotesk text-sm uppercase tracking-[0.18em] text-white/90 transition-colors duration-200"
                >
                  {otherLocaleLabel}
                </button>
              </div>
            )}

            <button
              type="button"
              aria-label={
                open ? t.sideNav.mobileCloseMenu : t.sideNav.mobileOpenMenu
              }
              onClick={() => setOpen((v) => !v)}
              className="text-white/80"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>
      {open && (
        <div
          className="md:hidden fixed inset-0 z-30 pt-14"
          style={{
            background: "rgba(13,20,33,0.95)",
            backdropFilter: "blur(16px)",
          }}
        >
          <ul className="flex flex-col gap-2 p-6">
            {t.navItems.map((n) => {
              const Icon = iconMap[n.icon] || Home;
              const isActive = active === n.id;
              return (
                <li key={n.id}>
                  <button
                    type="button"
                    onClick={() => go(n.id)}
                    className="flex items-center gap-4 w-full px-4 py-4 border border-white/5 transition-colors duration-500"
                    style={{
                      color: isActive ? "var(--accent)" : "var(--text)",
                      background: isActive
                        ? "rgba(0,210,255,0.06)"
                        : "transparent",
                    }}
                  >
                    <Icon size={20} strokeWidth={1.5} />
                    <span className="font-grotesk text-sm tracking-[0.18em] uppercase">
                      {n.label}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};

export default SideNav;
