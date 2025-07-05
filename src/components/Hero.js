import React from 'react';
import './Hero.css';
import profileImage from '../../src/assets/profile.jpeg'; // Adjust the path to your image

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-name">Sai Dineshchandra</h1>
          <h1 className="hero-name">Devisetti</h1>
          <h2 className="hero-title">Full Stack Developer</h2>
          <p className="hero-description">
            Expertise in distributed systems, machine learning, and real-time applications. Passionate about building scalable, high-performance solutions.
          </p>
          {/* <a href="#contact" className="hero-contact-button">Contact Me</a> */}
        </div>
        <div className="hero-image">
          <img src={profileImage} alt="Sai Dineshchandra Devisetti" />
        </div>
      </div>
    </section>
  );
};

export default Hero;