"use client";

import BtnContact from "../buttons/buttonContact";
import * as S from "./styles";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMobileNavbarOpen, setIsMobileNavbarOpen] = useState(false);

  const handleMobileNavbar = () => {
    setIsMobileNavbarOpen(!isMobileNavbarOpen);
  };

  const optionsNavgation = ["Inicio", "Sobre mim", "Habilidades", "Projetos"];

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <S.NavbarContainer>
      <S.Navbar>
        <Link href="/" passHref>
          <S.NavbarLogo>Lucas :</S.NavbarLogo>
        </Link>
        <S.NavbarLinks>
          {optionsNavgation.map((item, index) => (
            <S.NavbarLink key={index}>
              <a
                href={`#${item.replace(/\s+/g, "").toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.replace(/\s+/g, "").toLowerCase());
                }}
              >
                {item}
              </a>
            </S.NavbarLink>
          ))}
          <S.NavbarLink>
            <Link href="blog">Blog</Link>
          </S.NavbarLink>
        </S.NavbarLinks>
        <S.NavbarBtn>
          <BtnContact text="Contato" />
        </S.NavbarBtn>
        <S.BtnMobile onClick={handleMobileNavbar}>
          <S.Burger $isOpen={isMobileNavbarOpen} />
        </S.BtnMobile>
        <S.NavMobile $isOpen={isMobileNavbarOpen}>
          <S.NavMobileLinks>
            {optionsNavgation.map((item, index) => (
              <S.NavbarLink key={index}>
                <a
                  href={`#${item.replace(/\s+/g, "").toLowerCase()}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.replace(/\s+/g, "").toLowerCase());
                  }}
                >
                  {item}
                </a>
              </S.NavbarLink>
            ))}
            <S.NavMobileBtn>
              <BtnContact text="Contato" />
            </S.NavMobileBtn>
          </S.NavMobileLinks>
        </S.NavMobile>
      </S.Navbar>
    </S.NavbarContainer>
  );
};

export default Navbar;
