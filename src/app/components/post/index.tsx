"use client";

import React from "react";
import * as S from "./styles";
import PostCard from "../card/post";

const PostsSection = () => {
  const teste = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
  ];
  return (
    <S.SectionPost className="mx-width">
      <S.Section>
        <S.LineSection />
        {teste.map((post) => (
          <PostCard key={post.id} />
        ))}
        <S.LineSection />
      </S.Section>
    </S.SectionPost>
  );
};

export default PostsSection;
