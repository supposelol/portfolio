import React from 'react';

function LinkedinLink() {
    const profileURL = `https://www.linkedin.com/in/sandor-szabo1/`;

    return (
        <a className="contacts-link eiderwhite nav-text" href={profileURL} target="_blank" rel="noopener noreferrer">
            LN
        </a>
    );
}

export default LinkedinLink;