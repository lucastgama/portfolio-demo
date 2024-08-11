import styled from "styled-components";
import * as v from "../../utils/constants/global";

export const NavbarContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  z-index: 50;
`;

export const Navbar = styled.nav`
  position: fixed;
  top: 0.5em;
  display: flex;
  align-items: center;
  justify-content:flex-end;
  width: 100%;
  max-width: 1440px;
  padding: 0.3rem 3rem;
`;

export const NavbarLink = styled.li`
  display: flex;
  justify-content: space-around;
  list-style: none;
  color: ${v.colors.thirdColor};
  cursor: pointer;
  position: relative;
  font-size:${v.fontSize.xxl};

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: ${v.colors.accentColor};
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  &:hover {
    color: ${v.colors.accentColor};
  }

  &:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  @media screen and (max-width: 600px) {
    padding: 1.2rem;
    font-size:${v.fontSize.lg};

  }
`;

export const BtnMobile = styled.button`
  padding-top: 20px;
  right: 35px;
  background: none;
  border: 0;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

export const Burger = styled.span`
  position: relative;
  display: block;
  width: 28px;
  height: 4px;
  margin: 0 auto;
  background: ${v.colors.accentColor};
  transform: ${({ $isOpen }) =>
    $isOpen ? `skew(5deg) translateY(-8px) rotate(-45deg)` : `skew(3deg)`};
  z-index: 20;
  transition: all 0.275s;

  &:after,
  &:before {
    content: "";
    display: block;
    height: 100%;
    background: ${v.colors.accentColor};
    transition: all 0.275s;
  }

  &:after {
    transform: ${({ $isOpen }) =>
    $isOpen
      ? `translateY(-12px) translateX(10px) skew(-20deg)`
      : `translateY(-12px) translateX(-2px) skew(-20deg)`};
    opacity: ${({ $isOpen }) => ($isOpen ? `0` : `1`)};
  }

  &:before {
    transform: ${({ $isOpen }) =>
    $isOpen
      ? `translateY(0px) skew(-10deg) rotate(75deg)`
      : `translateY(-16px) skew(-10deg) translateX(2px)`};
  }
`;

export const NavMobile = styled.div`
  display: block;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(15px);
  opacity: ${({ $isOpen }) => ($isOpen ? `1` : `0`)};
  visibility: ${({ $isOpen }) => ($isOpen ? `visible` : `hidden`)};
  transition: all 0.375s;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 50%;
    background: ${v.colors.secondColor};
    transform-origin: 0 0;
    transform: ${({ $isOpen }) =>
    $isOpen ? `skew(-14deg) translateX(0)` : `skew(-14deg) translateX(-120%)`};
    transition: all 0.275s 0.1s;
  }

  @media screen and (max-width: 600px) {
    &:before {
      right: 0;
    }
  }
`;

export const NavMobileLinks = styled.ul`
  display: inline-flex;
  flex-direction: column;
  height: 90%;
  width: 50%;
  align-items: flex-start;
  justify-content: center;
  transform: translateX(-18%) skew(-18deg);
  color: ${v.colors.accentColor};
  @media screen and (max-width: 600px) {
    width: 45%;
  }
`;

export const SocialMedia = styled.nav`
  color: ${v.colors.accentColor};
  display: inline-flex;
  align-items: flex-start;
  justify-content: center;
  gap: 15px;
`;

export const Icons = styled.a`
  text-decoration: none;
  color: ${v.colors.thirdColor};
  transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
    color: ${v.colors.accentColor};
  }
  &:focus {
    color: ${v.colors.accentColor};
  }
`;