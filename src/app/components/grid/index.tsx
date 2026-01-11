"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { colors } from "../../lib/global";

interface Project {
  id: number;
  title: string;
  description: string;
  languages: string[];
  image: string;
  link: string;
}

interface GridProps {
  projects: Project[];
}

export default function Grid({ projects }: GridProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.6, 0.05, 0.01, 0.9] as [number, number, number, number],
      },
    },
  };

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {projects.map((project) => (
        <motion.div
          key={project.id}
          variants={cardVariants}
          whileHover={{ y: -8, transition: { duration: 0.2 } }}
          className="rounded-xl overflow-hidden shadow-lg"
          style={{
            backgroundColor: colors.secondColor,
            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
          }}
        >
          <motion.div
            className="relative h-48 overflow-hidden"
            style={{ backgroundColor: colors.thirdColor }}
          >
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4 }}
            />
            <div
              className="absolute inset-0 opacity-60"
              style={{
                background: `linear-gradient(to top, ${colors.primaryColor}, transparent)`,
              }}
            />
          </motion.div>

          <div className="p-4 sm:p-6">
            <h3
              className="font-bold mb-3 transition-colors"
              style={{
                color: colors.accentColor,
                fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
              }}
            >
              {project.title}
            </h3>

            <p
              className="mb-4 line-clamp-3"
              style={{
                color: colors.thirdColor,
                fontSize: "clamp(0.8rem, 2vw, 1rem)",
              }}
            >
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.languages.map((lang, index) => (
                <span
                  key={index}
                  className="px-2 sm:px-3 py-1 font-medium rounded-full"
                  style={{
                    backgroundColor: `${colors.thirdColor}40`,
                    color: colors.categoryColor,
                    fontSize: "clamp(0.7rem, 1.5vw, 0.85rem)",
                  }}
                >
                  {lang}
                </span>
              ))}
            </div>

            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-medium"
              style={{
                color: colors.categoryColor,
                fontSize: "clamp(0.7rem, 2vw, 0.9rem)",
              }}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
              Ver no GitHub
            </motion.a>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
