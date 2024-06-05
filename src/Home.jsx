import React, { useState, useEffect, useRef } from "react";
import Header from "./Header/Header";
import FirstProject from "./firstProject/FirstProject";
import SecondProject from "./secondProject/SecondProject";
import Contact from "./contact/Contact";
import useSmoothScroll from "./components/useSmoothScroll";
import About from "./about/About";

const Home = () => {
    const { currentSection, goToSection } = useSmoothScroll();
    // const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    // // Event listener to update the screen width on resize
    // useEffect(() => {
    //     const handleResize = () => {
    //         setScreenWidth(window.innerWidth);
    //     };

    //     window.addEventListener("resize", handleResize);
    //     return () => window.removeEventListener("resize", handleResize);
    // }, []);

    // // Determine if the screen is medium or smaller
    // const isMediumOrSmaller = screenWidth <= 992;

    // useEffect(() => {
    //     // Intersection Observer
    //     const observer = new IntersectionObserver((entries) => {
    //         entries.forEach((entry) => {
    //             if (entry.isIntersecting) {
    //                 entry.target.classList.add('show');
    //             } else {
    //                 entry.target.classList.remove('show');
    //             }
    //         });
    //     });

    //     const hiddenElements = document.querySelectorAll('.hidden');
    //     hiddenElements.forEach((el) => observer.observe(el));
    // }, []);

    return (
        <>
            <div className="section-container hidden">
                <section id="section1" tabIndex="-1" >
                    <Header goToSection={goToSection} />
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
                        {/* {isMediumOrSmaller && (
                            <div className="card">
                                <img src={selfie} alt="Selfie pic" id="selfie"></img>
                            </div>
                        )} */}
                    </div>
                </section>

                <section id="section2" tabIndex="-1" className="hidden about-section">
                    <About />
                </section>
                <section id="section3" tabIndex="-1" className='hidden projects-section'>
                    <FirstProject />
                </section>
                <section id="section4" tabIndex="-1" className="hidden third-project-section">
                    <SecondProject />
                </section>
                <section id="section5" tabIndex="-1" className="hidden contact-section">
                    <Contact />
                </section>
            </div>
        </>
    );
};

export default Home;