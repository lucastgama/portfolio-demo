"use client";

import * as S from "./styles";
import { icons } from "@/app/lib/variable/variables";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <S.Footer>
      <S.IconContainer>
        {icons.map((iconItem) => (
          <S.Icon key={iconItem.name} href={iconItem.link} target="_blank">
            <FontAwesomeIcon icon={iconItem.icon} />
          </S.Icon>
        ))}
      </S.IconContainer>
      <S.Description>© Lucas Gama 2024</S.Description>
    </S.Footer>
  );
};

export default Footer;
