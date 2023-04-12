import { useRef } from "react";
import { Vector3 } from "three";
import { useThree, useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations, Text3D, useKeyboardControls } from "@react-three/drei";
import { CuboidCollider, RigidBody, vec3 } from "@react-three/rapier";
import characterController from "../../utils/CharacterController.jsx";
import useSpaceStore from "../../utils/SpaceStore.jsx";

const COMPUTERS = [
  {
    position: new Vector3(-62, -3.5, -52),
    redirect: '/Rover'
  },
  {
    position: new Vector3(3.2, 8.4, -130),
    redirect: '/Spacecraft'
  },
  {
    position: new Vector3(42, 0.4, -74),
    redirect: '/Mecha'
  },
  {
    position: new Vector3(66, 18, -48),
    redirect: '/Jump'
  },
  {
    position: new Vector3(0, 20, -46),
    redirect: '/Laboratory'
  }
]

export default function Player() {
  const character = useSpaceStore((state) => state.character);

  const [, getKeyboardControls] = useKeyboardControls()

  const { scene } = useThree();
  let transparentWalls = [];
  scene.traverse((obj) => {
    if (obj.name.includes("transparent")) {
      transparentWalls.push(obj);
    }
  });

  const group = useRef();
  const interaction = useRef();
  const characterRigidBody = useRef();
  const characterColliderRef = useRef();

  const distanceTrigger = 10;
  let interactionVisible = false;

  useFrame(() => {
    const position = vec3(characterRigidBody.current.translation());

    const { interact } = getKeyboardControls()

    interactionVisible = false
    COMPUTERS.forEach((computer) => {
      if (position.distanceTo(computer.position) < distanceTrigger) {
        interactionVisible = true
        if (interact) {
          console.log('go to '+ computer.redirect);
        }
      }
    });

    if (interaction.current.visible != interactionVisible) {
      interaction.current.visible = interactionVisible;
    }
  });

  const { nodes, materials, animations } = useGLTF(character.astronaut);
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
      maxJumpHeight: 6,
      minJumpHeight: 1,
      velocityXZSmoothing: 0.2,
      velocityXZMin: 0.0001,
      isometricCameraPosition: 20,
      lockCameraIsometric: false,
      raycastTransparentWallSize: 21,
    };
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
          <Text3D 
            ref={interaction}
            font="./fonts/droid_sans.typeface.json"
            position={[-0.2, 3, 0]}
            visible={interactionVisible}
          >
            !
            <meshBasicMaterial 
              color="#3B3B3B"
              opacity={0.75}
              transparent
            />
          </Text3D>
        </group>
      </RigidBody>
    </>
  );
}
