import { useNavigate } from "react-router-dom";

export default function Start()
{        
    const navigate = useNavigate();

    function goToStart() {
        navigate("/");
    }

    function goToCharacterSelection() {
        navigate("/characterselection");
    }

    function goToCommands() {
        navigate("/commands");
    }

    function goToCredits() {
        navigate("/credits");
    }

    return (
      <div id="Spashscreen">
        <h1 onClick={goToStart}>Space Project</h1>
        <div>
            <button onClick={goToCharacterSelection}>Start Game</button>
            <button onClick={goToCommands}>Commands</button>
            <button onClick={goToCredits}>Credits</button>
        </div>
        <span>© Space Project by <a href="https://www.linkedin.com/in/vincent-larreur/">Vincent Larreur</a> | Using <a href="https://quaternius.com/">Quaternius</a> Assets</span>
      </div>
    );
}