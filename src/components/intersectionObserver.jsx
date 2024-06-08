import { useState, useEffect, useRef } from "react";

const useOnScreen = (options, delay = 0) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setTimeout(() => setIsVisible(true), delay);
            } else {
                setIsVisible(false);
            }
        }, options);

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref, options, delay]);

    return [ref, isVisible];
};

export default useOnScreen;