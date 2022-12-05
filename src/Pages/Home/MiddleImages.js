import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import middleImage1 from '../../images/home/MiddleImages/ACCA.svg';
import middleImage2 from '../../images/home/MiddleImages/ICAEW_CharteredAccountants_BLK_PMS.svg';

const MiddleImages = () => {
    return (
        <Container className='my-5 text-center'>
            <Row className='g-5 my-5'>
                <Col xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 }>
                    <img src={ middleImage2 } alt="icaew" className='img-fluid w-75' />
                </Col>
                <Col xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 }>
                    <img src={ middleImage1 } alt="acca" className='img-fluid w-75' />
                </Col>
            </Row>
        </Container>
    );
};

export default MiddleImages;