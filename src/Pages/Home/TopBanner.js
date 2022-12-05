import React from 'react';
import bannerImage from '../../images/home/banner-image/banner-image.jpg';

const TopBanner = () => {
    return (
        <div className='text-center'>
            <img src={ bannerImage } alt="BannerImage" className='img-fluid' />
        </div>
    );
};

export default TopBanner;