import React, { useState, useEffect, useRef } from "react";
import Header from "./Header/Header";
import selfie from "./assets/jerry.jpeg";
import FirstProject from "./firstProject/FirstProject";
import SecondProject from "./secondProject/SecondProject";
import Contact from "./contact/Contact";

const Home = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    // Event listener to update the screen width on resize
    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Determine if the screen is medium or smaller
    const isMediumOrSmaller = screenWidth <= 992;

    useEffect(() => {
        // Intersection Observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
                }
            });
        });

        const hiddenElements = document.querySelectorAll('.hidden');
        hiddenElements.forEach((el) => observer.observe(el));
    }, []);

    return (
        <>
            <div className="section-container">
                <section id="section1" className="hidden">
                    <Header />
                    <div className="index-container">
                        <p className="darkpink orbitron minimal-margin">Hello, my name is</p>
                        <h1 className="minimal-margin">Sandor Szabo</h1>
                        <h2 className="eiderwhite minimal-margin">I'm a Full-Stack Developer</h2>
                        <p className="lightgray minimal-margin">
                            I like to craft solid and scalable
                            <span className="darkpink"> Web</span> and
                            <span className="darkpink"> Mobile</span> applications with great user experiences.
                            I have a knack for finding solutions and turning ideas into reality.
                        </p>
                        {isMediumOrSmaller && (
                            <div className="card">
                                <img src={selfie} alt="Selfie pic" id="selfie"></img>
                            </div>
                        )}
                    </div>
                </section>

                <section id="section2" className="hidden about-section">
                    <div className="about-container">
                        <h3><span className="darkpink orbitron marginright">1.</span>About me</h3>
                        <div class="line"></div>
                        <p className="eiderwhite">
                            My experience learning to code has been a unique one. Before moving to the US, I owned
                            and operated my own massage salon back in Hungary. It helped me develop
                            skills like entrepreneurship and client services, but I was always driven to follow
                            my early dream of working with computers and coding.
                        </p>
                        {!isMediumOrSmaller && (
                            <p className="eiderwhite">
                                The mid-2000s were a time when I honed my creative side by designing intros and avatars
                                in browser-based games — a simpler era for online gaming (~_^). It was then that I came upon
                                my apprecciation for coding and design. These simple customizations sparked an obsession that never
                                went away, even as I built a career in a very different field.
                            </p>
                        )}
                        <p className="eiderwhite">
                            Following my relocation to America, I expanded my knowledge of in-demand languages and frameworks.
                            What sets me apart is that my background made me love working with people and
                            customers, allowing me to collaborate with others easily.
                        </p>
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
                    {!isMediumOrSmaller && (
                        <div className="card">
                            <img src={selfie} alt="Selfie pic" id="selfie"></img>
                        </div>
                    )}
                </section>
                <FirstProject />
                <SecondProject />
                <Contact />
            </div>
        </>
    );
};

export default Home;