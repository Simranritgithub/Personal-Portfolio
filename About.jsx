import React from "react";
import "./About.css";

const About = () => {
  return (
    <div id="About" className="about">
      <div className="about-title">
        <h1>About Me</h1>
      </div>
      <div className="about-sections">
        <div className="about-right">
          <div className="about-para">
            <p>
              I am a passionate and dedicated Full Stack Developer with
              expertise in creating dynamic and responsive web applications.{" "}
            </p>
            <p>
              I specialize in crafting user-friendly interfaces using
              HTML,CSS,JAVASCRIPT and modern frameworks like React while
              ensuring robust functionality with Node.js ,Express and databases
              like MongoDB and MySQL.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
          
          <div className="about-skill">
            <p>JavaScript</p>
            <hr style={{ width: "50%" }} />
          </div>
        
        <div className="about-skill">
          <p>React</p>
          <hr style={{ width: "70%" }} />
        </div>
        <div className="about-skill">
          <p>Node.js and Express.js</p>
          <hr style={{ width: "60%" }} />
        </div>
        <div className="about-skill">
          <p>MongoDB & MySQL</p>
          <hr style={{ width: "50%" }} />
        </div>
      </div>
      </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>1+</h1>
          <p>Internships</p>
        </div>
        <hr/>

      <div className="about-achievement">
          <h1>10+</h1>
          <p>Projects Completed</p>
        </div><hr/>
        <div className="about-achievement">
          <h1>2+</h1>
          <p>Participation in Smart India Hackathon</p>
        </div>

    </div>
    </div>
  );
};
export default About;
