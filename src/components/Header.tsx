import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <h1 className="header-logo">AA</h1>
      <nav className="nav">
        <Link href="/" className="nav-link">
          Home
        </Link>
        <Link href="About" className="nav-link">
          About
        </Link>
        <Link href="Services" className="nav-link">
          Services
        </Link>
        <Link href="Contact" className="contact-button">
          Contact
        </Link>
      </nav>
    </header>
  );
}
