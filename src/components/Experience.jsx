import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2>Experience</h2>

        {/* Job 1 */}
        <div className="job">
          <h3>Full Stack Developer | Ten20InfoMedia</h3>
          <p className="job-date">July 2022 – August 2023</p>
          <ul>
            <li>Engineered a seamless call forwarding feature for the Alohaa platform, ensuring 100% routing reliability across both single and multiple DID configurations.</li>
            <li>Reduced call connection latency by 50%, optimizing user experience and reducing wait time.</li>
            <li>Designed a scalable routing mechanism to dynamically detect DID and binding types, improving reliability for over 10,000 daily calls.</li>
            <li>Boosted customer satisfaction by 20% and reduced operational errors by 40%, enhancing overall platform efficiency.</li>
            <li>Developed interactive UI components with React.js, increasing user engagement by 20% through intuitive design.</li>
            <li>Streamlined backend services with Node.js and ARI, ensuring system uptime and reliability.</li>
          </ul>
        </div>

        {/* Job 2 */}
        <div className="job">
          <h3>Software Development Intern</h3>
          <p className="job-date">May 2022 – June 2022</p>
          <ul>
            <li>Optimized codebase efficiency by 15% using the MERN stack.</li>
            <li>Enhanced user interface performance with React.js, increasing engagement by 20% with faster load times and smoother interactions.</li>
            <li>Integrated backend services using Node.js and Express.js, reducing API response times by 30%.</li>
            <li>Led deployment efforts by managing version control with GitHub, streamlining the development workflow.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
