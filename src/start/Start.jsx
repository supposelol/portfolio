import React from "react";
import "./start.css";
import selfie from "../assets/handsome.jpg";
import useResize from "../components/useResize";

const Start = () => {
    // Get the resize states from the custom hook
    const { isMediumOrSmaller, isMediumOrLarger } = useResize();

    return (
        <>
            <div className="index-container">
                <div className="text-container">
                    <p className="darkpink orbitron minimal-margin">Hello, my name is</p>
                    <h1 className="minimal-margin">Sandor Szabo</h1>
                    <h2 className="eiderwhite minimal-margin">I'm a Full-Stack Developer</h2>
                    <p className="lightgray minimal-margin">
                        Based in Texas, US.
                        I like to craft solid and scalable
                        <span className="darkpink"> Web</span> and
                        <span className="darkpink"> Mobile</span> applications with great user experiences.
                    </p>
                </div>
                {isMediumOrSmaller && (
                    <div className="card">
                        <img src={selfie} alt="Selfie pic" id="selfie"></img>
                    </div>
                )}
            </div>
        </>
    );
};

export default Start;
