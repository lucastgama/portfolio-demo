import styled from "styled-components";
import * as v from "../../utils/constants/global";

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: ${v.colors.primaryColor};
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  gap: 20px;
`;

export const Icon = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${v.colors.accentColor};
  font-size: ${v.fontSize.base};
  width: 45px;
  height: 45px;
  z-index: 10;
  transition: all 1s ease-out;
  cursor: pointer;
  &:before {
    content: "";
    position: absolute;
    width: 45px;
    height: 45px;
    background: ${v.colors.secondColor};
    border-radius: 5px;
    transform: rotate(45deg);
    z-index: -1;
    transition: all 1s ease-out;
  }
  &:hover {
    &:before {
      transform: rotate(345deg);
    }
  }
  @media screen and (max-width: 480px) {
    width: 40px;
    height: 40px;
    :before {
      width: 40px;
      height: 40px;
    }
  }
`;

export const Description = styled.p`
  font-size: ${v.fontSize.sm};
  color: ${v.colors.thirdColor};
  font-weight: 300;
`;
