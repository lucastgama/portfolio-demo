"use client";

import { useState } from "react";
import { colors, projectGit } from "../lib/global";
import Grid from "../components/grid";

export default function ProjectsPage() {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("Todos");

  const allLanguages = [
    "Todos",
    ...Array.from(new Set(projectGit.flatMap((p) => p.languages))).sort(),
  ];

  const filteredProjects =
    selectedLanguage === "Todos"
      ? projectGit
      : projectGit.filter((project) =>
          project.languages.includes(selectedLanguage)
        );

  return (
    <div
      className="min-h-screen py-16 px-4 sm:px-6 lg:px-8"
      style={{
        background: `linear-gradient(to bottom right, ${colors.primaryColor}, ${colors.secondColor}, ${colors.primaryColor})`,
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1
            className="font-bold mb-4"
            style={{
              color: colors.accentColor,
              fontSize: "clamp(1.4rem, 4vw, 1.8rem)",
            }}
          >
            Meus Projetos
          </h1>
          <p
            className="max-w-2xl mx-auto px-4"
            style={{
              color: colors.thirdColor,
              fontSize: "clamp(0.8rem, 3vw, 1.2rem)",
            }}
          >
            Esses são meus projetos, podem ser poucos mas foram feitos com amor
            e raiva por nada dar certo
          </p>
        </div>

        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {allLanguages.map((language) => (
              <button
                key={language}
                onClick={() => setSelectedLanguage(language)}
                className="px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-medium transition-all duration-300"
                style={{
                  fontSize: "clamp(0.7rem, 2vw, 0.9rem)",
                  backgroundColor:
                    selectedLanguage === language
                      ? colors.categoryColor
                      : colors.secondColor,
                  color:
                    selectedLanguage === language
                      ? colors.primaryColor
                      : colors.accentColor,
                  transform:
                    selectedLanguage === language ? "scale(1.05)" : "scale(1)",
                  boxShadow:
                    selectedLanguage === language
                      ? `0 10px 25px ${colors.categoryColor}50`
                      : "none",
                }}
              >
                {language}
              </button>
            ))}
          </div>
        </div>

        <Grid projects={filteredProjects} />

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <div
              className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
              style={{ backgroundColor: colors.secondColor }}
            >
              <svg
                className="w-8 h-8"
                style={{ color: colors.thirdColor }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <p
              style={{
                color: colors.thirdColor,
                fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
              }}
            >
              Nenhum projeto encontrado para esta linguagem.
            </p>
          </div>
        )}

        <div className="mt-12 text-center px-4">
          <p
            style={{
              color: colors.thirdColor,
              fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
            }}
          >
            Mostrando{" "}
            <span
              className="font-semibold"
              style={{ color: colors.categoryColor }}
            >
              {filteredProjects.length}
            </span>{" "}
            de{" "}
            <span
              className="font-semibold"
              style={{ color: colors.categoryColor }}
            >
              {projectGit.length}
            </span>{" "}
            projetos{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
