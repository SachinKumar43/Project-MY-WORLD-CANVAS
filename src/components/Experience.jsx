import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Office } from "./office";
import Overlay from "./Overlay";

export const Experience = () => {
  return (
    <>
      <ambientLight intensity={1.2} />
      {/* <Canvas camera={{ fov: 75, position: [-10, 45, 20] }} /> */}
      <OrbitControls enableZoom={false} />
      <ScrollControls pages={3} damping={0.25}>
        <Overlay />
        <Office />
      </ScrollControls>
    </>
  );
};
