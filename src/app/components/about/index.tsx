"use client";

import * as S from "./styles";
import { logos } from "@/app/lib/variable/variables";
import BtnDegrade from "../buttons/buttonDegrade";

const renderLogos = () => {
  return logos.map((logo, index) => (
    <S.Logo key={index} src={logo.icon} alt={logo.alt} title={logo.alt} />
  ));
};

const About = () => (
    <S.Section className="mx-width" id="sobremim">
      <S.Title>Sobre</S.Title>
      <S.Container>
        <S.ContainerPicture>
          <S.Picture src="/image/perfil.jpg" alt="Lucas Gama" />
        </S.ContainerPicture>
        <S.ContainerInformation>
          <S.WhoIam>Sou Comunicativo e Criativo</S.WhoIam>
          <S.Description>
            Olá! Sou um desenvolvedor full stack apaixonado por transformar
            ideias em experiências digitais envolventes. Especializado em
            JavaScript, busco constantemente aprimorar minhas habilidades para
            oferecer soluções eficientes e inovadoras.
          </S.Description>
          <S.Description>
            Comprometido com código sólido e limpo, acredito na importância de
            uma abordagem colaborativa. Trabalho bem em equipe, valorizando a
            troca de conhecimento e a sinergia coletiva.
          </S.Description>
          <S.Description>
            Se você procura um profissional dedicado, focado em resultados e
            pronto para enfrentar desafios, estou animado para contribuir para o
            sucesso do seu próximo projeto. Vamos criar algo incrível juntos!
          </S.Description>
          <S.Logos>{renderLogos()}</S.Logos>
          <BtnDegrade text={"Download CV"} />
        </S.ContainerInformation>
      </S.Container>
    </S.Section>
);

export default About;
