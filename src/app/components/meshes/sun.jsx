import React, { useRef, useMemo } from 'react';
import { useFrame, extend } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';
import { shaderMaterial } from '@react-three/drei';

// Define the shaders
const vertexShader = `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float iTime;
  uniform vec2 iResolution;
  varying vec2 vUv;

  void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec2 uv = (2.0 * fragCoord - iResolution.xy) / min(iResolution.x, iResolution.y);

    for(float i = 1.0; i < 10.0; i++){
        uv.x += 0.6 / i * cos(i * 2.5 * uv.y + iTime);
        uv.y += 0.6 / i * cos(i * 1.5 * uv.x + iTime);
    }
    
    fragColor = vec4(vec3(0.1)/abs(sin(iTime - uv.y - uv.x)), 1.0);
  }

  void main() {
    mainImage(gl_FragColor, vUv * iResolution);
  }
`;

// Create the shader material
const SunShaderMaterial = shaderMaterial(
  { iTime: 0, iResolution: new THREE.Vector2(1, 1) },
  vertexShader,
  fragmentShader
);

extend({ SunShaderMaterial });

export function SunObject() {
  const materialRef = useRef();
  
  // Update time and resolution each frame
  useFrame(({ clock, size }) => {
    if (materialRef.current) {
      materialRef.current.iTime = clock.getElapsedTime();
      materialRef.current.iResolution.set(size.width, size.height);
      materialRef.current.map = SunShaderMaterial;
      materialRef.current.aoMap = SunShaderMaterial;
      materialRef.current.normalMap = SunShaderMaterial;
    }
  });

  return (
    <Sphere args={[1, 32, 32]} scale={3} position={[0, 0, 0]}>
      <sunShaderMaterial ref={materialRef} attach="material" />
      {/* <meshStandardMaterial map={fragmentShader} /> */}
    </Sphere>
  );
}
