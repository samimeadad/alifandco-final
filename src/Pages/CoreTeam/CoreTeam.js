import React, { useEffect } from 'react';
import CoreTeamBanner from './CoreTeamBanner';
import CoreTeamMembers from './CoreTeamMembers';
import ScrollToTop from 'react-scroll-to-top';

const CoreTeam = () => {
    useEffect( () => {
        window.scrollTo( 0, 0 )
    }, [] )
    return (
        <div className="overflow-hidden w-100">
            <CoreTeamBanner />
            <CoreTeamMembers />
            <ScrollToTop smooth />
        </div>
    );
};

export default CoreTeam;