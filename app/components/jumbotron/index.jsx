"use client";

import * as S from "./styles";
import { Statue } from "../scene/statue";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const profileRef = useRef(null);
  const isInView = useInView(profileRef, { once: false, amount: 0.5 });

  return (
    <S.Section className="mx-width" id="inicio">
      <S.Statue>
        <Statue />
      </S.Statue>
      <S.ProfileContainer ref={profileRef}>
        <motion.div
          initial={{ y: -30, opacity: 0, filter: "blur(5px)" }}
          animate={isInView ? { y: 0, opacity: 1, filter: "blur(0px)" } : {}}
          transition={{ duration: 1 }}
          style={{ zIndex: 2, pointerEvents: "none" }}
        >
          <S.ProfilePicture>
            <S.PictureContainer>
              <S.PictureImage src="/image/perfil.jpg" alt="Lucas Gama" />
            </S.PictureContainer>
          </S.ProfilePicture>
        </motion.div>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1 }}
          style={{ zIndex: 2, pointerEvents: "none" }}
        >
          <S.ProfileName>
            <p>Lucas </p>
            <p> Gama</p>
          </S.ProfileName>
          <S.ProfileDescription>Desenvolvedor Web</S.ProfileDescription>
        </motion.div>
      </S.ProfileContainer>
    </S.Section>
  );
}
