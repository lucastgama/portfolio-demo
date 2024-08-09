"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import BtnDegrade from "../button";
import * as S from "./styles";
import AnimatedDiv from "../animated/animatedDiv";

const About = () => {
  const profileRef = useRef(null);
  const isInView = useInView(profileRef, { once: false, amount: 0.5 });

  return (
    <S.Section className="mx-width" ref={profileRef}>
      <AnimatedDiv
        initial={{ opacity: 0, filter: "blur(5px)" }}
        animate={isInView ? { opacity: 1, filter: "blur(0px)" } : {}}
        transition={{ duration: 0.3 }}
      >
        <S.Title>Sobre mim</S.Title>
      </AnimatedDiv>
      <S.Container>
        <AnimatedDiv
          initial={{ x: -50, opacity: 0, filter: "blur(5px)" }}
          animate={isInView ? { x: 0, opacity: 1, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.3 }}
        >
          <S.ContainerPicture>
            <S.Picture src="/image/perfil.jpg" alt="Lucas Gama" />
          </S.ContainerPicture>
        </AnimatedDiv>
        <AnimatedDiv
          initial={{ x: 50, opacity: 0, filter: "blur(5px)" }}
          animate={isInView ? { x: 0, opacity: 1, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.3 }}
        >
          <S.ContainerInformation>
            <S.Description>
              Desenvolvedor web com mais de 5 anos de experiência em projetos
              práticos, utilizando as linguagens JavaScript e PHP. Com isso, me
              tornei um grande admirador de JS e seus frameworks, nos quais
              tenho especialização. Em PHP, trabalhei com WordPress e
              WooCommerce para o desenvolvimento de plugins e temas.
            </S.Description>
            <S.Description>
              Mantenho um blog como forma de aprendizado e para ajudar quem está
              passando por situações semelhantes. Acredito que ensinar é a
              melhor forma de aprender. Nele, compartilho minhas experiências
              diversas e as dificuldades que encontro, buscando auxiliar outros
              desenvolvedores e aprimorar meus conhecimentos. Se interessar,
              fique à vontade para acessar e saber mais sobre meus conhecimentos
              práticos.
            </S.Description>
            <BtnDegrade text={"Download CV"} />
          </S.ContainerInformation>
        </AnimatedDiv>
      </S.Container>
    </S.Section>
  );
};

export default About;
