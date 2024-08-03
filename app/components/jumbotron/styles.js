import styled from "styled-components";
import * as v from "../../utils/constants/global";

export const Section = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  height: 100vh;
  gap: 22px;
  background-color: ${v.colors.primaryColor};
  max-height: 900px;
  @media screen and (max-width: 1024px) {
    gap: 16px;
  }
  @media screen and (max-width: 480px) {
    gap: 12px;
    height: 90svh;
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
  gap: 1em;
  width: 100%;
  height: 100%;
`;


export const SocialIcon = styled.a`
  padding: 0 0.6em;
  color: ${v.colors.accentColor};
  font-size: ${v.fontSize.base};
  transition: ease 0.2s all;
  &:hover {
    font-size: ${v.fontSize.md};
  }
  @media screen and (max-width: 480px) {
    font-size: ${v.fontSize.md};
    &:hover {
      font-size: ${v.fontSize.lg};
    }
  }
`;

export const ProfilePicture = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  padding: 5px;
  pointer-events: "none";
  background: linear-gradient(
    180deg,
    ${v.colors.accentColor} 0%,
    ${v.colors.secondColor} 65%
  );
  @media screen and (max-width: 480px) {
    width: 120px;
    height: 120px;
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

export const PictureImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const ProfileName = styled.div`
  position: relative;
  font-size: ${v.fontSize.xl};
  color: ${v.colors.thirdColor};
  font-weight: 500;
  @media screen and (max-width: 1024px) {
    font-size: ${v.fontSize.lg};
  }
`;

export const ProfileDescription = styled.h3`
  font-size: ${v.fontSize.base};
  color: ${v.colors.thirdColor};
  font-weight: 400;
`;