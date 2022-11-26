import './contact.css'
import facebook from "./facebook.png"
import linkedin from "./linkedin.png"
import github from "./github.png"
function Contact () {
    return (
        <div className="contact">
            <div>
                <h3>Contact</h3>
            </div>
            <div className="contentContact">
                <a href="https://web.facebook.com/JoeJiroge" target="_blank">
                    <img src={facebook}/>
                </a>
                <a href="https://www.linkedin.com/in/jiroge-saeying-2ab10b218/" target="_blank">
                    <img src={linkedin}/>
                </a>
                <a href="https://github.com/Jiroge" target="_blank">
                    <img src={github}/>
                </a>
                {/* <a href="#" target="_blank">
                    <img src="src/components/contact/gmail.png"/>
                </a> */}
            </div>
        </div>
    )
}
export default Contact;