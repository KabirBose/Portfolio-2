import ProjCard from "../ui/projCard";

export default function Projects() {
  return (
    <div className="min-h-[80vh] p-8 flex justify-center items-center text-center flex-col gap-2">
      <h1 className="text-green-500 font-space text-2xl font-bold">PROJECTS</h1>
      <p>Check out some of my projects! The rest are on my GitHub.</p>

      <div className="mt-4 flex justify-center items-center flex-col gap-5">
        <ProjCard
          title="Route Optimization"
          desc="Program that uses graph theory and Dijkstras 'Shortest Path'
        algorithm to help users find the most efficient path to various EV
        charging stations on the graph."
          href="https://github.com/KabirBose/Advanced-Networking-II-Case-Study"
          imgSrc="/projects/dsa-graph.jpg"
        />

        <ProjCard
          title="Networking Case Study"
          desc="Used Cisco IOS to configure a network based on a given topology. Used multiple addressing, routing, and switching protocols simultaneously. Configured IPSec for network security."
          href="https://github.com/KabirBose/Route-Optimization"
          imgSrc="/projects/wireshark-screenshot.png"
        />

        <ProjCard
          title="SaaS Agency"
          desc="Building my own SaaS agency that focuses on helping vehicle detailing and wrapping business gain more clients. My agency focuses on creating full-stack websites with SEO (Search Engine Optimization)."
          href="https://github.com/KabirBose/Caliper-Labs-SaaS-Agency"
          imgSrc="/projects/saas-agency.png"
          imgPosition="object-top"
        />
      </div>
    </div>
  );
}
