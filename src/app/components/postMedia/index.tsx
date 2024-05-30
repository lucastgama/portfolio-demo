"use client";

import React from "react";
import * as S from "./styles";
import MediaPlayer from "../card/mediaPlayer";

const PostsMediaSection = () => {
  const teste = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
  return (
    <S.SectionPost>
      <S.Section className="mx-width">
        <S.LineSection />
        {teste.map((post) => (
          <MediaPlayer key={post.id} />
        ))}
      </S.Section>
    </S.SectionPost>
  );
};

export default PostsMediaSection;
