import React from 'react';
import AboutUs from './AboutUs';
import Features from './Features';
import HomeCarousel from './HomeCarousel';
import MiddleImages from './MiddleImages';
import TopBanner from './TopBanner';

const Home = () => {
    return (
        <div>
            <TopBanner />
            <AboutUs />
            <MiddleImages />
            <Features />
            <HomeCarousel />
        </div>
    );
};

export default Home;