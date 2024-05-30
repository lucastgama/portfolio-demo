import Image from "next/image";
import * as S from "./styles";
import { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface BtnIconProps {
  link?: string;
  icon?: any;
}

const BtnIcon = ({ link,icon }: BtnIconProps) => {
  return (
    <S.Btn>
      <S.Icon href={link} target="_blank">
      <FontAwesomeIcon icon={icon} />
      </S.Icon>
    </S.Btn>
  );
};

export default BtnIcon;
