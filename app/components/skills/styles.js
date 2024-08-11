import styled from "styled-components";
import * as v from "../../utils/constants/global";

export const Section = styled.section`
  background-color: ${v.colors.primaryColor};
  display: flex;
  align-items: center;
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
    &:after {
      font-size: ${v.fontSize.xxs};
    }
  }
  @media screen and (max-width: 480px) {
    margin-bottom: 8px;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 4fr 3fr;
  gap: 0 3em;
  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    gap: 0px;
  }
`;

export const SkillTree = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ContainerModel = styled.div`
  width: 100%;
  height: 100%;
  align-self: center;
  justify-self: center;
  @media screen and (max-width: 1024px) {
    height: 350px;
    width: 350px;
  }
  @media screen and (max-width: 480px) {
    height: 250px;
    width: 250px;
  }
`;

export const Skills = styled.div`
  width: 100%;
  padding: 0 20px 0 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0px 3em;
  @media screen and (max-width: 1024px) {
    gap: 0 1.5em;
  }
  @media screen and (max-width: 480px) {
    gap: 0 0.8em;
    padding: 0;
  }
`;
export const ContainerUpgrade = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0px 3em;
  @media screen and (max-width: 1024px) {
    gap: 0 1.5em;
  }
  @media screen and (max-width: 480px) {
    gap: 0 1em;
  }
`;

export const Upgrades = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
`;

export const SubTitle = styled.h3`
  font-size: ${v.fontSize.sm};
  color: ${v.colors.thirdColor};
  text-transform: capitalize;
  font-weight: 700;
  @media screen and (max-width: 1024px) {
    font-size: ${v.fontSize.xs};
  }
  @media screen and (max-width: 480px) {
    font-size: ${v.fontSize.xxs};
  }
`;

export const UpgradesTemplate = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  padding: 0.4em 0;
  gap: 10px 20px;
  @media screen and (max-width: 1024px) {
    gap: 0.8em;
  }
  @media screen and (max-width: 480px) {
    justify-content: center;
    gap: 0.6em;
  }
`;
