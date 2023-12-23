import React, { useEffect } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import memberImage from '../../images/core-team/members/Md-Mohiuddin.jpg';
import ScrollToTop from 'react-scroll-to-top';

const Member1 = () => {
    useEffect( () => {
        window.scrollTo( 0, 0 )
    }, [] )
    return (
        <Container className='my-5'>
            <Card className="card p-5">
                <Row className="g-5">
                    <Col xs={ 12 } sm={ 12 } md={ 5 } lg={ 5 }>
                        <img src={ memberImage } className="img-fluid w-100" alt="MemberImage" style={ { borderRadius: "50%" } } />
                    </Col>
                    <Col xs={ 12 } sm={ 12 } md={ 7 } lg={ 7 }>
                        <div className="card-body" style={ { textAlign: "justify" } }>
                            <h4 className="card-title fs-2">Md Mohiuddin, ACA, FCCA, CPFA</h4>
                            <h5>Chartered Accountant, ATOL Reporting Accountant</h5>
                            <p className="card-text mt-3 fs-5" style={ { textAlign: "justify" } }>Md Mohiuddin has started this firm in 2012 having qualified as a Chartered Certified Accountant in 2009. He also qualified as a Chartered Public Finance Accountant in 2017. Last but not least, he has also achieved the membership of ICAEW.</p>
                            <h5>Expertise:</h5>
                            <p>
                                <ul>
                                    <li>Corporate and owner-managed business tax planning</li>
                                    <li>Tax enquiries & investigations</li>
                                    <li>Business advice and restructuring</li>
                                    <li>ATOL reporting accountant</li>
                                    <li>Restaurant and takeaway businesses</li>
                                </ul>
                            </p>
                            <p>
                                <h6>Email: <a href="mailto:mohiuddin@alifandco.co.uk" className='text-primary text-decoration-none' >mohiuddin@alifandco.co.uk</a></h6>
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

export default Member1;