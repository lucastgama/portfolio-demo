import styled from "styled-components";
import * as v from "@/app/lib/variable/variables";

export const SectionPost = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${v.colors.primaryColor};
`;

export const Section = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 2.2rem 0;
  gap: 1rem;
`;

export const PaginationContainer = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Pagination = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
`;

export const PaginationList = styled.li`
  display: flex;
  align-items: center;
  padding: 0.2rem 0.6rem;
  border-radius: 5px;
  border: 1px solid ${v.colors.thirdColor};
  margin: 0 3px;
  font-size: ${v.fontSize.base};
  color: ${v.colors.thirdColor};
  cursor: pointer;
  &:hover {
    color: ${v.colors.accentColor};
    border: 1px solid ${v.colors.accentColor};
    font-weight: 500;
  }
`;

export const PaginationSpan = styled.span`
  display: flex;
  align-items: center;
  padding: 0.2rem 0.6rem;
  border-radius: 5px;
  border: 1px solid ${v.colors.thirdColor};
  margin: 0 3px;
  font-size: ${v.fontSize.base};
  color: ${v.colors.thirdColor};
  background-color: ${v.colors.secondColor};
  cursor: pointer;
  &:hover {
    color: ${v.colors.accentColor};
    border: 1px solid ${v.colors.accentColor};
    font-weight: 500;
  }
`;

export const LineDecoration = styled.div`
  width: 100%;
  height: 1px;
  background: ${v.colors.thirdColor};
`;
