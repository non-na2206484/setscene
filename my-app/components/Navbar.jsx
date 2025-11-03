"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  const links = [
    { name: "About", id: "about" },
    { name: "Features", id: "features" },
    { name: "Waitlist", id: "waitlist" },
    { name: "Demo", href: "/demo" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="navbar-logo"
          onClick={() => scrollToSection("top")}
        >
          SetScene
        </motion.h1>

        {/* Desktop Links */}
        <div className="navbar-links-desktop">
          {links.map((link) =>
            link.href ? (
              <div
                key={link.name}
                className={link.name === "Demo" ? "demo-link-wrapper" : ""}
              >
                <a
                  href={link.href}
                  className={`navbar-link ${link.name === "Demo" ? "demo-link" : ""}`}
                >
                  {link.name}
                </a>
                {link.name === "Demo" && (
                  <div className="demo-star">★</div>
                )}
              </div>
            ) : (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="navbar-link"
              >
                {link.name}
              </button>
            )
          )}
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="navbar-hamburger"
        >
          <div className="hamburger-lines">
            <span className={`line ${menuOpen ? "line1-open" : ""}`}></span>
            <span className={`line ${menuOpen ? "line2-open" : ""}`}></span>
            <span className={`line ${menuOpen ? "line3-open" : ""}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="navbar-mobile-menu"
        >
          {links.map((link) =>
            link.href ? (
              <a key={link.name} href={link.href} className="navbar-link-mobile">
                {link.name}
              </a>
            ) : (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="navbar-link-mobile"
              >
                {link.name}
              </button>
            )
          )}
        </motion.div>
      )}
    </nav>
  );
}
