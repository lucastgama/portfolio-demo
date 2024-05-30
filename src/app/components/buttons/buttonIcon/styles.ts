import styled from "styled-components";
import * as v from "@/app/lib/variable/variables";

export const Btn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${v.colors.accentColor};
  border-radius: 50px;
  padding: 0.3rem 0.4rem;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    padding: 0.2rem;
  }
`;

export const Icon = styled.a`
  border-radius: 50px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${v.colors.accentColor};
  font-size: ${v.fontSize.md};
  @media screen and (max-width: 1024px) {
    font-size: ${v.fontSize.base};
  }
  @media screen and (max-width: 768px) {
    font-size: ${v.fontSize.sm};
  }
`;
