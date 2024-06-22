"use client";

import Image from "next/image";
import Statue from "../../scene/statue/index";
import * as S from "./styles";
import { icons } from "@/app/lib/variable/variables";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Info = () => {
  return (
    <S.Section className="mx-width" id="inicio">
      <S.Statue>
        <Statue />
      </S.Statue>
      <S.SocialMedia>
        {icons.map((icon) => (
          <S.SocialIcon key={icon.name} href={icon.link}>
            <FontAwesomeIcon icon={icon.icon} />
          </S.SocialIcon>
        ))}
      </S.SocialMedia>
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
