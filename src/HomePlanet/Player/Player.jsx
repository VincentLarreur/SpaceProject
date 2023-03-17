import * as THREE from 'three'
import { useState, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { useGLTF, useAnimations, Sphere } from '@react-three/drei'
import { CuboidCollider, RigidBody, useRapier } from '@react-three/rapier'
import useGameStore from '../stores/useGame.jsx'
import Characters from "../../utils/characters.js"

export default function Player({character = Characters.BEE.astronaut})
{
    const { scene } = useThree()

    let animationName = ""

    const [ destinationPoint ] = useState(() => new THREE.Vector3(0,11.4,0))

    const body = useRef()
    const destination = useRef()
    const group = useRef();

    const { nodes, materials, animations } = useGLTF(character);
    const { actions } = useAnimations(animations, group);

    useGameStore.subscribe(
        (state) => {
            destinationPoint.copy(state.destination)
        }
    )

    const origin = new THREE.Vector3(0,0,0)

    console.log(useRapier)

    const [ smoothedCameraPosition ] = useState(() => new THREE.Vector3(0, 0, 20))
    const [ smoothedCameraTarget ] = useState(() => new THREE.Vector3(0, 20, 0))
    const [ smoothedBodyTarget ] = useState(() => new THREE.Vector3(0,10,0))

    useFrame((state, delta) =>
    {
        const bodyPosition = body.current.translation()

        /*
        * Camera
        */
        const cameraPosition = new THREE.Vector3()
        cameraPosition.x = (bodyPosition.x > 0) ? 20 : -20
        cameraPosition.y = (bodyPosition.y > 0) ? 20 : -20
        cameraPosition.z = (bodyPosition.z > 0) ? 20 : -20

        smoothedCameraPosition.lerp(cameraPosition, 5 * delta)

        state.camera.position.copy(smoothedCameraPosition)
        state.camera.lookAt(smoothedCameraTarget)

        /*
        * Body Position
        */
        const bodyTarget = new THREE.Vector3(0,10,0)
        bodyTarget.copy(bodyPosition)
        // bodyTarget.y-=0.4

        if (destinationPoint && bodyTarget.distanceTo(destinationPoint) > 0.5) {
            smoothedBodyTarget.lerp(destinationPoint, 0.5 * delta)
            const ray = new THREE.Raycaster(origin, smoothedBodyTarget, 0, 25)
            const intersects = ray.intersectObjects( scene.children );
            if (intersects && intersects.length > 0) {
                const intersectWithPlanet = intersects[0].point
                body.current.setNextKinematicTranslation({
                    x: intersectWithPlanet.x, 
                    y: intersectWithPlanet.y, 
                    z: intersectWithPlanet.z
                })
                smoothedCameraTarget.lerp(intersectWithPlanet, 5 * delta)
                if (animationName !== "Walk") {
                    actions.Idle.fadeOut(0.2)
                    actions.Walk.reset().fadeIn(0.2).play()
                    animationName = "Walk"
                }
            }
        } else {
            if (animationName !== "Idle") {
                actions.Walk.fadeOut(0.5)
                actions.Idle.reset().fadeIn(0.5).play()
                animationName = "Idle"
            }
        }
        /*
        * Body Rotation
        */

        // body.current.setNextKinematicRotation({
        //     x: eulerRotation.x, 
        //     y: eulerRotation.y, 
        //     z: eulerRotation.z
        // }) 
    })

    return <>
    <RigidBody 
        ref={ body } 
        position={ [ 0, 11.4, 0 ] }
        colliders={ false }
        scale={1}
        type="kinematicPosition"
    >
        <group ref={group} dispose={null}>
            <group name="Scene">
                <group name="CharacterArmature">
                <primitive object={nodes.Root} visible={false}/>
                <skinnedMesh
                    name="Character"
                    geometry={nodes.Character.geometry}
                    material={materials.Atlas}
                    skeleton={nodes.Character.skeleton}
                >
                    <CuboidCollider 
                        args={ [ 0.5, 1.3, 0.5 ] }
                        position={ [ 0, 1.3, 0 ] }
                        centerOfMass={[ 0, 0, 0 ]}
                        mass={1}
                    />
                </skinnedMesh>
                </group>
            </group>
        </group>
    </RigidBody>
    <Sphere ref={destination} scale={0.1}>
        <meshStandardMaterial color="orange" />
    </Sphere>
    </>
    
}