import React from 'react';
import logo from "../assets/logo.png";
import "./Header.css";

const FixedLogo = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="fixed-logo" onClick={scrollToTop}>
            <img src={logo} alt="Logo" id="logo" />
        </div>
    );
};

export default FixedLogo;