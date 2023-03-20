import { useRef } from "react";
import { useControls as useLevaControls } from "leva";
import { useThree } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import { CuboidCollider, RigidBody } from "@react-three/rapier";
import characterController from "../../utils/CharacterController.jsx";
import Characters from "../../utils/characters.js";

export default function Player({ character = Characters.FLAMINGO.mech }) {
  const { scene } = useThree();
  let transparentWalls = [];
  scene.traverse((obj) => {
    if (obj.name.includes("transparent")) {
      transparentWalls.push(obj);
    }
  });
  const group = useRef();
  const characterRigidBody = useRef();
  const characterColliderRef = useRef();

  const { nodes, materials, animations } = useGLTF(character);
  const { actions } = useAnimations(animations, group);

  const {
    applyImpulsesToDynamicBodies,
    snapToGroundDistance,
    characterShapeOffset,
    autoStepMaxHeight,
    autoStepMinWidth,
    autoStepIncludeDynamicBodies,
    accelerationTimeAirborne,
    accelerationTimeGrounded,
    speedWalk,
    speedRun,
    timeToJumpApex,
    maxJumpHeight,
    minJumpHeight,
    velocityXZSmoothing,
    velocityXZMin,
    isometricCameraPosition,
    lockCameraIsometric,
    raycastTransparentWallSize,
  } = 
  // useLevaControls("player-controller", 
  {
    applyImpulsesToDynamicBodies: true,
    snapToGroundDistance: 0.1,
    characterShapeOffset: 0.1,
    autoStepMaxHeight: 1.5,
    autoStepMinWidth: 0.5,
    autoStepIncludeDynamicBodies: true,
    accelerationTimeAirborne: 0.2,
    accelerationTimeGrounded: 0.025,
    speedWalk: 1,
    speedRun: 2.5,
    timeToJumpApex: 1.25,
    maxJumpHeight: 8,
    minJumpHeight: 1,
    velocityXZSmoothing: 0.2,
    velocityXZMin: 0.0001,
    isometricCameraPosition: 20,
    lockCameraIsometric: false,
    raycastTransparentWallSize: 21,
  }
  // );

  characterController({
    characterRigidBody,
    characterColliderRef,
    actions,
    transparentWalls,
    applyImpulsesToDynamicBodies,
    snapToGroundDistance,
    characterShapeOffset,
    autoStepMaxHeight,
    autoStepMinWidth,
    autoStepIncludeDynamicBodies,
    accelerationTimeAirborne,
    accelerationTimeGrounded,
    speedWalk,
    speedRun,
    timeToJumpApex,
    maxJumpHeight,
    minJumpHeight,
    velocityXZSmoothing,
    velocityXZMin,
    isometricCameraPosition,
    lockCameraIsometric,
    raycastTransparentWallSize,
  });

  return (
    <>
      <RigidBody
        ref={characterRigidBody}
        colliders={false}
        position={[0, 20, 0]}
        scale={1.5}
        type="kinematicPosition"
        enabledRotations={[false, true, false]}
      >
        <group ref={group} dispose={null} rotation={[0, Math.PI, 0]}>
          <group name="Scene">
            <group name="CharacterArmature">
              <primitive object={nodes.Root} visible={false} />
              <skinnedMesh
                name="Character"
                geometry={nodes.Character.geometry}
                material={materials.Atlas}
                skeleton={nodes.Character.skeleton}
              >
                <CuboidCollider
                  ref={characterColliderRef}
                  args={[0.6, 1.4, 0.5]}
                  position={[0, 1.4, 0]}
                />
              </skinnedMesh>
            </group>
          </group>
        </group>
      </RigidBody>
    </>
  );
}