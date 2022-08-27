import './contact.css'
function Contact () {
    return (
        <div className="contact">
            <div>
                <h3>Contact</h3>
            </div>
            <div className="contentContact">
                <a href="https://web.facebook.com/JoeJiroge" target="_blank">
                    <img src="src/components/contact/facebook.png"/>
                </a>
                <a href="https://www.linkedin.com/in/jiroge-saeying-2ab10b218/" target="_blank">
                    <img src="src/components/contact/linkedin.png"/>
                </a>
                <a href="https://github.com/Jiroge" target="_blank">
                    <img src="src/components/contact/github.png"/>
                </a>
                {/* <a href="#" target="_blank">
                    <img src="src/components/contact/gmail.png"/>
                </a> */}
            </div>
        </div>
    )
}
export default Contact;