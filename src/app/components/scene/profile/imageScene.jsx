import React, { useRef } from "react";
import vertexShader from "@/app/lib/glsl/vertex.glsl";
import fragmentShader from "@/app/lib/glsl/fragment.glsl";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Plane } from "@react-three/drei";
import { TextureLoader } from "three";

const ImageScene = () => {
  const matRef = useRef();
  const imgPerfil = new TextureLoader().load("../image/perfil.jpg");

  const ProfilePicture = () => {
    useFrame(({ clock }) => {
      if (matRef.current) {
        matRef.current.uniforms.uTime = { value: clock.getElapsedTime() * 0.6 };
      }
    });
    return (
      <>
        <Plane args={[10, 8]}>
          <ambientLight intensity={0.1} />
          <shaderMaterial
            ref={matRef}
            vertexShader={vertexShader}
            fragmentShader={fragmentShader}
            uniforms={{ uTime: { value: 0.0 }, uTexture: { value: imgPerfil } }}
          />
        </Plane>
      </>
    );
  };

  return (
    <Canvas>
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        enableDamping={false}
        enableRotate={false}
      />
      <ProfilePicture />
    </Canvas>
  );
};

export default ImageScene;
