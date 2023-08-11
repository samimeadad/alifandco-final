import React, { useEffect } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import blogImage from '../../images/blog/blog1.jpg';
import ScrollToTop from 'react-scroll-to-top';



const Blog1 = () => {
    useEffect( () => {
        window.scrollTo( 0, 0 )
    }, [] )

    return (
        <Container className='my-5 fs-5 text-justify' style={ { textAlign: "justify" } }>
            <section className='my-5'>
                <h1>Scottish tax bands diverge further</h1>
                <h6 className='text-secondary my-3'>by Admin | Jan 28, 2019 | Tax</h6>
                <p><Link to="/blog" className='text-warning text-decoration-none'>Don't wanna read? Go Back!!!</Link></p>
                <h1 className='fs-1 text-warning fw-bold'>___________________________________________________________</h1>
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
                <h3 className='text-justify mt-5 mb-3'>Same Allowances</h3>
                <p className='text-justify my-4'>
                    For 2019/20, a Scottish taxpayer will be entitled to the same &pound;12,500 personal allowance as the rest of the UK. The Scottish allowance will also be withdrawn at the same rate of &pound;1 for every &pound;2 of adjusted net income over &pound;100,000.
                </p>
                <p className='text-justify my-5'>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Band in 2019/20</th>
                                <th scope="col">Name of Band</th>
                                <th scope="col">Income tax rate %</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>12,501 - 14,549</td>
                                <td>Starter rate</td>
                                <td>19</td>
                            </tr>
                            <tr>
                                <td>14,550 - 24,944</td>
                                <td>Basic rate</td>
                                <td>20</td>
                            </tr>
                            <tr>
                                <td>24,945 - 43,430</td>
                                <td>Intermediate rate</td>
                                <td>21</td>
                            </tr>
                            <tr>
                                <td>43,431 - 150,000</td>
                                <td>Higher rate</td>
                                <td>41</td>
                            </tr>
                            <tr>
                                <td>&gt;150,000</td>
                                <td>Top rate</td>
                                <td>46</td>
                            </tr>
                        </tbody>
                    </table>
                </p>
                <h3 className='text-justify mt-5 mb-3'>National Insurance</h3>
                <p className='text-justify my-4'>
                    Due to the fact that the power to set NIC rates and thresholds has not been devolved, the rates and thresholds applicable in Scotland are the same as in the rest of the UK.
                </p>
                <p className='text-justify my-4'>
                    In her recent AccountingWEB article, Rebecca Cave drew attention to the fact that "Combining the NIC and income tax rates for a Scottish taxpayer produces some very odd marginal rates."
                </p>
                <h3 className='text-justify mt-5 mb-3'>Land and Building Transaction Tax changes</h3>
                <p className='text-justify my-4'>
                    Mackay is to increase Scotland's Land and Building Transaction Tax (LBTT) and Additional Dwelling Supplement from 3% to 4%, effective from the 25 January 2019. This will take it out of line with the English equivalent Stamp Duty Land and Tax (SDLT) ADS rate of 3%.
                </p>
                <p className='text-justify my-4'>
                    LBTT changes do not stop here. On the same date (25 January), the LBTT rates applicable to commercial properly are also set to change:
                </p>
                <p className='text-justify'>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Threshold</th>
                                <th scope="col">Percentage to 25/01/2019</th>
                                <th scope="col">Percentage from 25/01/2019</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Up to 150,000</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>150,001 - 250,000</td>
                                <td>3</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>250,001 - 350,000</td>
                                <td>3</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td>&gt;350,001</td>
                                <td>4.5</td>
                                <td>5</td>
                            </tr>
                        </tbody>
                    </table>
                </p>
                <h3 className='text-justify mt-5 mb-3'>The shape of things to come</h3>
                <p className='text-justify my-4'>
                    Unless the Chancellor's threat of a Spring Budget comes to fruition, we will have to wait until next autumn to see if the changes to LBTT will be mirrored by the similar SDLT changes in England and Northern Ireland.
                </p>
                <h3 className='text-justify mt-5 mb-3'>What about Wales?</h3>
                <p className='text-justify my-4'>
                    Many of you reading this article will recall that since the 1 April 2018, the Welsh Assembly replaced SDLT with Land Transaction Tax (LTT). It is, therefore, entirely possible that Wales might choose to adopt similar rates to those proposed by Scotland, or even to do something entirely different.
                </p>
            </section>
            <p className="card-text"><Link to="/blog"><Button variant="dark">Go Back</Button></Link></p>
            <ScrollToTop smooth />
        </Container>
    );
};

export default Blog1;