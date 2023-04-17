import { useRef } from 'react'

export default function Lights()
{
    const light = useRef()

    return <>
        <directionalLight
            ref={ light }
            position={ [ 0, 20, 12 ] }
            intensity={ 1 }
        />
        <ambientLight intensity={ 0.5 } />
    </>
}