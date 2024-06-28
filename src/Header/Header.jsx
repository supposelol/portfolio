import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import EmailLink from "../components/links/emailLink";
import DiscordLink from "../components/links/discordLink";
import logo from "../assets/logo.png";
import "./Header.css";
import "./hamburger.css";
import GHLink from "../components/links/githubLink";
import LinkedinLink from "../components/links/linkedinLink";
import resume from "../assets/resume.pdf";

const Header = ({ goToSection }) => {
    // Section navigation and close the menu
    const handleClick = (sectionId) => {
        goToSection(sectionId);
        setOpenMenu(false);
    };

    const [openMenu, setOpenMenu] = useState(false);
    const [isMenuIconActive, setIsMenuIconActive] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const openMenuAnimation = useSpring({
        opacity: openMenu ? 1 : 0,
        transform: openMenu ? `translateY(0)` : `translateY(-20px)`,
        filter: openMenu ? 'blur(0px)' : 'blur(10px)',
        config: { duration: 300 },
    });

    const closeMenuAnimation = useSpring({
        opacity: openMenu ? 0 : 1,
        transform: openMenu ? `translateY(-20px)` : `translateY(0)`,
        filter: openMenu ? 'blur(10px)' : 'blur(0px)',
        config: { duration: 300 },
    });

    // Reset the menu icon state when the menu is closed
    useEffect(() => {
        if (!openMenu) {
            setIsMenuIconActive(false);
        }
    }, [openMenu]);

    // For the animation state with a timeout
    useEffect(() => {
        if (isAnimating) {
            const timeout = setTimeout(() => {
                setIsAnimating(false);
            }, 300);
            return () => clearTimeout(timeout);
        }
    }, [isAnimating]);

    // Toggle body scroll when the menu is open/closed
    useEffect(() => {
        const body = document.querySelector('body');
        if (openMenu) {
            body.classList.add('no-scroll');
        } else {
            body.classList.remove('no-scroll');
        }
    }, [openMenu]);

    const handleMenuClick = () => {
        if (openMenu) {
            setIsAnimating(true);
        }
        setOpenMenu(!openMenu);
        setIsMenuIconActive(!isMenuIconActive);
    };

    const resumeClick = () => {
        window.open(resume, '_blank');
    };

    const downloadResume = () => {
        const anchor = document.createElement('a');
        anchor.href = resume;
        anchor.download = 'Sandor_Szabo_Resume.pdf';
        anchor.click();
    };

    return (
        <header>
            <div id="logo-container">
                <img src={logo} alt="Logo" id="logo" />
            </div>
            <div className="nav-links">
                <div className="nav-item" onClick={() => handleClick('section2')}>
                    <p className="darkpink">1.</p><p className="marginsides eiderwhite nav-text">About</p>
                </div>
                <div className="nav-item" onClick={() => handleClick('section3')}>
                    <p className="darkpink">2.</p><p className="marginsides eiderwhite nav-text">Projects</p>
                </div>
                <div className="nav-item" onClick={() => handleClick('section5')}>
                    <p className="darkpink">3.</p><p className="marginsides eiderwhite nav-text">Contact</p>
                </div>
                <button className="resume-button" onClick={resumeClick}>
                    <p>Resume</p>
                </button>
            </div>
            {/* Hamburger menu */}
            <div className={`hamburger-container ${openMenu ? 'open' : ''}`}
                onClick={handleMenuClick}
            >
                <button className={`menu__icon ${isMenuIconActive ? 'active' : ''}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
            {/* Mobile menu */}
            {(openMenu || isAnimating) && (
                <animated.ul className="mobile-menu"
                    style={openMenuAnimation}>
                    <div className="mobile-nav-links">
                        <div className="nav-item" onClick={() => handleClick('section2')}>
                            <p className="darkpink">1.</p><p className="eiderwhite nav-text">About</p>
                        </div>
                        <div className="nav-item" onClick={() => handleClick('section3')}>
                            <p className="darkpink">2.</p><p className="eiderwhite nav-text">Projects</p>
                        </div>
                        <div className="nav-item" onClick={() => handleClick('section5')}>
                            <p className="darkpink">3.</p><p className="eiderwhite nav-text">Contact</p>
                        </div>
                        <div className="nav-item" onClick={downloadResume}>
                            <p className="whitepink nav-text">My Resume</p>
                        </div>
                    </div>
                    <div className="mobile-socials">
                        <p className="lightgray">Say hello</p>
                        <EmailLink email="szabo.shani@gmail.com">
                            szabo.shani@gmail.com
                        </EmailLink>
                        <ul className="mobile-short-links eiderwhite">
                            <li><LinkedinLink /></li>
                            <li><GHLink /></li>
                            <li><DiscordLink /></li>
                        </ul>
                    </div>
                </animated.ul>
            )}
        </header>
    );
};

export default Header;