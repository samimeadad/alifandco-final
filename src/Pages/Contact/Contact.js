import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Address from './Address';
import HeaderText from './HeaderText';
import backgroundImage from '../../images/contact/contact-background.jpg';
import ContactForm from './ContactForm';
import ScrollToTop from 'react-scroll-to-top';
import { Helmet } from 'react-helmet';

const Contact = () => {
    useEffect( () => {
        window.scrollTo( 0, 0 )
    }, [] )
    return (
        <Container className='w-100' style={ { backgroundImage: `url(${ backgroundImage })`, backgroundSize: "cover", overflow: 'hidden' } }>
            <Helmet>
                <title>Contact Us | Alif & Co</title>
                <meta name="description" content="Get in touch with Alif & Co for personalized business consultations." />
                <meta property="og:title" content="Contact | Alif & Co" />
                <meta property="og:description" content="Explore our reliable services tailored for your personal and business growth." />
                <meta property="og:url" content="https://alifandco.co.uk/" />
                <link rel="canonical" href="https://alifandco.co.uk/contact" />
            </Helmet>
            <div className='my-5'>
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
            </div>
            <ScrollToTop smooth />
        </Container>
    );
};

export default Contact;