"use client";

import { useRef } from "react";
import { NavContext } from "../contexts/navContext";

import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

import Hero from "@/components/pages/hero";
import About from "@/components/pages/about";
import Skills from "@/components/pages/skills";
import Certifications from "@/components/pages/certifications";
import Contact from "@/components/pages/contact";
import Projects from "@/components/pages/projects";

export default function Main() {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const skillsRef = useRef<HTMLDivElement | null>(null);
  const certsRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <NavContext.Provider
        value={{
          aboutRef,
          skillsRef,
          certsRef,
          projectsRef,
          contactRef,
        }}
      >
        <Navbar />
        <div>
          <Hero />
          <div ref={aboutRef}>
            <About />
          </div>
          <div ref={skillsRef}>
            <Skills />
          </div>
          <div ref={certsRef}>
            <Certifications />
          </div>
          <div ref={projectsRef}>
            <Projects />
          </div>
          <div ref={contactRef}>
            <Contact />
          </div>
          <Footer />
        </div>
      </NavContext.Provider>
    </>
  );
}
