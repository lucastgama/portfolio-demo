"use client";

import * as S from "./styles";
import { useState } from "react";
import Link from "next/link";
import { icons } from "../../utils/constants/global";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  const [isMobileNavbarOpen, setIsMobileNavbarOpen] = useState(false);

  const handleMobileNavbar = () => {
    setIsMobileNavbarOpen(!isMobileNavbarOpen);
  };

  const closeMobileNavbar = () => {
    setIsMobileNavbarOpen(false);
  };

  return (
    <S.NavbarContainer>
      <S.Navbar>
        <S.BtnMobile onClick={handleMobileNavbar}>
          <S.Burger $isOpen={isMobileNavbarOpen} />
        </S.BtnMobile>
        <S.NavMobile $isOpen={isMobileNavbarOpen}>
          <S.NavMobileLinks>
            <S.NavbarLink onClick={closeMobileNavbar}>
              <Link href="/" passHref>
                Inicio
              </Link>
            </S.NavbarLink>
            <S.NavbarLink onClick={closeMobileNavbar}>
              <Link href="/sobre" passHref>
                Sobre
              </Link>
            </S.NavbarLink>
            <S.NavbarLink onClick={closeMobileNavbar}>
              <Link href="/contato" passHref>
                Contato
              </Link>
            </S.NavbarLink>
            <S.NavbarLink onClick={closeMobileNavbar}>
              <S.SocialMedia>
                {icons.map((icon, index) => (
                  <S.Icons key={index} href={icon.link} target="_blank">
                    <FontAwesomeIcon icon={icon.icon} />
                  </S.Icons>
                ))}
              </S.SocialMedia>
            </S.NavbarLink>
          </S.NavMobileLinks>
        </S.NavMobile>
      </S.Navbar>
    </S.NavbarContainer>
  );
};

export default Navbar;
