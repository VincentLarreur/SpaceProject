import { Color } from "three";
import { useGLTF } from "@react-three/drei";
import { Stars } from "@react-three/drei";
import { RigidBody, CuboidCollider, CylinderCollider } from "@react-three/rapier";
import { useControls } from 'leva'

export default function World({ characterChosen = Characters.FOX }) {
  const { nodes, materials } = useGLTF("./Envirronment/SpaceShip3.gltf");
  const color = new Color(characterChosen.spaceshipColor);
  const darkerColor = new Color(characterChosen.spaceshipColor).addScalar(-0.1);
  for (let material in materials) {
    if (material.includes("DarkAccent")) {
      materials[material].color = color;
    } else if (material.includes("Accent")) {
      materials[material].color = darkerColor;
    }
  }

  const { position } = useControls({
    position:
    {
        value: { x: 9, y: -1, z: -12 },
        step: 0.01
    }
  })

  return (
    <>
      <Stars radius={100} depth={50} count={2000} />
      <RigidBody type="fixed" colliders={false} scale={4}>
        {/* Start */}
        <CuboidCollider
          args={[2, 0.1, 4]}
          position={[0, 0, -2]}
        />
        <CylinderCollider
          args={[0.1, 1]}
          position={[ 0, 0.1, 0 ]}
        />
        <CylinderCollider
          args={[0.1, 0.8]}
          position={[ 0, 0.2, 0 ]}
        />
        <CuboidCollider
          args={[2, 2, 0.1]}
          position={[0, 2, 2]}
        />
        <CuboidCollider
          args={[0.1, 2, 4]}
          position={[-2, 2, -2]}
        />
        <CuboidCollider
          args={[0.1, 2, 4]}
          position={[2, 2, -2]}
        />
        {/* Middle room */}
        <CuboidCollider
          args={[6, 0.1, 6]}
          position={[ 0, 0, -12 ]}
        />
        <CuboidCollider
          args={[0.1, 2, 2]}
          position={[-6, 2, -8]}
        />
        <CuboidCollider
          args={[0.1, 2, 2]}
          position={[-6, 2, -16]}
        />
        <CuboidCollider
          args={[0.1, 2, 2]}
          position={[6, 2, -8]}
        />
        <CuboidCollider
          args={[0.1, 2, 2]}
          position={[6, 2, -16]}
        />
        <CuboidCollider
          args={[2, 2, 0.1]}
          position={[4, 2, -18]}
        />
        <CuboidCollider
          args={[2, 2, 0.1]}
          position={[-4, 2, -18]}
        />
        <CuboidCollider
          args={[2, 2, 0.1]}
          position={[4, 2, -6]}
        />
        <CuboidCollider
          args={[2, 2, 0.1]}
          position={[-4, 2, -6]}
        />
        <CylinderCollider
          args={[2, 0.8]}
          position={[ 0, 2, -12 ]}
        />
        {/* Left Corridor */}
        <CuboidCollider
          args={[6, 0.1, 2]}
          position={[ -15, -1, -12 ]}
        />
        <CuboidCollider
          args={[0.25, 0.1, 2]}
          position={[ -8.8, -0.9, -12 ]}
        />
        <CuboidCollider
          args={[0.25, 0.1, 2]}
          position={[ -8.35, -0.8, -12 ]}
        />
        <CuboidCollider
          args={[0.25, 0.1, 2]}
          position={[ -7.9, -0.675, -12 ]}
        />
        <CuboidCollider
          args={[0.25, 0.1, 2]}
          position={[ -7.5, -0.5, -12 ]}
        />
        <CuboidCollider
          args={[0.25, 0.1, 2]}
          position={[ -7.05, -0.375, -12 ]}
        />
        <CuboidCollider
          args={[0.25, 0.1, 2]}
          position={[ -6.6, -0.22, -12 ]}
        />
        <CuboidCollider
          args={[0.25, 0.1, 2]}
          position={[ -6.2, -0.1, -12 ]}
        />
        <CuboidCollider
          args={[7.5, 4, 0.1]}
          position={[-13.5, 1, -14]}
        />
        <CuboidCollider
          args={[7.5, 3, 0.1]}
          position={[-13.5, 2, -10]}
        />
        <CuboidCollider
          args={[0.1, 2, 2]}
          position={[-21, 1, -12]}
        />
        {/* Right Corridor */}
        <CuboidCollider
          args={[1, 0.1, 2]}
          position={[ 7, 0, -12 ]}
        />
        <CuboidCollider
          args={[2, 0.1, 6]}
          position={[ 10, 0, -16 ]}
        />
        <CuboidCollider
          args={[3, 2, 0.1]}
          position={[9, 2, -10]}
        />
        <CuboidCollider
          args={[1, 2, 0.1]}
          position={[7, 2, -14]}
        />
        <CuboidCollider
          args={[2, 2, 0.1]}
          position={[10, 2, -22]}
        />
        <CuboidCollider
          args={[0.1, 2, 4]}
          position={[8, 2, -18]}
        />
        <CuboidCollider
          args={[0.1, 2, 6]}
          position={[12, 2, -16]}
        />
        <CuboidCollider
          args={[6, 2, 0.1]}
          position={[12, 6, -14]}
        />
        <CuboidCollider
          args={[6, 2, 0.1]}
          position={[12, 6, -10]}
        />
        <CuboidCollider
          args={[0.1, 2, 2]}
          position={[18, 6, -12]}
        />

        {/* Jump pad */}
        <CuboidCollider
          args={[0.45, 0.05, 0.45]}
          position={[ 7, 1, -13 ]}
        />
        <CuboidCollider
          args={[0.45, 0.05, 0.45]}
          position={[ 6.25, 2, -11 ]}
        />
        <CuboidCollider
          args={[0.45, 0.05, 0.45]}
          position={[ 4.75, 3, -11 ]}
        />
        <CuboidCollider
          args={[0.45, 0.05, 0.45]}
          position={[ 6, 4, -12.5 ]}
        />
        <CuboidCollider
          args={[5, 0.1, 2]}
          position={[ 13, 4.4, -12 ]}
        />

        {/* Middle Corridor */}
        <CuboidCollider
          args={[2, 0.1, 0.25]}
          position={[ 0, 0.08, -17.75 ]}
        />
        <CuboidCollider
          args={[2, 0.1, 0.25]}
          position={[ 0, 0.2, -18.2 ]}
        />
        <CuboidCollider
          args={[2, 0.1, 0.25]}
          position={[ 0, 0.37, -18.6 ]}
        />
        <CuboidCollider
          args={[2, 0.1, 0.25]}
          position={[ 0, 0.5, -19 ]}
        />
        <CuboidCollider
          args={[2, 0.1, 0.25]}
          position={[ 0, 0.68, -19.45 ]}
        />
        <CuboidCollider
          args={[2, 0.1, 0.25]}
          position={[ 0, 0.82, -19.88 ]}
        />
        <CuboidCollider
          args={[2, 0.1, 0.25]}
          position={[ 0, 1, -20.3 ]}
        />
        <CuboidCollider
          args={[2, 0.1, 0.25]}
          position={[ 0, 1.12, -20.72 ]}
        />
        <CuboidCollider
          args={[2, 0.1, 0.25]}
          position={[ 0, 1.26, -21.18 ]}
        />
        <CuboidCollider
          args={[2, 0.1, 0.25]}
          position={[ 0, 1.4, -21.6 ]}
        />
        <CuboidCollider
          args={[2, 0.1, 0.25]}
          position={[ 0, 1.5, -22.05 ]}
        />
        <CuboidCollider
          args={[2, 0.1, 0.25]}
          position={[ 0, 1.68, -22.45 ]}
        />
        <CuboidCollider
          args={[2, 0.1, 0.25]}
          position={[ 0, 1.82, -22.88 ]}
        />
        <CuboidCollider
          args={[2, 0.1, 4.1]}
          position={[ 0, 2, -27.2 ]}
        />
        <CuboidCollider
          args={[2, 2, 0.1]}
          position={[0, 4, -31.5]}
        />
        <CuboidCollider
          args={[0.1, 4, 7]}
          position={[2, 2, -25]}
        />
        <CuboidCollider
          args={[0.1, 4, 7]}
          position={[-2, 2, -25]}
        />
        <group dispose={null}>
          <group name="Floor_Global" position={[9, 0, -13]}>
            <mesh
              name="Plane016"
              geometry={nodes.Plane016.geometry}
              material={materials["Accent.004"]}
            />
            <mesh
              name="Plane016_1"
              geometry={nodes.Plane016_1.geometry}
              material={materials["DarkAccent.004"]}
            />
            <mesh
              name="Plane016_2"
              geometry={nodes.Plane016_2.geometry}
              material={materials["Black.003"]}
            />
            <mesh
              name="Plane016_3"
              geometry={nodes.Plane016_3.geometry}
              material={materials["Main.006"]}
            />
            <mesh
              name="Plane016_4"
              geometry={nodes.Plane016_4.geometry}
              material={materials["DarkGrey.006"]}
            />
            <mesh
              name="Plane016_5"
              geometry={nodes.Plane016_5.geometry}
              material={materials["Accent.003"]}
            />
            <mesh
              name="Plane016_6"
              geometry={nodes.Plane016_6.geometry}
              material={materials["DarkAccent.003"]}
            />
            <mesh
              name="Plane016_7"
              geometry={nodes.Plane016_7.geometry}
              material={materials["Black.002"]}
            />
            <mesh
              name="Plane016_8"
              geometry={nodes.Plane016_8.geometry}
              material={materials["Main.004"]}
            />
            <mesh
              name="Plane016_9"
              geometry={nodes.Plane016_9.geometry}
              material={materials["DarkGrey.004"]}
            />
            <mesh
              name="Plane016_10"
              geometry={nodes.Plane016_10.geometry}
              material={materials["Accent.002"]}
            />
            <mesh
              name="Plane016_11"
              geometry={nodes.Plane016_11.geometry}
              material={materials["DarkAccent.002"]}
            />
            <mesh
              name="Plane016_12"
              geometry={nodes.Plane016_12.geometry}
              material={materials["Black.001"]}
            />
            <mesh
              name="Plane016_13"
              geometry={nodes.Plane016_13.geometry}
              material={materials["Main.003"]}
            />
            <mesh
              name="Plane016_14"
              geometry={nodes.Plane016_14.geometry}
              material={materials["DarkGrey.003"]}
            />
            <mesh
              name="Plane016_15"
              geometry={nodes.Plane016_15.geometry}
              material={materials["Accent.005"]}
            />
            <mesh
              name="Plane016_16"
              geometry={nodes.Plane016_16.geometry}
              material={materials["DarkAccent.005"]}
            />
            <mesh
              name="Plane016_17"
              geometry={nodes.Plane016_17.geometry}
              material={materials["Black.004"]}
            />
            <mesh
              name="Plane016_18"
              geometry={nodes.Plane016_18.geometry}
              material={materials["Main.007"]}
            />
            <mesh
              name="Plane016_19"
              geometry={nodes.Plane016_19.geometry}
              material={materials["DarkGrey.007"]}
            />
            <mesh
              name="Plane016_20"
              geometry={nodes.Plane016_20.geometry}
              material={materials["Main.005"]}
            />
            <mesh
              name="Plane016_21"
              geometry={nodes.Plane016_21.geometry}
              material={materials["DarkGrey.005"]}
            />
            <mesh
              name="Plane016_22"
              geometry={nodes.Plane016_22.geometry}
              material={materials["Main.008"]}
            />
            <mesh
              name="Plane016_23"
              geometry={nodes.Plane016_23.geometry}
              material={materials["Accent.006"]}
            />
            <mesh
              name="Plane016_24"
              geometry={nodes.Plane016_24.geometry}
              material={materials["DarkGrey.008"]}
            />
            <mesh
              name="Plane016_25"
              geometry={nodes.Plane016_25.geometry}
              material={materials["Accent.001"]}
            />
            <mesh
              name="Plane016_26"
              geometry={nodes.Plane016_26.geometry}
              material={materials["DarkAccent.001"]}
            />
            <mesh
              name="Plane016_27"
              geometry={nodes.Plane016_27.geometry}
              material={materials["Main.002"]}
            />
            <mesh
              name="Plane016_28"
              geometry={nodes.Plane016_28.geometry}
              material={materials["DarkGrey.002"]}
            />
            <mesh
              name="Plane016_29"
              geometry={nodes.Plane016_29.geometry}
              material={materials["Main.012"]}
            />
            <mesh
              name="Plane016_30"
              geometry={nodes.Plane016_30.geometry}
              material={materials["Accent.010"]}
            />
            <mesh
              name="Plane016_31"
              geometry={nodes.Plane016_31.geometry}
              material={materials["DarkGrey.012"]}
            />
          </group>
          <group
            name="Floor-upside"
            position={[9, 4.4, -11]}
            rotation={[0, Math.PI / 2, 0]}
          >
            <mesh
              name="Plane003"
              geometry={nodes.Plane003.geometry}
              material={materials["Accent.002"]}
            />
            <mesh
              name="Plane003_1"
              geometry={nodes.Plane003_1.geometry}
              material={materials["DarkAccent.002"]}
            />
            <mesh
              name="Plane003_2"
              geometry={nodes.Plane003_2.geometry}
              material={materials["Black.001"]}
            />
            <mesh
              name="Plane003_3"
              geometry={nodes.Plane003_3.geometry}
              material={materials["Main.003"]}
            />
            <mesh
              name="Plane003_4"
              geometry={nodes.Plane003_4.geometry}
              material={materials["DarkGrey.003"]}
            />
            <mesh
              name="Plane003_5"
              geometry={nodes.Plane003_5.geometry}
              material={materials["Accent.003"]}
            />
            <mesh
              name="Plane003_6"
              geometry={nodes.Plane003_6.geometry}
              material={materials["DarkAccent.003"]}
            />
            <mesh
              name="Plane003_7"
              geometry={nodes.Plane003_7.geometry}
              material={materials["Black.002"]}
            />
            <mesh
              name="Plane003_8"
              geometry={nodes.Plane003_8.geometry}
              material={materials["Main.004"]}
            />
            <mesh
              name="Plane003_9"
              geometry={nodes.Plane003_9.geometry}
              material={materials["DarkGrey.004"]}
            />
          </group>
          <group
            name="transparent-start"
            position={[0, 0, 2]}
            rotation={[Math.PI, 0, Math.PI]}
          >
            <mesh
              name="Plane006"
              geometry={nodes.Plane006.geometry}
              material={materials.Main.clone()}
            />
            <mesh
              name="Plane006_1"
              geometry={nodes.Plane006_1.geometry}
              material={materials.Accent.clone()}
            />
            <mesh
              name="Plane006_2"
              geometry={nodes.Plane006_2.geometry}
              material={materials.Light.clone()}
            />
            <mesh
              name="Plane006_3"
              geometry={nodes.Plane006_3.geometry}
              material={materials.DarkGrey.clone()}
            />
          </group>
          <group name="transparent-dd-middle" position={[0, 2, -23.5]}>
            <mesh
              name="Plane008"
              geometry={nodes.Plane008.geometry}
              material={materials["Main.011"].clone()}
            />
            <mesh
              name="Plane008_1"
              geometry={nodes.Plane008_1.geometry}
              material={materials["Accent.009"].clone()}
            />
            <mesh
              name="Plane008_2"
              geometry={nodes.Plane008_2.geometry}
              material={materials["Light.003"].clone()}
            />
            <mesh
              name="Plane008_3"
              geometry={nodes.Plane008_3.geometry}
              material={materials["DarkGrey.011"].clone()}
            />
          </group>
          <group name="transparent-dd-right" position={[10, 0, -14]}>
            <mesh
              name="Plane021"
              geometry={nodes.Plane021.geometry}
              material={materials["Main.010"].clone()}
            />
            <mesh
              name="Plane021_1"
              geometry={nodes.Plane021_1.geometry}
              material={materials["Accent.008"].clone()}
            />
            <mesh
              name="Plane021_2"
              geometry={nodes.Plane021_2.geometry}
              material={materials["Light.002"].clone()}
            />
            <mesh
              name="Plane021_3"
              geometry={nodes.Plane021_3.geometry}
              material={materials["DarkGrey.010"].clone()}
            />
          </group>
          <group
            name="transparent-middle_room"
            position={[-4, 0, -6]}
            rotation={[Math.PI, 0, Math.PI]}
          >
            <mesh
              name="Plane055"
              geometry={nodes.Plane055.geometry}
              material={materials.Main.clone()}
            />
            <mesh
              name="Plane055_1"
              geometry={nodes.Plane055_1.geometry}
              material={materials.Accent.clone()}
            />
            <mesh
              name="Plane055_2"
              geometry={nodes.Plane055_2.geometry}
              material={materials.Light.clone()}
            />
            <mesh
              name="Plane055_3"
              geometry={nodes.Plane055_3.geometry}
              material={materials.DarkGrey.clone()}
            />
            <mesh
              name="Plane055_4"
              geometry={nodes.Plane055_4.geometry}
              material={materials["Main.013"].clone()}
            />
            <mesh
              name="Plane055_5"
              geometry={nodes.Plane055_5.geometry}
              material={materials["DarkGrey.013"].clone()}
            />
            <mesh
              name="Plane055_6"
              geometry={nodes.Plane055_6.geometry}
              material={materials["Main.011"].clone()}
            />
            <mesh
              name="Plane055_7"
              geometry={nodes.Plane055_7.geometry}
              material={materials["Accent.009"].clone()}
            />
            <mesh
              name="Plane055_8"
              geometry={nodes.Plane055_8.geometry}
              material={materials["Light.003"].clone()}
            />
            <mesh
              name="Plane055_9"
              geometry={nodes.Plane055_9.geometry}
              material={materials["DarkGrey.011"].clone()}
            />
          </group>
          <group
            name="transparent-pod"
            position={[0, 0, -12]}
            rotation={[0, Math.PI / 2, 0]}
          >
            <mesh
              name="Cube003"
              geometry={nodes.Cube003.geometry}
              material={materials["Main.019"].clone()}
            />
            <mesh
              name="Cube003_1"
              geometry={nodes.Cube003_1.geometry}
              material={materials["DarkGrey.019"].clone()}
            />
            <mesh
              name="Cube003_2"
              geometry={nodes.Cube003_2.geometry}
              material={materials["Glass.001"].clone()}
            />
            <mesh
              name="Cube003_3"
              geometry={nodes.Cube003_3.geometry}
              material={materials["DarkAccent.010"].clone()}
            />
            <mesh
              name="Cube003_4"
              geometry={nodes.Cube003_4.geometry}
              material={materials["Accent.015"].clone()}
            />
          </group>
          <group
            name="transparent-left-corridor"
            position={[-7.4, -1, -10]}
            rotation={[Math.PI, 0, Math.PI]}
            scale={[0.67, 1.22, 1]}
          >
            <mesh
              name="Plane099"
              geometry={nodes.Plane099.geometry}
              material={materials.Main.clone()}
            />
            <mesh
              name="Plane099_1"
              geometry={nodes.Plane099_1.geometry}
              material={materials.Accent.clone()}
            />
            <mesh
              name="Plane099_2"
              geometry={nodes.Plane099_2.geometry}
              material={materials.Light.clone()}
            />
            <mesh
              name="Plane099_3"
              geometry={nodes.Plane099_3.geometry}
              material={materials.DarkGrey.clone()}
            />
            <mesh
              name="Plane099_4"
              geometry={nodes.Plane099_4.geometry}
              material={materials["Main.014"].clone()}
            />
            <mesh
              name="Plane099_5"
              geometry={nodes.Plane099_5.geometry}
              material={materials["DarkGrey.014"].clone()}
            />
          </group>
          <group name="transparent-right-corridor" position={[18, 4.4, -10]}>
            <mesh
              name="Plane013"
              geometry={nodes.Plane013.geometry}
              material={materials["Main.020"].clone()}
            />
            <mesh
              name="Plane013_1"
              geometry={nodes.Plane013_1.geometry}
              material={materials["DarkGrey.020"].clone()}
            />
            <mesh
              name="Plane013_2"
              geometry={nodes.Plane013_2.geometry}
              material={materials.Main.clone()}
            />
            <mesh
              name="Plane013_3"
              geometry={nodes.Plane013_3.geometry}
              material={materials.Accent.clone()}
            />
            <mesh
              name="Plane013_4"
              geometry={nodes.Plane013_4.geometry}
              material={materials.Light.clone()}
            />
            <mesh
              name="Plane013_5"
              geometry={nodes.Plane013_5.geometry}
              material={materials.DarkGrey.clone()}
            />
            <mesh
              name="Plane013_6"
              geometry={nodes.Plane013_6.geometry}
              material={materials["Main.014"].clone()}
            />
            <mesh
              name="Plane013_7"
              geometry={nodes.Plane013_7.geometry}
              material={materials["DarkGrey.014"].clone()}
            />
          </group>
          <group
            name="global_walls"
            position={[-21, -1, -12]}
            rotation={[0, Math.PI / 2, 0]}
          >
            <mesh
              name="Plane010"
              geometry={nodes.Plane010.geometry}
              material={materials.Main}
            />
            <mesh
              name="Plane010_1"
              geometry={nodes.Plane010_1.geometry}
              material={materials.Accent}
            />
            <mesh
              name="Plane010_2"
              geometry={nodes.Plane010_2.geometry}
              material={materials.Light}
            />
            <mesh
              name="Plane010_3"
              geometry={nodes.Plane010_3.geometry}
              material={materials.DarkGrey}
            />
            <mesh
              name="Plane010_4"
              geometry={nodes.Plane010_4.geometry}
              material={materials["Main.014"]}
            />
            <mesh
              name="Plane010_5"
              geometry={nodes.Plane010_5.geometry}
              material={materials["DarkGrey.014"]}
            />
            <mesh
              name="Plane010_6"
              geometry={nodes.Plane010_6.geometry}
              material={materials["Main.013"]}
            />
            <mesh
              name="Plane010_7"
              geometry={nodes.Plane010_7.geometry}
              material={materials["DarkGrey.013"]}
            />
            <mesh
              name="Plane010_8"
              geometry={nodes.Plane010_8.geometry}
              material={materials["Main.020"]}
            />
            <mesh
              name="Plane010_9"
              geometry={nodes.Plane010_9.geometry}
              material={materials["DarkGrey.020"]}
            />
          </group>
        </group>
      </RigidBody>
    </>
  );
}

useGLTF.preload("./Envirronment/SpaceShip3.gltf");
