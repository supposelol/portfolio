import { useState, useEffect } from "react";

// Custom hook to handle window resize events (for about and start sections)
const useResize = () => {
    const [isMediumOrSmaller, setIsMediumOrSmaller] = useState(window.innerWidth <= 1200);
    const [isMediumOrLarger, setIsMediumOrLarger] = useState(window.innerWidth > 1200);

    useEffect(() => {
        // Update states based on window width
        const handleResize = () => {
            setIsMediumOrSmaller(window.innerWidth <= 1200);
            setIsMediumOrLarger(window.innerWidth > 1200);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return { isMediumOrSmaller, isMediumOrLarger };
};

export default useResize;