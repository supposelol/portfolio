import React from 'react';

function DiscordLink() {
    const profileURL = `https://discord.com/users/xanyi/8739`;

    return (
        <a className="contacts-link eiderwhite" href={profileURL} target="_blank" rel="noopener noreferrer">
            DC
        </a>
    );
}

export default DiscordLink;