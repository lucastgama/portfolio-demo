import styled from "styled-components";
import * as v from "../../utils/constants/global";

export const SquareUpgrade = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background-color: ${v.colors.accentColor};
  border-radius: 5px;
  border: 3px solid #a0a0a0;
  box-shadow: inset 0 0 5px 2px rgba(0, 0, 0, 0.2),
    0 0 5px 2px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    background-color: #838383;
    border: 3px solid #3b3b3b;
    &:before {
      display: block;
    }
  }
  &.active {
    background-color: #a0a0a0;
    border: 3px solid #3b3b3b;
  }
  @media screen and (max-width: 1024px) {
    &.active:hover {
      background-color: #a0a0a0;
      border: 3px solid #3b3b3b;
    }
    &:hover {
      background-color: ${v.colors.accentColor};
      border: 3px solid #a0a0a0;
    }
  }
  @media screen and (max-width: 480px) {
    width: 40px;
    height: 40px;
    &:before {
      font-size: ${v.fontSize.xs};
    }
  }
`;

export const Icon = styled.img`
  width: 70%;
`;
