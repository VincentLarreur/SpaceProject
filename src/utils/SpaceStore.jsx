import { create } from 'zustand'
import Characters from "./characters.js"

const useSpaceStore = create((set) => ({
  character: Characters.FOX,
  changeCharacter: (newCharacter) => set((state) => ({ character: newCharacter })),
}))

export default useSpaceStore