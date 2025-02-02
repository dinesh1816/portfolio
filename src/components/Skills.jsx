import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="skill-set">
          <div className="skill">
            <h3>Languages</h3>
            <p>JavaScript, Python, Java, C</p>
          </div>
          <div className="skill">
            <h3>Frameworks & Tools</h3>
            <p>Node.js, React.js, Express.js, Flask, TensorFlow, Docker, RabbitMQ</p>
          </div>
          <div className="skill">
            <h3>Technologies</h3>
            <p>REST APIs, Cloud Telephony, DID, Machine Learning, SQL, MongoDB</p>
          </div>
          <div className="skill">
            <h3>Software</h3>
            <p>Redis, Git, GitHub, Microsoft Office Suite</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
