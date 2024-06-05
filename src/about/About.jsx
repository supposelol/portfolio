import React from "react";
import "./about.css";

const About = () => {
    return (
        <>
            <div className="title-container">
                <h3><span className="darkpink orbitron marginright">1.</span>About me</h3>
            </div>
            <div className="about-container">
                <p className="eiderwhite">
                    My experience learning to code has been a unique one. Before moving to the US, I owned
                    and operated my own massage salon back in Hungary. It helped me develop
                    skills like entrepreneurship and client services, but I was always driven to follow
                    my early dream of working with computers and coding.
                </p>
                <p className="eiderwhite">
                    The mid-2000s were a time when I honed my creative side by designing intros and avatars
                    in browser-based games — a simpler era for online gaming (~_^). It was then that I came upon
                    my apprecciation for coding and design. These simple customizations sparked an obsession that never
                    went away, even as I built a career in a very different field.
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
                        <li>DevOps</li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default About
