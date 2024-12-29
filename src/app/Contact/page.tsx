"use client";
import { useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div>
  <section className="contact-section">
    <div className="left-content">
      <h2>Contact Us</h2>
      <p>
        We would love to hear from you! Whether you have a question, a project proposal, or just want to connect, feel free to reach out.
      </p>

      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>

      <div className="social-links">
        <h2>Get In Touch</h2>
        <div>
          <a href="https://github.com/AbiddAli" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
          <a href="mailto:example@example.com">
            <AiOutlineMail />
          </a>
        </div>
      </div>
    </div>
  </section>
</div>

  );
}



