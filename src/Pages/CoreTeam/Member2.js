import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import memberImage from '../../images/core-team/members/Tanbhir_Tahlil.jpg';

const Member2 = () => {
    return (
        <Container className='my-5'>
            <Card className="card p-5">
                <Row className="g-5">
                    <Col xs={ 12 } sm={ 12 } md={ 5 } lg={ 5 }>
                        <img src={ memberImage } className="img-fluid w-100" alt="MemberImage" style={ { borderRadius: "50%" } } />
                    </Col>
                    <Col xs={ 12 } sm={ 12 } md={ 7 } lg={ 7 }>
                        <div className="card-body mt-3" style={ { textAlign: "justify" } }>
                            <h4 className="card-title fs-2 mt-3">Tanbhir Tahlil, BBA, MBA</h4>
                            <h5>Partner</h5>
                            <p className="card-text mt-3 fs-5" style={ { textAlign: "justify" } }>Tanbhir Tahlil has done bachelors and masters in business administration and joined Alif & Co from April 2018 to manage the practice in London.</p>
                            <h5 className='mt-3'>Expertise:</h5>
                            <p className='mt-3'>
                                <ul>
                                    <li>Practice management</li>
                                    <li>Communication & liaison with clients</li>
                                    <li>VAT & self-employment</li>
                                    <li>Import and export businesses</li>
                                    <li>Payroll management</li>
                                </ul>
                            </p>
                            <p className='mt-3'>
                                <h6>Email: <a href="mailto:tanbhir@alifandco.co.uk" className='text-primary text-decoration-none' >tanbhir@alifandco.co.uk</a></h6>
                            </p>
                            <p className="mt-4"><Link to="/core-team"><Button variant="dark">Go Back</Button></Link></p>
                        </div>
                    </Col>
                </Row>
            </Card>
        </Container>
    );
};

export default Member2;