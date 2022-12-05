import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import carousel1 from '../../images/home/image-slider/carousel1.jpg';
import carousel2 from '../../images/home/image-slider/carousel2.jpg';
import carousel3 from '../../images/home/image-slider/carousel3.jpg';
import carousel4 from '../../images/home/image-slider/carousel4.jpg';
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
                    src={ carousel1 }
                    alt="First slide"
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block img-fluid"
                    src={ carousel2 }
                    alt="Second slide"
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block img-fluid"
                    src={ carousel3 }
                    alt="Third slide"
                />
                <Carousel.Caption className='text-dark'>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block img-fluid"
                    src={ carousel4 }
                    alt="Fourth slide"
                />
                <Carousel.Caption className='text-dark'>
                </Carousel.Caption>
            </Carousel.Item>
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