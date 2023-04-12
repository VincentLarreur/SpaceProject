import { create } from 'zustand'
import Characters from "./characters.js"

const useSpaceStore = create((set) => ({
  character: Characters.FOX,
}))

export default useSpaceStore