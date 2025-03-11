import React from 'react';
// import './Experience.css';

const Experience = () => {
  return (
    <section id="experience">
      <h2>Experience</h2>
      <div className="experience-container">
        <div className="experience-item">
          <h3>Full Stack Developer</h3>
          <h4>Ten20InfoMedia</h4>
          <p className="experience-duration">Jul 2022 – Aug 2023</p>
          <ul>
            <li>Developed a seamless call forwarding system for the Alohaa platform using Node.js, Asterisk REST Interface (ARI), and WebSockets.</li>
            <li>Optimized VoIP call latency by 50% through Redis caching implementation.</li>
            <li>Designed dynamic DID detection and routing system handling 10,000+ daily calls.</li>
            <li>Enhanced platform reliability with microservices architecture, reducing errors by 40%.</li>
            <li>Built reusable UI components in React.js, improving user engagement by 20%.</li>
            <li>Refactored backend services ensuring 99.9% uptime.</li>
          </ul>
        </div>
        <div className="experience-item">
          <h3>Software Development Intern</h3>
          <h4>Ten20InfoMedia</h4>
          <p className="experience-duration">May 2022 – Jun 2022</p>
          <ul>
            <li>Refactored MERN stack codebase, improving efficiency by 15%.</li>
            <li>Boosted UI performance by 20% through React optimizations.</li>
            <li>Reduced API response times by 30% using Node.js clustering.</li>
            <li>Automated CI/CD workflows using GitHub Actions & Docker.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;