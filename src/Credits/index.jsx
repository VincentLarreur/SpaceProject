import { useNavigate } from "react-router-dom";

export default function Credits() {
  document.title = "Space Project - Credits";

  const navigate = useNavigate();

  function goToStart() {
    navigate("/");
  }

  return (
    <div id="Spashscreen">
      <h1 onClick={goToStart}>Space Project</h1>
      <div id="credits">
        <p>
          I would like to thank Quaternius, Bruno Simon,
          and the Poimandres team for incredibles tools, resources that helped me thought my
          project. The <a href="https://quaternius.com/" target="_blank">Quaternius website</a> provided me with an amazing collection
          of 3D space assets that added depth and realism to my project. 
          I also
          want to express my gratitude to Bruno Simon for his incredible <a href="https://threejs-journey.com/" target="_blank">Three.js journey course</a>, which helped me develop my skills and make
          the most of this powerful tool. Finally, I would like to thank the <a href="https://pmnd.rs/" target="_blank">Poimandres</a> team for their work on the drei and R3F framework, which
          provided me with the flexibility and power I needed to create my
          project. Without the help of these talented individuals and teams, my
          project would not have been possible.
          <br />
          <br />
          Once again, thank you to Quaternius, Bruno Simon, and the Poimandres
          team for all of their hard work and dedication. I look forward to
          continuing to use their tools and resources in future projects.
          <br />
          <br />
          Also, thanks ChatGPT for writing this credits note for me, I am way too lazy for so many words.
          <br />
          <br />
          Peace !
        </p>
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
