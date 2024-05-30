import styled from "styled-components";
import * as v from '@/app/lib/variable/variables'

export const SectionBlog = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 85vh;
  background-color: ${v.colors.primaryColor};
`;

export const Section = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
`;

export const Statue = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  /* z-index: 1; */
`;