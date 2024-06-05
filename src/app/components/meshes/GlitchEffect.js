import { extend } from '@react-three/fiber';
import { shaderMaterial } from '@react-three/drei';
import * as THREE from 'three';

const GlitchMaterial = shaderMaterial(
  { time: 0, offset: new THREE.Vector2(0.02, 0.02) },
  // vertex shader
  `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // fragment shader
  `
    uniform float time;
    uniform vec2 offset;
    varying vec2 vUv;

    void main() {
      vec2 uvR = vUv + offset * vec2(sin(time * 10.0), cos(time * 10.0));
      vec2 uvB = vUv + offset * vec2(cos(time * 10.0), sin(time * 10.0));
      vec2 uvG = vUv;

      vec3 colorR = texture2D(map, uvR).rgb;
      vec3 colorB = texture2D(map, uvB).rgb;
      vec3 colorG = texture2D(map, uvG).rgb;

      vec3 color = vec3(colorR.r, colorG.g, colorB.b);

      gl_FragColor = vec4(color, 1.0);
    }
  `
);

extend({ GlitchMaterial });
