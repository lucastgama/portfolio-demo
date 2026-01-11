"use client";

import { useRef } from "react";
import { colors } from "../lib/global";

const About = () => {
  const profileRef = useRef(null);

  const handleDownload = async () => {
    const PDF_URL = "./doc/cv_lucas_gama.pdf";
    try {
      const response = await fetch(PDF_URL);
      const blob = await response.blob();
      const fileURL = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = fileURL;
      a.download = "cv_lucasgama.pdf";
      a.click();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section
      className="flex items-center flex-col py-12 px-4"
      style={{
        background: `linear-gradient(to bottom right, ${colors.primaryColor}, ${colors.secondColor}, ${colors.primaryColor})`,
      }}
      ref={profileRef}
    >
      <h2
        className="relative w-full flex items-center justify-center uppercase mb-4 lg:mb-4 font-bold text-center"
        style={{
          fontSize: "clamp(1.4rem, 4vw, 1.8rem)",
          color: colors.accentColor,
        }}
      >
        Sobre mim
      </h2>

      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-5 items-center justify-center">
        <div className="flex justify-center lg:justify-start">
          <div
            className="relative rounded-3xl lg:rounded-[24px] p-3 lg:p-4 w-44 h-44 lg:w-[400px] lg:h-[450px]"
            style={{ border: `2px solid ${colors.accentColor}` }}
          >
            <img
              src="/image/perfil.jpg"
              alt="Lucas Gama"
              className="relative w-full h-full object-cover object-center rounded-[20px] lg:rounded-[20px]"
            />
          </div>
        </div>

        <div className="w-full flex flex-col items-center lg:items-start justify-center text-center lg:text-left py-4 lg:py-0">
          <p
            className="font-light mb-4"
            style={{
              color: colors.accentColor,
              fontSize: "clamp(0.9rem, 2vw, 1rem)",
            }}
          >
            Desenvolvedor Full Stack com experiência prática em desenvolvimento
            de aplicações completas, especializado em Next.js, React, React
            Native, Node.js e PHP. Tenho habilidades em desenvolvimento de APIs
            RESTful, aplicações mobile e web, aplicações headless, e projetos
            que envolvem interações 3D com Three.js. Busco entregar soluções
            inovadoras e eficazes, com foco em performance e experiência do
            usuário.
          </p>
          <p
            className="font-light mb-4"
            style={{
              color: colors.accentColor,
              fontSize: "clamp(0.9rem, 2vw, 1rem)",
            }}
          >
            Apaixonado por criar experiências visuais únicas, trabalho com
            animações e gráficos 3D usando Three.js. Já desenvolvi desde
            marketplaces e sistemas de geolocalização até aplicações headless
            complexas. Valorizo comunicação clara e trabalho em equipe.
          </p>

          <button
            onClick={handleDownload}
            className="flex items-center justify-center rounded-[50px] px-6 py-2 cursor-pointer font-light transition-all duration-300 ease-out hover:scale-105"
            style={{
              border: `1px solid ${colors.accentColor}`,
              color: colors.accentColor,
              fontSize: "clamp(0.9rem, 2vw, 1rem)",
              backgroundColor: "transparent",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = colors.accentColor;
              e.currentTarget.style.color = colors.secondColor;
              e.currentTarget.style.borderColor = colors.primaryColor;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = colors.accentColor;
              e.currentTarget.style.borderColor = colors.accentColor;
            }}
          >
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
