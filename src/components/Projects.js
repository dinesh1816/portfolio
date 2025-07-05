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
            <li>Developed a cross-platform mobile quiz application using Flutter & Dart, ensuring seamless UI responsiveness across Android & iOS.</li>
            <li>Integrated Firebase, Firestore for real-time data storage, enabling smooth user interactions and instant quiz updates.</li>
            <li>Improved app performance by implementing lazy loading and state management using Provider, improving interaction speed by 30%.</li>
          </ul>
        </div>
        <div className="project-item">
          <h3>Brain Tumor Detection</h3>
          <p className="project-tech">TensorFlow, Keras, LIME, OpenCV</p>
          <ul>
            <li>Designed a deep learning model using TensorFlow & Keras, achieving 96% validation accuracy for MRI-based brain tumor detection.</li>
            <li>Enhanced model interpretability using LIME (Local Interpretable Model-agnostic Explanations), in-creasing trustworthiness for medical professionals.</li>
            <li>Improved training pipeline with TensorFlow GPU acceleration (CUDA & cuDNN), reducing training time by 20%.</li>
            <li>Deployed the model as a REST API using Flask & Fast API, enabling real-time predictions in a scalable web-based application.</li>
          </ul>
        </div>
        <div className="project-item">
          <h3>Predictive ICU Readmission</h3>
          <p className="project-tech">Flask, PostgreSQL, Scikit-learn, Redis</p>
          <ul>
            <li>Built a Flask-based REST API serving real-time ICU readmission predictions, integrating Scikit-learn models with a structured PostgreSQL database.</li>
            <li>Preprocessed large-scale EHR datasets using Pandas & NumPy, optimizing data pipeline efficiency and feature engineering.</li>
            <li>Implemented Redis-based caching for frequently accessed patient records, reducing database query times by 30%.</li>
            <li>Automated model retraining and batch predictions using Celery task queue, ensuring continuous performance improvement.</li>
          </ul>
        </div>
        <div className="project-item">
          <h3>Real-Time Chatting Application</h3>
          <p className="project-tech">ML, JS & Java</p>
          <ul>
            <li>Built a real-time chat server using Node.js & Express with webSockets (Socket.io), ensuring low-latency communication for concurrent users.</li>
            <li>Integrated RabbitMQ for message queuing, enabling asynchronous event-driven architecture and im-proving reliability.</li>
            <li>Streamlined Redis-based session storage, reducing authentication latency and improving message retrieval speed.</li>
            <li>Deployed Docker-based microservices with Nginx load balancing.</li>

          </ul>
        </div>
        <div className="project-item">
          <h3>CareMatrix</h3>
          <p className="project-tech">Java, Spring Boot, React.js, MySQL, JWT, Docker, Redis, RabbitMQ, webSockets</p>
          <ul>
            <li>Created a role-based Electronic Health Record (EHR) system for doctors and patients with secure authentication using JWT and role-based access control (RBAC).</li>
            <li>Built RESTful APIs using Java and Spring Boot for appointment scheduling, patient record management, and insurance data handling.</li>
            <li>Engineered an interactive React.js frontend for real-time appointment booking, telemedicine sessions and EHR visibility based on user roles.</li>
            <li>Integrated WebSocket communication for live telemedicine chat between doctors and patients.</li>
            <li>Utilized Redis for session caching and RabbitMQ for asynchronous messaging, ensuring responsive UI and scalable backend communication.</li>
            <li>Containerized services using Docker and managed microservices communication and persistence with MySQL, promoting deployment flexibility and fault tolerance.</li>
            <li>Designed and implemented database schema with relational integrity using MySQL, supporting scalability and normalized data storage.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;