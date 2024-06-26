import { Canvas } from '@react-three/fiber'
import ExperienceSpaceShip from './Experience.jsx'
import { KeyboardControls } from '@react-three/drei'
import PauseMenu from '../utils/PauseMenu.jsx'

export default function Home()
{
    document.title = "Space Project - Home";

    return <KeyboardControls map={ [
        { name: 'forward', keys: [ 'ArrowUp', 'KeyW' ] },
        { name: 'backward', keys: [ 'ArrowDown', 'KeyS' ] },
        { name: 'leftward', keys: [ 'ArrowLeft', 'KeyA' ] },
        { name: 'rightward', keys: [ 'ArrowRight', 'KeyD' ] },
        { name: 'jump', keys: [ 'Space' ] },
        { name: 'sprint', keys: ['Shift'] },
        { name: 'interact', keys: ['KeyE'] },
        { name: 'pause', keys: ['Escape'] },
    ] }>
        <PauseMenu />
        <Canvas camera={ { fov: 45 } }>
            <ExperienceSpaceShip />
        </Canvas>
    </KeyboardControls>
}