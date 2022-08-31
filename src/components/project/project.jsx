import "./project.css";
import TeaCozyWeb from "./tea-cozy.png";
import colmar from "./colmar.png";
import jammming from "./jammming.png";
import exercise from "./exercise-tracking.png";
import how from "./how-old.png";
import giticon from "./github.png";
import link from "./link.png";

function Project() {
  return (
    <div className="list">
      <h1>
        <span>Project</span>
      </h1>
      <div className="item">
        <img src={TeaCozyWeb} />
        <h3>Tea Cozy </h3>
        <p className="projectDes">
          Code Academy exercises with a provided web design. I'm in charge of
          creating the appropriate HTML and CSS.
        </p>
        <p>
          <span>HTML</span>
          <span>CSS</span>
        </p>
        {/* <a href = "#" target = "_blank"><img src="src/components/project/link.png"/></a> */}
        <a href="https://github.com/Jiroge/Tea-Cozy-Web" target="_blank">
          <img src={giticon} />
        </a>
      </div>
      <div className="item">
        <img src={colmar} />
        <h3>Colmar Academy</h3>
        <p className="projectDes">
          An HTML and CSS-based web design boot camp assessment that takes one
          day to complete.
        </p>
        <p>
          <span>HTML</span>
          <span>CSS</span>
        </p>
        {/* <a href = "#" target = "_blank"><img src="src/components/project/link.png"/></a> */}
        <a href="https://github.com/Jiroge/Colmar-Web" target="_blank">
          <img src={giticon} />
        </a>
      </div>
      <div className="item">
        <img src={jammming} />
        <h3>Jammming</h3>
        <p className="projectDes">
          Connect to the Spotify API to create song playlists and save them to
          the individual accounts.
        </p>
        <p>
          <span>HTML</span>
          <span>CSS</span>
          <span>JAVASCRIPT</span>
          <span>REACT</span>
        </p>
        {/* <a href = "#" target = "_blank"><img src="src/components/project/link.png"/></a> */}
        <a
          href="https://github.com/Jiroge/Jammming-Spotify-Class-Component"
          target="_blank"
        >
          <img src={giticon} />
        </a>
      </div>
      <div className="item">
        <img src={exercise} />
        <h3>Exercise Tracking</h3>
        <p className="projectDes">
          {" "}
          Frontend and backend designs for a website. Users' own exercise data
          can be added, removed, updated, and edited.
        </p>
        <p>
          <span>HTML</span>
          <span>CSS</span>
          <span>JAVASCRIPT</span>
          <span>REACT</span>
        </p>
        <a href="https://fitfriends.vercel.app/" target="_blank">
          <img src={link} />
        </a>
        <a href="https://github.com/Jiroge/FitFriends-Frontend" target="_blank">
          <img src={giticon} />
        </a>
      </div>
      <div className="item">
        <img src={how} />
        <h3>How Old Are You</h3>
        <p className="projectDes">
          Enter input birthdate to calculate input age in years, months, and
          days, as well as the zodiac.
        </p>
        <p>
          <span>PYTHON</span>
        </p>
        {/* <a href = "#" target = "_blank"><img src="src/components/project/link.png"/></a> */}
        <a href="https://github.com/Jiroge/How-Old-Are-You" target="_blank">
          <img src={giticon} />
        </a>
      </div>
    </div>
  );
}

export default Project;
