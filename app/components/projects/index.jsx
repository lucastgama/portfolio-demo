"use client";

import React, { useRef } from "react";
import * as S from "./styles";
import { projectGit } from "../../utils/constants/global";
import { Card } from "../card";
import AnimatedDiv from "../animated/animatedDiv";
import { backIn, useInView } from "framer-motion";

const Projects = () => {
  const profileRef = useRef(null);
  const isInView = useInView(profileRef, { once: false, amount: 0.2 });

  return (
    <S.Section className="mx-width" ref={profileRef}>
      <AnimatedDiv
        initial={{ opacity: 0, filter: "blur(5px)" }}
        animate={isInView ? { opacity: 1, filter: "blur(0px)" } : {}}
        transition={{ duration: 0.3 }}
      >
        <S.Container>
          <S.Title>Meus projetos</S.Title>
        </S.Container>
      </AnimatedDiv>
      <S.Projects>
        {projectGit.map((project, index) => (
          <AnimatedDiv
            key={index}
            initial={{ x: -50, opacity: 0, filter: "blur(5px)" }}
            animate={isInView ? { x: 0, opacity: 1, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.3 + index / 5 }}
          >
            <Card
              image={project.image}
              title={project.title}
              languages={project.languages}
              description={project.description}
              url={project.link}
            />
          </AnimatedDiv>
        ))}
      </S.Projects>
    </S.Section>
  );
};

export default Projects;
