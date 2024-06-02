"use client";
import React from "react";
import styled from "styled-components";

const Loader = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: lightblue;
  color: white;
  font-size: 22px;
  font-weight: 800;
  z-index: 100;
`;

const Loading = () => {
  return <Loader>Loading</Loader>;
};

export default Loading;
