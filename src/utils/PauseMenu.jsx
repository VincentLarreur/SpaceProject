import { useRef, useEffect, useState } from "react";
import { useKeyboardControls } from "@react-three/drei";
import { useNavigate } from "react-router-dom";

export default function PauseMenu() {
  const [showPause, setShowPause] = useState(false);

  const pauseMenu = useRef();
  const [subscribeKeys] = useKeyboardControls();

  useEffect(() => {
    const unsubscribePause = subscribeKeys(
      (state) => state.pause,
      (value) => {
        if (value) setShowPause(!showPause);
      }
    );
    return () => {
      unsubscribePause();
    };
  });

  const navigate = useNavigate();

  function goToStart() {
    navigate("/");
  }

  function goToHome() {
    navigate("/home");
  }

  function goToCommands() {
    navigate("/commands");
  }

  function goToCredits() {
    navigate("/credits");
  }

  return (
    <div>
      {showPause ? (
        <div ref={pauseMenu} id="pauseMenu" visible={false}>
          <h1 onClick={goToStart}>Space Project</h1>
          <div>
            <button onClick={goToHome}>Go to Home</button>
            <button onClick={goToCommands}>Commands</button>
            <button onClick={goToCredits}>Credits</button>
          </div>
          <span>
            © Space Project by{" "}
            <a
              href="https://www.linkedin.com/in/vincent-larreur/"
              target="_blank"
            >
              Vincent Larreur
            </a>{" "}
            | Using{" "}
            <a href="https://quaternius.com/" target="_blank">
              Quaternius
            </a>{" "}
            Assets
          </span>
        </div>
      ) : null}
    </div>
  );
}
