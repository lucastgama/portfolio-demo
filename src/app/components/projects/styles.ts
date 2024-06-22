import styled from "styled-components";
import * as v from "@/app/lib/variable/variables";

export const Section = styled.div`
  background-color: ${v.colors.primaryColor};
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${v.fontSize.xl};
  color: ${v.colors.thirdColor};
  text-transform: uppercase;
  margin-bottom: 16px;
  font-weight: 700;
  &:after {
    content: "Algumas coisas em que trabalhei";
    color: ${v.colors.accentColor};
    position: absolute;
    transform: matrix(-50%, -50%);
    font-size: ${v.fontSize.xs};
    font-weight: 600;
    letter-spacing: 1px;
  }
  @media screen and (max-width: 1024px) {
    margin-bottom: 12px;
    font-size: ${v.fontSize.md};
    &:after {
      font-size: ${v.fontSize.xxs};
    }
  }
  @media screen and (max-width: 480px) {
    margin-bottom: 8px;
  }
`;
