import { Vector3 } from 'three'
import { create } from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'

const useGameStore = create(subscribeWithSelector(() =>
{
    destination: new Vector3(0,10,0)
}))

export default useGameStore