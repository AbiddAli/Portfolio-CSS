"use client";

import Link from 'next/link';

export default function About() {
  return (
    <div>
      <section className="about-section">
        <div className="about-content">
          <h2 className="about-title">About Me</h2>
          <h2 className="about-title about-highlight">Who Am I...</h2>

          <div>
            <p className="about-text">
              I am <b className="about-highlight">Abid Ali</b>, a passionate Front-End Developer and Programmer with a love for creating user-friendly, efficient, and visually appealing websites and applications. I specialize in JavaScript, TypeScript, and Next.js.
            </p>

            <p className="about-text">
              I am always eager to learn new technologies to improve my skills and keep up with industry trends. Whether its building responsive layouts or improving user experience, I strive to create clean, maintainable code with a strong emphasis on design and functionality.
            </p>
          </div>
          <Link href="Contact">
            <button className="contact-button">Contact</button>
          </Link>
        </div>
      </section>
    </div>
  );
}
