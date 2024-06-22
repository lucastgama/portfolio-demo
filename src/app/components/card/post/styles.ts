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

export const ReadMoreContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ReadMore = styled.a`
  text-align: center;
  margin: 10px;
  color: ${v.colors.thirdColor};
  border: 1px solid ${v.colors.accentColor};
  font-size: ${v.fontSize.sm};
  width: 100%;
  border-radius: 50px;
  font-weight: 300;
  padding: 0.4rem 1rem;
  display: block;
  transition: all ease 0.3s;
  cursor: pointer;
  &:hover {
    color: ${v.colors.secondColor};
    border: 1px solid ${v.colors.primaryColor};
    background-color: ${v.colors.accentColor};
    font-weight: 500;
  }
`;
