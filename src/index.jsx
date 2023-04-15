import "./style.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Start from './Start'
import Home from './Home'
import Commands from "./Commands";
import Credits from "./Credits";
import Rover from "./Rover";
import SpaceCraft from "./SpaceCraft";
import Mecha from "./Mecha";
import Jump from "./Jump";
import CharacterSelection from "./CharacterSelection";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <Router>
    <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/home" element={<Home />} />
        <Route path="/characterselection" element={<CharacterSelection />} />
        <Route path="/commands" element={<Commands />} />
        <Route path="/credits" element={<Credits />} />
        <Route path="/rover" element={<Rover />} />
        <Route path="/mecha" element={<Mecha />} />
        <Route path="/spacecraft" element={<SpaceCraft />} />
        <Route path="/jump" element={<Jump />} />
    </Routes>
  </Router>
);
