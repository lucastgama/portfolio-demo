import styled from "styled-components";
import * as v from "@/app/lib/variable/variables";

export const Section = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  height: 100vh;
  gap: 22px;
  @media screen and (max-width: 1024px) {
    gap: 16px;
  }
  @media screen and (max-width: 480px) {
    gap: 12px;
  }
`;

export const Statue = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  height: 100%;
`;

export const ProfilePicture = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  padding: 5px;
  z-index: 2;
  background: linear-gradient(
    180deg,
    ${v.colors.accentColor} 0%,
    ${v.colors.secondColor} 65%
  );
  @media screen and (max-width: 1024px) {
    width: 100px;
    height: 100px;
  }
  @media screen and (max-width: 480px) {
    width: 80px;
    height: 80px;
  }
`;

export const PictureContainer = styled.div`
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

export const ProfileName = styled.div`
  position: relative;
  font-size: ${v.fontSize.xl};
  color: ${v.colors.accentColor};
  font-weight: 600;
  z-index: 2;
  background: -webkit-radial-gradient(
    circle,
    ${v.colors.accentColor} 0%,
    ${v.colors.thirdColor} 90%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  &::after {
    position: absolute;
    top: 0;
    left: 2px;
    content: "";
    width: 30%;
    height: 2px;
    background-color: ${v.colors.thirdColor};
  }
  @media screen and (max-width: 1024px) {
    font-size: ${v.fontSize.lg};
  }
  @media screen and (max-width: 480px) {
    font-size: ${v.fontSize.base};
  }
`;

export const ProfileDescription = styled.h3`
  font-size: ${v.fontSize.sm};
  color: ${v.colors.accentColor};
  font-weight: 400;
  z-index: 2;
  background: -webkit-radial-gradient(
    circle,
    ${v.colors.accentColor} 0%,
    ${v.colors.thirdColor} 90%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (max-width: 1024px) {
    font-size: ${v.fontSize.xs};
  }
  @media screen and (max-width: 480px) {
    font-size: ${v.fontSize.xs};
  }
`;
