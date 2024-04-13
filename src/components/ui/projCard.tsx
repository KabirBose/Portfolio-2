import Image from "next/image";
import Link from "next/link";

interface Props {
  imgSrc: string;
  title: string;
  desc: string;
  href: string;
}

export default function ProjCard({ imgSrc, title, desc, href }: Props) {
  return (
    <div className="mt-2 bg-zinc-900 rounded-md">
      <Image
        src={imgSrc}
        alt="Project"
        width={1000}
        height={1000}
        className="w-full rounded-t-md"
      />
      <div className="p-6 pb-8 min-h-[10rem] flex justify-start items-start flex-col gap-4">
        <h3 className="font-semibold text-xl text-green-500">{title}</h3>
        <p className="text-start">{desc}</p>
        <Link href={href} className="bg-zinc-800 p-2 rounded-md">
          View on GitHub
        </Link>
      </div>
    </div>
  );
}
