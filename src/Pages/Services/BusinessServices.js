import React, { useEffect } from 'react';
import { Accordion, Container } from 'react-bootstrap';
import service1 from '../../images/service-business/business-startup.jpg';
import service2 from '../../images/service-business/accounting-bookkeeping.jpg';
import service3 from '../../images/service-business/vat.jpg';
import service4 from '../../images/service-business/payroll.jpg';
import service5 from '../../images/service-business/corporate-tax-planning.jpg';
import service6 from '../../images/service-business/corporate-restructuring.jpg';
import service7 from '../../images/service-business/Business Consultation and Management Information.jpg';
import service8 from '../../images/service-business/Company Statutory Services.jpg';
import service9 from '../../images/service-business/atol-reporting.jpg';
import { Link } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';
import { Helmet } from 'react-helmet';

const BusinessServices = () => {
    useEffect( () => {
        window.scrollTo( 0, 0 )
    }, [] )
    return (
        <Container className='my-5'>
            <Helmet>
                <title>Business Services | Alif & Co Chartered Accountant</title>
                <meta name="description" content="Learn about Alif & Co Chartered Accountant's services regarding Business Accounting Consultancy and audits." />
                <meta property="og:title" content="Business Servicess | Alif & Co Chartered Accountant" />
                <meta property="og:description" content="Explore our reliable accounting services tailored for your personal and business growth." />
                <meta property="og:url" content="https://alifandco.co.uk/business-services" />
                <link rel="canonical" href="https://alifandco.co.uk/business-services" />
            </Helmet>
            <h1 className='text-center my-5'>Business Services</h1>
            <Accordion className='w-50 m-auto'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h4 className='text-dark'>Business Start-up</h4></Accordion.Header>
                    <Accordion.Body className='text-justified'>
                        <img src={ service1 } alt="service1" className='img-fluid overflow-hidden' />
                        <p className='text-justify my-4'>
                            Starting up a new business is always exciting but you might get stuck with how to start on your own and what are the requirements to meet up with. Alif & Co Chartered Accountant is here to help you with your dream business start-up. Bring your business ideas to us and we’ll help you to make a correct and informed decision among the different options available.
                        </p>
                        <p className='text-justify my-4'>
                            We assist our clients with the following start up facilities:
                        </p>
                        <p className='text-justify my-4'>
                            <ul>
                                <li>To assist deciding on the most suitable structure for your business – sole trader, a partnership, or a limited company.</li>
                                <li>To prepare a business plan and cash flow forecasts.</li>
                                <li>To assess your finance needs and advise on the alternate sources of finance, and draw up the necessary proposals.</li>
                                <li>To help you to choose your bank with most facilities.</li>
                                <li>To register your business with HM Revenue & Customs.</li>
                                <li>To register for VAT, PAYE and CIS.</li>
                                <li>To form a limited company for you.</li>
                                <li>To deal with company secretarial issues.</li>
                                <li>To set ups a proper internal recording system in place for you and for your business in order to comply with statutory requirements.</li>
                            </ul>
                        </p>
                        <p className='text-justify my-4'>
                            Please <Link to="/contact">contact us</Link> today to arrange an initial consultation.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><h4 className='text-dark'>Accounting and Bookkeeping Services</h4></Accordion.Header>
                    <Accordion.Body className='text-justified'>
                        <img src={ service2 } alt="service1" className='img-fluid overflow-hidden' />
                        <p className='text-justify my-4'>
                            Our accounting and bookkeeping services include receiving all the invoices, receipts, bank statements and other paper works from our clients in order to process and file them correctly to meet the requirements of the HMRC and other interested parties.
                        </p>
                        <p className='text-justify my-4'>
                            Our experts keep your accounting records up to date; let you know if anything is missing. We analyse your records in regular intervals so that accounts can be produced smoothly after the year ends.
                        </p>
                        <p className='text-justify my-4'>
                            If you want to retain control of your bookkeeping then we can help you to put in a system in place that you feel comfortable with, and also satisfies HMRC. From your internal record keeping system, we will prepare your annual accounts and management accounts if necessary.
                        </p>
                        <p className='text-justify my-4'>
                            By supporting clients with their accounting and book-keeping needs, we help our clients with their strategic planning, cost minimisation and profit optimisation requirements.
                        </p>
                        <p className='text-justify my-4'>
                            We make sure that our clients are up-to-date with HM Revenue & Customs’ and Companies House’s regulatory requirements, and are informed well in advance of any deadlines.
                        </p>
                        <p className='text-justify my-4'>
                            Please <Link to="/contact">contact us</Link> for further information.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header><h4 className='text-dark'>VAT Services</h4></Accordion.Header>
                    <Accordion.Body className='text-justified'>
                        <img src={ service3 } alt="service1" className='img-fluid overflow-hidden' />
                        <p className='text-justify my-4'>
                            Value Added Tax (VAT) is a complex area due to ever changing UK and EU legislation. We help our clients to manage and reduce their VAT liabilities within the regulatory framework.
                        </p>
                        <p className='text-justify my-4'>
                            Our VAT team guide them about the new laws including Making Tax Digital (MTD) requirements from HMRC to ensure that they are not missing out on input claims they are entitled to, or making decisions which will alleviate any potential penalties.
                        </p>
                        <p className='text-justify my-4'>
                            Our range of VAT services start from routine compliance to specialist advice to suit client’s business needs. Our team help clients to plan a VAT efficient approach for UK or cross-border supplies of goods and services by advising on the use of appropriate VAT accounting schemes, the completion of VAT returns and transaction reviews that include complex rules.
                        </p>
                        <p className='text-justify my-4'>
                            We also provide practical and commercial solutions for different VAT situations, including Land and Property transactions, international trade, business disposals, restructuring and investigation from HM Revenue & Customs.
                        </p>
                        <p className='text-justify my-4'>
                            For more information about VAT, please <Link to="/contact">contact us</Link> today.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header><h4 className='text-dark'>Payroll Services</h4></Accordion.Header>
                    <Accordion.Body className='text-justified'>
                        <img src={ service4 } alt="service1" className='img-fluid overflow-hidden' />
                        <p className='text-justify my-4'>
                            To run the Payroll and to report in RTI system can be very hectic for small and medium size businesses. We provide a full comprehensive payroll service to our clients which include:
                        </p>
                        <p className='text-justify my-4'>
                            <ul>
                                <li>We produce payslips weekly or monthly and email or post them to our clients.</li>
                                <li>We help clients to administer their PAYE, national insurance, statutory sick pay, statutory maternity pay, etc.</li>
                                <li>We complete statutory forms, including year-end returns, to issue to clients employees and submit to HM Revenue & Customs.</li>
                                <li>We submit CIS returns on our clients’ behalf.</li>
                                <li>We summaries and analyse the staff costs of our clients quarterly.</li>
                                <li>We help clients with administration of incentive schemes, bonuses, and ex-gratia and termination payments.</li>
                                <li>We assist our clients with Auto- enrolment duties and help our clients setup an appropriate work place pension scheme.</li>
                                <li>We provide practical advices on day-to-day enquiries and keep our clients up-to-date on changes in law and practice which may affect them as an employer.</li>
                                <li>To benefit from our payroll service, please contact us today.</li>
                            </ul>
                        </p>
                        <p className='text-justify my-4'>
                            To benefit from our payroll service, please <Link to="/contact">contact us</Link> today.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header><h4 className='text-dark'>Corporate Tax Planning</h4></Accordion.Header>
                    <Accordion.Body className='text-justified'>
                        <img src={ service5 } alt="service1" className='img-fluid overflow-hidden' />
                        <p className='text-justify my-4'>
                            We provide tailored services to our clients’ corporate tax needs, ranging from routine annual compliance to specialist advice for planning and supporting their business strategies.
                        </p>
                        <p className='text-justify my-4'>
                            Our professional tax advisory services help our clients to understand different corporate tax issues and can substantially reduce their tax liabilities.
                        </p>
                        <p className='text-justify my-4'>
                            Tax legislation is ever changing, and our services ensure that you can plan a tax efficient business, taking into consideration technical issues and anticipating the impact on transaction costs and investment decisions to protect the interests of the stakeholders.
                        </p>
                        <p className='text-justify my-4'>
                            We provide a full compliance services to our clients, ensuring that our clients can take full advantage of any tax relief available considering their particular sectors and business circumstances.
                        </p>
                        <p className='text-justify my-4'>
                            To get more information on corporate tax planning, please <Link to="/contact">contact us</Link> today.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header><h4 className='text-dark'>Corporate Restructuring</h4></Accordion.Header>
                    <Accordion.Body className='text-justified'>
                        <img src={ service6 } alt="service1" className='img-fluid overflow-hidden' />
                        <p className='text-justify my-4'>
                            We provide corporate restructuring services that are designed to work with businesses at different level of their lifecycles.
                        </p>
                        <p className='text-justify my-4'>
                            With this service our aim is to develop a plan for our clients to promote the survival and future success of their business. Our expertise helps us to identify the opportunities and threats of a business within an industry and create solutions for improved growth and profitability.
                        </p>
                        <p className='text-justify my-4'>
                            We offer advices on different available options for renewing a business and turnaround strategies for maximising stakeholder values. By working with stakeholders and management, we ensure to deliver restructuring plans that can improve cash flow, income statements and balance sheets.
                        </p>
                        <p className='text-justify my-4'>
                            Please <Link to="/contact">contact us</Link> today if you want advice on how to restructure your business.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                    <Accordion.Header><h4 className='text-dark'>Business Consultation and Management Information</h4></Accordion.Header>
                    <Accordion.Body className='text-justified'>
                        <img src={ service7 } alt="service1" className='img-fluid overflow-hidden' />
                        <p className='text-justify my-4'>
                            We provide the service of evaluating businesses in order to provide recommendations that improve efficiency, manage risk and enhance performance for long term sustainability.
                        </p>
                        <p className='text-justify my-4'>
                            We assist our clients to identify and enhance the key strengths of their businesses and increase values by focusing on key performance indicators and unique selling points of their businesses.
                        </p>
                        <p className='text-justify my-4'>
                            We quite often advise our clients on developing different business strategies, working plans, investment opportunities, succession planning and exit strategies.
                        </p>
                        <p className='text-justify my-4'>
                            In order to make effective decisions, we help our clients to budget which can be compared with actual results, company valuations, cash flows, profit & loss forecasting and benchmarking.
                        </p>
                        <p className='text-justify my-4'>
                            For enhancing your business performance, please <Link to="/contact">contact us</Link> today.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="7">
                    <Accordion.Header><h4 className='text-dark'>Company Statutory Services</h4></Accordion.Header>
                    <Accordion.Body className='text-justified'>
                        <img src={ service8 } alt="service1" className='img-fluid overflow-hidden' />
                        <p className='text-justify my-4'>
                            We help our clients to free up their valuable business time by carrying out company statutory works to ensure that they meet the Companies Act requirements fully.
                        </p>
                        <p className='text-justify my-4'>
                            We look after every aspect of maintaining your statutory records ranging from company formation through to filing your regular statutory returns to Companies House.
                        </p>
                        <p className='text-justify my-4'>
                            We can also provide paper works and documentation for board meetings, share allotments, share transfers, changes in officers and addresses.
                        </p>
                        <p className='text-justify my-4'>
                            We can also provide a registered office address if needed by the clients.
                        </p>
                        <p className='text-justify my-4'>
                            To discuss your needs, please <Link to="/contact">contact us</Link> today.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="8">
                    <Accordion.Header><h4 className='text-dark'>ATOL Reporting</h4></Accordion.Header>
                    <Accordion.Body className='text-justified'>
                        <img src={ service9 } alt="service1" className='img-fluid overflow-hidden' />
                        <p className='text-justify my-4'>
                            We are approved by the UK Civil Aviation Authority (CAA) as an ATOL Reporting Accounting Firm to do the reporting to CAA on behalf of the ATOL licence holders.
                        </p>
                        <p className='text-justify my-4'>
                            As part of the reporting procedure, we ensure that our ATOL licence holders are having and maintaining the internal systems in place that meet the requirements
                        </p>
                        <p className='text-justify my-4'>
                            Every quarter we do check their licensable and non-licensable turnover to make sure that nothing is omitted from the quarterly APC returns to CAA.
                        </p>
                        <p className='text-justify my-4'>
                            We also guide our clients to go through the application procedure of ATOL licence, IATA, etc.
                        </p>
                        <p className='text-justify my-4'>
                            To discuss your ATOL reporting needs, please <Link to="/contact">contact us</Link> today.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <ScrollToTop smooth />
        </Container>
    );
};

export default BusinessServices;