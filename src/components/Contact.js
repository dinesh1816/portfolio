import React, { useState } from 'react';
import './Contact.css';
import linkedinLogo from '../assets/linkedin-logo.png'; // Add your logos
import githubLogo from '../assets/github.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    console.log('Form Data:', formData);
    sendEmail(formData);  // ✅ Call sendEmail before resetting formData

    alert('Thank you for your message! I will get back to you soon.');

    setFormData({  // Reset the form after sending email
      name: '',
      email: '',
      subject: '',
      message: '',
    });
};


const sendEmail = async (formData) => {
  fetch("https://script.google.com/macros/s/AKfycbz3QAIEzfgX8gHcQ2qTqoXhSp1OPucSSkxk1EfiTmB5-oV9hyGcRyUwTViWYA0eeLo9AA/exec", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData),
    mode: "cors"
  })
    .then(response => response.json())
    .then(data => console.log("Success:", data))
    .catch(error => console.error("Error:", error));
};
  

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <div className="contact-container">
        <div className="contact-links">
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinLogo} alt="LinkedIn" className="contact-logo" />
          </a>
          <a
            href="https://github.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubLogo} alt="GitHub" className="contact-logo" />
          </a>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;