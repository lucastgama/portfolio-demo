import styled from "styled-components";
import * as v from "../../utils/constants/global";

export const BtnBorder = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${v.colors.accentColor};
  color: ${v.colors.accentColor};
  border-radius: 50px;
  padding: 0.5rem 1.4rem;
  cursor: pointer;
  transition: ease-out 0.3s;
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
