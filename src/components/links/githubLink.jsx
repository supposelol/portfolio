import React from 'react';

function GHLink() {
    const profileURL = `https://github.com/supposelol/`;

    return (
        <a className="contacts-link eiderwhite nav-text" href={profileURL} target="_blank" rel="noopener noreferrer">
            GH
        </a>
    );
}

export default GHLink;