import { useState } from "react";
import { useNavigate } from "react-router-dom";
import characters from "../utils/characters";
import useSpaceStore from "../utils/SpaceStore";

export default function CharacterSelection() {
  const navigate = useNavigate();

  const changeCharacter = useSpaceStore((state) => state.changeCharacter);

  function goToStart() {
    navigate("/");
  }

  function goToHome() {
    navigate("/home");
  }

  let [selectedObject, setSelectedObject] = useState(null);

  function handleChange(event) {
    const selectedId = parseInt(event.target.value);
    switch(selectedId) {
      case 1: 
        selectedObject = characters.FROG;
        break;
      case 2: 
        selectedObject = characters.BEE;
        break;
      case 3:
        selectedObject = characters.FLAMINGO;
        break;
      case 4: 
        selectedObject = characters.FOX;
        break;
      default:
        selectedObject = characters.FOX;
    }
    setSelectedObject(selectedObject);
    changeCharacter(selectedObject);
  }

  return (
    <div id="Spashscreen">
      <h1 onClick={goToStart}>Space Project</h1>
      <form onSubmit={goToHome}>
        <label>
          Pick your character:
          <select value={selectedObject ? selectedObject.id : ''} onChange={handleChange}>
            <option value="">Select an option</option>
            <option value={characters.BEE.id} key={characters.BEE.id}>
              {characters.BEE.name}
            </option>
            <option value={characters.FLAMINGO.id} key={characters.FLAMINGO.id}>
              {characters.FLAMINGO.name}
            </option>
            <option value={characters.FROG.id} key={characters.FROG.id}>
              {characters.FROG.name}
            </option>
            <option value={characters.FOX.id} key={characters.FOX.id}>
              {characters.BEE.name}
            </option>
          </select>
        </label>
        <input type="submit" value="Play" />
      </form>
      <span>
        © Space Project by{" "}
        <a href="https://www.linkedin.com/in/vincent-larreur/">
          Vincent Larreur
        </a>{" "}
        | Using <a href="https://quaternius.com/">Quaternius</a> Assets
      </span>
    </div>
  );
}
