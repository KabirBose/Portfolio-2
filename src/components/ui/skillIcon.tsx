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
        width={50}
        height={50}
        className={className}
      />
      <p className="text-sm">{title}</p>
    </div>
  );
}
