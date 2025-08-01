import React from 'react';
import { Container } from 'react-bootstrap';
import background from '../../images/career/career-background.jpg';
import ScrollToTop from 'react-scroll-to-top';
import { Helmet } from 'react-helmet';

const Career = () => {
    return (
        <Container className='w-100 overflow-hidden p-5' style={ { backgroundImage: `url(${ background })`, backgroundSize: "cover", overflow: 'hidden' } }>
            <Helmet>
                <title>Career | Alif & Co Chartered Accountant</title>
                <meta name="description" content="Start a new career with Alif & Co Chartered Accountant to gather real-life experience on personal and business accounting." />
                <meta property="og:title" content="Career | Alif & Co Chartered Accountant" />
                <meta property="og:description" content="Explore our reliable accounting services tailored for your personal and business growth." />
                <meta property="og:url" content="https://alifandco.co.uk/career" />
                <link rel="canonical" href="https://alifandco.co.uk/career" />
            </Helmet>
            <div className='my-5 fs-5 text-justify' style={ { textAlign: "justify" } }>
                <section className='my-5 text-center'>
                    <h1>Careers</h1>
                    <h1 className='fs-1 text-warning fw-bold text-center'>_________________________________</h1>
                </section>
                <section className='my-5 text-justify'>
                    <p className='text-justify my-4'>
                        We are an accounting firm registered by both The Institute of Chartered Accountants in England & Wales and The Association of Chartered Certified Accountants.
                    </p>
                    <h5 className='my-3'>Our firm’s greatest motto is:</h5>
                    <q className='text-warning fs-2 text-justify my-4'>
                        Start by doing what is necessary, then what is possible, and suddenly you are doing the impossible.
                    </q>
                    <p className='text-justify my-4'>
                        Employee engagement is our main objective to ensure the workplace in the right conditions for all members to give their best each day, committed to our organisation’s goals and values, motivated to contribute to organisational success, with an enhanced sense of their own well-beings. We empower our employees and make them ready to achieve their personal goals. We constantly working with qualified professionals and multi-diversified organisations so that our employees can develop their skills, enhance their knowledge. You will be part of a dedicated, enthusiastic and qualified team of professionals, united in their drive to provide an exceptional range of expertise.
                    </p>
                    <p className='text-justify my-4'>
                        At Alif & Co Chartered Accountant, we don’t just accept difference — we embrace it, we support it, and we thrive on it for the benefit of our employees, our services, and our communities. Alif & Co Chartered Accountant is committed to the principle of equal employment opportunity for all employees and to providing employees with a work environment free of discrimination and harassment. All employment decisions at Alif & Co Chartered Accountant are based on business needs, job requirements and individual qualifications, without regard to race, colour, religion or belief, family or parental status, or any other status protected by the laws or regulations in the United Kingdom. Alif & Co Chartered Accountant will not tolerate discrimination or harassment based on any of these characteristics above.
                    </p>
                    <p className='text-justify my-4'>
                        We seek professionals who see things differently, who find opportunity where others don’t, who look within themselves and ask every day for extra miles.
                    </p>
                    <p className='text-justify my-4'>
                        If you think you are one them, please send your CV <span><a href="mailto:info@alifandco.co.uk" className='text-warning text-decoration-none'>here</a></span>. We will contact you when a suitable vacancy is available.
                    </p>
                </section>
            </div>
            <ScrollToTop smooth />
        </Container>
    );
};

export default Career;