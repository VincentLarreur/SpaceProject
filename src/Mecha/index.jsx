import { useNavigate } from "react-router-dom";

export default function Mecha()
{        
    const navigate = useNavigate();

    function goToStart() {
        navigate("/");
    }

    return (
      <div id="Spashscreen">
        <h1 onClick={goToStart}>Space Project</h1>
        <div>
            <p>Coming Soon !</p>
        </div>
        <span>© Space Project by <a href="https://www.linkedin.com/in/vincent-larreur/">Vincent Larreur</a> | Using <a href="https://quaternius.com/">Quaternius</a> Assets</span>
      </div>
    );
}