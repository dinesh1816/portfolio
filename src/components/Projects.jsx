import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Projects</h2>
        
        <div className="project-card">
          <h3>Quickern (Flutter)</h3>
          <p>
            Developed a mobile quiz app using Flutter with a 30% increase in user
            interaction. Managed GitHub version control, ensuring project stability and continuous development.
          </p>
        </div>

        <div className="project-card">
          <h3>An Interpretable CNN-Based Classifier for Brain Tumor Detection</h3>
          <p>
            Designed a CNN-based model using TensorFlow, achieving 96% validation accuracy in brain tumor classification. Integrated LIME to improve model transparency for medical applications.
          </p>
        </div>

        <div className="project-card">
          <h3>Predictive ICU Readmission</h3>
          <p>
            Built a machine learning model predicting ICU readmissions with 85% accuracy. Developed a real-time web application with Flask and JavaScript, enabling healthcare providers to make informed decisions.
          </p>
        </div>

        <div className="project-card">
          <h3>Real-Time Chatting Application</h3>
          <p>
            Implemented scalable chat functionality using Node.js, Express, and RabbitMQ. The application supports thousands of concurrent users, with integrated ML models to reduce network congestion by 30%.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
