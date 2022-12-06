import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Features = () => {
    return (
        <Container className='my-5 w-50 m-auto'>
            <Row className='g-5'>
                <Col xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 }>
                    <div style={ { textAlign: "justify" } }>
                        <h5>Friendly and accessible team from anywhere</h5>
                        <p style={ { textAlign: "justify" } }>
                            We are virtually everywhere in the UK, just a phone call away. Wherever you and your business are located, we will come to your door and take care.
                        </p>
                    </div>
                </Col>
                <Col xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 }>
                    <div style={ { textAlign: "justify" } }>
                        <h5>Filing correctly, and on time</h5>
                        <p style={ { textAlign: "justify" } }>
                            We will ensure you never fall foul of HMRC’s deadlines, which means you will avoid the fines and will not need to contend with bizarre excuses at year end.
                        </p>
                    </div>
                </Col>
            </Row>
            <Row className='g-5 my-1'>
                <Col xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 }>
                    <div style={ { textAlign: "justify" } }>
                        <h5>Working with you to shape your future</h5>
                        <p style={ { textAlign: "justify" } }>
                            We will help you understand the tax implications attached to your business growth, aiding you in making an informed decision about when to choose limited company as opposed to sole trader etc.
                        </p>
                    </div>
                </Col>
                <Col xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 }>
                    <div>
                        <h5>Maximise the profit minimising your costs</h5>
                        <p style={ { textAlign: "justify" } }>
                            We will save you money and find you money. We are best to identify areas where you can reduce costs, tightening up your bookkeeping and preventing any costly mistakes.
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Features;