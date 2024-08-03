"use client";

import React from "react";
import * as S from "./styles";
import { projectGit } from "../../utils/constants/global";
import { Card } from "../card";

const Projects = () => (
    <S.Section id="projetos" className="mx-width">
      <S.Container>
        <S.Title>Projetos</S.Title>
      </S.Container>
      <S.Projects>
        {projectGit.map((project, index) => (
          <Card
            key={index}
            image={project.image}
            title={project.title}
            languages={project.languages}
            description={project.description}
          />
        ))}
      </S.Projects>
    </S.Section>
);

export default Projects;
