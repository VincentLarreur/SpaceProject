import { useNavigate } from "react-router-dom";

export default function Commands()
{        
    const navigate = useNavigate();

    function goToStart() {
        navigate("/");
    }

    return (
      <div id="Spashscreen">
        <h1 onClick={goToStart}>Space Project</h1>
        <div>
            <ul>
                <li>Forward : W or ↑</li>
                <li>Backward : S or ↓</li>
                <li>Left : A or ←</li>
                <li>Right : D or →</li>
                <li>Jump : Space</li>
                <li>Sprint : Shift</li>
                <li>Interact : E</li>

            </ul>
        </div>
        <span>© Space Project by <a href="https://www.linkedin.com/in/vincent-larreur/">Vincent Larreur</a> | Using <a href="https://quaternius.com/">Quaternius</a> Assets</span>
      </div>
    );
}