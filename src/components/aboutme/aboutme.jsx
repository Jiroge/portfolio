import "./aboutme.scss";
function AboutMe() {
  return (
    <div className="aboutme">
      <img src="src/components/aboutme/profile.jpg" class="clipped" />
      <div className="text">
        <h1>
          Hi there!
          <br />
          My name is
          <br />
          <span>Jiroge Saeying</span>
        </h1>
        <p>
          I formerly worked in a factory that exported fruit to China.
          Technology and career path are two of my interests.
          <hr />I was given the opportunity to study the
          <span>
            <a href="https://thailand.generation.org/" target="_blank">
              {" "}
              Generation{" "}
            </a>
          </span>
          using the <span>MERN stack (MongoDB, Express, React, Nodejs)</span>. I
          was taught how to create a website by professionals in the industry.
          Online courses are also available for independent learning.
          <hr />
          We do many projects during the boot camp using agile with a scrum
          framework working groups. In addition, learning a lot while attending
          the Generation, I also developed my hard skills and soft skills.
        </p>
      </div>
    </div>
  );
}
export default AboutMe;
