import { GridBackground } from "@/components/aceternity/grid-bg";
import Navbar from "@/components/ui/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div>
        <GridBackground
          className="font-stretch"
          title="Kabir Bose"
          para="Software Dev & Cybersecurity"
        />
      </div>
    </>
  );
}
