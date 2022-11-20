// import { useState } from 'react'
import "./App.scss";
import Navbar from "./components/navbar/navbar";
import AboutMe from "./components/aboutme/aboutme";
import Project from "./components/project/project";
import Skills from "./components/skills/skills";
import Experience from "./components/experience/experience";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="myPort">
      <div id="containerNavbar">
        <Navbar />
      </div>
      <div id="containerAboutMe">
        <AboutMe />
      </div>
      <div id="containerProject">
        <Project />
      </div>
      <div id="containerSkill" >
        <Skills />
      </div>
      <div id="containerExperienceAndContact">
        <Experience />
      </div>
    </div>
  );
}

export default App;
