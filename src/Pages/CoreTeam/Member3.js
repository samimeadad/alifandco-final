import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import memberImage from '../../images/core-team/members/Mohammad_Fahad.jpg';
import ScrollToTop from 'react-scroll-to-top';

const Member3 = () => {
    return (
        <Container className='my-5'>
            <Card className="card p-5">
                <Row className="g-5">
                    <Col xs={ 12 } sm={ 12 } md={ 5 } lg={ 5 }>
                        <img src={ memberImage } className="img-fluid w-100" alt="MemberImage" style={ { borderRadius: "50%" } } />
                    </Col>
                    <Col xs={ 12 } sm={ 12 } md={ 7 } lg={ 7 }>
                        <div className="card-body mt-4" style={ { textAlign: "justify" } }>
                            <h4 className="card-title fs-2">Mohammad Fahad Ahmed, MAAT</h4>
                            <h5>Assistant Accountant</h5>
                            <p className="card-text mt-4 fs-5" style={ { textAlign: "justify" } }>Mohammad Fahad Ahmed has joined Alif & Co from very beginning and qualified as a member of AAT in 2018.</p>
                            <h5 className='mt-3'>Expertise:</h5>
                            <p className='mt-3'>
                                <ul>
                                    <li>Bookkeeping</li>
                                    <li>Communication & liaison with clients</li>
                                    <li>VAT & self-employment</li>
                                    <li>Payroll management</li>
                                </ul>
                            </p>
                            <p className='mt-3'>
                                <h6>Email: <a href="mailto:info@alifandco.co.uk" className='text-primary text-decoration-none' >info@alifandco.co.uk</a></h6>
                            </p>
                            <p className="card-text mt-5"><Link to="/core-team"><Button variant="dark">Go Back</Button></Link></p>
                        </div>
                    </Col>
                </Row>
            </Card>
            <ScrollToTop smooth />
        </Container>
    );
};

export default Member3;