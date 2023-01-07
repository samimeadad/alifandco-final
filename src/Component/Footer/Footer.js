import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo/logo.jpg';
import appDownload from '../../images/footer/app-download.png';

//component for footer
const Footer = () => {
    return (
        <footer className="bg-light text-dark overflow-hidden w-100">
            <div className="text-center py-5 overflow-hidden w-100">
                <img style={ { width: '250px' } } src={ logo } alt="logoImage" className='img-fluid' />
            </div>
            <Container className='mb-5 overflow-hidden'>
                <Row>
                    <Col xs={ 12 } sm={ 12 } md={ 3 } lg={ 3 } className='mt-4'>
                        <p className="text-justify text-dark ms-3 text-center">
                            <h5 className='text-warning fw-bold'>Birmingham Office</h5>
                            <p className='mt-3'>
                                Address: Office 3, Heath Court<br />
                                489-493 Coventry Road<br />
                                Birmingham B10 0JS <br />
                                Tel: 0121 771 3444 / 0444<br />
                                Fax: 0121 572 1503<br />
                                Email: info@alifandco.co.uk<br />
                            </p>
                        </p>
                    </Col>

                    <Col xs={ 12 } sm={ 12 } md={ 3 } lg={ 3 } className='mt-4'>
                        <p className="text-justify text-dark text-center ms-3">
                            <h5 className='text-warning fw-bold'>London Office</h5>
                            <p className='mt-3'>
                                Address: Second Floor <br />
                                235 Whitechapel Road <br />
                                London E1 1DB <br />
                                Tel: 0207 247 0606 <br />
                                Fax: 0207 247 0606 <br />
                                Email: london@alifandco.co.uk <br />
                            </p>
                        </p>
                    </Col>

                    <Col xs={ 12 } sm={ 12 } md={ 3 } lg={ 3 } className='mt-4 text-center'>
                        <h5 className="text-warning fw-bold overflow-hidden">App Download</h5>
                        <p className='overflow-hidden text-center text-dark mt-3'>
                            <img style={ { width: '200px' } } src={ appDownload } alt="appDownloadImage" className='img-fluid' />
                        </p>
                    </Col>
                    <Col xs={ 12 } sm={ 12 } md={ 3 } lg={ 3 } className="text-center mt-4">
                        <h5 className="text-warning fw-bold overflow-hidden">Can't find what you are looking for?</h5>
                        <p className='mt-3'>Contact us for more information</p>
                        <Button variant='dark' className='text-start mt-3'><Link to="/contact" className='text-light text-decoration-none'>Contact Us</Link ></Button>
                    </Col>
                </Row>
            </Container>
            <div className='text-center overflow-hidden mt-5 w-100 bg-dark pb-5'>
                <Container className='w-100'>
                    <p className="mt-5 text-center overflow-hidden w-100 fs-4 text-primary">
                        <a href="https://www.facebook.com/alifandcocca/" target="_blank" rel="noreferrer"><i aria-hidden="true" className="fa fa-facebook text-warning me-4" data-toggle="tooltip" title="Facebook"></i></a>
                        <a href="https://twitter.com/alifandco" target="_blank" rel="noreferrer"><i aria-hidden="true" className="fa fa-twitter text-warning" data-toggle="tooltip" title="Twitter"></i></a>
                    </p>
                    <p className="text-light text-center fs-6 mt-5">Copyright © 2020 Alif & Co Chartered Accountants | Alif & Co is a trading name of Alif & Co Limited (Company no 08080794) and Alif & Co (London) Limited (Company no 11258449) registered in England and Wales. | All Rights Reserved | Terms & Privacy Policy</p>
                    <p className="text-light text-center fs-6"><small>Copyright &copy; { ( new Date().getFullYear() ) } Alif & Co</small></p>
                </Container>
            </div>
        </footer>
    );
};

export default Footer;