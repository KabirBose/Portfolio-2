import Navbar from "@/components/ui/navbar";

import Hero from "@/components/pages/hero";
import About from "@/components/pages/about";
import Skills from "@/components/pages/skills";
import Certifications from "@/components/pages/certifications";
import Contact from "@/components/pages/contact";
import Projects from "@/components/pages/projects";

export default function Main() {
  return (
    <>
      <Navbar />
      <div>
        <Hero />
        <About />
        <Skills />
        <Certifications />
        <Projects />
        <Contact />
      </div>
    </>
  );
}
