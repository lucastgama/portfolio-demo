import React from "react";
import * as S from "./styles";
import Image from "next/image";

const PostCard = () => {
  return (
    <S.PostCard>
      <S.Article>
        <S.Thumbnail>
          <Image
            src="/image/demo.jpg"
            alt="Minha foto"
            fill={true}
            style={{ objectFit: "cover", borderRadius: "10px" }}
            sizes="(max-width: 640px) 100vw, (max-width: 427px) 100vw"
          />
        </S.Thumbnail>
        <S.ContentPart>
          <S.Category>Media Player</S.Category>
          <S.Title>lorem ipsum lorem lorem ipsum lorem</S.Title>
          <S.Date>Abril 18, 2023</S.Date>
          <S.ReadMore>Saiba mais</S.ReadMore>
        </S.ContentPart>
      </S.Article>
    </S.PostCard>
  );
};

export default PostCard;
