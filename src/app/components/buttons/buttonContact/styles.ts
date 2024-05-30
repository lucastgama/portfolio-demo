import styled from "styled-components";
import * as v from "@/app/lib/variable/variables";

export const BtnContact = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${v.colors.accentColor};
  border-radius: 50px;
  padding: 0.2rem 0.4rem;
  gap: 0.4rem;
  cursor: pointer;
  @media screen and (max-width: 1024px) {
    gap: 0.2rem;
    padding: 0.1rem 0.2rem;
  }
`;

export const BtnText = styled.p`
  font-size: ${v.fontSize.sm};
  color: ${v.colors.accentColor};
  font-weight:300;
  @media screen and (max-width: 768px) {
    font-size: ${v.fontSize.xs};
  }
`;

export const Icon = styled.a`
  border-radius: 50px;
  padding: 0.4rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: ${v.colors.thirdColor};
  color: ${v.colors.accentColor};
  font-size: ${v.fontSize.sm};
  @media screen and (max-width: 1024px) {
    padding: 0.2rem;
  }
  @media screen and (max-width: 768px) {
    font-size: ${v.fontSize.xs};
  }
`;
