"use client";

import Image from "next/image";
import Statue from "../../scene/statue";
import * as S from "./styles";

const Info = () => {
  return (
    <S.Section className="mx-width" id="inicio">
      <S.Statue>
        <Statue />
      </S.Statue>
      <S.ProfileContainer>
        <S.ProfilePicture>
          <S.PictureContainer>
            <Image
              src="/image/perfil.jpg"
              alt="Minha foto"
              fill={true}
              style={{ objectFit: "cover" }}
              sizes="(max-width: 640px) 100vw, (max-width: 427px) 100vw"
              priority
            />
          </S.PictureContainer>
        </S.ProfilePicture>
        <S.ProfileName>Lucas Gama</S.ProfileName>
        <S.ProfileDescription>Desenvolvedor full Stack</S.ProfileDescription>
      </S.ProfileContainer>
    </S.Section>
  );
};

export default Info;
