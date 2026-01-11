"use client";

import { colors, icons } from "../../lib/global";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer
      className="flex flex-col items-center justify-center py-2.5 px-4"
      style={{
        backgroundColor: colors.primaryColor,
        borderTop: `1px solid ${colors.secondColor}`,
      }}
    >
      <div className="flex items-center justify-center py-4 gap-5">
        {icons.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center justify-center text-center w-11 h-11 sm:w-[45px] sm:h-[45px] z-10 cursor-pointer group"
            style={{
              color: colors.accentColor,
              fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
            }}
          >
            <div
              className="absolute w-11 h-11 sm:w-[45px] sm:h-[45px] rounded-[5px] rotate-45 -z-10 transition-transform duration-1000 ease-out group-hover:rotate-[345deg]"
              style={{
                backgroundColor: colors.secondColor,
                border: `1px solid ${colors.thirdColor}40`,
              }}
            />
            <FontAwesomeIcon icon={item.icon} />
          </a>
        ))}
      </div>

      <p
        className="font-light"
        style={{
          fontSize: "clamp(0.9rem, 2vw, 1rem)",
          color: colors.thirdColor,
        }}
      >
        © Lucas Gama {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
