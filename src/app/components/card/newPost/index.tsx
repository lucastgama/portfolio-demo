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

const NewPost = ({ img, title, content, author, comments }: NewPostProps) => {
  return (
    <S.Card>
      <S.Article>
      <S.Image>
        <Image
          src="/image/demo.jpg"
          alt="Minha foto"
          fill={true}
          style={{ objectFit: "cover", borderRadius: "10px" }}
          sizes="(max-width: 640px) 100vw, (max-width: 427px) 100vw"
        />
      </S.Image>
      <S.ContentPart>
        <S.Category>Teste</S.Category>
        <S.Title>City os light you should visit atleast once in life!</S.Title>
        <S.Content>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia,
          sequi distinctio ullam officiis eaque rerum minima aperiam eos illo
          rem praesentium ad est natus aspernatur sit! Ut qui molestiae
          explicabo!
        </S.Content>
        <S.Details> -->Lucas Gama </S.Details>
      </S.ContentPart>
      </S.Article>
    </S.Card>
  );
};

export default NewPost;
