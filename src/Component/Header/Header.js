import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import logo from '../../images/logo/logo.jpg';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='py-5'>
            <Container>
                <Navbar.Brand><Link to="/" className='text-dark text-decoration-none text-center'><img className='img-fluid' style={ { width: '250px' } } src={ logo } alt="logoImage" /></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                    </Nav>
                    <Nav>
                        <Link className="me-4 text-dark text-decoration-none btn btn-light" to="/home"><h5 className='fw-bold'>Home</h5></Link>
                        <Link className="me-4 text-dark text-decoration-none btn btn-light" to="/core-team"><h5 className='fw-bold'>Meet Our Team</h5></Link>

                        <h5 className='text-center'><NavDropdown title="Services" id="collapsible-nav-dropdown" className="me-4 text-dark text-decoration-none bg-white">
                            <NavDropdown.Item className='text-drk'><Link className="me-4 text-dark text-decoration-none text-center" to="/business-services"><h6 className='fw-bold'>Business Services</h6></Link></NavDropdown.Item>
                            <NavDropdown.Item><Link className="me-4 text-dark text-decoration-none text-center" to="/personal-services"><h6 className='fw-bold'>Personal Services</h6></Link></NavDropdown.Item>
                        </NavDropdown></h5>
                        <Link className="me-4 text-dark text-decoration-none btn btn-light" to="/career"><h5 className='fw-bold'>Career</h5></Link>
                        <Link className="me-4 text-dark text-decoration-none btn btn-light" to="/blog"><h5 className='fw-bold'>Blog</h5></Link>
                        <Link className="me-4 text-dark text-decoration-none btn btn-light" to="/contact"><h5 className='fw-bold'>Contact Us</h5></Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;