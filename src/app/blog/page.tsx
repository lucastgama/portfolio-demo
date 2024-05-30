"use client";
import JumbotronBlog from "../components/jumbotron/blog/home";
import { PostsSection } from "../components/post";
import PostsMediaSection from "../components/postMedia";

const Blog = () => {
  return (
    <>
      <JumbotronBlog />
      <PostsSection />
      <PostsMediaSection />
    </>
  );
};

export default Blog;
