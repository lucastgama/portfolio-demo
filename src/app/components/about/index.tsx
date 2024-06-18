"use client";

import * as S from "./styles";
import BtnDegrade from "../buttons/buttonDegrade";

const About = () => (
  <S.Section className="mx-width" id="sobremim">
    <S.Title>Sobre</S.Title>
    <S.Container>
      <S.ContainerPicture>
        <S.Picture src="/image/perfil.jpg" alt="Lucas Gama" />
      </S.ContainerPicture>
      <S.ContainerInformation>
        <S.Description>
          Desenvolvedor full stack com mais de 5 anos de experiência em projetos
          práticos, utilizando as linguagens JavaScript e PHP. Com isso, me
          tornei um grande admirador de JS e seus frameworks, nos quais tenho
          especialização. Em PHP, trabalhei com WordPress e WooCommerce para o
          desenvolvimento de plugins e temas.
        </S.Description>
        <S.Description>
          Mantenho um blog como forma de aprendizado e para ajudar quem está
          passando por situações semelhantes. Acredito que ensinar é a melhor
          forma de aprender. Nele, compartilho minhas experiências diversas e as
          dificuldades que encontro, buscando auxiliar outros desenvolvedores e
          aprimorar meus conhecimentos. Se interessar, fique à vontade para
          acessar e saber mais sobre meus conhecimentos práticos.
        </S.Description>
        <BtnDegrade text={"Download CV"} />
      </S.ContainerInformation>
    </S.Container>
  </S.Section>
);

export default About;
