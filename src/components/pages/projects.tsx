import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="min-h-[80vh] p-8 flex justify-center items-center text-center flex-col gap-2">
      <h1 className="text-green-500 font-space text-2xl font-bold">PROJECTS</h1>
      <p>Check out some of my projects! The rest are on my GitHub.</p>

      <div className="mt-2 bg-zinc-900 rounded-md">
        <Image
          src={"/projects/dsa-graph.jpg"}
          alt="Project"
          width={1000}
          height={1000}
          className="w-full rounded-t-md"
        />
        <div className="p-6 pb-8 min-h-[10rem] flex justify-start items-start flex-col gap-4">
          <h3 className="font-semibold text-xl text-green-500">
            Route Optimization
          </h3>
          <p className="text-start">
            Program that uses graph theory and Dijkstras "Shortest Path"
            algorithm to help users find the most efficient path to various EV
            charging stations on the graph.
          </p>
          <Link href={"/"} className="bg-zinc-800 p-2 rounded-md">
            View on GitHub
          </Link>
        </div>
      </div>
    </div>
  );
}
