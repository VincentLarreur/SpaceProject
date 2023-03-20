import { Stars } from '@react-three/drei'
import Planet from './Planet.jsx'

export default function World({planet})
{
    return <>
        <Stars radius={100} depth={50} count={5000} fade speed={0.1} />
        <Planet planetsByCharacter={planet} />
    </>
}