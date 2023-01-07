import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import carousel5 from '../../images/home/image-slider/carousel5.jpg';

const HomeCarousel = () => {
    const [ index, setIndex ] = useState( 0 );

    const handleSelect = ( selectedIndex, e ) => {
        setIndex( selectedIndex );
    };

    return (
        <Carousel activeIndex={ index } onSelect={ handleSelect } className="text-center overflow-hidden">
            <Carousel.Item>
                <img
                    className="d-block img-fluid"
                    src={ carousel5 }
                    alt="Fifth slide"
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default HomeCarousel;