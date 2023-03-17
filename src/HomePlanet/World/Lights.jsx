import { useRef } from 'react'
import { useHelper } from '@react-three/drei'

export default function Lights()
{
    const light = useRef()

    useHelper(light)

    return <>
        <directionalLight
            ref={ light }
            castShadow
            position={ [ 10, 20, 20 ] }
            intensity={ 1.5 }
            shadow-normalBias={ 0.04 }
        />
        <ambientLight intensity={ 0.5 } />
    </>
}