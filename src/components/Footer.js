import React from 'react';
import './Footer.css';
import linkedinLogo from '../assets/linkedin-logo.png'; // Add your logos
import githubLogo from '../assets/github.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-email">
          <a href="mailto:dineshdevisetti2000@gmail.com">dineshdevisetti2000@gmail.com</a>
        </p>
        <div className="footer-links">
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinLogo} alt="LinkedIn" className="footer-logo" />
          </a>
          <a
            href="https://github.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubLogo} alt="GitHub" className="footer-logo" />
          </a>
        </div>
        <p className="footer-text">© 2025 Sai Dineshchandra Devisetti.</p>
      </div>
    </footer>
  );
};

export default Footer;