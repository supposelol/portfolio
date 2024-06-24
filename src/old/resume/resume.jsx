import React from 'react';
import resume from "../../assets/resume.pdf";
import styles from './resume.module.css'; // Import CSS module

const Resume = () => {
    const downloadResume = () => {
        const link = document.createElement('a');
        link.href = resume;
        link.download = 'resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className={styles.resume} id="resume">
            <header className={styles.resumeHeader}>
                <div className={`${styles.leftColumn} ${styles.headerTextContainer}`}>
                    <h1>Sandor Szabo</h1>
                    <p className={styles.headerMotto}>Full stack developer focused on crafting modern digital experiences</p>
                </div>
                <div className={`${styles.rightColumn} ${styles.imgContainer}`}>
                    <p><a href="mailto:szabo.shani@gmail.com">szabo.shani@gmail.com</a></p>
                    <p><a href="https://sandorszabo.com" target="_blank" rel="noopener noreferrer">sandorszabo.com</a></p>
                    <p><a href="https://github.com/supposelol" target="_blank" rel="noopener noreferrer">github.com/supposelol</a></p>
                    <p><a href="https://linkedin.com/in/sandor-szabo1" target="_blank" rel="noopener noreferrer">linkedin.com/in/sandor-szabo1</a></p>
                </div>
            </header>
            <div className={styles.main}>
                <div className={styles.leftColumn}>
                    <section className={styles.projects}>
                        <h2>Selected Projects</h2>
                        <div className={styles.project}>
                            <h3><a href="https://github.com/supposelol/sandorkicks" target="_blank" rel="noopener noreferrer">Sandor Kicks</a></h3>
                            <ul>
                                <li>Developed an e-commerce shoe shop using React.</li>
                                <li>Implemented features including product listings with filtering, search and guides,
                                    a shopping cart system with checkout, and a responsive design for different devices.</li>
                                <li>Deployed blabla add this later.</li>
                            </ul>
                        </div>
                        <div className={styles.project}>
                            <h3><a href="https://github.com/supposelol/fitness-app" target="_blank" rel="noopener noreferrer">Fitness App</a></h3>
                            <ul>
                                <li>Built a cross-platform mobile application using React Native.</li>
                                <li>Integrated a third-party API to fetch exercise data.</li>
                                <li>Used Redux for state management.</li>
                                <li>Key features include a rich exercise browser,
                                    favorites system, and progress tracking.</li>
                            </ul>
                        </div>
                        <div className={styles.project}>
                            <h3><a href="https://github.com/supposelol/nucampsiteserver" target="_blank" rel="noopener noreferrer">Backend and DevOps</a></h3>
                            <ul>
                                <li>Developed REST APIs using Node.js and Express, integrating MongoDB
                                    with Mongoose ODM for data modeling.</li>
                                <li>Deployed containerized Django applications using Docker on AWS EC2,
                                    GCP Cloud Run with Cloud SQL, and Azure Kubernetes Service with a SQL database.</li>
                            </ul>
                        </div>
                    </section>
                    <section className={styles.experience}>
                        <h2>Work History</h2>
                        <div className={styles.job}>
                            <h3>Night Auditor</h3>
                            <h4>Staybridge Suites, Lubbock, Texas</h4>
                            <p>2021 – Present</p>
                            <ul>
                                <li>Conduct nightly audits and prepare daily financial reports.</li>
                                <li>Manage front desk operations and provide customer service.</li>
                                <li>Set up reservations to prevent scheduling and inventory conflicts.</li>
                            </ul>
                        </div>
                        <div className={styles.job}>
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
                <div className={styles.rightColumn}>
                    <section className={styles.skills}>
                        <h2>Skills</h2>
                        <div className={styles.skillsDiv}>
                            <p className={styles.skillTitle}>Languages</p><p className={styles.skillList}> JavaScript, Python, SQL</p>
                            <p className={styles.skillTitle}>Frontend</p><p className={styles.skillList}> React, React Native, Redux, Bootstrap</p>
                            <p className={styles.skillTitle}>Backend</p><p className={styles.skillList}> Node.js, Express.js</p>
                            <p className={styles.skillTitle}>Database</p><p className={styles.skillList}> MongoDB, PostgreSQL</p>
                            <p className={styles.skillTitle}>DevOps</p><p className={styles.skillList}> Docker, Git, Kubernetes</p>
                        </div>
                    </section>
                    <section className={styles.education}>
                        <h2>Education</h2>
                        <div className={styles.school}>
                            <h3>Nucamp</h3>
                            <p>Full Stack Web and Mobile Development</p>
                            <p>Backend, SQL, and DevOps with Python</p>
                        </div>
                    </section>
                    <div className={styles.btnContainer}>
                        <button
                            onClick={downloadResume}
                            className={styles.btn}>
                            <svg className={styles.svgIcon} viewBox="0 0 384 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path></svg>
                            <span className={styles.icon2}></span>
                            <span className={styles.tooltip}>Download</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;
