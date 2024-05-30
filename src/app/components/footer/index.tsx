"use client";

import * as S from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const icons = {
    instagram: {
      icon: faInstagram,
      link: "https://www.instagram.com/lucas.t.gama/",
    },
    linkedin: {
      icon: faLinkedinIn,
      link: "https://www.linkedin.com/in/lucas-tgama/",
    },
    github: { icon: faGithub, link: "https://github.com/lucastgama" },
  };

  return (
    <S.Footer>
      <S.IconContainer>
        {Object.values(icons).map(({ icon, link }) => (
          <S.Icon key={link} href={link} target="_blank">
            <FontAwesomeIcon icon={icon} />
          </S.Icon>
        ))}
      </S.IconContainer>
      <S.Description>© Lucas Gama 2023</S.Description>
    </S.Footer>
  );
};

export default Footer;
