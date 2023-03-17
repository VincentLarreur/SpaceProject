import { create } from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'

const useGameStore = create(subscribeWithSelector(() =>
{
}))

export default useGameStore