import React from "react";
import * as S from "./styles";

interface CardProps {
  image?: string;
  title?: string;
  languages?: string[];
  description?: string;
}

const Card: React.FC<CardProps> = React.memo(
  ({ image, title, languages, description }) => {
    return (
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
    );
  }
);

Card.displayName = 'Card';

export default Card;
