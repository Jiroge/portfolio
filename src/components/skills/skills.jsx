import './skills.scss'
import {
    ImHtmlFive
  } from "react-icons/im";
  import {
    IoLogoCss3
  } from "react-icons/io";
  import {
    SiJavascript,
    SiPython,
    SiMysql,
    SiReact,
    SiBootstrap,
    SiMongodb,
    SiCanva,
    SiFigma,
    SiAdobephotoshop,
    SiExpress,
    SiPostman
  } from "react-icons/si";
  import {
    FaNode,
    FaGithub
  } from "react-icons/fa";


function skills () {
    const style = { size: 80 }
  return (
    <div class="allList">
        <div className = 'head'>
            <h1><span>Skills</span></h1>
        </div>
        <div class="skillList">
            <div class="skill">
                    <ul>
                        <li><ImHtmlFive size={style.size}/></li>
                        <li><IoLogoCss3 size={style.size}/></li>
                        <li><SiJavascript size={style.size}/></li>
                        <li><SiMysql size={style.size}/></li>
                        <li><SiPython size={style.size}/></li>
                        <li><SiReact size={style.size}/></li>
                        <li><SiBootstrap size={style.size}/></li>
                        <li><SiExpress size={style.size}/></li>
                        <li><FaNode size={style.size}/></li>
                        <li><SiMongodb size={style.size}/></li>
                        <li><FaGithub size={style.size}/></li>
                        <li><SiFigma size={style.size}/></li>
                        <li><SiPostman size={style.size}/></li>
                        <li><SiCanva size={style.size}/></li>
                        <li><SiAdobephotoshop size={style.size}/></li>
                    </ul>
            </div>
        </div>
    </div>
  )
}

export default skills
