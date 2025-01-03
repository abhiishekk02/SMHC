import React, { useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
    const closeMenu = () => setIsMenuOpen(false);
    closeMenu();
  };

  return (
    <nav>
      <p className="logo">SMHCs</p>

      <button
        className="hamburger"
        onClick={toggleMenu}
        aria-expanded={isMenuOpen}
        aria-controls="nav-menu"
      >
        ☰
      </button>

      <div id="nav-menu" className={`navLinks ${isMenuOpen ? "open" : ""}`}>
        <NavLink to="/" onClick={scrollToTop}>
          Home
        </NavLink>
        <NavLink to="/about" onClick={scrollToTop}>
          About
        </NavLink>
        <NavLink to="/ourservices" onClick={scrollToTop}>
          Our Services
        </NavLink>
        <NavLink to="/resources" onClick={scrollToTop}>
          Resources
        </NavLink>
        <NavLink to="/showcase" onClick={scrollToTop}>
          Showcase
        </NavLink>
        <NavLink to="/contact" onClick={scrollToTop}>
          Contact Us
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
