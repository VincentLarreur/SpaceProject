import { Stars } from "@react-three/drei";
import Spaceship from "./Spaceship";

export default function World() {
  return (
    <>
      <Stars radius={100} depth={50} count={2000} />
      <Spaceship />
    </>
  );
}
