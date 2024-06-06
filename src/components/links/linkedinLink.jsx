import React from 'react';

function LinkedinLink() {
    const profileURL = `https://www.linkedin.com/in/sandor-szabo-94a16a239/`;

    return (
        <a className="contacts-link eiderwhite" href={profileURL} target="_blank" rel="noopener noreferrer">
            LN
        </a>
    );
}

export default LinkedinLink;