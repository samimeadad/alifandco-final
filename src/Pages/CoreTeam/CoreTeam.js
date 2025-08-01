import React, { useEffect } from 'react';
import CoreTeamBanner from './CoreTeamBanner';
import CoreTeamMembers from './CoreTeamMembers';
import ScrollToTop from 'react-scroll-to-top';
import { Helmet } from 'react-helmet';

const CoreTeam = () => {
    useEffect( () => {
        window.scrollTo( 0, 0 )
    }, [] )
    return (
        <div className="overflow-hidden w-100">
            <Helmet>
                <title>Core Team | Alif & Co Chartered Accountant</title>
                <meta name="description" content="Learn about Alif & Co Chartered Accountant's core accounting team members with enormous experience in accounting consultancy" />
                <meta property="og:title" content="Core Team | Alif & Co Chartered Accountant" />
                <meta property="og:description" content="EExplore our reliable accounting services tailored for your personal and business growth." />
                <meta property="og:url" content="https://alifandco.co.uk/core-team" />
                <link rel="canonical" href="https://alifandco.co.uk/core-team" />
            </Helmet>
            <CoreTeamBanner />
            <CoreTeamMembers />
            <ScrollToTop smooth />
        </div>
    );
};

export default CoreTeam;