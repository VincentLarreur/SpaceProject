import { useNavigate } from "react-router-dom";

export default function Commands() {
  document.title = "Space Project - Commands";

  const navigate = useNavigate();

  function goToStart() {
    navigate("/");
  }

  return (
    <div id="Spashscreen">
      <h1 onClick={goToStart}>Space Project</h1>
      <div>
        <table>
          <tr>
            <td>Forward</td>
            <td>
              <kbd>W</kbd> <kbd>↑</kbd>
            </td>
          </tr>
          <tr>
            <td>Backward</td>
            <td>
              <kbd>S</kbd> <kbd>↓</kbd>
            </td>
          </tr>
          <tr>
            <td>Left</td>
            <td>
              <kbd>A</kbd> <kbd>←</kbd>
            </td>
          </tr>
          <tr>
            <td>Right</td>
            <td>
              <kbd>D</kbd> <kbd>→</kbd>
            </td>
          </tr>
          <tr>
            <td>Jump</td>
            <td>
              <kbd>Space</kbd>
            </td>
          </tr>
          <tr>
            <td>Sprint</td>
            <td>
              <kbd>Shift</kbd>
            </td>
          </tr>
          <tr>
            <td>Interact</td>
            <td>
              <kbd>E</kbd>
            </td>
          </tr>
          <tr>
            <td>Pause</td>
            <td>
              <kbd>Escape</kbd>
            </td>
          </tr>
        </table>
      </div>
      <span>
        © Space Project by{" "}
        <a href="https://www.linkedin.com/in/vincent-larreur/" target="_blank">
          Vincent Larreur
        </a>{" "}
        | Using <a href="https://quaternius.com/" target="_blank">Quaternius</a> Assets
      </span>
    </div>
  );
}
