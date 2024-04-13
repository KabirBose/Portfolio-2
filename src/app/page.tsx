import Navbar from "@/components/ui/navbar";

import Hero from "@/components/pages/hero";
import About from "@/components/pages/about";

export default function Main() {
  return (
    <>
      <Navbar />
      <div>
        <Hero />
        <About />
      </div>
    </>
  );
}
