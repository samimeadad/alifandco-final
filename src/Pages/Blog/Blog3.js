import React, { useEffect } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import blogImage from '../../images/blog/blog3.jpg';
import ScrollToTop from 'react-scroll-to-top';

const Blog3 = () => {
    useEffect( () => {
        window.scrollTo( 0, 0 )
    }, [] )

    return (
        <Container className='my-5 fs-5 text-justify' style={ { textAlign: "justify" } }>
            <article>
                <section className='my-5'>
                    <h1>Marketing considerations for 2019</h1>
                    <h6 className='text-secondary my-3'>by Admin | Jan 28, 2019 | Business Advice, Marketing</h6>
                    <p><Link to="/blog" className='text-warning text-decoration-none'>Don't wanna read? Go Back!!!</Link></p>
                    <h1 className='fs-1 text-warning fw-bold'>___________________________________________________________</h1>
                </section>
                <section>
                    <img src={ blogImage } alt="BannerImage" className='img-fluid w-75 overflow-hidden' />
                </section>
                <section className='my-5 text-justify w-75'>
                    <p className='text-justify my-4'>
                        As we leave 2018 behind, its worth taking stock of this period of increased regulation on customer data protection and privacy - in parallel with its acceleration in marketing technology capabilities.
                    </p>
                    <p className='text-justify my-4'>
                        This blog provides an overview of what to consider in terms of the evolving expectations of and demands on customer journeys and the impact they may have on the marketing aspect of your business. The following are the top three marketing trends and strategies to consider for 2019.
                    </p>
                    <h3 className='text-justify mt-5 mb-3'>Evolving customer experience and journeys</h3>
                    <p className='text-justify my-4'>
                        2018 has brought more paths through which customers can satisfy their ideal approaches to buying. With the onset of conversational user interfaces through voice search and recognition from the likes of Apple Siri and Amazon Alexa, this is adding a key customer touchpoint that many marketing approaches are yet to adopt and adapt to.
                    </p>
                    <p className='text-justify my-4'>
                        Such examples help fuel the customer needs for convenience, being able to request what they want, when they want it, and how. As data become richer in terms of what we understand about customer behaviour, the personalisation of the customer experinece can become deeper - albeit at a time when the use of data is being re-evaluated by companies such as facebook.
                    </p>
                    <p className='text-justify my-4'>
                        If you are continuing with the over-used approach of marketing to "millennials", this will limit how your brand or customer experience connects with twenty- to thirty-year olds today - as building
                        your marketing approach will be subject to change in observing this consumer group.
                    </p>
                    <p className='text-justify my-4'>
                        There is a huge opportunity in blending customer data from silos, such as combining what you know
                        from your business data on your customers with that which is coming from social data. Marketing
                        teams will need to best balance the careful use of client data, segmenting based on specific
                        personas and on an experience personalised on how customers wish to interact.
                    </p>

                    <h3 className='text-justify mt-5 mb-3'>Be more than a service. Be a trusted brand with values</h3>
                    <p className='text-justify my-4'>
                        <q className='text-danger text-justify my-4'>
                            Your brand is what people say about you when you're not in the room
                        </q> <span>(Jeff Bezos)</span>
                    </p>
                    <p className='text-justify my-4'>
                        For companies who have not yet positioned their brand to a set of values, you should do so in 2019.
                        The majority of today's customers are belief-driven buyers, harnessing their brand loyalty to what
                        the company stands for - whether that is helping others, trust, quality, innovation etc. Although there maybe the danger of alienating some customers, brand values can deepen the customer-company
                        relationship at an emotional level.
                    </p>
                    <h3 className='text-justify mt-5 mb-3'>Manage your reputations; be prepared for a crisis</h3>
                    <p className='text-justify my-4'>
                        <q className='text-danger text-justify my-4'>
                            It takes twenty years to build a reputation and five minutes to ruin it
                        </q> <span>(Warren Buffett)</span>
                    </p>
                    <p className='text-justify my-4'>
                        "With Google, if a result is based on an established view, it will find its way on to the first page. Taking this approach, if the sentiment about your brand is a bad one, intentionally or accidentally, then this may cause significant collateral damage for a long time - if a suitable response is not deployed.
                    </p>
                    <p className='text-justify my-4'>
                        With the depth of opportunity for brands to advertise on nearly every website and platform
                        consumers use, negative reviews can proliferate rapidly, and it is essential you are able to respond to help mitigate, correct, or address the perception. For example, this might be by listening to what people are saying online and making adjustments accordingly.
                    </p>
                    <p className='text-justify my-4'>
                        No company is safe from reputation or brand crises and, as such, it is recommended to have a
                        dedicated owner in your team to manage such an unfortunate event.
                    </p>

                </section>
            </article>
            <p className="card-text"><Link to="/blog"><Button variant="dark">Go Back</Button></Link></p>
            <ScrollToTop smooth />
        </Container>
    );
};

export default Blog3;