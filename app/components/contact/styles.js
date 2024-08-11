import styled from "styled-components";
import * as v from "../../utils/constants/global";

export const Section = styled.section`
  background-color: ${v.colors.primaryColor};
  display: flex;
  align-items: center;
  flex-direction: column;
  /* background-image: url(''); */
`;

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 3fr 4fr;
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

export const Davi = styled.div`
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
  gap: 15px;
  z-index: 25;
  @media screen and (max-width: 1024px) {
    gap: 10px;
  }
`;

export const InputContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5px;
  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;

export const Input = styled.input`
  padding: 0.6rem;
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
    font-size: ${v.fontSize.xs};
    padding: 0.6rem;
  }
`;

export const TextArea = styled.textarea`
  resize: none;
  max-height: 250px;
  padding: 0.6rem;
  border: none;
  border-radius: 10px;
  background-color: ${v.colors.secondColor};
  color: ${v.colors.thirdColor};
  font-size: ${v.fontSize.base};
  font-weight: 300;
  @media screen and (max-width: 1024px) {
    font-size: ${v.fontSize.sm};
  }
  @media screen and (max-width: 480px) {
    font-size: ${v.fontSize.xs};
    padding: 0.6rem;
  }
`;

export const BtnContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  gap:10px;
`;

export const Button = styled.button`
  text-align: center;
  width: 150px;
  border: 1px solid ${v.colors.accentColor};
  color: ${v.colors.accentColor};
  background-color: ${v.colors.primaryColor};
  border-radius: 50px;
  padding: 0.5rem 1.4rem;
  z-index: 2;
  cursor: pointer;
  transition: ease-out 0.3s;
  @media screen and (max-width: 1024px) {
    gap: 0.2rem;
    padding: 0.3rem 1.2rem;
  }
  &:hover {
    background-color: ${v.colors.accentColor};
    color: ${v.colors.secondColor};
    border: 1px solid ${v.colors.primaryColor};
  }
`;
