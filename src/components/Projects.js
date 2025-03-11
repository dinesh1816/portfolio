import React from 'react';
// import './Projects.css';

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        <div className="project-item">
          <h3>Quickern</h3>
          <p className="project-tech">Flutter</p>
          <ul>
            <li>Cross-platform mobile quiz application using Flutter & Dart.</li>
            <li>Integrated Firebase & Firestore for real-time data storage.</li>
            <li>Implemented CI/CD pipelines using GitHub Actions.</li>
            <li>Optimized app performance, improving interaction speed by 30%.</li>
            <li>Achieved 95% accuracy in quiz logic.</li>
          </ul>
        </div>
        <div className="project-item">
          <h3>Brain Tumor Detection</h3>
          <p className="project-tech">TensorFlow, Keras, LIME, OpenCV</p>
          <ul>
            <li>Deep learning model achieving 96% validation accuracy.</li>
            <li>Enhanced model interpretability using LIME.</li>
            <li>Preprocessed MRI datasets with advanced augmentation techniques.</li>
            <li>Optimized training pipeline, reducing time by 20%.</li>
            <li>Deployed model as REST API using Flask & FastAPI.</li>
          </ul>
        </div>
        <div className="project-item">
          <h3>Predictive ICU Readmission</h3>
          <p className="project-tech">Flask, PostgreSQL, Scikit-learn, Redis</p>
          <ul>
            <li>Developed Flask-based REST API for real-time predictions.</li>
            <li>Preprocessed large-scale EHR datasets.</li>
            <li>Implemented Redis-based caching, reducing query times by 30%.</li>
            <li>Automated model retraining using Celery task queue.</li>
          </ul>
        </div>
        <div className="project-item">
          <h3>Real-Time Chatting Application</h3>
          <p className="project-tech">ML, JS & Java</p>
          <ul>
            <li>Built real-time chat server using Node.js & Socket.io.</li>
            <li>Integrated RabbitMQ for message queuing.</li>
            <li>Optimized Redis-based session storage.</li>
            <li>Deployed Docker-based microservices with Nginx load balancing.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;