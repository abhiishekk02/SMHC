import React, { useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import Logo from "../../Assets/Logo.png";
import { Button, Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
    setIsMenuOpen(false); // Close menu after navigating
    setIsDropdownOpen(false); // Close dropdown after navigating
  };
  const items = [
    {
      key: "1",
      label: (
        <NavLink to="/privacypolicy" onClick={scrollToTop}>
          Privacy Policy
        </NavLink>
      ),
    },
    {
      key: "2",
      label: (
        <NavLink to="/terms" onClick={scrollToTop}>
          Terms and Conditions
        </NavLink>
      ),
    },
  ];

  return (
    <nav>
      <img src={Logo} alt="Logo" className="logo" />
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
        {/* Learn More Dropdown */}

        <NavLink to="/contact" onClick={scrollToTop}>
          Contact Us
        </NavLink>

        {/*  */}
        <Space direction="vertical">
          <Space wrap>
            <Dropdown
              menu={{
                items,
              }}
              placement="bottomLeft"
            >
              <Button
                style={{
                  fontFamily: "Futura, sans-serif",
                  fontSize: "16px",
                  color: "#627b5f",
                  background: "transparent",
                  border: "none",
                  padding: 0,
                }}
                icon={
                  <DownOutlined
                    style={{ color: "#627b5f", fontSize: "12px" }}
                  />
                }
              >
                Learn More
              </Button>
            </Dropdown>
          </Space>
        </Space>
      </div>
    </nav>
  );
};

export default Header;
