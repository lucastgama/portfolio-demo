import { Reflector, useTexture } from "@react-three/drei";

export function GroundObject(){
  const [floor, normal] = useTexture(['./texture/SurfaceImperfections003_1K_var1.jpg', './texture/SurfaceImperfections003_1K_Normal.jpg'])
  return (
    <Reflector blur={[200, 50]} resolution={50} args={[30, 30]} mirror={0.2} mixBlur={3} mixStrength={1.5} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
      {(Material, props) => <Material color="#646464" metalness={0.4} roughnessMap={floor} normalMap={normal} normalScale={[2, 2]} {...props} />}
    </Reflector>
  )
};