import { useState, useEffect } from "react";

const useResize = () => {
    const [isMediumOrSmaller, setIsMediumOrSmaller] = useState(window.innerWidth <= 1200);
    const [isMediumOrLarger, setIsMediumOrLarger] = useState(window.innerWidth > 1200);

    useEffect(() => {
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