import React, { useEffect } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import blogImage from '../../images/blog/blog2.jpg';
import ScrollToTop from 'react-scroll-to-top';

const Blog2 = () => {
    useEffect( () => {
        window.scrollTo( 0, 0 )
    }, [] )

    return (
        <Container className='my-5 fs-5 text-justify' style={ { textAlign: "justify" } }>
            <article>
                <section className='my-5'>
                    <h1>Advisory fuel rates for company cars</h1>
                    <h6 className='text-secondary my-3'>by Admin | Jan 28, 2019 | Tax</h6>
                    <p><Link to="/blog" className='text-warning text-decoration-none'>Don't wanna read? Go Back!!!</Link></p>
                    <h1 className='fs-1 text-warning fw-bold'>___________________________________________________________</h1>
                </section>
                <section>
                    <img src={ blogImage } alt="BannerImage" className='img-fluid w-75 overflow-hidden' />
                </section>
                <section className='my-5 text-justify w-75'>
                    <p className='text-justify my-4'>
                        From 1st December 2018, there have been new company car advisory fuel rates published, stating that the previous rates can be used for up to one month from the date the new rates apply. The rates only apply to employees using the company car, and the advisory fuel rates for the journeys undertaken on or after 1st December 2018.
                    </p>
                    <p className='text-justify my-5'>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Engine Size</th>
                                    <th scope="col">Petrol</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1400cc or less</td>
                                    <td>12p</td>
                                </tr>
                                <tr>
                                    <td>1401cc - 2000cc</td>
                                    <td>15p</td>
                                </tr>
                                <tr>
                                    <td>Over 2000cc</td>
                                    <td>22p</td>
                                </tr>
                            </tbody>
                        </table>
                    </p>
                    <p className='text-justify my-5'>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Engine Size</th>
                                    <th scope="col">LPG</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1600cc or less</td>
                                    <td>8p</td>
                                </tr>
                                <tr>
                                    <td>1601cc - 2000cc</td>
                                    <td>10p</td>
                                </tr>
                                <tr>
                                    <td>Over 2000cc</td>
                                    <td>15p</td>
                                </tr>
                            </tbody>
                        </table>
                    </p>
                    <p className='text-justify my-5'>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Engine Size</th>
                                    <th scope="col">Diesel</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1600cc or less</td>
                                    <td>10p</td>
                                </tr>
                                <tr>
                                    <td>1601cc - 2000cc</td>
                                    <td>12p</td>
                                </tr>
                                <tr>
                                    <td>Over 2000cc</td>
                                    <td>14p</td>
                                </tr>
                            </tbody>
                        </table>
                    </p>
                </section>
            </article>
            <p className="card-text"><Link to="/blog"><Button variant="dark">Go Back</Button></Link></p>
            <ScrollToTop smooth />
        </Container>
    );
};

export default Blog2;