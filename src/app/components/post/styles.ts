import styled from "styled-components";
import * as v from "@/app/lib/variable/variables";

export const SectionPost = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${v.colors.primaryColor};
`;

export const Section = styled.div`
  position: relative;
  display: flex;
  height: 100vh;
  gap: 1.6rem;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const NewPost = styled.div`
  flex: 2;
  display: flex;
  gap: 0.8rem;
`;

export const OlderPosts = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
