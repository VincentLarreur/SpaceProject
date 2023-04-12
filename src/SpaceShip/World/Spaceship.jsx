import { Color } from "three";
import { useGLTF } from "@react-three/drei";
import {
  RigidBody,
  CuboidCollider,
  CylinderCollider,
} from "@react-three/rapier";
import useSpaceStore from '../../utils/SpaceStore.jsx'

export default function Spaceship() {
  const { nodes, materials } = useGLTF("./Envirronment/Spaceship.gltf");

  const characterChosen = useSpaceStore((state) => state.character)

  const color = new Color(characterChosen.spaceshipColor);
  const darkerColor = new Color(characterChosen.spaceshipColor).addScalar(-0.1);
  for (let material in materials) {
    if (material.includes("DarkAccent")) {
      materials[material].color = color;
    } else if (material.includes("Accent")) {
      materials[material].color = darkerColor;
    }
  }

  return (
    <RigidBody type="fixed" colliders={false} scale={4}>
      {/* Start */}
      <CuboidCollider args={[2, 0.1, 4]} position={[0, 0, -2]} />
      <CylinderCollider args={[0.1, 1]} position={[0, 0.1, 0]} />
      <CylinderCollider args={[0.1, 0.8]} position={[0, 0.2, 0]} />
      <CuboidCollider args={[2, 2, 0.1]} position={[0, 2, 2]} />
      <CuboidCollider args={[0.1, 2, 4]} position={[-2, 2, -2]} />
      <CuboidCollider args={[0.1, 2, 4]} position={[2, 2, -2]} />
      <CuboidCollider args={[0.3, 2, 0.5]} position={[-1.5, 2, -6.5]} />
      <CuboidCollider args={[0.3, 2, 0.5]} position={[1.5, 2, -6.2]} />
      {/* Middle room */}
      <CuboidCollider args={[6, 0.1, 6]} position={[0, 0, -12]} />
      <CuboidCollider args={[0.1, 2, 2]} position={[-6, 2, -8]} />
      <CuboidCollider args={[0.1, 2, 2]} position={[-6, 2, -16]} />
      <CuboidCollider args={[0.1, 2, 2]} position={[6, 2, -8]} />
      <CuboidCollider args={[0.1, 2, 2]} position={[6, 2, -16]} />
      <CuboidCollider args={[2, 2, 0.1]} position={[4, 2, -18]} />
      <CuboidCollider args={[2, 2, 0.1]} position={[-4, 2, -18]} />
      <CuboidCollider args={[2, 2, 0.1]} position={[4, 2, -6]} />
      <CuboidCollider args={[2, 2, 0.1]} position={[-4, 2, -6]} />
      <CylinderCollider args={[2, 0.8]} position={[0, 2, -12]} />
      {/* Left Corridor */}
      <CuboidCollider args={[6, 0.1, 2]} position={[-15, -1, -12]} />
      <CuboidCollider args={[0.25, 0.1, 2]} position={[-8.8, -0.9, -12]} />
      <CuboidCollider args={[0.25, 0.1, 2]} position={[-8.35, -0.8, -12]} />
      <CuboidCollider args={[0.25, 0.1, 2]} position={[-7.9, -0.675, -12]} />
      <CuboidCollider args={[0.25, 0.1, 2]} position={[-7.5, -0.5, -12]} />
      <CuboidCollider args={[0.25, 0.1, 2]} position={[-7.05, -0.375, -12]} />
      <CuboidCollider args={[0.25, 0.1, 2]} position={[-6.6, -0.22, -12]} />
      <CuboidCollider args={[0.25, 0.1, 2]} position={[-6.2, -0.1, -12]} />
      <CuboidCollider args={[7.5, 4, 0.1]} position={[-13.5, 1, -14]} />
      <CuboidCollider args={[7.5, 3, 0.1]} position={[-13.5, 2, -10]} />
      <CuboidCollider args={[0.1, 2, 2]} position={[-21, 1, -12]} />
      {/* Right Corridor */}
      <CuboidCollider args={[1, 0.1, 2]} position={[7, 0, -12]} />
      <CuboidCollider args={[2, 0.1, 6]} position={[10, 0, -16]} />
      <CuboidCollider args={[3, 2, 0.1]} position={[9, 2, -10]} />
      <CuboidCollider args={[1, 2, 0.1]} position={[7, 2, -14]} />
      <CuboidCollider args={[2, 2, 0.1]} position={[10, 2, -22]} />
      <CuboidCollider args={[0.1, 2, 4]} position={[8, 2, -18]} />
      <CuboidCollider args={[0.1, 2, 6]} position={[12, 2, -16]} />
      <CuboidCollider args={[6, 2, 0.1]} position={[12, 6, -14]} />
      <CuboidCollider args={[6, 2, 0.1]} position={[12, 6, -10]} />
      <CuboidCollider args={[0.1, 2, 2]} position={[18, 6, -12]} />
      <CuboidCollider args={[0.5, 2, 0.5]} position={[8.75, 2, -14.5]} />
      <CuboidCollider args={[0.5, 2, 0.5]} position={[11.25, 2, -14.5]} />

      {/* Jump pad */}
      <CuboidCollider args={[0.45, 0.05, 0.45]} position={[7, 1, -13]} />
      <CuboidCollider args={[0.45, 0.05, 0.45]} position={[6.25, 2, -11]} />
      <CuboidCollider args={[0.45, 0.05, 0.45]} position={[4.75, 3, -11]} />
      <CuboidCollider args={[0.45, 0.05, 0.45]} position={[6, 4, -12.5]} />
      <CuboidCollider args={[5, 0.1, 2]} position={[13, 4.4, -12]} />

      {/* Middle Corridor */}
      <CuboidCollider args={[2, 0.1, 0.25]} position={[0, 0.08, -17.75]} />
      <CuboidCollider args={[2, 0.1, 0.25]} position={[0, 0.2, -18.2]} />
      <CuboidCollider args={[2, 0.1, 0.25]} position={[0, 0.37, -18.6]} />
      <CuboidCollider args={[2, 0.1, 0.25]} position={[0, 0.5, -19]} />
      <CuboidCollider args={[2, 0.1, 0.25]} position={[0, 0.68, -19.45]} />
      <CuboidCollider args={[2, 0.1, 0.25]} position={[0, 0.82, -19.88]} />
      <CuboidCollider args={[2, 0.1, 0.25]} position={[0, 1, -20.3]} />
      <CuboidCollider args={[2, 0.1, 0.25]} position={[0, 1.12, -20.72]} />
      <CuboidCollider args={[2, 0.1, 0.25]} position={[0, 1.26, -21.18]} />
      <CuboidCollider args={[2, 0.1, 0.25]} position={[0, 1.4, -21.6]} />
      <CuboidCollider args={[2, 0.1, 0.25]} position={[0, 1.5, -22.05]} />
      <CuboidCollider args={[2, 0.1, 0.25]} position={[0, 1.68, -22.45]} />
      <CuboidCollider args={[2, 0.1, 0.25]} position={[0, 1.82, -22.88]} />
      <CuboidCollider args={[2, 0.1, 5.5]} position={[0, 2, -28.5]} />
      <CuboidCollider args={[0.1, 4, 5]} position={[2, 2, -25]} />
      <CuboidCollider args={[0.1, 4, 5]} position={[-2, 2, -25]} />
      <CuboidCollider args={[0.3, 2, 0.5]} position={[-1.5, 4, -23.8]} />
      <CuboidCollider args={[0.3, 2, 0.5]} position={[1.5, 4, -23.8]} />
      <CuboidCollider args={[0.3, 2, 0.5]} position={[-1.5, 4, -29.3]} />
      <CuboidCollider args={[0.3, 2, 0.5]} position={[1.5, 4, -29.3]} />

      <CuboidCollider
        args={[0.3, 1.5, 0.3]} 
        position={[-16, 0, -13]}
        rotation={[0, Math.PI / 4, 0]}
      />
      <CuboidCollider
        args={[0.3, 1.5, 0.3]} 
        position={[1.2, 3, -33]}
        rotation={[0, -Math.PI / 4, 0]}
      />
      <CuboidCollider
        args={[0.3, 1.5, 0.3]} 
        position={[11, 2, -19]}
          rotation={[0, -Math.PI / 4, 0]}
      />
      <CuboidCollider 
        args={[0.3, 1.5, 0.3]}
        position={[17, 5.5, -12]}
      />

      <group dispose={null}>
        <group name="Floor_Global" position={[9, 0, -13]}>
          <mesh
            name="Plane016"
            geometry={nodes.Plane016.geometry}
            material={materials["Accent.004"].clone()}
          />
          <mesh
            name="Plane016_1"
            geometry={nodes.Plane016_1.geometry}
            material={materials["DarkAccent.004"].clone()}
          />
          <mesh
            name="Plane016_2"
            geometry={nodes.Plane016_2.geometry}
            material={materials["Black.003"].clone()}
          />
          <mesh
            name="Plane016_3"
            geometry={nodes.Plane016_3.geometry}
            material={materials["Main.006"].clone()}
          />
          <mesh
            name="Plane016_4"
            geometry={nodes.Plane016_4.geometry}
            material={materials["DarkGrey.006"].clone()}
          />
          <mesh
            name="Plane016_5"
            geometry={nodes.Plane016_5.geometry}
            material={materials["Accent.003"].clone()}
          />
          <mesh
            name="Plane016_6"
            geometry={nodes.Plane016_6.geometry}
            material={materials["DarkAccent.003"].clone()}
          />
          <mesh
            name="Plane016_7"
            geometry={nodes.Plane016_7.geometry}
            material={materials["Black.002"].clone()}
          />
          <mesh
            name="Plane016_8"
            geometry={nodes.Plane016_8.geometry}
            material={materials["Main.004"].clone()}
          />
          <mesh
            name="Plane016_9"
            geometry={nodes.Plane016_9.geometry}
            material={materials["DarkGrey.004"].clone()}
          />
          <mesh
            name="Plane016_10"
            geometry={nodes.Plane016_10.geometry}
            material={materials["Accent.002"].clone()}
          />
          <mesh
            name="Plane016_11"
            geometry={nodes.Plane016_11.geometry}
            material={materials["DarkAccent.002"].clone()}
          />
          <mesh
            name="Plane016_12"
            geometry={nodes.Plane016_12.geometry}
            material={materials["Black.001"].clone()}
          />
          <mesh
            name="Plane016_13"
            geometry={nodes.Plane016_13.geometry}
            material={materials["Main.003"].clone()}
          />
          <mesh
            name="Plane016_14"
            geometry={nodes.Plane016_14.geometry}
            material={materials["DarkGrey.003"].clone()}
          />
          <mesh
            name="Plane016_15"
            geometry={nodes.Plane016_15.geometry}
            material={materials["Accent.005"].clone()}
          />
          <mesh
            name="Plane016_16"
            geometry={nodes.Plane016_16.geometry}
            material={materials["DarkAccent.005"].clone()}
          />
          <mesh
            name="Plane016_17"
            geometry={nodes.Plane016_17.geometry}
            material={materials["Black.004"].clone()}
          />
          <mesh
            name="Plane016_18"
            geometry={nodes.Plane016_18.geometry}
            material={materials["Main.007"].clone()}
          />
          <mesh
            name="Plane016_19"
            geometry={nodes.Plane016_19.geometry}
            material={materials["DarkGrey.007"].clone()}
          />
          <mesh
            name="Plane016_20"
            geometry={nodes.Plane016_20.geometry}
            material={materials["Main.005"].clone()}
          />
          <mesh
            name="Plane016_21"
            geometry={nodes.Plane016_21.geometry}
            material={materials["DarkGrey.005"].clone()}
          />
          <mesh
            name="Plane016_22"
            geometry={nodes.Plane016_22.geometry}
            material={materials["Main.008"].clone()}
          />
          <mesh
            name="Plane016_23"
            geometry={nodes.Plane016_23.geometry}
            material={materials["Accent.006"].clone()}
          />
          <mesh
            name="Plane016_24"
            geometry={nodes.Plane016_24.geometry}
            material={materials["DarkGrey.008"].clone()}
          />
          <mesh
            name="Plane016_25"
            geometry={nodes.Plane016_25.geometry}
            material={materials["Accent.001"].clone()}
          />
          <mesh
            name="Plane016_26"
            geometry={nodes.Plane016_26.geometry}
            material={materials["DarkAccent.001"].clone()}
          />
          <mesh
            name="Plane016_27"
            geometry={nodes.Plane016_27.geometry}
            material={materials["Main.002"].clone()}
          />
          <mesh
            name="Plane016_28"
            geometry={nodes.Plane016_28.geometry}
            material={materials["DarkGrey.002"].clone()}
          />
          <mesh
            name="Plane016_29"
            geometry={nodes.Plane016_29.geometry}
            material={materials["Main.012"].clone()}
          />
          <mesh
            name="Plane016_30"
            geometry={nodes.Plane016_30.geometry}
            material={materials["Accent.010"].clone()}
          />
          <mesh
            name="Plane016_31"
            geometry={nodes.Plane016_31.geometry}
            material={materials["DarkGrey.012"].clone()}
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
            material={materials["Accent.002"].clone()}
          />
          <mesh
            name="Plane003_1"
            geometry={nodes.Plane003_1.geometry}
            material={materials["DarkAccent.002"].clone()}
          />
          <mesh
            name="Plane003_2"
            geometry={nodes.Plane003_2.geometry}
            material={materials["Black.001"].clone()}
          />
          <mesh
            name="Plane003_3"
            geometry={nodes.Plane003_3.geometry}
            material={materials["Main.003"].clone()}
          />
          <mesh
            name="Plane003_4"
            geometry={nodes.Plane003_4.geometry}
            material={materials["DarkGrey.003"].clone()}
          />
          <mesh
            name="Plane003_5"
            geometry={nodes.Plane003_5.geometry}
            material={materials["Accent.003"].clone()}
          />
          <mesh
            name="Plane003_6"
            geometry={nodes.Plane003_6.geometry}
            material={materials["DarkAccent.003"].clone()}
          />
          <mesh
            name="Plane003_7"
            geometry={nodes.Plane003_7.geometry}
            material={materials["Black.002"].clone()}
          />
          <mesh
            name="Plane003_8"
            geometry={nodes.Plane003_8.geometry}
            material={materials["Main.004"].clone()}
          />
          <mesh
            name="Plane003_9"
            geometry={nodes.Plane003_9.geometry}
            material={materials["DarkGrey.004"].clone()}
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
            material={materials.Main.clone()}
          />
          <mesh
            name="Plane010_1"
            geometry={nodes.Plane010_1.geometry}
            material={materials.Accent.clone()}
          />
          <mesh
            name="Plane010_2"
            geometry={nodes.Plane010_2.geometry}
            material={materials.Light.clone()}
          />
          <mesh
            name="Plane010_3"
            geometry={nodes.Plane010_3.geometry}
            material={materials.DarkGrey.clone()}
          />
          <mesh
            name="Plane010_4"
            geometry={nodes.Plane010_4.geometry}
            material={materials["Main.014"].clone()}
          />
          <mesh
            name="Plane010_5"
            geometry={nodes.Plane010_5.geometry}
            material={materials["DarkGrey.014"].clone()}
          />
          <mesh
            name="Plane010_6"
            geometry={nodes.Plane010_6.geometry}
            material={materials["Main.013"].clone()}
          />
          <mesh
            name="Plane010_7"
            geometry={nodes.Plane010_7.geometry}
            material={materials["DarkGrey.013"].clone()}
          />
          <mesh
            name="Plane010_8"
            geometry={nodes.Plane010_8.geometry}
            material={materials["Main.020"].clone()}
          />
          <mesh
            name="Plane010_9"
            geometry={nodes.Plane010_9.geometry}
            material={materials["DarkGrey.020"].clone()}
          />
        </group>
        <group name="transparent_dd_spaceship" position={[0, 2, -29.28]}>
          <mesh
            name="Plane004"
            geometry={nodes.Plane004.geometry}
            material={materials["Main.011"].clone()}
          />
          <mesh
            name="Plane004_1"
            geometry={nodes.Plane004_1.geometry}
            material={materials["Accent.009"].clone()}
          />
          <mesh
            name="Plane004_2"
            geometry={nodes.Plane004_2.geometry}
            material={materials["Light.003"].clone()}
          />
          <mesh
            name="Plane004_3"
            geometry={nodes.Plane004_3.geometry}
            material={materials["DarkGrey.011"].clone()}
          />
        </group>
        <group
          name="Computer_Car"
          position={[-16, -1, -13]}
          rotation={[0, Math.PI / 4, 0]}
        >
          <mesh
            name="Cube028"
            geometry={nodes.Cube028.geometry}
            material={materials["Main.016"].clone()}
          />
          <mesh
            name="Cube028_1"
            geometry={nodes.Cube028_1.geometry}
            material={materials["DarkGrey.016"].clone()}
          />
          <mesh
            name="Cube028_2"
            geometry={nodes.Cube028_2.geometry}
            material={materials["Black.006"].clone()}
          />
          <mesh
            name="Cube028_3"
            geometry={nodes.Cube028_3.geometry}
            material={materials["Accent.012"].clone()}
          />
          <mesh
            name="Cube028_4"
            geometry={nodes.Cube028_4.geometry}
            material={materials["DarkAccent.007"].clone()}
          />
        </group>
        <group
          name="Computer_Spaceship"
          position={[1.2, 2, -33]}
          rotation={[0, -Math.PI / 4, 0]}
        >
          <mesh
            name="Cube001"
            geometry={nodes.Cube001.geometry}
            material={materials["Main.016"].clone()}
          />
          <mesh
            name="Cube001_1"
            geometry={nodes.Cube001_1.geometry}
            material={materials["DarkGrey.016"].clone()}
          />
          <mesh
            name="Cube001_2"
            geometry={nodes.Cube001_2.geometry}
            material={materials["Black.006"].clone()}
          />
          <mesh
            name="Cube001_3"
            geometry={nodes.Cube001_3.geometry}
            material={materials["Accent.012"].clone()}
          />
          <mesh
            name="Cube001_4"
            geometry={nodes.Cube001_4.geometry}
            material={materials["DarkAccent.007"].clone()}
          />
        </group>
        <group
          name="Computer_Mecha"
          position={[11, 0, -19]}
          rotation={[0, -Math.PI / 4, 0]}
        >
          <mesh
            name="Cube002"
            geometry={nodes.Cube002.geometry}
            material={materials["Main.016"].clone()}
          />
          <mesh
            name="Cube002_1"
            geometry={nodes.Cube002_1.geometry}
            material={materials["DarkGrey.016"].clone()}
          />
          <mesh
            name="Cube002_2"
            geometry={nodes.Cube002_2.geometry}
            material={materials["Black.006"].clone()}
          />
          <mesh
            name="Cube002_3"
            geometry={nodes.Cube002_3.geometry}
            material={materials["Accent.012"].clone()}
          />
          <mesh
            name="Cube002_4"
            geometry={nodes.Cube002_4.geometry}
            material={materials["DarkAccent.007"].clone()}
          />
        </group>
        <group
          name="Computer_Jump"
          position={[17, 4.5, -12]}
          rotation={[0, -Math.PI / 2, 0]}
        >
          <mesh
            name="Cube004"
            geometry={nodes.Cube004.geometry}
            material={materials["Main.016"].clone()}
          />
          <mesh
            name="Cube004_1"
            geometry={nodes.Cube004_1.geometry}
            material={materials["DarkGrey.016"].clone()}
          />
          <mesh
            name="Cube004_2"
            geometry={nodes.Cube004_2.geometry}
            material={materials["Black.006"].clone()}
          />
          <mesh
            name="Cube004_3"
            geometry={nodes.Cube004_3.geometry}
            material={materials["Accent.012"].clone()}
          />
          <mesh
            name="Cube004_4"
            geometry={nodes.Cube004_4.geometry}
            material={materials["DarkAccent.007"].clone()}
          />
        </group>
      </group>
    </RigidBody>
  );
}

useGLTF.preload("./Envirronment/Spaceship.gltf");
