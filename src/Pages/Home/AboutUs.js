import React from 'react';
import { Container } from 'react-bootstrap';

const AboutUs = () => {
    return (
        <Container className='text-center my-5'>
            <section className='my-5 text-center'>
                <div className='my-5 text-center'>
                    <h1>About Us</h1>
                    <h1 className='text-warning fw-bold'>______________________________</h1>
                </div>
                <div className='my-5 text-start w-75 m-auto'>
                    <p>
                        Alif & Co was first founded in July 2012 in the heart of Birmingham and now operating from both Birmingham and London. We are an experienced and professional firm of chartered accountants offering accounts, taxation, investigation and business advisory and support services to a wide range of businesses and individuals across the UK.
                    </p>
                    <p>
                        With over 12 years of experience, our team is fully committed to deliver you the highest level of professional service in order to meet your business and personal objectives, whilst reducing your tax liability and maximising your wealth.
                    </p>
                    <p>
                        Our firms are registered to carry on accountancy work in the UK by ICAEW and ACCA.
                    </p>
                </div>
            </section>
        </Container>
    );
};

export default AboutUs;