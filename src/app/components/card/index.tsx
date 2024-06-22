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
      <S.Card>
        <S.Image src={image} alt={title} />
        <Link style={{ color: "white" }} href={link} target="blank">
          <S.Title>{title}</S.Title>
        </Link>
        <S.Works>
          {languages?.map((language) => (
            <S.WorkItem key={language}>{language}</S.WorkItem>
          ))}
        </S.Works>
        <S.Description>{description}</S.Description>
      </S.Card>
    );
  }
);

Card.displayName = "Card";

export default Card;
