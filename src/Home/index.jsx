import { Canvas } from '@react-three/fiber'
import { Perf } from 'r3f-perf'
import ExperienceSpaceShip from './Experience.jsx'
import { KeyboardControls } from '@react-three/drei'

export default function Home()
{
    return <KeyboardControls map={ [
        { name: 'forward', keys: [ 'ArrowUp', 'KeyW' ] },
        { name: 'backward', keys: [ 'ArrowDown', 'KeyS' ] },
        { name: 'leftward', keys: [ 'ArrowLeft', 'KeyA' ] },
        { name: 'rightward', keys: [ 'ArrowRight', 'KeyD' ] },
        { name: 'jump', keys: [ 'Space' ] },
        { name: 'sprint', keys: ['Shift'] },
        { name: 'interact', keys: ['KeyE'] },
    ] }>
        <Canvas shadows camera={ { fov: 45 } }>
            <Perf position={'top-left'}/>
            <ExperienceSpaceShip />
        </Canvas>
    </KeyboardControls>
}