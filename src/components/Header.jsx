import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true); // State to track header visibility

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      if (window.scrollY > 50) { // If scrolled down by more than 50px
        setIsVisible(false); // Hide the header
      } else {
        setIsVisible(true); // Show the header
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={isVisible ? "header visible" : "header"}>
      <div className="container">
        <h1>Sai Dineshchandra Devisetti</h1>
        <nav>
          <ul>
            <li><Link to="about" smooth={true}>About</Link></li>
            <li><Link to="skills" smooth={true}>Skills</Link></li>
            <li><Link to="projects" smooth={true}>Projects</Link></li>
            <li><Link to="experience" smooth={true}>Experience</Link></li>
            <li><Link to="contact" smooth={true}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
