import './skills.css'

function skills () {
  return (
    <div class="allList">
        <div className = 'head'>
            <h1><span>Skills</span></h1>
        </div>
        <div class="skillList">
            <div class="skill">
                <div class="skillTitle">
                    <h3>LANGUAGES</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>SQL</li>
                        <li>Python</li>
                    </ul>
                </div>
            </div>
            
            <div class="skill">
                <div class="skillTitle">
                    <h3>FRAMEWORKS</h3>
                    <ul>
                        <li>React</li>
                        <li>Bootstrap</li>
                    </ul>
                </div>
            </div>

            <div class="skill">
                <div class="skillTitle">
                    <h3>TOOLS</h3>
                    <ul>
                        <li>VS Code</li>
                        <li>Slack</li>
                        <li>Postman</li>
                        <li>Git&Github</li>
                    </ul>
                </div>
            </div>

            <div class="skill">
                <div class="skillTitle">
                    <h3>OTHER TOOLS</h3>
                    <ul>
                        <li>Sony Vegas</li>
                        <li>Adobe Photoshop</li>
                        <li>SPSS</li>
                        <li>Minitab</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default skills