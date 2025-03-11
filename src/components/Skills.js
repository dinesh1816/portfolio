import React, { useState } from "react";
import "./Skills.css";
import javascriptLogo from "../assets/javascript.png"; // Add your logos
import pythonLogo from "../assets/python.png";
import javaLogo from "../assets/java.png";
import nodejsLogo from "../assets/nodejs.png";
import reactLogo from "../assets/react.png";
import expressLogo from "../assets/express.png";
import flaskLogo from "../assets/flask.png";
import restapiLogo from "../assets/restapi.png";
import websocketsLogo from "../assets/websocket.svg";
import scikitlearnLogo from "../assets/scikitlearn.png";
import tensorflowLogo from "../assets/tensorflow.png";
import dockerLogo from "../assets/docker.png";
import rabbitmqLogo from "../assets/rabbitmq.svg";
import celeryLogo from "../assets/celery.png";
import sqlLogo from "../assets/sql.png";
import mongodbLogo from "../assets/mongodb.png";
import postgresqlLogo from "../assets/postgresql.png";
import ehrLogo from "../assets/ehr.jpg";
import gitLogo from "../assets/git.png";
import githubLogo from "../assets/github.png";
import nginxLogo from "../assets/nginx.png";
import prometheusLogo from "../assets/prometheus.png";
import grafanaLogo from "../assets/grafana.png";
import officeLogo from "../assets/office.png";
import aesLogo from "../assets/aes.png";
import jwtLogo from "../assets/jwt.png";
import oauthLogo from "../assets/oauth.png";

const Skills = () => {

  const skills = [
    { name: "JavaScript", expertise: 90, logo: javascriptLogo },
    { name: "Python", expertise: 85, logo: pythonLogo },
    { name: "Java", expertise: 80, logo: javaLogo },
    { name: "Node.js", expertise: 88, logo: nodejsLogo },
    { name: "React.js", expertise: 92, logo: reactLogo },
    { name: "Express.js", expertise: 85, logo: expressLogo },
    { name: "Flask", expertise: 80, logo: flaskLogo },
    { name: "REST APIs", expertise: 90, logo: restapiLogo },
    { name: "WebSockets", expertise: 75, logo: websocketsLogo },
    { name: "Scikit-learn", expertise: 70, logo: scikitlearnLogo },
    { name: "TensorFlow", expertise: 65, logo: tensorflowLogo },
    { name: "Docker", expertise: 85, logo: dockerLogo },
    { name: "RabbitMQ", expertise: 80, logo: rabbitmqLogo },
    { name: "Celery", expertise: 75, logo: celeryLogo },
    { name: "SQL", expertise: 90, logo: sqlLogo },
    { name: "MongoDB", expertise: 85, logo: mongodbLogo },
    { name: "PostgreSQL", expertise: 88, logo: postgresqlLogo },
    { name: "EHR Data Processing", expertise: 70, logo: ehrLogo },
    { name: "Git", expertise: 95, logo: gitLogo },
    { name: "GitHub", expertise: 90, logo: githubLogo },
    { name: "Nginx", expertise: 80, logo: nginxLogo },
    { name: "Prometheus", expertise: 75, logo: prometheusLogo },
    { name: "Grafana", expertise: 70, logo: grafanaLogo },
    { name: "Microsoft Office Suite", expertise: 85, logo: officeLogo },
    { name: "AES-256 Encryption", expertise: 80, logo: aesLogo },
    { name: "JWT Authentication", expertise: 85, logo: jwtLogo },
    { name: "OAuth2", expertise: 75, logo: oauthLogo },
  ];

  const [progress, setProgress] = useState(
    skills.reduce((acc, skill) => ({ ...acc, [skill.name]: skill.expertise }), {})
  );

  const [animate, setAnimate] = useState({}); // Tracks if animation should play

  const handleMouseEnter = (skill) => {
    setProgress((prev) => ({ ...prev, [skill.name]: 0 })); // Reset to 0
    setAnimate((prev) => ({ ...prev, [skill.name]: false })); // Disable animation

    setTimeout(() => {
      setProgress((prev) => ({ ...prev, [skill.name]: skill.expertise }));
      setAnimate((prev) => ({ ...prev, [skill.name]: true })); // Enable animation
    }, 100);
  };

  const handleMouseLeave = (skill) => {
    setProgress((prev) => ({ ...prev, [skill.name]: skill.expertise })); // Restore expertise level
    setAnimate((prev) => ({ ...prev, [skill.name]: false })); // Disable animation
  };

  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div
            className="skill-item"
            key={index}
            onMouseEnter={() => handleMouseEnter(skill)}
            onMouseLeave={() => handleMouseLeave(skill)}
          >
            <div className="skill-progress-circle">
              <svg viewBox="0 0 36 36" className="circular-chart">
                {/* Background Circle */}
                <path
                  className="circle-bg"
                  d="M18 2.0845
                     a 15.9155 15.9155 0 0 1 0 31.831
                     a 15.9155 15.9155 0 0 1 0 -31.831"
                />

                {/* Animated Progress Circle */}
                <path
                  className="circle"
                  style={{
                    strokeDasharray: "100",
                    strokeDashoffset: 100 - progress[skill.name],
                    transition: animate[skill.name] ? "stroke-dashoffset 1.5s ease-in-out" : "none",
                  }}
                  d="M18 2.0845
                     a 15.9155 15.9155 0 0 1 0 31.831
                     a 15.9155 15.9155 0 0 1 0 -31.831"
                />

                {/* Skill Logo */}
                <foreignObject x="10" y="10" width="16" height="16">
                <div className="skill-logo-container">
                  <img src={skill.logo} alt={skill.name} className="skill-logo" />
                </div>                  
                </foreignObject>
              </svg>
            </div>
            <div className="skill-name">{skill.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;