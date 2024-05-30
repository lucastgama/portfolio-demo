import React from "react";
import * as S from "./styles";
import Image from "next/image";

interface NewPostProps {
  img: string;
  title: string;
  content: string;
  author: string;
  comments: number;
}

const OldPost = ({ img, title, content, author, comments }: NewPostProps) => {
  return (
    <S.Card>
      <S.Image>
        <Image
          src="/image/demo.jpg"
          alt="Minha foto"
          fill={true}
          style={{ objectFit: "cover", borderRadius: "10px" }}
          sizes="(max-width: 640px) 100vw, (max-width: 427px) 100vw"
        />
      </S.Image>
      <S.Text>
        <S.Date>Abril 18, 2023</S.Date>
        <S.Title>City os light you should visit atleast once in life!</S.Title>
      </S.Text>
    </S.Card>
  );
};

export default OldPost;
