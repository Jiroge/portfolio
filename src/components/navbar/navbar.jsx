import './navbar.css'
function Navbar() {
    return (
        <div className="menu">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Skills</a></li>
                {/* <li><a href="#">Activities</a></li> */}
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    )
}

export default Navbar;