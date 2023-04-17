import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import useSpaceStore from "../../../utils/SpaceStore.jsx";

export default function Mecha(props) {
  const character = useSpaceStore((state) => state.character);
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(character.mech);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions["Idle"].play()
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="RobotArmature">
          <primitive object={nodes.Body} />
          <primitive object={nodes.FootL} />
          <primitive object={nodes.FootR} />
          <skinnedMesh
            name="Mech"
            geometry={nodes.Mech.geometry}
            material={materials.Atlas}
            skeleton={nodes.Mech.skeleton}
          />
        </group>
      </group>
    </group>
  );
}
