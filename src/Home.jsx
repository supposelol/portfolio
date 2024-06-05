import React, { useState, useEffect, useRef } from "react";
import useSmoothScroll from "./components/useSmoothScroll";
import Navigation from "./components/Navigation";
import Header from "./Header/Header";
import FirstProject from "./firstProject/FirstProject";
import SecondProject from "./secondProject/SecondProject";
import Contact from "./contact/Contact";
import About from "./about/About";
import Start from "./start/Start";

const Home = () => {
    const { currentSection, goToSection } = useSmoothScroll();
    // const [screenWidth, setScreenWidth] = useState(window.innerWidth);

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
            <Navigation currentSection={currentSection} goToSection={goToSection} />
            <div className="section-container hidden">
                <section id="section1" tabIndex="-1" className="start-section">
                    <Header goToSection={goToSection} />
                    <Start />
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
            </div >
        </>
    );
};

export default Home;