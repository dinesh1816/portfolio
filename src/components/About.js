import React from 'react';
import './About.css'; // or import styles from './About.module.css';

const About = () => {
  const aboutContent = {
    title: "About Me",
    paragraphs: [
      "I am a Full Stack Developer with expertise in distributed systems, machine learning, and real-time applications. Currently pursuing my Master's in Computer Science at Texas A&M University-Corpus Christi, I bring hands-on experience in building scalable solutions using modern technologies.",
      "My technical journey includes significant experience at Ten20InfoMedia, where I developed and optimized VoIP systems, reducing call latency by 50% and improving platform reliability through microservices architecture.",
      "I am passionate about solving complex problems and creating efficient, user-friendly applications. My focus areas include Node.js, React.js, Flask, PostgreSQL, and RabbitMQ, with a strong emphasis on building fault-tolerant architectures.",
    ],
  };

  return (
    <section id="about" aria-labelledby="about-heading">
      <div className="about-container">
        <h2 id="about-heading">{aboutContent.title}</h2>
        {aboutContent.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
};

export default About;