import React from 'react';
// import './Education.css';

const Education = () => {
  return (
    <section id="education">
      <h2>Education</h2>
      <div className="education-container">
        <div className="education-item">
          <h3>Master of Science in Computer Science</h3>
          <p className="education-duration">Aug 2023 – May 2025</p>
          <p className="education-institution">Texas A&M University-Corpus Christi</p>
          <p className="education-coursework">Relevant Coursework: Advanced Algorithms, Distributed Systems, Machine Learning</p>
        </div>
        <div className="education-item">
          <h3>Bachelor of Computer Science</h3>
          <p className="education-duration">Jul 2018 – Jul 2022</p>
          <p className="education-institution">JB Institute of Engineering and Technology</p>
          <p className="education-coursework">Relevant Coursework: Data Structures, Operating Systems, Database Management</p>
        </div>
      </div>
    </section>
  );
};

export default Education;