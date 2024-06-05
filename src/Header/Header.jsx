import React from "react";
import logo from "../assets/logo.png";
import "./Header.css";

const Header = ({ goToSection }) => {
    const handleClick = (sectionId) => {
        goToSection(sectionId);
    };
    return (
        <header>
            <div id="logo-container">
                <img src={logo} alt="Logo" id="logo" />
            </div>
            <div className="nav-links">
                <div className="nav-item" onClick={() => handleClick('section2')}>
                    <p className="darkpink">1.</p><p className="marginright eiderwhite nav-text">About</p>
                </div>
                <div className="nav-item" onClick={() => handleClick('section3')}>
                    <p className="darkpink">2.</p><p className="marginright eiderwhite nav-text">Projects</p>
                </div>
                <div className="nav-item" onClick={() => handleClick('section5')}>
                    <p className="darkpink">3.</p><p className="marginright eiderwhite nav-text">Contact</p>
                </div>
                <button className="button">
                    <p>Resume</p>
                </button>
            </div>
        </header>
    );
};

export default Header;