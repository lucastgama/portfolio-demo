"use client";
import React from "react";
import styled, { keyframes } from "styled-components";

const Loader = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #0b0b0b;
  font-size: 22px;
  font-weight: 800;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const grow = keyframes`
  from {
    width: 0;
  }
  to {
    width: 80%;
  }
`;

const Bar = styled.div`
  height: 1px;
  width: 0;
  background-color: #5b5b5b;
  animation: ${grow} 2s forwards; 
`;

const Loading = () => {
  return (
    <Loader>
      <Bar />
    </Loader>
  );
};

export default Loading;
