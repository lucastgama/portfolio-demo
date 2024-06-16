import { Environment, OrbitControls, Plane } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { VenusObject } from "../../meshes/wing";

const Wings = () => {
  return (
    <Canvas>
      <OrbitControls />
      <Plane />
      <VenusObject />
      <Environment preset="city" />
    </Canvas>
  );
};

export default Wings;
