import styled from "styled-components";
import * as v from "@/app/lib/variable/variables";

export const PostCard = styled.div`
  width: 260px;
  max-height: 380px;
  border-radius: 10px;
  transition: all 0.3s ease-out;
  &:hover {
    transform: scale(1.05);
  }
`;

export const Article = styled.article`
  position: relative;
  float: left;
  width: 100%;
  height: 100%;
`;

export const Thumbnail = styled.div`
  position: relative;
  height: 180px;
  border-radius: 5px;
`;

export const ContentPart = styled.div`
  padding: 0.6rem 0 0 0;
`;

export const Category = styled.div`
  position: relative;
  list-style: none;
  font-size: ${v.fontSize.xs};
  color: ${v.colors.thirdColor};
  font-weight: 600;
  padding: 0.6rem 0 0 0;
  &:after {
    content: " ";
    position: absolute;
    width: 1.2rem;
    transform: scaleX(1);
    height: 3px;
    bottom: -2px;
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

export const Title = styled.h4`
  color: ${v.colors.accentColor};
  font-size: ${v.fontSize.base};
  padding: 0.6rem 0 0 0;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Date = styled.div`
  color: ${v.colors.thirdColor};
  font-size: ${v.fontSize.xs};
  padding: 0.6rem 0 0 0;
`;

export const ReadMore = styled.a`
  color: ${v.colors.thirdColor};
  font-size: ${v.fontSize.sm};
  padding: 0.6rem 0;
  display: block;
  cursor: pointer;
  &:hover {
    color: ${v.colors.accentColor};
    font-weight: 600;
  }
`;
