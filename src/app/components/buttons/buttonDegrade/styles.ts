import styled from "styled-components";
import * as v from "@/app/lib/variable/variables";

export const BtnBorder = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  padding: 2px;
  background: linear-gradient(
    90deg,
    ${v.colors.thirdColor} 0%,
    ${v.colors.secondColor} 80%
  );
  cursor: pointer;
`;

export const BtnDegrade = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: ${v.fontSize.sm};
  padding: 0.4rem 0.5rem;
  color: ${v.colors.accentColor};
  background: linear-gradient(
    90deg,
    ${v.colors.secondColor} 0%,
    ${v.colors.primaryColor} 80%
  );
  border-radius: 50px;
  font-weight: 500;
  transition: 0.3s;
`;
