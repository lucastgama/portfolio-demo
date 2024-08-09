import React from "react";
import * as S from "./styles";
import Link from "next/link";

export const Card = ({ image, title, languages, description, url }) => {
  return (
    <Link href={url} passHref>
      <S.Card>
        <S.Image src={image} alt={title} />
        <S.Title>{title}</S.Title>
        <S.Works>
          {languages.map((language) => (
            <S.WorkItem key={language}>{language}</S.WorkItem>
          ))}
        </S.Works>
        <S.Description>{description}</S.Description>
      </S.Card>
    </Link>
  );
};
