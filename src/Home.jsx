import React from "react";
import { useSpring, animated } from "react-spring";
import useSmoothScroll from "./components/useSmoothScroll";
import Navigation from "./components/Navigation";
import Header from "./Header/Header";
import FirstProject from "./firstProject/FirstProject";
import SecondProject from "./secondProject/SecondProject";
import Contact from "./contact/Contact";
import About from "./about/About";
import Start from "./start/Start";
import useOnScreen from "./components/intersectionObserver";

const Section = ({ id, children, className }) => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.25 }, 150);
    const animationProps = useSpring({
        opacity: isVisible ? 1 : 0,
        filter: isVisible ? 'blur(0px)' : 'blur(3px)',
        config: { mass: 1, tension: 150, friction: 14 },
    });

    return (
        <animated.section ref={ref} style={animationProps} className={className} id={id}>
            {children}
        </animated.section>
    );
};

const Home = () => {
    const { currentSection, goToSection } = useSmoothScroll();

    return (
        <>
            <Navigation currentSection={currentSection} goToSection={goToSection} />
            <div className="section-container">
                <Section id="section1" className="start-section">
                    <Header goToSection={goToSection} />
                    <Start />
                </Section>
                <Section id="section2" className="about-section">
                    <About />
                </Section>
                <Section id="section3" className="projects-section">
                    <FirstProject />
                </Section>
                <Section id="section4" className="second-project-section">
                    <SecondProject />
                </Section>
                <Section id="section5" className="contact-section">
                    <Contact />
                </Section>
            </div>
        </>
    );
};

export default Home;