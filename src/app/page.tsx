"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import About from "./About/page";
import Services from "./Services/page";
import Contact from "./Contact/page";


export default function Home() {
  return (
    <section>
      {/* Main Section */}
      <div className="main-section">
        {/* Left Content Area */}
        <div className="left-content">
          <h1>
            <span>Hi, I am </span>
            <br />
            <TypeAnimation
              sequence={[
                "Abid Ali",
                1000,
                "Web Developer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={20}
              repeat={Infinity}
            />
          </h1>
          <p>
            Welcome to my portfolio — I am excited to share my work with you!
          </p>
          <div>
            <button>Know More</button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="right-content">
          <Image
            src="/image/treeman.png"
            alt="profile picture"
            width={400}
            height={250}
          />
        </div>
      </div>

      {/* Additional Sections */}
      <div className="additional-section">
        <About />
        <Services />
        <Contact />
      </div>
      </section>
  );
}
