import { Physics, Debug } from '@react-three/rapier'
import { OrbitControls } from '@react-three/drei'
import { useControls as useLevaControls } from 'leva'
import Lights from './World/Lights.jsx'
import { World } from './World/World.jsx'
import Player from './Player/Player.jsx'
import Characters from "../utils/characters.js"

export default function ExperienceMechGame()
{
    const { debug } = useLevaControls('physics', {
        debug: false,
    })

    const characterChosen = Characters.FOX
    return <>
        <OrbitControls />

        <color args={ [ '#252731' ] } attach="background" />

        <Physics>
            {debug && <Debug />}
            <Lights />
            <World characterChosen={characterChosen}/>
            <Player character={characterChosen.mech} />
        </Physics>
    </>
}