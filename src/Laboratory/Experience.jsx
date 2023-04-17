import { Physics } from '@react-three/rapier'
import Lights from './World/Lights.jsx'
import Player from './Player/Player.jsx'
import World from './World/World.jsx'

export default function ExperienceLaboratory()
{
    return <>
        <Physics>
            <Lights />
            <World />
            <Player />
        </Physics>
    </>
}