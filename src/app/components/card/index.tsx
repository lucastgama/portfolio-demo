import React from "react";
import * as S from "./styles";
import Link from "next/link";

interface CardProps {
  image?: string;
  title?: string;
  languages?: string[];
  description?: string;
  link?: any;
}

const Card: React.FC<CardProps> = React.memo(
  ({ image, title, languages, description, link }) => {
    return (
      <Link href={link} target="blank">
        <S.Card>
          <S.Image src={image} alt={title} />
          <S.Title>{title}</S.Title>
          <S.Works>
            {languages?.map((language) => (
              <S.WorkItem key={language}>{language}</S.WorkItem>
            ))}
          </S.Works>
          <S.Description>{description}</S.Description>
        </S.Card>
      </Link>
    );
  }
);

Card.displayName = "Card";

export default Card;
