import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const Services = () => {
    useEffect( () => {
        window.scrollTo( 0, 0 )
    }, [] )
    return (
        <div>
            <Helmet>
                <title>Services | Alif & Co Chartered Accountant</title>
                <meta name="description" content="Learn about Alif & Co Chartered Accountant's services categorised by Business Accounting Consultancy and Personal Accounting Consultancy." />
                <meta property="og:title" content="Services | Alif & Co Chartered Accountant" />
                <meta property="og:description" content="Explore our reliable accounting services tailored for your personal and business growth." />
                <meta property="og:url" content="https://alifandco.co.uk/" />
                <link rel="canonical" href="https://alifandco.co.uk/" />
            </Helmet>
            <h1>Services</h1>
        </div>
    );
};

export default Services;