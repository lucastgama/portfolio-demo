import styled from "styled-components";
import * as v from "@/app/lib/variable/variables";

export const BtnContact = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${v.colors.accentColor};
  color: ${v.colors.accentColor};
  border-radius: 50px;
  padding: 0.5rem 1.4rem;
  z-index: 2;
  cursor: pointer;
  transition: ease-out 0.3s;
  @media screen and (max-width: 1024px) {
    gap: 0.2rem;
    padding: 0.3rem 1.2rem;
  }
  &:hover {
    background-color: ${v.colors.accentColor};
    color: ${v.colors.secondColor};
    border: 1px solid ${v.colors.primaryColor};
  }
`;

export const BtnText = styled.p`
  font-size: ${v.fontSize.sm};
  font-weight: 300;
  @media screen and (max-width: 768px) {
    font-size: ${v.fontSize.xs};
  }
`;
