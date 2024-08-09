import styled from "styled-components";
import * as v from "../../utils/constants/global";


export const Card = styled.div`
  width: 260px;
  height: 345px;
  user-select: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0.6rem;
  border-radius: 0.4rem;
  overflow: hidden;
  @media screen and (max-width: 480px) {
    height: 300px;
  }
`;

export const Image = styled.img`
  border-radius: 0.5rem;
  width: 100%;
  object-fit: cover;
  object-position: top center;
  height: 160px;
  max-height: 160px;
`;

export const Title = styled.h4`
  color: ${v.colors.accentColor};
  font-weight: 500;
  padding: 10px 0;
  text-transform: capitalize;
  font-size: ${v.fontSize.sm};
`;

export const Works = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const WorkItem = styled.div`
  text-align: center;
  color: ${v.colors.accentColor};
  font-size: ${v.fontSize.xxs};
  border-radius: 20px;
  border: 1px solid ${v.colors.accentColor};
  padding: 2px 10px;
  font-weight: 300;
`;

export const Description = styled.p`
  padding: 15px 0;
  color: ${v.colors.accentColor};
  font-size: ${v.fontSize.xs};
  font-weight: 300;
`;
