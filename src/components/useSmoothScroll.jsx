import { useEffect, useState } from 'react';
import { debounce } from 'lodash';

const useSmoothScroll = () => {
    const [currentSection, setCurrentSection] = useState('section1');
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

    const smoothScroll = (targetY, duration = 600) => {
        const startY = window.pageYOffset;
        const distance = targetY - startY;
        const startTime = performance.now();

        const easeInOutQuint = t => t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t;

        const step = (currentTime) => {
            const time = currentTime - startTime;
            const percent = Math.min(time / duration, 1);
            const easing = easeInOutQuint(percent);

            window.scrollTo(0, startY + distance * easing);

            if (time < duration) {
                window.requestAnimationFrame(step);
            } else {
                const sections = ['section1', 'section2', 'section3', 'section4', 'section5'];
                const newSection = sections.find(id => {
                    const section = document.getElementById(id);
                    return section && section.offsetTop === targetY;
                });
                if (newSection) {
                    setCurrentSection(newSection);
                    document.getElementById(newSection).focus();
                }
            }
        };

        window.requestAnimationFrame(step);
    };

    const goToSection = (sectionId, smooth = true) => {
        const section = document.getElementById(sectionId);
        if (!section) return;

        if (smooth) {
            smoothScroll(section.offsetTop);
        } else {
            window.scrollTo(0, section.offsetTop);
            setCurrentSection(sectionId);
            section.focus();
        }
    };

    const goToNextSection = () => {
        const sections = ['section1', 'section2', 'section3', 'section4', 'section5'];
        const currentIndex = sections.indexOf(currentSection);
        if (currentIndex < sections.length - 1) {
            goToSection(sections[currentIndex + 1]);
        }
    };

    const goToPrevSection = () => {
        const sections = ['section1', 'section2', 'section3', 'section4', 'section5'];
        const currentIndex = sections.indexOf(currentSection);
        if (currentIndex > 0) {
            goToSection(sections[currentIndex - 1]);
        }
    };

    useEffect(() => {
        const handleResize = () => setIsSmallScreen(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['section1', 'section2', 'section3', 'section4', 'section5'];
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i]);
                if (section && section.offsetTop <= scrollPosition) {
                    setCurrentSection(sections[i]);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleWheel = debounce((e) => {
            e.preventDefault();
            if (e.deltaY > 0) {
                goToNextSection();
            } else {
                goToPrevSection();
            }
        }, 200, { leading: true, trailing: false });

        const handleKeyDown = (e) => {
            switch (e.key) {
                case 'ArrowDown':
                    e.preventDefault();
                    goToNextSection();
                    break;
                case 'ArrowUp':
                    e.preventDefault();
                    goToPrevSection();
                    break;
                default:
                    break;
            }
        };

        if (!isSmallScreen) {
            document.addEventListener('wheel', handleWheel, { passive: false });
            document.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            document.removeEventListener('wheel', handleWheel);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [currentSection, isSmallScreen]);

    return { currentSection, goToSection };
};

export default useSmoothScroll;