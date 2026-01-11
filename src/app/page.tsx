"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Statue } from "./components/scene/statue";
import { colors } from "./lib/global";

export default function Home() {
  const profileRef = useRef(null);
  const isInView = useInView(profileRef, { once: false, amount: 0.5 });

  return (
    <section
      className="relative flex items-center justify-center flex-col text-center h-screen gap-6 max-h-[900px]"
      style={{
        background: `linear-gradient(to bottom right, ${colors.primaryColor}, ${colors.secondColor}, ${colors.primaryColor})`,
      }}
      id="inicio"
    >
      <div className="absolute inset-0 z-[1]">
        <Statue />
      </div>

      <div
        ref={profileRef}
        className="flex flex-col items-center justify-center w-[260px] z-[2]"
      >
        <motion.div
          initial={{ y: -30, opacity: 0, filter: "blur(5px)" }}
          animate={isInView ? { y: 0, opacity: 1, filter: "blur(0px)" } : {}}
          transition={{ duration: 1 }}
          className="pointer-events-none"
        >
          <div
            className="flex justify-center items-center w-[140px] h-[140px] sm:w-[140px] sm:h-[140px] rounded-full p-[5px]"
            style={{
              background: `linear-gradient(180deg, ${colors.accentColor} 0%, ${colors.secondColor} 65%)`,
            }}
          >
            <div className="overflow-hidden relative flex justify-center items-center w-full h-full rounded-full">
              <img
                src="/image/perfil.jpg"
                alt="Lucas Gama"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="pointer-events-none"
        >
          <div
            className="font-medium flex items-center justify-center gap-1 translate-x-[2%]"
            style={{
              fontSize: "clamp(1.4rem, 4vw, 1.8rem)",
              color: colors.accentColor,
            }}
          >
            <p>Lucas</p>
            <p>Gama</p>
          </div>
          <h3
            className="font-normal"
            style={{
              fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
              color: colors.accentColor,
            }}
          >
            Full Stack
          </h3>
        </motion.div>
      </div>
    </section>
  );
}
