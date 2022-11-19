import "./aboutme.scss";
import profile from "./profile3.png";
import React, { useState } from "react";

function AboutMe() {
  const [showAboutMe, setShowAboutMe] = useState(true);
  return (
    <div className="content">
      <div className="aboutme">
        <div className="circle"></div>
        <img src={profile} className="clipped" />
        <div className="text">
          <h1>
            Hi there !
            <br />
            My name is <span>Jiroge Saeying</span>
          </h1>

          <button
            href="./Jiroge.pdf"
            target="_blank"
            className="buttonST"
          >
            RESUME
          </button>
          <button
          className="buttonST"
          onClick={() => {
            setShowAboutMe(!showAboutMe);
          }}
        >
          ABOUT ME
        </button>
        </div>
      </div>
      {showAboutMe ? (
        null
      ) : (
        <p className="details">
          I formerly worked in a factory that exported fruit to China.
          Technology and career path are two of my interests. I was given the opportunity to study the{" "}
          <span href="https://thailand.generation.org/" target="_blank">
            Generation
          </span>
          using the MERN stack (MongoDB, Express, React, Nodejs). I was taught
          how to create a website by professionals in the industry. Online
          courses are also available for independent learning.
          We do many projects during the boot camp using agile with a scrum
          framework working groups. In addition, learning a lot while attending
          the Generation, I also developed my hard skills and soft skills.
        </p>
      )}
    </div>
  );
}
export default AboutMe;
