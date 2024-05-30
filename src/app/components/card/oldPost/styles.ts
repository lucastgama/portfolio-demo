import styled from "styled-components";
import * as v from "@/app/lib/variable/variables";

export const Card = styled.div`
  display: flex;
  width: 100%;
  max-width: 640px;
  height: 120px;
  background-color: ${v.colors.primaryColor};
  @media screen and (max-width: 1024px) {
    height: 100px;
  }
  @media screen and (max-width: 480px) {
    height: 80px;
  }
`;

export const Article = styled.article`
  width: 100%;
  height: 100%;
`;

export const Image = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Text = styled.div`
  flex: 2;
  text-align: start;
  display: flex;
  flex-direction: column;
  padding: 0rem 0.4rem;
  @media screen and (max-width: 480px) {
    padding: 0 0.4rem;
  }
`;

export const Title = styled.h4`
  font-size: ${v.fontSize.sm};
  color: ${v.colors.accentColor};
  font-weight: 400;
  @media screen and (max-width: 1024px) {
    font-size: ${v.fontSize.xs};
  }
  @media screen and (max-width: 480px) {
    font-size: ${v.fontSize.xxs};
  }
`;

export const Date = styled.div`
  color: ${v.colors.thirdColor};
  font-size: ${v.fontSize.xs};
  padding: 0 0 0.6rem 0;
`;
