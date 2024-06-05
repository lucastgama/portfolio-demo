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
  flex-wrap:wrap ;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
  gap: 1rem;
`;

export const LineSection = styled.div`
  width: 100%;
  height:1px;
  background-color:${v.colors.secondColor};
`;
