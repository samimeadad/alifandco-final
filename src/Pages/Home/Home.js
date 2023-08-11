import React from 'react';
import AboutUs from './AboutUs';
import Features from './Features';
import HomeCarousel from './HomeCarousel';
import MiddleImages from './MiddleImages';
import TopBanner from './TopBanner';
import ScrollToTop from 'react-scroll-to-top';


const Home = () => {
    return (
        <div>
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