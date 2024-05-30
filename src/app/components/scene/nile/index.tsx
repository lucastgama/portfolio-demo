"use client";
import {
  ContactShadows,
  Environment,
  OrbitControls,
  PerspectiveCamera,
  SoftShadows,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { NileObject } from "../../meshes/nile";
import { GroundObject } from "@/app/components/meshes/ground";
import { SunObject } from "../../meshes/sun";



const Nile = () => {
  return (
    <>
      <Canvas shadows="basic">
        <OrbitControls
          enableRotate={true}
          enableZoom={true}
          minDistance={1}
          maxDistance={100}
        />
        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />
        <pointLight position={[0, 2, 1]} intensity={10} color={"#3798b8"} />
        <spotLight
          position={[0, 2.5, -3]}
          intensity={30}
          distance={20}
          color={"#eb48c8"}
        />
        <Suspense fallback={null}>
          {/* <NileObject /> */}
          <GroundObject />
          <SunObject />
        </Suspense>
        <SoftShadows samples={3} />
        <Environment preset='city' />
      </Canvas>
    </>
  );
};

export default Nile;
