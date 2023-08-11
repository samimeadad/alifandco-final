import React from 'react';
import CoreTeamBanner from './CoreTeamBanner';
import CoreTeamMembers from './CoreTeamMembers';
import ScrollToTop from 'react-scroll-to-top';

const CoreTeam = () => {
    return (
        <div>
            <CoreTeamBanner />
            <CoreTeamMembers />
            <ScrollToTop smooth />
        </div>
    );
};

export default CoreTeam;