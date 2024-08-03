import styled from "styled-components";
import * as v from "../../utils/constants/global";

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
  @media screen and (max-width: 1024px) {
    margin-bottom: 12px;
    font-size: ${v.fontSize.md};
  }
  @media screen and (max-width: 480px) {
    margin-bottom: 8px;
  }
`;

export const Projects = styled.div`
  width: 100%;
  display:flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap:1rem;
  @media screen and (max-width: 1024px) {
    justify-content: space-around;
  }
  @media screen and (max-width: 480px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;