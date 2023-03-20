import { Physics, Debug } from '@react-three/rapier'
import { OrbitControls } from '@react-three/drei'
import { useControls as useLevaControls } from 'leva'
import Lights from './World/Lights.jsx'
import Player from './Player/Player.jsx'
import Characters from "../utils/characters.js"
import World from './World/World.jsx'

export default function ExperienceSpaceShip()
{
    const { debug } = useLevaControls('physics', {
        debug: false,
    })

    const characterChosen = Characters.FOX

    return <>
        <OrbitControls />
        <Physics>
            {debug && <Debug />}
            <Lights />
            <World characterChosen={characterChosen}/>
            <Player character={characterChosen.astronaut} />
        </Physics>
    </>
}