import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { EarthObject } from "../../meshes/earth";
import { Suspense } from "react";

const Earth = () => {
  return (
    <>
      <Canvas>
        <OrbitControls
          target={[0, 0, 0]}
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.8}
        />
        <Suspense fallback={null}>
          <EarthObject />
        </Suspense>
        <PerspectiveCamera fov={50} />
        <Environment resolution={214} preset="city" />
      </Canvas>
    </>
  );
};

export default Earth;
