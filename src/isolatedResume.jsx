import React, { useRef, useEffect } from 'react';
import resume from "./assets/resume.pdf"

const IsolatedResume = () => {
    const iframeRef = useRef(null);

    useEffect(() => {
        const iframe = iframeRef.current;
        const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

        const styles = `
            body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                background-color: #f4f4f4;
                margin: 0;
                padding: 20px;
            }

            a {
                text-decoration: none;
                color: inherit;
            }

            .resume {
                max-width: 1200px;
                margin: auto;
                background: white;
                padding: 40px;
                border-radius: 5px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }

            .resume-header {
                display: flex;
                margin-bottom: 20px;
            }

            .left-column {
                width: 70%;
                padding-right: 20px;
            }

            .left-column p:not(:first-of-type) {
                margin-left: 18px;
            }

            .header-motto {
                margin-bottom: 20px;
                margin-left: 4px;
                color: #555;
            }

            header h1 {
                font-size: 64px;
                color: #2F42C4;
                margin-bottom: 0px;
            }

            header p {
                margin: 0;
            }

            .right-column {
                width: 30%;
                padding-left: 20px;
                display: flex;
                justify-content: flex-start;
                flex-direction: column;
            }

            .right-column img {
                margin-top: 56px;
                align-self: center;
                max-width: 60%;
                border: 1px solid #ddd;
                border-radius: 5px;
                box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
            }

            .imgcontainer {
                align-self: center;
                margin-top: 50px;
            }

            .header-text-container {
                align-self: flex-start;
            }

            .main {
                display: flex;
            }

            section h2 {
                font-size: 24px;
                color: #2F42C4;
                border-bottom: 2px solid #2F42C4;
                width: 90%;
                padding-bottom: 5px;
                margin-bottom: 10px;
            }

            .job,
            .project,
            .school {
                margin-bottom: 10px;
            }

            .job h3,
            .project h3,
            .school h3 {
                font-size: 18px;
                margin: 0;
            }

            h4 {
                font-size: 16px;
                margin: 5px 0;
                color: #555;
            }

            .job p,
            .project ul,
            .school p {
                margin: 5px 0;
            }

            ul {
                list-style-type: disc;
                padding-left: 20px;
            }

            ul li {
                margin-bottom: 5px;
            }

            .left-column li {
                width: 90%;
            }

            .skill-title {
                margin: 0;
                font-weight: bold;
            }

            .skill-list {
                margin: 0;
                margin-bottom: 10px;
            }

            .Btn-container {
                display: flex;
                margin-top: auto;
                margin-right: 40px;
                justify-content: flex-end;
            }

            .Btn {
                width: 50px;
                height: 50px;
                border: none;
                border-radius: 50%;
                background-color: #f4f4f4;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                position: relative;
                transition-duration: .3s;
            }

            .svgIcon {
                fill: #2F42C4;
            }

            .icon2 {
                width: 18px;
                height: 5px;
                border-bottom: 2px solid #2F42C4;
                border-left: 2px solid #2F42C4;
                border-right: 2px solid #2F42C4;
            }

            .tooltip {
                position: absolute;
                right: -105px;
                opacity: 0;
                background-color: rgb(12, 12, 12);
                color: white;
                padding: 5px 10px;
                border-radius: 5px;
                display: flex;
                align-items: center;
                justify-content: center;
                transition-duration: .2s;
                pointer-events: none;
                letter-spacing: 0.5px;
            }

            .tooltip::before {
                position: absolute;
                content: "";
                width: 10px;
                height: 10px;
                background-color: rgb(12, 12, 12);
                background-size: 1000%;
                background-position: center;
                transform: rotate(45deg);
                left: -5%;
                transition-duration: .3s;
            }

            .Btn:hover .tooltip {
                opacity: 1;
                transition-duration: .3s;
            }

            .Btn:hover {
                background-color: #2F42C4;
                transition-duration: .3s;
            }

            .Btn:hover .icon2 {
                border-bottom: 2px solid rgb(235, 235, 235);
                border-left: 2px solid rgb(235, 235, 235);
                border-right: 2px solid rgb(235, 235, 235);
            }

            .Btn:hover .svgIcon {
                fill: rgb(255, 255, 255);
                animation: slide-in-top 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
            }

            @keyframes slide-in-top {
                0% {
                    transform: translateY(-10px);
                    opacity: 0;
                }

                100% {
                    transform: translateY(0px);
                    opacity: 1;
                }
            }
        `;

        const content = `
            <html>
            <head>
                <style>${styles}</style>
            </head>
            <body>
                <div class="resume">
                    <header class="resume-header">
                        <div class="left-column header-text-container">
                            <h1>Sandor Szabo</h1>
                            <p class='header-motto'>Full stack developer focused on crafting modern digital experiences</p>
                        </div>
                        <div class="right-column imgcontainer">
                            <p><a href="mailto:szabo.shani@gmail.com">szabo.shani@gmail.com</a></p>
                            <p><a href="https://sandor-szabo.com" target="_blank" rel="noopener noreferrer">sandor-szabo.com</a></p>
                            <p><a href="https://github.com/supposelol" target="_blank" rel="noopener noreferrer">github.com/supposelol</a></p>
                            <p><a href="https://linkedin.com/in/sandor-szabo1" target="_blank" rel="noopener noreferrer">linkedin.com/in/sandor-szabo1</a></p>
                        </div>
                    </header>
                    <div class="main">
                        <div class="left-column">
                            <section class="projects">
                                <h2>Selected Projects</h2>
                                <div class="project">
                                    <h3><a href="https://sandorkicks.netlify.app/" target="_blank" rel="noopener noreferrer">Sandor Kicks</a></h3>
                                    <ul>
                                        <li>Developed an e-commerce shoe shop using React.</li>
                                        <li>Implemented features including product listings with filtering, search and guides,
                                        a shopping cart system with checkout, and responsive design for different devices.</li>
                                    </ul>
                                </div>
                                <div class="project">
                                    <h3><a href="https://github.com/supposelol/fitness-app" target="_blank" rel="noopener noreferrer">Fitness App</a></h3>
                                    <ul>
                                        <li>Built a cross-platform mobile application using React Native.</li>
                                        <li>Integrated a third-party API to fetch exercise data.</li>
                                        <li>Used Redux for state management.</li>
                                        <li>Key features include a rich exercise browser,
                                        favorites system, and progress tracking.</li>
                                    </ul>
                                </div>
                                <div class="project">
                                    <h3><a href="https://github.com/supposelol/nucampsiteserver" target="_blank" rel="noopener noreferrer">Backend and DevOps</a></h3>
                                    <ul>
                                        <li>Developed REST APIs using Node.js and Express, integrating MongoDB
                                        with Mongoose ODM for data modeling.</li>
                                        <li>Deployed containerized Django applications using Docker on AWS EC2,
                                        GCP Cloud Run with Cloud SQL, and Azure Kubernetes Service with a SQL database.</li>
                                    </ul>
                                </div>
                            </section>
                            <section class="experience">
                                <h2>Work History</h2>
                                <div class="job">
                                    <h3>Night Auditor</h3>
                                    <h4>Staybridge Suites, Lubbock, Texas</h4>
                                    <p>2021 – Present</p>
                                    <ul>
                                        <li>Conduct nightly audits and prepare daily financial reports.</li>
                                        <li>Manage front desk operations and provide customer service.</li>
                                        <li>Set up reservations to prevent scheduling and inventory conflicts.</li>
                                    </ul>
                                </div>
                                <div class="job">
                                    <h3>Massage Therapist & Owner</h3>
                                    <h4>Sandor Massage Studio, Solt, Hungary</h4>
                                    <p>2018 – 2021</p>
                                    <ul>
                                        <li>Operated and managed a successful massage salon.</li>
                                        <li>Provided therapeutic massages and customized treatment plans.</li>
                                        <li>Handled business operations, including scheduling, inventory, and client relations.</li>
                                    </ul>
                                </div>
                            </section>
                        </div>
                        <div class="right-column">
                            <section class="skills">
                                <h2>Skills</h2>
                                <div class='skillsdiv'>
                                    <p class='skill-title'>Languages</p><p class='skill-list'> JavaScript, Python, SQL</p>
                                    <p class='skill-title'>Frontend</p><p class='skill-list'> React, React Native, Redux, Bootstrap</p>
                                    <p class='skill-title'>Backend</p><p class='skill-list'> Node.js, Express.js</p>
                                    <p class='skill-title'>Database</p><p class='skill-list'> MongoDB, PostgreSQL</p>
                                    <p class='skill-title'>DevOps</p><p class='skill-list'> Docker, Git, Kubernetes, Cloud Computing</p>
                                </div>
                            </section>
                            <section class="education">
                                <h2>Education</h2>
                                <div class="school">
                                    <h3>Nucamp</h3>
                                    <h4>Honor Graduate</h4>
                                    <p>Full Stack Web and Mobile Development</p>
                                    <p>Backend, SQL, and DevOps with Python</p>
                                </div>
                            </section>
                            <div class="Btn-container">
                                <button class="Btn">
                                    <svg class="svgIcon" viewBox="0 0 384 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path></svg>
                                    <span class="icon2"></span>
                                    <span class="tooltip">Download</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <script>
                    document.addEventListener('DOMContentLoaded', () => {
                        const downloadButton = document.querySelector('.Btn');
                        downloadButton.addEventListener('click', () => {
                            const link = document.createElement('a');
                            link.href = '${resume}';
                            link.download = 'resume.pdf';
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                        });
                    });
                </script>
            </body>
            </html>
        `;

        iframeDoc.open();
        iframeDoc.write(content);
        iframeDoc.close();
    }, []);

    return <iframe ref={iframeRef} style={{ width: '100%', height: '100vh', border: 'none' }} title="Isolated Resume" />;
};

export default IsolatedResume;
