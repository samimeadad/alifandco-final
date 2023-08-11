import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import memberImage from '../../images/core-team/members/ammenul.png';
import ScrollToTop from 'react-scroll-to-top';

const Member6 = () => {
    return (
        <Container className='my-5'>
            <Card className="card p-5">
                <Row className="g-5">
                    <Col xs={ 12 } sm={ 12 } md={ 5 } lg={ 5 }>
                        <img src={ memberImage } className="img-fluid w-50" alt="MemberImage" style={ { borderRadius: "50%" } } />
                    </Col>
                    <Col xs={ 12 } sm={ 12 } md={ 7 } lg={ 7 }>
                        <div className="card-body" style={ { textAlign: "justify" } }>
                            <h4 className="card-title fs-2">Muhammad Ammenul Islam, BSc in Accounting, UK</h4>
                            <h5>Assistant Accountant</h5>
                            <p className="card-text mt-3 fs-5" style={ { textAlign: "justify" } }>
                                Muhammad Ammenul Islam has joined Alif & Co for last few years and has been working as an Assistant Accountant.
                            </p>
                            <h5>Expertise:</h5>
                            <p>
                                <ul>
                                    <li>Bookkeeping</li>
                                    <li>Communication & liaison with clients</li>
                                    <li>VAT & self-employment </li>
                                    <li>Payroll management</li>
                                </ul>
                            </p>
                            <p className="card-text"><Link to="/core-team"><Button variant="dark">Go Back</Button></Link></p>
                        </div>
                    </Col>
                </Row>
            </Card>
            <ScrollToTop smooth />
        </Container>
    );
};

export default Member6;