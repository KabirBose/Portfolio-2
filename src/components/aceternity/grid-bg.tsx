interface Props {
  text: string;
  className?: string;
}

export function GridBackground({ text, className }: Props) {
  return (
    <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p
        className={`text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-orange-700 py-8 ${className}`}
      >
        {text}
      </p>
    </div>
  );
}
