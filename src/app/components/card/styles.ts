import styled from "styled-components";
import * as v from "@/app/lib/variable/variables";

export const Card = styled.div`
  position: relative;
  width: 240px;
  height: 345px;
  user-select: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0.7rem;
  border: 1px solid ${v.colors.accentColor};
  background-color: ${v.colors.thirdColor};
  background: linear-gradient(
    0deg,
    rgba(26, 26, 26, 0.2) 0%,
    rgba(91, 91, 91, 0.3) 100%
  );
  box-shadow: 0 0px 20px 1px rgba(91, 91, 91, 0.3);
  border-radius: 0.7rem;
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);
  overflow: hidden;
  transition: 0.3s all;
  &:hover {
    transform: scale(1.05);
  }
`;

export const Image = styled.img`
  border-radius: 0.5rem;
  width: 100%;
  object-fit: cover;
  object-position: top center;
  height: 160px;
  min-height: 160px;
`;

export const Title = styled.h4`
  color: ${v.colors.accentColor};
  font-weight: 500;
  padding: 10px 0;
  text-transform: capitalize;
`;

export const Works = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
`;

export const WorkItem = styled.div`
  text-align: center;
  color: ${v.colors.accentColor};
  font-size: ${v.fontSize.xs};
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