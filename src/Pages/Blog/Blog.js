import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import member1 from '../../images/core-team/members/Tanbhir_Tahlil.jpg';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <Container className='text-center my-5'>
            <div>
                <h1>Our Blog</h1>
                <h6>The latest news and advice for your business</h6>
            </div>
            <div className='text-start my-5 ms-5'>
                <Row className='g-3'>
                    <Col xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 }>
                        <Card style={ { width: '18rem', height: "100%" } }>
                            <Card.Img variant="top" src={ member1 } className="img-fluid m-auto" />
                            <Card.Body>
                                <Card.Title className='fs-5'>Scottish tax bands diverge further</Card.Title>
                                <Card.Text>
                                    <p>
                                        On the 12 December 2018, Derek Mackay, the Scottish Finance Secretary, unveiled the Scottish budget for 2019/20. You will recall that this time last year he introduced two additional tax bands, which meant that Scottish resident tax payers...
                                    </p>
                                </Card.Text>
                                <Link to="/blog/blog-1"><Button variant="dark">Read More</Button></Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 }>
                        <Card style={ { width: '18rem', height: "100%" } }>
                            <Card.Img variant="top" src={ member1 } className="img-fluid m-auto" />
                            <Card.Body>
                                <Card.Title className='fs-5'>Advisory fuel rates for company cars</Card.Title>
                                <Card.Text>
                                    <p>
                                        From 1st December 2018, there have been new company car advisory fuel rates published, stating that the previous rates can be used for up to one month from the date the new rates apply. The rates only applied to employees using a company car, and the...
                                    </p>
                                </Card.Text>
                                <Link to="/blog/blog-2"><Button variant="dark">Read More</Button></Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 }>
                        <Card style={ { width: '18rem', height: "100%" } }>
                            <Card.Img variant="top" src={ member1 } className="img-fluid m-auto" />
                            <Card.Body>
                                <Card.Title className='fs-5'>Marketing considerations for 2019</Card.Title>
                                <Card.Text>
                                    <p>
                                        As we leave 2018 behind, it's worth taking stock of this period of increased regulation on customer data protection and privacy - in parallel with its acceleration in marketing technology capabilities. This blog provides an overview of what to consider in terms of the...
                                    </p>
                                </Card.Text>
                                <Link to="/blog/blog-3"><Button variant="dark">Read More</Button></Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Container>
    );
};

export default Blog;