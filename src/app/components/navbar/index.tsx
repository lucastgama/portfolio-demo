"use client";

import { useState } from "react";
import Link from "next/link";
import { icons, colors } from "../../lib/global";
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
    <div className="relative flex justify-center w-full z-50">
      <nav className="fixed top-2 flex items-center justify-end w-full max-w-[1440px] px-12 py-1.5">
        <button
          className="pt-5 right-9 bg-transparent border-0 cursor-pointer focus:outline-none"
          onClick={handleMobileNavbar}
        >
          <span
            className="relative block w-7 h-1 mx-auto z-20 transition-all duration-300 ease-in-out"
            style={{
              backgroundColor: colors.accentColor,
              transform: isMobileNavbarOpen
                ? "skew(5deg) translateY(-8px) rotate(-45deg)"
                : "skew(3deg)",
            }}
          >
            <span
              className="block h-full transition-all duration-300"
              style={{
                backgroundColor: colors.accentColor,
                content: '""',
                transform: isMobileNavbarOpen
                  ? "translateY(-12px) translateX(10px) skew(-20deg)"
                  : "translateY(-12px) translateX(-2px) skew(-20deg)",
                opacity: isMobileNavbarOpen ? 0 : 1,
              }}
            />
            <span
              className="block h-full transition-all duration-300"
              style={{
                backgroundColor: colors.accentColor,
                content: '""',
                transform: isMobileNavbarOpen
                  ? "translateY(0px) skew(-10deg) rotate(75deg)"
                  : "translateY(-16px) skew(-10deg) translateX(2px)",
              }}
            />
          </span>
        </button>

        <div
          className="block fixed top-0 right-0 left-0 bottom-0 text-center transition-all duration-300 backdrop-blur-[15px]"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            opacity: isMobileNavbarOpen ? 1 : 0,
            visibility: isMobileNavbarOpen ? "visible" : "hidden",
          }}
        >
          <div
            className="absolute top-0 bottom-0 left-0 right-[10%] sm:right-[50%] transition-all duration-300 delay-100"
            style={{
              backgroundColor: colors.secondColor,
              transformOrigin: "0 0",
              transform: isMobileNavbarOpen
                ? "skew(-14deg) translateX(0)"
                : "skew(-14deg) translateX(-120%)",
            }}
          />

          <ul
            className="inline-flex flex-col h-[90%] w-1/2 items-start justify-center transition-all"
            style={{
              transform: "translateX(-18%) skew(-18deg)",
              color: colors.accentColor,
            }}
          >
            <li
              className="flex justify-around list-none cursor-pointer relative group"
              style={{
                color: colors.thirdColor,
                fontSize: "clamp(1.4rem, 4vw, 2.4rem)",
              }}
              onClick={closeMobileNavbar}
            >
              <Link href="/" className="relative">
                Início
                <span
                  className="absolute w-full h-0.5 bottom-0 left-0 origin-bottom-right scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-bottom-left"
                  style={{ backgroundColor: colors.accentColor }}
                />
              </Link>
            </li>

            <li
              className="flex justify-around list-none cursor-pointer relative group"
              style={{
                color: colors.thirdColor,
                fontSize: "clamp(1.4rem, 4vw, 2.4rem)",
              }}
              onClick={closeMobileNavbar}
            >
              <Link href="/about" className="relative">
                Sobre
                <span
                  className="absolute w-full h-0.5 bottom-0 left-0 origin-bottom-right scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-bottom-left"
                  style={{ backgroundColor: colors.accentColor }}
                />
              </Link>
            </li>

            <li
              className="flex justify-around list-none cursor-pointer relative group"
              style={{
                color: colors.thirdColor,
                fontSize: "clamp(1.4rem, 4vw, 2.4rem)",
              }}
              onClick={closeMobileNavbar}
            >
              <Link href="/projects" className="relative">
                Projetos
                <span
                  className="absolute w-full h-0.5 bottom-0 left-0 origin-bottom-right scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-bottom-left"
                  style={{ backgroundColor: colors.accentColor }}
                />
              </Link>
            </li>

            <li
              className="flex justify-around list-none cursor-pointer relative group"
              style={{
                color: colors.thirdColor,
                fontSize: "clamp(1.4rem, 4vw, 2.4rem)",
              }}
              onClick={closeMobileNavbar}
            >
              <Link href="/skills" className="relative">
                Habilidades
                <span
                  className="absolute w-full h-0.5 bottom-0 left-0 origin-bottom-right scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-bottom-left"
                  style={{ backgroundColor: colors.accentColor }}
                />
              </Link>
            </li>

            <li
              className="flex justify-around list-none cursor-pointer relative group"
              style={{
                color: colors.thirdColor,
                fontSize: "clamp(1.4rem, 4vw, 2.4rem)",
              }}
              onClick={closeMobileNavbar}
            >
              <Link href="/contact" className="relative">
                Contato
                <span
                  className="absolute w-full h-0.5 bottom-0 left-0 origin-bottom-right scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-bottom-left"
                  style={{ backgroundColor: colors.accentColor }}
                />
              </Link>
            </li>

            <li
              className="flex justify-around list-none"
              style={{
                color: colors.thirdColor,
                fontSize: "clamp(1.4rem, 4vw, 2.4rem)",
              }}
            >
              <nav className="inline-flex items-start justify-center gap-4">
                {icons.map((icon, index) => (
                  <a
                    key={index}
                    href={icon.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-all duration-300 ease-in-out hover:scale-110"
                    style={{ color: colors.thirdColor }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = colors.accentColor;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = colors.thirdColor;
                    }}
                  >
                    <FontAwesomeIcon icon={icon.icon} />
                  </a>
                ))}
              </nav>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
