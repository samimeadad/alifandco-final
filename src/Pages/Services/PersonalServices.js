import React from 'react';
import { Accordion, Container } from 'react-bootstrap';
import ScrollToTop from 'react-scroll-to-top';
import { Link } from 'react-router-dom';
import service1 from '../../images/service-personal/income-tax.jpg';
import service2 from '../../images/service-personal/capita-gain-tax.jpg';
import service3 from '../../images/service-personal/inheritance-tax-planning.jpg';
import service4 from '../../images/service-personal/non-resident-tax-planning.jpg';
import service5 from '../../images/service-personal/Retirement.jpg';
import service6 from '../../images/service-personal/trusts-and-estates.jpg';


const PersonalServices = () => {
    return (
        <Container className='my-5'>
            <h1 className='text-center my-5'>Business Services</h1>
            <Accordion className='w-50 m-auto'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h4 className='text-dark'>Income Tax</h4></Accordion.Header>
                    <Accordion.Body className='text-justified'>
                        <img src={ service1 } alt="service1" className='img-fluid overflow-hidden' />
                        <p className='text-justify my-4'>
                            Tax legislation is ever changing and we can help our clients to ensure that they are paying the right amount of tax, whilst taking advantage of the tax schemes and allowances that are available to the clients and their businesses.
                        </p>
                        <p className='text-justify my-4'>
                            Our income tax service helps them to reduce their tax liability, protect wealth and reduce the risk of non-compliance.
                        </p>
                        <p className='text-justify my-4'>
                            We provide tailored service to suit the needs of our clients, whether it is preparing self-assessment tax returns, providing advice to self-employed entrepreneurs, wealth management and effective tax planning.
                        </p>
                        <p className='text-justify my-4'>
                            At the same time, we ensure that the tax planning strategy of our clients is up to date to meet their changing circumstances and it is responsive to the ever-changing tax legislations.
                        </p>
                        <p className='text-justify my-4'>
                            To minimise you income tax, please <Link to="/contact">contact us</Link> today to arrange an initial consultation.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><h4 className='text-dark'>Capital Gains Tax</h4></Accordion.Header>
                    <Accordion.Body className='text-justified'>
                        <img src={ service2 } alt="service1" className='img-fluid overflow-hidden' />
                        <p className='text-justify my-4'>
                            Our CGT advice service ensures that our clients can maximise the cash flow advantages whilst minimise any tax liability.
                        </p>
                        <p className='text-justify my-4'>
                            It is very important for an individual to make decision regarding disposal of an asset whether it is the sale of their residential or commercial property, shares or other business assets.
                        </p>
                        <p className='text-justify my-4'>
                            Through our extensive knowledge and experience, we help our clients to structure the transaction at a time and frame that help them to maximum benefit in their capital gains.
                        </p>
                        <p className='text-justify my-4'>
                            Please <Link to="/contact">contact us</Link> us today if you need further information about capital gains tax (CGT).
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header><h4 className='text-dark'>Inheritance Tax Planning</h4></Accordion.Header>
                    <Accordion.Body className='text-justified'>
                        <img src={ service3 } alt="service1" className='img-fluid overflow-hidden' />
                        <p className='text-justify my-4'>
                            We offer advice on inheritance tax planning, will drafting, utilisation of the nil rate bands, tax reliefs and use of exemptions available.
                        </p>
                        <p className='text-justify my-4'>
                            We always encourage our clients to take proactive steps during their lifetime to mitigate potential inheritance tax liability for future generations. We tailor our advices to suit the particular needs of our clients. We consider our client’s financial needs during their lifetime, the degree of control, the financial independence of their spouse and above all their intentions in relation to their own assets whilst advise them on inheritance tax planning.
                        </p>
                        <p className='text-justify my-4'>
                            Our planning services also ensure that our clients’ businesses pass down to the next generation as intended through a best tax efficient means.
                        </p>
                        <p className='text-justify my-4'>
                            To get more information on inheritance tax planning, please <Link to="/contact">contact us</Link> today.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header><h4 className='text-dark'>Non-Resident Tax Planning</h4></Accordion.Header>
                    <Accordion.Body className='text-justified'>
                        <img src={ service4 } alt="service1" className='img-fluid overflow-hidden' />
                        <p className='text-justify my-4'>
                            Our non-resident tax planning service include comprehensive tax planning service to overseas investors, professionals working abroad, expatriates, persons with different domicile statuses and those looking to preserve their family wealth.
                        </p>
                        <p className='text-justify my-4'>
                            We do offer bespoke tax planning services, and can advise our clients on the most suitable structure for their assets through the use of different structures to mitigate UK taxes. Whilst delivering this service we ensure that our advice is not only tax-focussed but also practical and in the best interest of the family or business as a whole.
                        </p>
                        <p className='text-justify my-4'>
                            For further information, please <Link to="/contact">contact us</Link> today.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header><h4 className='text-dark'>Retirement Planning</h4></Accordion.Header>
                    <Accordion.Body className='text-justified'>
                        <img src={ service5 } alt="service1" className='img-fluid overflow-hidden' />
                        <p className='text-justify my-4'>
                            We assist our clients to undertake appropriate financial plans during their working life and at retirement in order to have a relaxed and stress-free retirement.
                        </p>
                        <p className='text-justify my-4'>
                            Planning on time helps our clients to spend quality time with their family members without having to worry about their financial needs for future.
                        </p>
                        <p className='text-justify my-4'>
                            We understand our clients’ unique requirements and offer them the most effective retirement options available. We guide our clients through the benefits and implications of retirement planning and help them focus on their future needs and aspirations.
                        </p>
                        <p className='text-justify my-4'>
                            To get more information on retirement planning, please <Link to="/contact">contact us</Link> today.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header><h4 className='text-dark'>Trusts and Estates</h4></Accordion.Header>
                    <Accordion.Body className='text-justified'>
                        <img src={ service6 } alt="service1" className='img-fluid overflow-hidden' />
                        <p className='text-justify my-4'>
                            We can understand that protecting family wealth is a priority for our clients, and effective tax planning plays a huge part in this process.
                        </p>
                        <p className='text-justify my-4'>
                            Setting up a trust is often an effective way to manage and protect our clients’ assets and investments, both during their lifetime and after.
                        </p>
                        <p className='text-justify my-4'>
                            Our services are tailored around our clients’ and their families’ financial needs or tax objectives. We advise our clients to determine which type of trust will suit their purpose, advice on preparing the necessary documentation and advice on trust administration.
                        </p>
                        <p className='text-justify my-4'>
                            Trusts can be very useful in specific situations such as providing funds for children’s education and maintenance, restricting access to property by future beneficiaries, providing for people who are disabled and gifting to charity. It does not matter what the objectives are, we ensure that our clients are in the best position to achieve them in the most tax-efficient manner.
                        </p>
                        <p className='text-justify my-4'>
                            For assistance with your trusts and estates, please <Link to="/contact">contact us</Link> today.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <ScrollToTop smooth />
        </Container>
    );
};

export default PersonalServices;