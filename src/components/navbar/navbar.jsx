import './navbar.scss'
import logo from "./logo2.png";

function Navbar() {
    return (
        <div className="menu">
            <img src={logo}/>
            <ul>
                <li><a href="#containerAboutMe">Home</a></li>
                <li><a href="#containerProject">Projects</a></li>
                <li><a href="#containerSkill">Skills</a></li>
                {/* <li><a href="#">Activities</a></li> */}
                <li><a href="#containerExperience">Experience</a></li>
            </ul>
        </div>
    )
}

export default Navbar;