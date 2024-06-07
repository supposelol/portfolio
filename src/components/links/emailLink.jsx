import React from 'react';

function EmailLink({ email, children }) {
    const mailtoUrl = `mailto:${email}`;

    return (
        <a className="contacts-link eiderwhite nav-text"
            href={mailtoUrl}
            target="_blank"
            rel="noopener noreferrer">
            {children || 'Send Email'}
        </a>
    );
}

export default EmailLink;