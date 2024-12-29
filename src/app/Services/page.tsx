import React from 'react';
import { FaCode, FaDesktop, FaDatabase, FaMobileAlt, FaServer } from 'react-icons/fa';

function Services() {
  return (
    <section className="services-section">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="services-heading">_____My Services</h2>
        <h3 className="services-subheading">What Can I Do</h3>

        <div className="services-grid">
          <div className="service-card">
            <FaCode className="service-icon" />
            <h4 className="service-title">Figma and PSD to HTML/CSS Conversion:</h4>
            <p className="service-description">
              I convert Figma/PSD designs into high-quality, pixel-perfect HTML/CSS templates, maintaining design integrity and functionality.
            </p>
          </div>
          <div className="service-card">
            <FaDesktop className="service-icon" />
            <h4 className="service-title">Front-End Development</h4>
            <p className="service-description">
              Proficient in HTML, CSS, TypeScript, and Tailwind CSS, I build interactive and dynamic web interfaces that engage users.
            </p>
          </div>
          <div className="service-card">
            <FaDatabase className="service-icon" />
            <h4 className="service-title">Back-End Development</h4>
            <p className="service-description">
              Experienced in creating robust and scalable server-side applications using Node.js, Express, and database management systems.
            </p>
          </div>
          <div className="service-card">
            <FaMobileAlt className="service-icon" />
            <h4 className="service-title">Mobile App Development</h4>
            <p className="service-description">
              Developing cross-platform mobile apps using React Native, ensuring seamless user experiences across devices.
            </p>
          </div>
          <div className="service-card">
            <FaServer className="service-icon" />
            <h4 className="service-title">API Integration & Development</h4>
            <p className="service-description">
              Creating and integrating RESTful APIs to enable communication between systems and streamline application functionality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
