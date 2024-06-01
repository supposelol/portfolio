import React, { useState, useEffect } from "react";
import Header from "./Header/Header";
import KUTE from "kute.js";
import selfie from "./assets/jerry.jpeg";
import kicks from "./assets/kicks.png";
import fit from "./assets/fit1.png";
import fit2 from "./assets/fit2.png";

import "./firstProject/svgButtons.css";
import "./contact/contact.css";

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
                        I took a bit of a winding path to get into coding. Before moving to the US, I owned
                        and operated my own massage salon back in Hungary. While that allowed me to hone
                        skills like entrepreneurship and client services, there was always a burning desire
                        to chase my childhood dream of working with computers and coding.
                    </p>
                    {!isMediumOrSmaller && (
                        <p className="eiderwhite">
                            The mid-2000s were a time when I honed my creative side by designing intros and avatars
                            in browser-based games — a simpler era for online gaming (~_^). It was then that I discovered
                            my deep passion for coding and design. These simple customizations sparked an obsession that never
                            faded, even as I built a career in an entirely different field.
                        </p>
                    )}
                    <p className="eiderwhite">
                        After relocating to America, and after years of self-teaching and preparation,
                        I made the life-changing decision to enroll in an intensive coding bootcamp.
                        There, I expanded my skills in in-demand languages and frameworks.
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
                    <h3 className="projects-title"><span className="darkpink orbitron marginright">2.</span>Some Things I've built</h3>
                </div>
                <div className="first-project">
                    <div className="kicks-img-container">
                        <img src={kicks} alt="Kicks" id="kicks"></img>
                    </div>
                    <div className="kicks-description">
                        <div className="description-heading-container">
                            <p className="orbitron darkpink featured-title">Featured Project</p>
                            <h4 className="description-heading">Sandor Kicks</h4>
                        </div>
                        <div className="description-card">
                            <div className="description-content">
                                <p className="description-para lightgray">
                                    A modern, stylish e-commerce website built with React.
                                    It features an interface where users can easily browse, search and "buy" products.
                                </p>
                            </div>
                        </div>
                        <div className="description-btn-container">
                            <button className="Btn">
                                <span className="svgContainer">
                                    <svg fill="white" viewBox="0 0 496 512" height="1.6em">
                                        <path
                                            d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z">
                                        </path>
                                    </svg>
                                </span>
                                <span className="BG"></span>
                            </button>

                            <button className="Btn">
                                <span className="svgContainer">
                                    <svg viewBox="0 0 24 24" fill="white" height="1.6em">
                                        <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
                                    </svg>
                                </span>
                                <span className="BG"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECOND PROJECT */}

            <section className="hidden projects-section second-project">
                <div className="fit-img-left-container">
                    <img src={fit} alt="Fitness" className="fit-img"></img>
                </div>

                <div className="fit-description">
                    <div className="description-heading-container align-center">
                        <p className="orbitron darkpink featured-title">Featured Project</p>
                        <h4 className="description-heading">Fitness App</h4>
                    </div>
                    <div className="description-card">
                        <div className="description-content">
                            <p className="description-para lightgray align-center">
                                A sleek and minimalist app built with React Native and rapidApi.
                                Allowing the user to browse exercises, save favorites, and track their progress.
                            </p>
                        </div>
                    </div>
                    <div className="description-btn-container align-center">
                        <button className="Btn">
                            <span className="svgContainer">
                                <svg fill="white" viewBox="0 0 496 512" height="1.6em">
                                    <path
                                        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z">
                                    </path>
                                </svg>
                            </span>
                            <span className="BG"></span>
                        </button>
                    </div>
                </div>

                <div className="fit-img-right-container">
                    <img src={fit2} alt="Fitness" className="fit-img"></img>
                </div>
            </section>
            {/* END OF SECOND PROJECT */}

            <section className="hidden">
                <h1>Get In Touch</h1>
                <div class="social-card">
                    <button class="social-btn github">
                        <span class="social-svgContainer">
                            <svg height="1.6em" viewBox="0 0 496 512" fill="white">
                                <path
                                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                                ></path>
                            </svg>
                        </span>
                        <span class="social-BG"></span>
                    </button>

                    <button class="social-btn whatsapp">
                        <span class="social-svgContainer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="1.6em"
                                fill="white"
                                viewBox="0 0 448 512"
                            >
                                <path
                                    d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
                                ></path>
                            </svg>
                        </span>
                        <span class="social-BG"></span>
                    </button>

                    <button class="social-btn linkdin">
                        <span class="social-svgContainer">
                            <svg
                                fill="white"
                                class="svgIcon"
                                xmlns="http://www.w3.org/2000/svg"
                                height="1.6em"
                                viewBox="0 0 448 512"
                            >
                                <path
                                    d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"
                                ></path>
                            </svg>
                        </span>
                        <span class="social-BG"></span>
                    </button>

                    <button class="social-btn discord">
                        <span class="social-svgContainer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="1.4em"
                                fill="white"
                                viewBox="0 0 640 512"
                            >
                                <path
                                    d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z"
                                ></path>
                            </svg>
                        </span>
                        <span class="social-BG"></span>
                    </button>
                </div>

            </section>

        </>
    );
};

export default Home;