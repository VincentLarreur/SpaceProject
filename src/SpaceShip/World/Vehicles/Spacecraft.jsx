import React, {useRef, useState} from "react";
import { useGLTF } from "@react-three/drei";
import useSpaceStore from "../../../utils/SpaceStore.jsx";
import { useFrame } from "@react-three/fiber";

export default function SpqceCraft(props) {
  const character = useSpaceStore((state) => state.character);

  const { nodes, materials } = useGLTF(character.spacecraft);

  const spacecraft = useRef();

  const [ timeOffset ] = useState(() => Math.random() * Math.PI * 2);

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
        
    const y = Math.sin(time + timeOffset) + 8;
    spacecraft.current.position.y = y * 0.25
  })

  return (
    <group {...props} dispose={null} ref={spacecraft}>
      <mesh
        geometry={nodes.Spacecraft.geometry}
        material={materials.Atlas}
      />
    </group>
  );
}