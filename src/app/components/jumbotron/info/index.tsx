"use client";
import { useProgress } from "@react-three/drei";
import Statue from "../../scene/statue";
import * as S from "./styles";
import Image from "next/image";
import { Suspense } from "react";

const Info = () => {
  function Loader() {
    const { progress } = useProgress();
    return (
      <div className="loading-screen">
        <p>{progress.toFixed(0)}%</p>
      </div>
    );
  }
  return (
    <Suspense fallback={<Loader />}>
      <S.Section className="mx-width" id="inicio">
        <S.Statue>
          <Statue />
        </S.Statue>
        <S.ProfilePicture>
          <S.PictureContainer>
            <Image
              src="/image/perfil.jpg"
              alt="Minha foto"
              fill={true}
              style={{ objectFit: "cover" }}
              sizes="(max-width: 640px) 100vw, (max-width: 427px) 100vw"
              priority
            />
          </S.PictureContainer>
        </S.ProfilePicture>
        <S.ProfileName>Opa, eu sou o Lucas Gama</S.ProfileName>
        <S.ProfileDescription>
          Um desenvolvedor web apaixonado por criar experiências digitais
          inovadoras
        </S.ProfileDescription>
        <S.ProfileDetails>
          Busco elevar a jornada do usuário por meio de um design intuitivo e
          funcional, combinando empatia no design com tecnologia de ponta.
          Junte-se a mim nesta jornada para redefinir a maneira como sua
          aplicação é apresentada ao mundo.
        </S.ProfileDetails>
      </S.Section>
    </Suspense>
  );
};

export default Info;
