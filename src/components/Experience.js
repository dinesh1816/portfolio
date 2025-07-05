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
          <p className="experience-duration">Jul 2021 – Aug 2023</p>
          <ul>
            <li>Designed and deployed a distributed routing platform for cloud telephony (Alohaa), increasing call throughput by 45% and reducing latency from 6s to under 3s for 10K+ daily calls.</li>
            <li>Built and scaled microservices using Node.js and ARI-client, enabling real-time number masking and outbound IVR logic.</li>
            <li>Developed multiple APIs and backend features for "Doosra," a privacy-focused virtual mobile number platform, using Java and Spring Boot; contributed to secure call/SMS routing, user onboarding, and analytics modules.</li>
            <li>Integrated AWS services (EC2, Lambda, S3) for cloud automation and failover recovery, reducing downtime by 35%.</li>
            <li>Tuned system performance by implementing Redis caching, MongoDB indexing, and async job queues, reducing query response time by 30%.</li>
            <li>Spearheaded the development of reusable UI components with React.js, enhancing user engagement by 20%.</li>
            <li>Led architectural improvements for DID management, fail-safe routing, and multichannel queueing strategies.</li>
          </ul>
        </div>
        <div className="experience-item">
          <h3>Software Development Intern</h3>
          <h4>Ten20InfoMedia</h4>
          <p className="experience-duration">January 2021 – July 2021</p>
          <ul>
            <li>Increased React app performance by 20% using memoization, lazy loading, and React Profiler insights. </li>
            <li>Enabled backend scalability with Node.js clustering and Redis-based session handling, reducing concurrent user timeout errors by 40%.</li>
            <li>Streamlined deployments via Dockerized CI/CD pipelines using GitHub Actions.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;