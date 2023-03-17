import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import ExperienceHomePlanet from './HomePlanet/Experience.jsx'
import ExperienceMechGame from './MechGame/Experience.jsx'
import { KeyboardControls } from '@react-three/drei'
import Interface from './Interface.jsx'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <KeyboardControls map={ [
        { name: 'forward', keys: [ 'ArrowUp', 'KeyW' ] },
        { name: 'backward', keys: [ 'ArrowDown', 'KeyS' ] },
        { name: 'leftward', keys: [ 'ArrowLeft', 'KeyA' ] },
        { name: 'rightward', keys: [ 'ArrowRight', 'KeyD' ] },
        { name: 'jump', keys: [ 'Space' ] },
        { name: 'sprint', keys: ['Shift'] },
    ] }>
        <Canvas
            shadows
            camera={ {
                fov: 45,
                near: 0.1,
                far: 300,
            } }
        >
            {/* <ExperienceHomePlanet /> */}
            <ExperienceMechGame />
        </Canvas>
        <Interface />
    </KeyboardControls>
)