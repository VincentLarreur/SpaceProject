import { Stars } from '@react-three/drei'
import TestWorld from './TestWorld.jsx'

export function World({characterChosen})
{
    return <>
        <Stars radius={100} depth={50} count={5000} fade speed={0.1} />
        <TestWorld characterChosen={characterChosen} scale={2} rotation={[0, Math.PI / 2, 0]} />
    </>
}