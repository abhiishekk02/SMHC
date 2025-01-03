import React, { useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav>
      <p className="logo">SMHCs</p>

      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>

      <div className={`navLinks ${isMenuOpen ? "open" : ""}`}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/ourservices">Our Services</NavLink>
        <NavLink to="/resources">Resources</NavLink>
        <NavLink to="/showcase">Showcase</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
      </div>
    </nav>
  );
};

export default Header;
