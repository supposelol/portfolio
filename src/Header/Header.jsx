import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Header.css";

const Header = () => {
    return (
        <header>
            <div id="logo-container">

                <img src={logo} alt="Logo" id="logo" />

            </div>
            <div className="nav-links">
                <p className="darkpink">1.</p><p className="marginright eiderwhite">About</p>
                <p className="darkpink">2.</p><p className="marginright eiderwhite">Projects</p>
                <p className="darkpink">3.</p><p className="marginright eiderwhite">Contact</p>
                <button className="button">
                    <p>Resume</p>
                </button>
            </div>
        </header>
    );
};

export default Header;
