"use client";

import * as S from "./styles";
import { useState } from "react";
import Link from "next/link";

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
        <Link href="/" passHref>
          <S.NavbarLogo>Lucas :</S.NavbarLogo>
        </Link>
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
              <Link href="/experiencias" passHref>
                Experiencias
              </Link>
            </S.NavbarLink>
            <S.NavbarLink onClick={closeMobileNavbar}>
              <Link href="/contato" passHref>
                Contato
              </Link>
            </S.NavbarLink>
          </S.NavMobileLinks>
        </S.NavMobile>
      </S.Navbar>
    </S.NavbarContainer>
  );
};

export default Navbar;
