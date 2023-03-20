import { Physics, Debug } from '@react-three/rapier'
import { OrbitControls } from '@react-three/drei'
import Lights from './World/Lights.jsx'
import World from './World/World.jsx'
import Player from './Player/Player.jsx'
import Characters from "../utils/characters.js"

export default function ExperienceHomePlanet()
{
    return <>
        <OrbitControls />

        <color args={ [ '#252731' ] } attach="background" />

        <Physics gravity={[0,0,0]} >
            {/* <Debug /> */}
            <Lights />
            <World planet={Characters.BEE.planet}/>
            <Player character={Characters.BEE.astronaut} />
        </Physics>
    </>
}