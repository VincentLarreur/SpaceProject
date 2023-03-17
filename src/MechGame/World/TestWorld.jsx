import { Color } from 'three'
import { useControls as useLevaControls } from 'leva'
import { useGLTF, Box } from "@react-three/drei";
import { RigidBody } from '@react-three/rapier'

export default function Model(props) {
    const { nodes, materials } = useGLTF("./Envirronment/test_world2.gltf");
    materials["Material.001"].color = new Color(props.characterChosen.color)

    const { position } = useLevaControls({
        position:
        {
            value: { x: 12, y: -10, z: 46 },
            step: 10
        }
    })

    return (
    <>
        <RigidBody type="fixed" colliders="trimesh" {...props}>
            <group dispose={null}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001.geometry}
                    material={materials["Material.001"].clone()}
                    position={[ position.x, position.y, position.z ] }
                    name="worldObject"
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube002.geometry}
                    material={materials["Material.001"].clone()}
                    position={[ position.x, position.y, position.z ] }
                    name="worldObject"
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube003.geometry}
                    material={materials["Material.001"].clone()}
                    position={[ position.x, position.y, position.z ] }
                    name="worldObject"
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube004.geometry}
                    material={materials["Material.001"].clone()}
                    position={[ position.x, position.y, position.z ] }
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube005.geometry}
                    material={materials["Material.001"].clone()}
                    position={[ position.x, position.y, position.z ] }
                    name="worldObject"
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube006.geometry}
                    material={materials["Material.001"].clone()}
                    position={[ position.x, position.y, position.z ] }
                    name="worldObject"
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube007.geometry}
                    material={materials["Material.001"].clone()}
                    position={[ position.x, position.y, position.z ] }
                    name="worldObject"
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube008.geometry}
                    material={materials["Material.001"].clone()}
                    position={[ position.x, position.y, position.z ] }
                    name="worldObject"
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube009.geometry}
                    material={materials["Material.001"].clone()}
                    position={[ position.x, position.y, position.z ] }
                    name="worldObject"
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube010.geometry}
                    material={materials["Material.001"].clone()}
                    position={[ position.x, position.y, position.z ] }
                    name="worldObject"
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube011.geometry}
                    material={materials["Material.001"].clone()}
                    position={[ position.x, position.y, position.z ] }
                    name="worldObject"
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube012.geometry}
                    material={materials["Material.001"].clone()}
                    position={[ position.x, position.y, position.z ] }
                    name="worldObject"
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube013.geometry}
                    material={materials["Material.001"].clone()}
                    position={[ position.x, position.y, position.z ] }
                    name="worldObject"
                />
            </group>
        </RigidBody>
        <RigidBody>
            <Box material-color="hotpink" position={[-3, 10, -3]}/>
        </RigidBody>
    </>
    );
}

useGLTF.preload("/test-world.gltf");
