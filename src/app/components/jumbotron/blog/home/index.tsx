import React from "react";
import * as S from "./styles";
import Wings from "@/app/components/scene/wings";

const JumbotronBlog = () => {
  return (
    <S.SectionBlog className="mx-width">
      <S.Section>
        <S.Statue>
          <Wings />
        </S.Statue>
      </S.Section>
    </S.SectionBlog>
  );
};

export default JumbotronBlog;
