"use client";
import NewPost from "../card/newPost";
import OldPost from "../card/oldPost";
import * as S from "./styles";
export const PostsSection = () => {
  const posts = [
    {
      id: 1,
      title: "Post mais recente",
      content: "Conteúdo do post mais recente",
    },
    { id: 2, title: "Post antigo 1", content: "Conteúdo do post antigo 1" },
    { id: 3, title: "Post antigo 2", content: "Conteúdo do post antigo 2" },
    { id: 4, title: "Post antigo 3", content: "Conteúdo do post antigo 3" },
  ];
  const recentPost = posts[0];
  const olderPosts = posts.slice(1);
  return (
    <S.SectionPost>
      <S.Section className="mx-width" >
        <S.NewPost>
          <NewPost
            img="teste"
            title="Lucas Gama novo post"
            content="bla bla bla"
            author="Lucas Gama"
            comments={3}
          />
          <NewPost
            img="teste"
            title="Lucas Gama novo post"
            content="bla bla bla"
            author="Lucas Gama"
            comments={3}
          />
        </S.NewPost>
        <S.OlderPosts>
          {olderPosts.map((post) => (
            <OldPost
              key={post.id}
              img="teste"
              title="Lucas Gama novo post"
              content="bla bla bla"
              author="Lucas Gama"
              comments={3}
            />
          ))}
        </S.OlderPosts>
      </S.Section>
    </S.SectionPost>
  );
};
