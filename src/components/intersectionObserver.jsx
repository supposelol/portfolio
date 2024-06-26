import { useState, useEffect, useRef } from "react";

// Custom hook to detect if an element is on screen
const useOnScreen = (options, delay = 0) => {
    const [isVisible, setIsVisible] = useState(false);
    // Ref to attach to the element we want to observe
    const ref = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setTimeout(() => setIsVisible(true), delay);
            } else {
                setIsVisible(false);
            }
        }, options);

        // Start observing the element
        if (ref.current) {
            observer.observe(ref.current);
        }

        // Cleanup observer on component unmount
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref, options, delay]);

    // Return the ref and visibility state
    return [ref, isVisible];
};

export default useOnScreen;