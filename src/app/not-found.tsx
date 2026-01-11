"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { colors } from "./lib/global";

export default function NotFound() {
  return (
    <section
      className="min-h-screen flex items-center justify-center flex-col px-4 py-12"
      style={{
        background: `linear-gradient(to bottom right, ${colors.primaryColor}, ${colors.secondColor}, ${colors.primaryColor})`,
      }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1
            className="font-bold mb-6"
            style={{
              fontSize: "clamp(4rem, 15vw, 12rem)",
              color: colors.categoryColor,
              textShadow: `0 0 40px ${colors.categoryColor}80`,
            }}
          >
            404
          </h1>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2
            className="font-bold mb-2"
            style={{
              fontSize: "clamp(1.8rem, 5vw, 3rem)",
              color: colors.accentColor,
            }}
          >
            Parabens!
          </h2>

          <p
            className="font-light mb-3"
            style={{
              fontSize: "clamp(1rem, 3vw, 1.4rem)",
              color: colors.thirdColor,
            }}
          >
            Você conseguiu encontrar uma página que nem eu sabia que existia ou
            alguem resolveu dar deploy na sexta-feira
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center"
        >
          <Link href="/">
            <button
              className="px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: colors.categoryColor,
                color: colors.primaryColor,
                fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
                boxShadow: `0 0 20px ${colors.categoryColor}40`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 0 30px ${colors.categoryColor}80`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = `0 0 20px ${colors.categoryColor}40`;
              }}
            >
              Voltar pra Casa
            </button>
          </Link>

          <Link href="/projects">
            <button
              className="px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
              style={{
                border: `2px solid ${colors.accentColor}`,
                color: colors.accentColor,
                backgroundColor: "transparent",
                fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = colors.accentColor;
                e.currentTarget.style.color = colors.primaryColor;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = colors.accentColor;
              }}
            >
              Ver Projetos
            </button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12"
        >
          <p
            className="font-light italic"
            style={{
              fontSize: "clamp(0.8rem, 2vw, 0.9rem)",
              color: colors.thirdColor,
            }}
          >
            "Errar é humano, dar 404 não é culpa do desenvolvedor"
          </p>
        </motion.div>
      </div>
    </section>
  );
}
