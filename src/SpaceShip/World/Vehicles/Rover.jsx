import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Rover(props) {
  const { nodes, materials } = useGLTF("./Vehicles/Rover_Round.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Wheel_1.geometry}
        material={materials.Atlas}
        position={[2.4, 0.53, -1.16]}
      />
      <mesh
        geometry={nodes.Wheel_2.geometry}
        material={materials.Atlas}
        position={[-2.4, 0.53, 1.16]}
      />
      <mesh
        geometry={nodes.Wheel_3.geometry}
        material={materials.Atlas}
        position={[2.4, 0.53, 1.16]}
      />
      <mesh
        geometry={nodes.Wheel_4.geometry}
        material={materials.Atlas}
        position={[-2.4, 0.53, -1.16]}
      />
      <mesh
        geometry={nodes.Rover_Round.geometry}
        material={materials.Atlas}
      />
    </group>
  );
}

useGLTF.preload("./Vehicles/Rover_Round.gltf");
