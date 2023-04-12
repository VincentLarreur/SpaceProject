import { create } from 'zustand'
import Characters from "./characters.js"

const useSpaceStore = create((set) => ({
  character: Characters.FROG,
}))

export default useSpaceStore