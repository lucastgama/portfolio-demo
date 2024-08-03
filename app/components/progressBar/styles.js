import styled from "styled-components";
import * as v from "../../utils/constants/global";

export const Skill = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Name = styled.h3`
  color: ${v.colors.thirdColor};
  font-size: ${v.fontSize.base};
  font-weight: 400;
  @media screen and (max-width: 480px) {
    font-size: ${v.fontSize.sm};
  }
`;

export const ProgressPercentage = styled.h3`
  color: ${v.colors.thirdColor};
  font-size: ${v.fontSize.base};
  font-weight: 400;
  & span {
    color: ${v.colors.accentColor};
  }
  @media screen and (max-width: 480px) {
    font-size: ${v.fontSize.sm};
  }
  @media screen and (max-width: 320px) {
    display: none;
  }
`;

export const ProgressBar = styled.div`
  position: relative;
  width: 100%;
  height: 1rem;
  border-radius: 20px;
  margin: 5px 0 20px;
  background-color: ${v.colors.secondColor};
  &:before {
    content: "";
    position: absolute;
    top: 0;
    height: 1rem;
    width: ${(props) => props.$bonus + "%"};
    border-radius: 20px;
    background: ${v.colors.accentColor};
    background: linear-gradient(
      162deg,
      rgb(99, 182, 194) 13%,
      rgb(0, 221, 255) 47%,
      rgb(0, 80, 92) 100%
    );
    transition: all 0.5s ease-in-out;
  }
  &:after {
    content: "";
    position: absolute;
    top: 0;
    height: 1rem;
    width: ${(props) => props.$value + "%"};
    border-radius: 20px;
    background: ${v.colors.accentColor};
    background: linear-gradient(162deg, #ffffff 13%, #d3d3d3 47%, #a0a0a0 100%);
    transition: all 0.5s ease-in-out;
  }
  @media screen and (max-width: 480px) {
    height: 0.7rem;
    margin: 5px 0 10px;
    &:after {
      height: 0.7rem;
    }
    &:before {
      height: 0.7rem;
    }
  }
`;
