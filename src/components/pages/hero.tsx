"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[url('/backgrounds/mesh-gradient-1.png')] bg-center object-cover">
      <motion.div
        className="flex justify-center items-center text-center flex-col gap-2"
        animate={{ scale: [0, 1], opacity: [0, 1] }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <h1 className="font-space font-bold text-4xl text-green-700 bg-green-500 p-2 md:p-4 w-full">
          KABIR BOSE
        </h1>
        <div>
          <p className="font-space md:text-lg">SOFTWARE DEV & CYBERSECURITY</p>
        </div>
      </motion.div>
    </div>
  );
}
