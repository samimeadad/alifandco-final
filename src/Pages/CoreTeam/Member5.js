import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import memberImage from '../../images/core-team/members/yasmin-salah.jpg';
import ScrollToTop from 'react-scroll-to-top';

const Member5 = () => {
    return (
        <Container className='my-5'>
            <Card className="card p-5">
                <Row className="g-5">
                    <Col xs={ 12 } sm={ 12 } md={ 5 } lg={ 5 }>
                        <img src={ memberImage } className="img-fluid w-50  " alt="MemberImage" style={ { borderRadius: "50%" } } />
                    </Col>
                    <Col xs={ 12 } sm={ 12 } md={ 7 } lg={ 7 }>
                        <div className="card-body" style={ { textAlign: "justify" } }>
                            <h4 className="card-title fs-2">Yasmin Salah Hassan</h4>
                            <h5>Trainee Accountant</h5>
                            <p className="card-text mt-3 fs-5" style={ { textAlign: "justify" } }>
                                Yasmin Salah Hassan has joined Alif & Co recently as a Trainee Accountant and studying towards her Chartered Certified Accountancy qualifications.
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

export default Member5;