import React, { useState } from "react";
import { NavLink } from "react-router-dom"; 
import "../styles/NavBar.css"; 
import trendiLogo from "../images/trendi.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  return (
    <nav className="navbar">
      <div className="menu-toggle-container">
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
      </div>
      <div className="navbar-logo-container">
        <img src={trendiLogo} alt="logo" className="navbar-logo" />
      </div>
      <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <NavLink to="/" className="nav-item" activeClassName="active" onClick={closeMenu}>Home</NavLink>
        <NavLink to="/about" className="nav-item" activeClassName="active" onClick={closeMenu}>About Us</NavLink>
        <NavLink to="/services" className="nav-item" activeClassName="active" onClick={closeMenu}>Services</NavLink>
        <NavLink to="/gallery" className="nav-item" activeClassName="active" onClick={closeMenu}>Gallery</NavLink>
        <NavLink to="/contact" className="nav-item" activeClassName="active" onClick={closeMenu}>Contact</NavLink>
        <NavLink to="/booking" className="nav-item" activeClassName="active" onClick={closeMenu}>Booking</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
