import React from "react";
import "./nav.css";

const Navbar = ({ isFixed }) => {
  return (
    <div 
      className="Navbar"
      style={{
        position: isFixed ? "fixed" : "relative",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        background: isFixed ? "#222" : "#333",
        transition: "0.3s",
        boxShadow: isFixed ? "0 2px 5px rgba(0,0,0,0.3)" : "none"
      }}
    >
      <nav className={`navbar ${isFixed ? "fixed-nav" : ""}`}>
        <div className="nav-inner">
          <div className="nav-left">
            <a href="#home"><img src="/Assests/Frame 16.png" alt="" /></a>
          </div>

          <div className="nav-right">
            <a href="#about">About me</a>
            <a href="#skills">Skills</a>
            <a href="#portfolio">Portfolio</a>
            <a className="btn" href="#contact">Contact me</a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
