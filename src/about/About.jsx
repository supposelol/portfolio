import React, { useState, useEffect } from "react";
import "./about.css";
import useResize from "../components/useResize";
import selfie from "../assets/jerry.jpeg"

const About = () => {
    // Get the resize states from the custom hook
    const { isMediumOrSmaller, isMediumOrLarger } = useResize();

    return (
        <>
            <div className="about-title-container">
                <h3><span className="darkpink orbitron marginright">1.</span>About me</h3>
            </div>
            <div className="about-container">
                <div className="text-content">
                    <p className="eiderwhite">
                        My experience learning to code has been a unique one. Before moving to the US, I owned
                        and operated my own massage salon back in Hungary. It helped me develop
                        skills like entrepreneurship and client services, but I was always driven to follow
                        my early dream of working with computers and coding.
                    </p>
                    <p className="eiderwhite">
                        The mid-2000s were a time when I honed my creative side by designing intros and avatars
                        in browser-based games — a simpler era for online gaming (~_^). It was then that I came upon
                        my apprecciation for coding and design. These simple customizations hooked me,
                        even as I built a career in a very different field.
                    </p>
                    <p className="eiderwhite">
                        Following my relocation to America, I expanded my knowledge of in-demand languages and frameworks.
                        What sets me apart is that my background made me love working with people and
                        customers, allowing me to collaborate with others easily.
                    </p>
                    <div className="technology-container">
                        <p className="eiderwhite">Here are a few technologies I've been working with recently:</p>
                        <ul className="eiderwhite">
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Node.js</li>
                            <li className="line-list"></li>
                            <li>Python</li>
                            <li>SQL</li>
                            <li>Cloud Computing</li>
                        </ul>
                    </div>
                </div>
                {isMediumOrLarger && (
                    <div className="card">
                        <img src={selfie} alt="Selfie pic" id="selfie"></img>
                    </div>
                )}
            </div>
        </>
    );
};

export default About