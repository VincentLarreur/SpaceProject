import React, { useRef } from "react";
import { useGLTF, Sphere } from "@react-three/drei";
import { RigidBody, Attractor } from '@react-three/rapier'
import useGameStore from '../stores/useGame.jsx'
import Characters from "../../utils/characters.js"

export default function Planet({planetsByCharacter = Characters.BEE.planet}) {
  const destination = useRef()

  const raycast = (e) =>
  {
    destination.current.position.set(e.point.x, e.point.y, e.point.z)
    useGameStore.setState({destination: e.point})
  }
  const { nodes, materials } = useGLTF(planetsByCharacter);

  return (<>
      <Attractor strength={1} range={40} type="linear" />
      <RigidBody type="fixed" colliders="trimesh" scale="10" >
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Planet.geometry}
            material={materials.Atlas}
            onClick={ raycast }
        />
      </RigidBody>
      <Sphere ref={destination} scale={0.3}>
        <meshStandardMaterial color="hotpink" />
      </Sphere>
    </>
  );
}

useGLTF.preload("./Envirronment/Planet_1_Frog.gltf");
useGLTF.preload("./Envirronment/Planet_7_Bee.gltf");
useGLTF.preload("./Envirronment/Planet_8_Flamingo.gltf");
useGLTF.preload("./Envirronment/Planet_10_Fox.gltf");