import "./start.css";
import selfie from "../assets/jerry.jpeg"

const Start = () => {
    return (
        <>
            <div className="index-container">
                <div className="text-container">
                    <p className="darkpink orbitron minimal-margin">Hello, my name is</p>
                    <h1 className="minimal-margin">Sandor Szabo</h1>
                    <h2 className="eiderwhite minimal-margin">I'm a Full-Stack Developer</h2>
                    <p className="lightgray minimal-margin">
                        I like to craft solid and scalable
                        <span className="darkpink"> Web</span> and
                        <span className="darkpink"> Mobile</span> applications with great user experiences.
                        I have a knack for finding solutions and turning ideas into reality.
                    </p>
                </div>
                <div className="card">
                    <img src={selfie} alt="Selfie pic" id="selfie"></img>
                </div>
            </div>
        </>
    );
};

export default Start