// import { useState } from 'react'
import "./App.scss";
import Navbar from "./components/navbar/navbar";
import AboutMe from "./components/aboutme/aboutme";
import Project from "./components/project/project";
import Skills from "./components/skills/skills";
import Experience from "./components/experience/experience";
import Contact from "./components/contact/contact";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="myPort">
      <div className="containerNavbar">
        <div className="menu">
          <ul>
            <li>
              <a href="#aboutme">Home</a>
            </li>
            <li>
              <a href="#project">Projects</a>
            </li>
            <li>
              <a href="#skill">Skills</a>
            </li>
            {/* <li><a href="#">Activities</a></li> */}
            <li>
              <a href="#experience">Experience</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="containerAboutMe" id="aboutme">
        <AboutMe />
      </div>
      <div className="containerProject" id="project">
        <Project />
      </div>
      <div className="containerSkill" id="skill">
        <Skills />
      </div>
      <div className="containerExperienceAndContact" id="experience">
        <Experience />
        <Contact />
      </div>
    </div>
  );
}

export default App;
