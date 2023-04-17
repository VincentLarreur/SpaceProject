import { Canvas } from '@react-three/fiber'
import { KeyboardControls } from '@react-three/drei'
import ExperienceLaboratory from './Experience.jsx'
import PauseMenu from '../utils/PauseMenu.jsx'

export default function Laboratory()
{
    document.title = "Space Project - Laboratory";

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
        <Canvas shadows camera={ { fov: 45 } }>
            <ExperienceLaboratory />
        </Canvas>
    </KeyboardControls>
}