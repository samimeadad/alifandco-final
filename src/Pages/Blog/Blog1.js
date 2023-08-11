import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import blogImage from '../../images/blog/blog1.jpg';

const Blog1 = () => {
    return (
        <Container className='my-5 fs-5 text-justify' style={ { textAlign: "justify" } }>
            <section className='my-5'>
                <h1>Scottish tax bands diverge further</h1>
                <h6 className='text-secondary my-3'>by Admin | Jan 28, 2019 | Tax</h6>
                <p><Link to="/blog" className='text-dark text-decoration-none'>Don't wanna read? Go Back!!!</Link></p>
                <h1 className='fs-1 text-warning fw-bold'>__________________________________________________________</h1>
            </section>
            <section>
                <img src={ blogImage } alt="BannerImage" className='img-fluid w-75 overflow-hidden' />
            </section>
            <section className='my-5 text-justify w-75'>
                <p className='text-justify my-4'>
                    On the 12th September 2018, Darek Mackay, the Scottish Finance Secretary, unveiled the Scottish Budget 2019/20.
                </p>
                <p className='text-justify my-4'>
                    You will recall that this time last year he introduced two additional tax bands. Which meant that Scottish resident taxpayers would now pay income tax five different rates on their non-savings non-dividend income. Meanwhile, their income from savings dividends, and any capital gains were to be taxed by the reference to the rates and tax bands effective in the rest of the UK.
                </p>
                <p className='text-justify my-4'>
                    The effect of the last year's changes means that in many instances, it is necessary to perform two parallel tax computations to establish the total income tax due and the applicable CGT rate.
                </p>
                <p className='text-justify my-4'>
                    This year, it's okay - you can breathe a sigh of relief. Mackay has resisted the temptation to introduce further divergence in the rate of income tax this year.
                </p>
                <h3>Same Allowances</h3>
                <p className='text-justify my-4'>
                    For 2019/20, a Scottish taxpayer will be entitled to the same &pound;12,500 personal allowance as the rest of the UK. The Scottish allowance will also be withdrawn at the same rate of &pound;1 for every &pound;2 of adjusted net income over &pound;100,000.
                </p>
            </section>
            <p className="card-text"><Link to="/blog"><Button variant="dark">Go Back</Button></Link></p>
        </Container>
    );
};

export default Blog1;