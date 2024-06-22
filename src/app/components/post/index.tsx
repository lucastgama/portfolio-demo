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
        {teste.map((post) => (
          <PostCard key={post.id} />
        ))}
      </S.Section>
      <S.PaginationContainer>
        <S.LineDecoration />
        <S.Pagination>
          <S.PaginationSpan>«</S.PaginationSpan>
          <S.PaginationList>1</S.PaginationList>
          <S.PaginationList>1</S.PaginationList>
          <S.PaginationList>1</S.PaginationList>
          <S.PaginationList>1</S.PaginationList>
          <S.PaginationList>1</S.PaginationList>
          <S.PaginationList>1</S.PaginationList>
          <S.PaginationSpan>»</S.PaginationSpan>
        </S.Pagination>
        <S.LineDecoration />
      </S.PaginationContainer>
    </S.SectionPost>
  );
};

export default PostsSection;
