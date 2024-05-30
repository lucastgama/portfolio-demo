import styled from "styled-components";
import * as v from "@/app/lib/variable/variables";

export const Section = styled.section`
  background-color: ${v.colors.primaryColor};
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 4fr 3fr;
  gap: 1.5rem;
  @media screen and (max-width: 1024px) {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
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
    content: "Diga um olá";
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

export const Map = styled.div`
  max-height: 600px;
  @media screen and (max-width: 1024px) {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  z-index: 25;
  @media only screen and (max-width: 1024px) {
    width: 480px;
    gap: 15px;
  }
`;

export const InputContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5px;
  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

export const btnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Input = styled.input`
  padding: 1rem;
  background-color: ${v.colors.secondColor};
  color: ${v.colors.thirdColor};
  font-size: ${v.fontSize.base};
  font-weight: 300;
  border: none;
  border-radius: 10px;
  @media screen and (max-width: 1024px) {
    font-size: ${v.fontSize.sm};
  }
  @media screen and (max-width: 480px) {
    font-size: ${v.fontSize.base};
    padding: 0.8rem;
  }
`;

export const TextArea = styled.textarea`
  resize: none;
  max-height: 250px;
  max-width: 687px;
  padding: 1rem;
  border: none;
  border-radius: 10px;
  background-color: ${v.colors.secondColor};
  color: ${v.colors.thirdColor};
  font-size: ${v.fontSize.base};
  font-weight: 300;
  @media screen and (max-width: 1024px) {
    font-size: ${v.fontSize.xs};
  }
  @media screen and (max-width: 480px) {
    font-size: ${v.fontSize.md};
    padding: 0.8rem;
  }
`;

export const Button = styled.button`
  background-color: ${v.colors.secondColor};
  color: ${v.colors.thirdColor};
  border: none;
  cursor: pointer;
  border-radius: 5px;
  padding: 1rem;
  width: 200px;
  letter-spacing: 1px;
  font-weight: 600;
  &:hover {
    background-color: ${v.colors.thirdColor};
    color: ${v.colors.accentColor};
  }
  @media screen and (max-width: 1024px) {
    font-size: ${v.fontSize.base};
  }
  @media screen and (max-width: 480px) {
    font-size: ${v.fontSize.xs};
    padding: 0.8rem;
  }
`;
