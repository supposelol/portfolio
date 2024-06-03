import React from "react";
import logo from "../assets/logo.png";
import "./Header.css";

const Header = () => {
    return (
        <header>
            <div id="logo-container">
                <img src={logo} alt="Logo" id="logo" />
            </div>
            <div className="nav-links">
                <a href="#section2" className="nav-item">
                    <p className="darkpink">1.</p><p className="marginright eiderwhite nav-text">About</p>
                </a>
                <a href="#section3" className="nav-item">
                    <p className="darkpink">2.</p><p className="marginright eiderwhite nav-text">Projects</p>
                </a>
                <a href="#section5" className="nav-item">
                    <p className="darkpink">3.</p><p className="marginright eiderwhite nav-text">Contact</p>
                </a>
                <button className="button">
                    <p>Resume</p>
                </button>
            </div>
        </header>
    );
};

export default Header;
