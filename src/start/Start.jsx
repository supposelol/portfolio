import React, { useRef, useEffect, useState } from "react";
import "./start.css";
import selfie from "../assets/handsome.jpg";
import useResize from "../components/useResize";

const Start = () => {
    const { isMediumOrSmaller } = useResize();
    const squaresRef = useRef(null);
    const [squares, setSquares] = useState([]);

    useEffect(() => {
        const createSquares = () => {
            const container = squaresRef.current;
            if (!container) return;

            const containerRect = container.getBoundingClientRect();
            const squareSize = 30;
            const gap = 18;

            const cols = Math.floor(containerRect.width / (squareSize + gap));
            const rows = Math.floor(containerRect.height / (squareSize + gap));

            const newSquares = [];
            for (let i = 0; i < rows; i++) {
                for (let j = 0; j < cols; j++) {
                    const opacity = j / (cols - 1);
                    newSquares.push({
                        id: `square-${i}-${j}`,
                        style: {
                            opacity: opacity,
                        }
                    });
                }
            }
            setSquares(newSquares);
        };

        createSquares();
        window.addEventListener('resize', createSquares);

        return () => {
            window.removeEventListener('resize', createSquares);
        };
    }, []);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const container = squaresRef.current;
            if (!container) return;

            const containerRect = container.getBoundingClientRect();
            const squareElements = container.querySelectorAll('.square');

            squareElements.forEach((square) => {
                const rect = square.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2 - containerRect.left;
                const centerY = rect.top + rect.height / 2 - containerRect.top;
                const angleRad = Math.atan2(e.clientY - containerRect.top - centerY, e.clientX - containerRect.left - centerX);
                const angleDeg = (angleRad * 180) / Math.PI;
                square.style.transform = `rotate(${angleDeg}deg)`;
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [squares]);

    return (
        <div className="start-section">
            <div className="index-container">
                <div className="text-container">
                    <p className="darkpink orbitron minimal-margin">Hello, my name is</p>
                    <h1 className="minimal-margin nowrap">Sandor Szabo</h1>
                    <h2 className="eiderwhite minimal-margin nowrap">I'm a Full-Stack Developer</h2>
                    <p className="lightgray minimal-margin">
                        Based in Texas, US.
                        I like to craft solid and scalable
                        <span className="darkpink"> Web</span> and
                        <span className="darkpink"> Mobile</span> applications with clean visual experiences.
                    </p>
                </div>
                <div className="squares-container" ref={squaresRef}>
                    {squares.map((square) => (
                        <div key={square.id} className="square" style={square.style}></div>
                    ))}
                </div>
                {isMediumOrSmaller && (
                    <div className="card card-start">
                        <img src={selfie} alt="Selfie pic" id="selfie"></img>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Start;