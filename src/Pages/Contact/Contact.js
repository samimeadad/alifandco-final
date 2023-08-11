import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Address from './Address';
import HeaderText from './HeaderText';
import backgroundImage from '../../images/contact/contact-background.jpg';
import ContactForm from './ContactForm';
import ScrollToTop from 'react-scroll-to-top';

const Contact = () => {
    useEffect( () => {
        window.scrollTo( 0, 0 )
    }, [] )
    return (
        <div className='w-100' style={ { backgroundImage: `url(${ backgroundImage })`, backgroundSize: "cover", overflow: 'hidden' } }>
            <Container className='my-5'>
                <HeaderText />
                <div className='my-5'>
                    <Row className='g-5'>
                        <Col xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 }>
                            <ContactForm />
                        </Col>
                        <Col xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 }>
                            <Address />
                        </Col>
                    </Row>
                </div>
            </Container>
            <ScrollToTop smooth />
        </div>
    );
};

export default Contact;