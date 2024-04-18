import Image from "next/image";

interface Props {
  imageSrc: string;
  title: string;
  className?: string;
}

export default function SkillIcon({ imageSrc, title, className }: Props) {
  return (
    <div className="flex flex-col justify-center items-center gap-1">
      <Image
        src={`/skills/${imageSrc}.png`}
        alt={title}
        width={1000}
        height={1000}
        className={`w-[50px] md:w-[60px] ${className}`}
      />
      <p className="text-sm md:text-lg">{title}</p>
    </div>
  );
}
