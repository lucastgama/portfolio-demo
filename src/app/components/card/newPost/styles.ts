import styled from "styled-components";
import * as v from "@/app/lib/variable/variables";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-width: 420px;
  /* background-color: ${v.colors.primaryColor}; */
  /* background-color: red; */
  cursor: pointer;
`;

export const Article = styled.article`
  width: 100%;
  height: 100%;
`;

export const Image = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;
`;

export const ContentPart = styled.div`
  text-align: start;
  display: flex;
  flex-direction: column;
`;

export const Category = styled.div`
  position: relative;
  list-style: none;
  font-size: ${v.fontSize.xs};
  color: ${v.colors.thirdColor};
  font-weight: 600;
  padding: 0.4rem 0 0;
  &:after {
    content: " ";
    position: absolute;
    width: 1.2rem;
    transform: scaleX(1);
    height: 3px;
    bottom: 1px;
    left: 0;
    background-color: ${v.colors.accentColor};
    transform-origin: bottom right;
    transition: width 0.45s ease-out;
  }
  &:hover:after {
    transform: skewX(1);
    transform-origin: bottom left;
    width: 2.4rem;
  }
`;

export const Title = styled.h3`
  font-size: ${v.fontSize.sm};
  color: ${v.colors.accentColor};
  font-weight: 400;
  padding: 0.4rem 0 0;
`;

export const Content = styled.p`
  font-size: ${v.fontSize.sm};
  color: ${v.colors.thirdColor};
  padding: 0.4rem 0 0;
`;

export const Details = styled.p`
  font-size: ${v.fontSize.xs};
  color: ${v.colors.thirdColor};
  padding: 0.4rem 0 0;
`;
