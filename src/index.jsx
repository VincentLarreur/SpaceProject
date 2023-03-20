import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import { Perf } from 'r3f-perf'
import ExperienceHomePlanet from './HomePlanet/Experience.jsx'
import ExperienceLaboratory from './Laboratory/Experience.jsx'
import ExperienceSpaceShip from './SpaceShip/Experience.jsx'
import { KeyboardControls } from '@react-three/drei'

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
        <Canvas shadows camera={ { fov: 45 } }>
            <Perf position={'top-left'}/>
            {/* <ExperienceHomePlanet /> */}
            {/* <ExperienceLaboratory /> */}
            <ExperienceSpaceShip />
        </Canvas>
    </KeyboardControls>
)