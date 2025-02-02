import React from "react";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2>Hi, I'm Sai Dineshchandra</h2>
        <p>
          Full Stack Developer with a passion for building scalable web
          applications and solving complex problems using modern technologies.
        </p>
        <Link to="about" smooth={true} className="btn-primary">
          Learn More
        </Link>
      </div>
    </section>
  );
};

export default Hero;
