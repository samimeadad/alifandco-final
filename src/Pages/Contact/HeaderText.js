import React from 'react';
import { Container } from 'react-bootstrap';

const HeaderText = () => {
    return (
        <Container className='text-center my-5'>
            <h1>Wherever you are in the UK, we are just a phone call away!</h1>
            <p className='pt-3'>We are located on two high streets of London and Birmingham that like easy transport connections</p>
            <h1 className='fw-bold fs-1 text-warning'>__________________________________</h1>
        </Container>
    );
};

export default HeaderText;