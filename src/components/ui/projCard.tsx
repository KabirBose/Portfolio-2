import Image from "next/image";
import Link from "next/link";

interface Props {
  imgSrc: string;
  title: string;
  desc: string;
  href: string;
  imgPosition?: string;
  className?: string;
}

export default function ProjCard({
  imgSrc,
  title,
  desc,
  href,
  imgPosition,
  className,
}: Props) {
  return (
    <div
      className={`bg-zinc-900 rounded-md border-2 border-zinc-800 md:w-[45%] md:min-h-[37rem] ${className}`}
    >
      <Image
        src={imgSrc}
        alt="Project"
        width={1000}
        height={1000}
        className={`w-full h-[15rem] object-cover rounded-t-md ${
          !imgPosition || imgPosition === "" ? "object-center" : imgPosition
        }`}
      />
      <div className="p-6 pb-8 min-h-[10rem] flex justify-start items-start flex-col gap-4">
        <h3 className="font-semibold text-xl text-green-500">{title}</h3>
        <p className="text-start">{desc}</p>
        <Link
          target="_blank"
          href={href}
          className="bg-zinc-800 p-2 rounded-md md:mt-2"
        >
          View on GitHub
        </Link>
      </div>
    </div>
  );
}
