"use client";

import { motion } from "framer-motion";

interface Props {
  title: string;
  para: string;
  className?: string;
}

export function GridBackground({ title, para, className }: Props) {
  return (
    <motion.div
      className="h-[50rem] w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex flex-col items-center justify-center"
      animate={{
        opacity: [0, 1],
        scale: [0.7, 1],
      }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <h1
        className={`text-4xl sm:text-7xl font-bold relative z-20 text-red-500 py-8 ${className}`}
      >
        {title.toUpperCase()}
      </h1>
      <p className="font-space text-white md:text-xl lg:text-2xl">
        {para.toUpperCase()}
      </p>
    </motion.div>
  );
}
