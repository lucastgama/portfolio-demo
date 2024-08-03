import React from "react";
import styled from "styled-components";
import { colors, icons, fontSize } from "../../utils/constants/global";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = styled.div`
  top: 0;
  width: 100%;
  height: 1.18em;
  background-color: ${colors.primaryColor};
  position: absolute;
  z-index: 2;
  @media screen and (max-width: 480px) {
    height: 1.31em;
  }
`;
const Logo = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  padding: 0.2em 1.2em;
  top: 0em;
  left: 0em;
  width: 210px;
  height: 38px;
  background-color: ${colors.primaryColor};
  color: ${colors.thirdColor};
  clip-path: polygon(100% 0, 100% 50%, 80% 100%, 0 100%, 0 0);
  z-index: 2;
  @media screen and (max-width: 480px) {
    display: none;
  }
`;
const SocialMedia = styled.nav`
  position: absolute;
  display: flex;
  align-items: end;
  text-align: center;
  justify-content: center;
  padding: 0.2em 1.2em;
  top: 0em;
  right: 0em;
  width: 210px;
  height: 42px;
  background-color: ${colors.primaryColor};
  color: ${colors.accentColor};
  font-size: ${fontSize.base};
  clip-path: polygon(100% 0, 100% 100%, 20% 100%, 0 50%, 0 0);
  gap: 15px;
  z-index: 2;
  @media screen and (max-width: 480px) {
    top: 0em;
    right: 50%;
    font-size: ${fontSize.md};
    padding: 0em 1.2em;
    clip-path: polygon(100% 0, 100% 50%, 80% 100%, 20% 100%, 0 50%, 0 0);
    transform: translateX(50%);
  }
`;
const Icons = styled.a`
  text-decoration: none;
  color: ${colors.thirdColor};
  transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
    color: ${colors.accentColor};
  }
  &:focus {
    color: ${colors.accentColor};
  }
`;

const Navigation = () => {
  return (
    <Navbar>
      <Logo>Lucas :: Gama</Logo>
      <SocialMedia>
        {icons.map((icon, index) => (
          <Icons key={index} href={icon.link} target="_blank">
            <FontAwesomeIcon icon={icon.icon} />
          </Icons>
        ))}
      </SocialMedia>
    </Navbar>
  );
};

export default Navigation;
