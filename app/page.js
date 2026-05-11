"use client";

import React, { useEffect } from "react";
import SideNav from "../components/ui/SideNav";
import ParticleField from "../components/ui/ParticleField";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";
import Footer from "../components/sections/Footer";
import { Toaster } from "@/components/ui/sonner";
import { LocaleProvider } from "../components/ui/LocaleProvider";

const Home = () => {
  // Scroll reveal observer
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("reveal-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <LocaleProvider>
      <div className="relative min-h-screen w-full overflow-x-hidden" style={{ background: "var(--bg)" }}>
        <ParticleField />
        <SideNav />
        <main className="relative z-10">
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <Toaster />
      </div>
    </LocaleProvider>
  );
};

export default Home;
