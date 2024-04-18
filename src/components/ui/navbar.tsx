"use client";

import { motion, AnimatePresence, useAnimationControls } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [navState, setNavState] = useState(false);
  const navbarHandler = useAnimationControls();

  const navStateHandler = () => {
    setNavState(!navState);

    if (!navState) {
      navbarHandler.start("open");
    } else {
      navbarHandler.start("close");
    }
  };

  return (
    <div className="fixed top-0 z-50 font-space flex flex-col w-full">
      <motion.nav
        className="backdrop-blur-xl w-full p-5 text-center"
        animate={{ opacity: [0, 1], y: [-20, 0] }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <button onClick={navStateHandler} className="md:text-lg">
          MENU
        </button>
      </motion.nav>

      <AnimatePresence>
        <motion.div
          className={`flex-col h-screen w-full backdrop-blur-xl justify-start items-end gap-10 p-10 text-2xl`}
          variants={{
            initial: { opacity: 0, display: "none" },
            open: { opacity: 1, display: "flex", x: [20, 0] },
            close: { opacity: 0, display: "none", x: [0, 20] },
          }}
          initial="initial"
          exit="close"
          animate={navbarHandler}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <button>ABOUT</button>
          <button>SKILLS</button>
          <button>CERTIFICATIONS</button>
          <button>CONTACT</button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
