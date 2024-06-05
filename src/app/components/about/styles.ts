import styled from "styled-components";
import * as v from "@/app/lib/variable/variables";

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
  &:after {
    content: "Quem sou eu ?";
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

export const Container = styled.div`
  width: 100%;
  display: grid;
  gap: 18px;
  grid-template-columns: 2fr 3fr;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ContainerInformation = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  @media screen and (max-width: 1024px) {
    padding: 0.9em 0;
    align-items: center;
    text-align: center;
  }
`;

export const WhoIam = styled.h3`
  color: ${v.colors.thirdColor};
  font-size: ${v.fontSize.md};
  margin-bottom: 1em;
  @media screen and (max-width: 1024px) {
    font-size: ${v.fontSize.base};
    margin-bottom: 0.5em;
  }
`;

export const Description = styled.p`
  color: ${v.colors.accentColor};
  font-size: ${v.fontSize.sm};
  font-weight: 300;
  margin-bottom: 1em;
  @media screen and (max-width: 1024px) {
    font-size: ${v.fontSize.xs};
    margin-bottom: 0.5em;
  }
`;

export const Logos = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  padding: 0.5em 0;
  @media screen and (max-width: 1024px) {
    justify-content: center;
  }
`;

export const Logo = styled.img`
  height: 34px;
  margin: 0.2em;
  @media screen and (max-width: 480px) {
    height: 32px;
    margin: 0.1em;
  }
`;

export const ContainerPicture = styled.div`
  position: relative;
  border-radius: 25px;
  border: 2px solid ${v.colors.accentColor};
  padding: 20px;
  width: 400px;
  height: 450px;
  @media screen and (max-width: 1024px) {
    width: 175px;
    height: 175px;
    border-radius: 10px;
    padding: 10px;
  }
`;

export const Picture = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  object-position: center;
  object-fit: cover;
  z-index: 1;
  border-radius: 25px;

  @media screen and (max-width: 1024px) {
    border-radius: 10px;
  }
`;
