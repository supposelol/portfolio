import React from 'react';
import styled from 'styled-components';

// CSS-in-JS for the little navigation bar
const StyledNavigation = styled.nav`
  z-index: 1;
  display: flex;
  position: fixed;
  color: #4169E1;
  right: ${({ theme }) => theme.header?.padding || '2em'};
  bottom: 20vh;
  padding: 1em;

  & > ul {
    width: auto; /* Let the width be determined by its content */
    display: flex !important;
    flex-direction: column !important;
    grid-template-columns: unset !important;
    gap: 0.65em !important;
    padding: 0 !important;
    margin: 0 !important;
    list-style: none !important;
  }

  & > ul > li {
    width: 1.3em; 
    height: 1.3em; 
    position: static !important;
    padding: 0 !important; /* Remove all padding */
    display: flex !important; /* Use flex to center the button */
    justify-content: center !important;
    align-items: center !important;

    &::before {
      display: none !important;
      content: none !important;
    }
  }

  & > ul > li > button {
    width: 0.5em; 
    height: 0.5em; 
    display: block; 
    cursor: pointer;
    position: relative;
    color: currentColor;
    transition: transform 0.2s;
    outline-color: transparent;
    background-color: transparent;
    -webkit-tap-highlight-color: transparent;
    border: none;
    padding: 0; /* No padding needed */

    &:focus {
      outline: none;
      transform: scale(1.1); 
    }

    &::before {
      display: none !important;
      content: none !important;
    }

    &::after {
      content: '';
      width: 100% !important;
      height: 100% !important; 
      position: absolute;
      top: 50% !important;
      left: 50% !important;
      transform: translate(-50%, -50%) rotate(45deg) !important;
      background-color: currentColor !important;
      border: 1px solid currentColor !important;
      transition: transform 0.2s, background-color 0.2s;
    }

    &:hover::after {
      background-color: #304a99 !important;
      transform: translate(-50%, -50%) rotate(45deg) scale(1.1) !important; 
    }

    &.current {
      &::after {
        transform: translate(-50%, -50%) rotate(0) scale(1.5) !important;
        background: transparent !important;
        border: 1.5px solid currentColor !important;
        width: 0.65em !important;
        height: 0.65em !important;
      }
    }
  }
    
  @media (min-width: 1441px) {
    right: ${({ theme }) => theme.header?.padding ? `calc(${theme.header.padding} * 1.25)` : '2.5em'};
    bottom: 25vh;
    padding: 1.25em;

    & > ul {
      gap: 0.8125em !important;
    }

    & > ul > li {
      width: 1.625em;
      height: 1.625em;
    }

    & > ul > li > button {
      width: 0.625em;
      height: 0.625em;

      &:focus {
        transform: scale(1.125);
      }

      &:hover::after {
        transform: translate(-50%, -50%) rotate(45deg) scale(1.125) !important;
      }

      &.current {
        &::after {
          width: 0.8125em !important;
          height: 0.8125em !important;
          border-width: 1.875px !important;
        }
      }
    }
  }

  @media (max-height: 600px) {
    bottom: 10vh;
    padding: 0.5em;
    & > ul {
      gap: 0.5em !important;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

// Bullet component for navigation buttons
const Bullet = ({ name, ordinal, currentSection, goToSection }) => {
  const handleClick = () => {
    goToSection(name);
  };

  return (
    <li>
      <button
        type="button"
        onClick={handleClick}
        className={currentSection === name ? 'current' : ''}
        aria-label={`Go to ${ordinal} section. ${name}.`}
      />
    </li>
  );
};

const Navigation = ({ currentSection, goToSection }) => {
  const sections = [
    { id: 'section1', name: 'Index', ordinal: 'first' },
    { id: 'section2', name: 'About', ordinal: 'second' },
    { id: 'section3', name: 'First Project', ordinal: 'third' },
    { id: 'section4', name: 'Second Project', ordinal: 'fourth' },
    { id: 'section5', name: 'Contact', ordinal: 'fifth' },
  ];

  return (
    <StyledNavigation aria-label="Main navigation.">
      <ul>
        {sections.map(({ id, name, ordinal }) => (
          <Bullet
            key={id}
            name={id}
            ordinal={ordinal}
            currentSection={currentSection}
            goToSection={goToSection}
          />
        ))}
      </ul>
    </StyledNavigation>
  );
};

export default Navigation;