"use client";

import { useState } from "react";

const links = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "GitHub", href: "#github" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <a
        href="#top"
        className="nav-logo"
        onClick={handleLinkClick}
        aria-label="Go to top"
      >
        AS
      </a>

      {/* Desktop Navigation */}
      <div className="nav-links">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.name}
          </a>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        className={`mobile-menu-button ${
          menuOpen ? "menu-open" : ""
        }`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
      </button>

      {/* Mobile Navigation */}
      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <div className="mobile-menu-inner">
          <div className="mobile-menu-label">
            NAVIGATION
          </div>

          {links.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
            >
              <span>0{index + 1}</span>
              {link.name}
              <span>↗</span>
            </a>
          ))}

          <div className="mobile-menu-footer">
            <span>ABHISHEK SONKAR</span>
            <span>CSE · IIIT SURAT</span>
          </div>
        </div>
      </div>
    </nav>
  );
}