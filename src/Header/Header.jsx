import React, { useState, useEffect, useRef } from "react";
import { useSpring, animated } from "react-spring";
import EmailLink from "../components/links/emailLink";
import DiscordLink from "../components/links/discordLink";
import logo from "../assets/Sandor_transparent.png";
import "./header.css";
import "./hamburger.css"
import GHLink from "../components/links/githubLink";
import LinkedinLink from "../components/links/linkedinLink";

const Header = ({ goToSection }) => {
    const handleClick = (sectionId) => {
        goToSection(sectionId);
    };

    const [openMenu, setOpenMenu] = useState(false);
    const menuAnimation = useSpring({
        opacity: openMenu ? 1 : 0,
        config: { duration: 300 },
    });

    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setOpenMenu(false)
            }
        };

        document.body.addEventListener("click", handleClickOutside);

        return () => {
            document.body.removeEventListener("click", handleClickOutside);
        };
    }, []);

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

            <div className={`hamburger-container ${openMenu ? 'open' : ''}`}
                onClick={() => setOpenMenu(!openMenu)}
                ref={menuRef}>
                <div class="background">
                    <button class="menu__icon">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>

            {openMenu && (
                <animated.ul className="mobile-menu" style={menuAnimation}>
                    <div className="mobile-nav-links">
                        <div className="nav-item" onClick={() => handleClick('section2')}>
                            <p className="darkpink">1.</p><p className="marginright eiderwhite nav-text">About</p>
                        </div>
                        <div className="nav-item" onClick={() => handleClick('section3')}>
                            <p className="darkpink">2.</p><p className="marginright eiderwhite nav-text">Projects</p>
                        </div>
                        <div className="nav-item" onClick={() => handleClick('section5')}>
                            <p className="darkpink">3.</p><p className="marginright eiderwhite nav-text">Contact</p>
                        </div>
                    </div>
                    <div className="mobile-socials">
                        <p className="lightgray">Say hello</p>
                        <EmailLink email="szabo.shani@gmail.com">
                            szabo.shani@gmail.com
                        </EmailLink>
                        <ul className="mobile-short-links">
                            <li><LinkedinLink /></li>
                            <li><GHLink /></li>
                            <li><DiscordLink /></li>
                        </ul>
                    </div>
                    <button className="button">
                        <p>Resume</p>
                    </button>

                </animated.ul>
            )}

        </header>
    );
};

export default Header;