import React, { useEffect } from 'react';
import AboutUs from './AboutUs';
import Features from './Features';
import HomeCarousel from './HomeCarousel';
import MiddleImages from './MiddleImages';
import TopBanner from './TopBanner';
import ScrollToTop from 'react-scroll-to-top';
import { Helmet } from 'react-helmet';


const Home = () => {
    useEffect( () => {
        window.scrollTo( 0, 0 )
    }, [] )
    return (
        <div>
            <Helmet>
                <title>Home | Alif & Co Chartered Accountant</title>
                <meta name="description" content="Welcome to Alif & Co Chartered Accountant – Your trusted accounting partner for premium accountant consultancy and business accounting services in the UK." />
                <meta property="og:title" content="Home | Alif & Co Chartered Accountant" />
                <meta property="og:description" content="Explore our reliable accounting services tailored for your personal and business growth." />
                <meta property="og:url" content="https://alifandco.co.uk/" />
                <link rel="canonical" href="https://alifandco.co.uk/" />
            </Helmet>
            <TopBanner />
            <AboutUs />
            <MiddleImages />
            <Features />
            <HomeCarousel />
            <ScrollToTop smooth />
        </div>
    );
};

export default Home;