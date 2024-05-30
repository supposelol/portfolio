import React, { useState, useEffect } from "react";
import Header from "./Header/Header";
import KUTE from "kute.js";
import selfie from "./assets/jerry.jpeg"

const Home = () => {

    // Track the screen width:
    const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);

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
        // // Blob animation
        // const blobTween = KUTE.fromTo(
        //     "#blob1",
        //     { path: "#blob1" },
        //     { path: "#blob2" },
        //     { repeat: 999, duration: 3000, yoyo: true }
        // );
        // blobTween.start();

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
            <section className="hidden">
            <Header />
                <div className="index-container">
                    <p className="darkpink orbitron minimal-margin">Hello, my name is</p>
                    <h1 className="minimal-margin">Sandor Szabo</h1>
                    <h2 className="eiderwhite minimal-margin">I'm a Full-Stack Developer</h2>
                    <p className="lightgray minimal-margin">I like to craft solid and scalable <span className="darkpink">Web</span> and <span className="darkpink">Mobile</span> applications with great user experiences. I have a knack for solving problems and turning ideas into reality.</p>
                    {isMediumOrSmaller && (
                        <div className="card">
                            <img src={selfie} alt="Selfie pic" id="selfie"></img>
                        </div>
                    )}
                </div>
            </section>

            <section className="hidden about-section">
                <div className="about-container">
                    <h3><span className="darkpink orbitron marginright">1.</span>About me</h3>
                    <div class="line"></div>
                    <p className="eiderwhite">
                        My path to coding has been an unconventional one. Before moving to the US, I owned
                        and operated my own massage salon back in Hungary. While that allowed me to hone
                        skills like entrepreneurship and client services, there was always a burning desire
                        to chase my childhood dream of working with computers and coding.
                    </p>
                    {!isMediumOrSmaller && (
                        <p className="eiderwhite">
                            From the mid-2000s, when I was styling my intros and avatars on browser-based games,
                            I knew I had found a deep passion for coding and design. These simple customizations
                            sparked an obsession that never went away, even as I built a career in an entirely
                            different field.
                        </p>
                    )}
                    <p className="eiderwhite">
                        After relocating to America, and after years of self-teaching and preparation,
                        I made the life-changing decision to enroll in an intensive coding bootcamp.
                        There, I vastly expanded my skills in in-demand languages and frameworks.
                    </p>
                    <p className="eiderwhite">
                        Now, as a recent graduate who has pivoted from the massage industry to pursuing
                        my childhood coding dream, I'm prepared to bring a fresh perspective
                        to any development team.
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
                {/* <svg
                    id="visual"
                    viewBox="0 0 960 600"
                    width="960"
                    height="600"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                >
                    <g transform="translate(466.910666477876 292.14030646721176)">
                        <path
                            id="blob1"
                            d="M177.1 -176.3C212.8 -141.4 213.4 -70.7 211.7 -1.6C210.1 67.4 206.2 134.8 170.5 173.3C134.8 211.8 67.4 221.4 1.4 220C-64.6 218.6 -129.2 206.2 -160.7 167.7C-192.2 129.2 -190.6 64.6 -176 14.6C-161.4 -35.4 -133.7 -70.7 -102.2 -105.5C-70.7 -140.4 -35.4 -174.7 17.7 -192.4C70.7 -210 141.4 -211.1 177.1 -176.3"
                            fill="#BB004B"
                        ></path>
                    </g>
                    <g transform="translate(492.4613790616287 294.6586385003234)" style={{ visibility: "hidden" }}>
                        <path
                            id="blob2"
                            d="M116.3 -106C161 -71.7 214.5 -35.8 217 2.5C219.4 40.8 170.9 81.6 126.2 108.9C81.6 136.2 40.8 150.1 -15 165.1C-70.7 180 -141.4 196.1 -187.1 168.8C-232.8 141.4 -253.4 70.7 -235.7 17.7C-218 -35.4 -162 -70.7 -116.4 -105C-70.7 -139.4 -35.4 -172.7 0.2 -172.9C35.8 -173.2 71.7 -140.3 116.3 -106"
                            fill="#BB004B">
                        </path>
                    </g>
                </svg> */}
            </section>

            <section className="hidden projects-section">
                <div className="projects-title-container">
                <h3 className="projects-title"><span className="darkpink orbitron marginright">1.</span>Some things I've built</h3>
                </div>
                <div className="first-project">
                    <div className="kicks-img-container">1</div>
                    <div className="kicks-description">2</div>
                </div>
                <div className="second-project">
                    <div className="fit-img-left-container">3</div>
                    <div className="fit-description">4</div>
                    <div className="fit-img-right-container">5</div>
                </div>
            </section>

            <section className="hidden">
                <h1>Other Noteworthy Projects</h1>
                <p>Voluptatum sapiente excepturi velit nobis enim est non reprehenderit voluptatibus unde blanditiis alias culpa tempore, tenetur aut veniam libero? Rem dolorum quia cupiditate culpa. Rem veritatis illo quae ratione provident?</p>
            </section>

            <section className="hidden">
                <h1>Get In Touch</h1>
                <p>Voluptates tempora temporibus labore ipsam, omnis distinctio necessitatibus dolore cupiditate sed ipsum iste dignissimos id accusamus recusandae repellat qui sint ducimus quod eos deserunt numquam dolor. Earum saepe dolore corporis.</p>
            </section>

        </>
    );
};

export default Home;
