"use client";

import * as S from "./styles";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMobileNavbarOpen, setIsMobileNavbarOpen] = useState(false);

  const handleMobileNavbar = () => {
    setIsMobileNavbarOpen(!isMobileNavbarOpen);
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
            <S.NavbarLink>
              <a>Sobre</a>
            </S.NavbarLink>
            <S.NavbarLink>
              <a>Experiencias</a>
            </S.NavbarLink>
            <S.NavbarLink>
              <a>Contato</a>
            </S.NavbarLink>
          </S.NavMobileLinks>
        </S.NavMobile>
      </S.Navbar>
    </S.NavbarContainer>
  );
};

export default Navbar;
